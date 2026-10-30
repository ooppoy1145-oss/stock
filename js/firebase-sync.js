/**
 * WIRA EASY FINANCE & RENTAL FLEET SYSTEM
 * Real-Time Cloud Synchronization Engine via Firebase
 * Supports Cloud Firestore & Realtime Database with instant multi-device sync
 */

const FirebaseSync = (function () {
  'use strict';

  // Internal state
  const state = {
    status: 'unconfigured', // 'unconfigured' | 'connecting' | 'connected' | 'error' | 'syncing' | 'offline'
    lastSyncTime: null,
    dbType: 'firestore', // 'firestore' | 'rtdb'
    collectionName: 'motorcycle_fleet',
    remoteFleetCount: 0,
    errorMessage: null,
    app: null,
    db: null,       // Firestore instance
    rtdb: null,     // Realtime Database instance
    unsubscribe: null,
    onFleetUpdated: null,
    isLocalAction: false,
    statusListeners: [],
    initialLoadDone: false
  };

  /**
   * Helper: Parse config from JSON or JavaScript snippet
   */
  function parseConfigInput(input) {
    if (!input || typeof input !== 'string') return null;
    const trimmed = input.trim();
    if (!trimmed) return null;

    // 1. Try JSON.parse directly
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) {
      // Continue to regex parsing
    }

    // 2. Extract key-value pairs using regex (handles JS objects like: apiKey: "...", or "apiKey": '...')
    try {
      const keys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId', 'databaseURL', 'measurementId'];
      const result = {};
      let matchFound = false;

      keys.forEach(key => {
        // Regex matches key with optional quotes, colon, and quoted value
        const regex = new RegExp(`['"]?${key}['"]?\\s*:\\s*['"\`]?([^'",\`\\s\\n\\r}]+)['"\`]?`, 'i');
        const match = trimmed.match(regex);
        if (match && match[1]) {
          result[key] = match[1].trim();
          matchFound = true;
        }
      });

      if (matchFound && (result.apiKey || result.projectId)) {
        return result;
      }
    } catch (err) {
      console.warn('Config regex parsing failed:', err);
    }

    // 3. Last fallback: try evaluating as object expression safely
    try {
      const jsonLike = trimmed
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":') // quote unquoted keys
        .replace(/'/g, '"')                                   // replace single quotes with double quotes
        .replace(/,\s*}/g, '}')                               // remove trailing comma
        .replace(/^[^{]*/, '')                                // strip leading text
        .replace(/[^}]*$/, '');                               // strip trailing text
      const parsed = JSON.parse(jsonLike);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) {
      // parse failed
    }

    return null;
  }

  /**
   * Retrieve active config (window.FIREBASE_CONFIG in code takes primary priority)
   */
  function getActiveConfig() {
    // 1. ตรวจสอบจากไฟล์โค้ดถาวร window.FIREBASE_CONFIG เป็นอันดับแรก
    const codeConfig = window.FIREBASE_CONFIG || (typeof firebaseConfig !== 'undefined' ? firebaseConfig : null);
    if (codeConfig &&
      typeof codeConfig.apiKey === 'string' && codeConfig.apiKey.trim() !== '' &&
      typeof codeConfig.projectId === 'string' && codeConfig.projectId.trim() !== '') {
      return codeConfig;
    }

    // 2. หากในโค้ดยังเว้นว่างไว้ จึงตรวจสอบจาก localStorage ของเบราว์เซอร์
    const saved = localStorage.getItem('honda_firebase_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.apiKey && parsed.projectId) {
          return parsed;
        }
      } catch (e) {
        console.error('Error reading saved firebase config:', e);
      }
    }

    return null;
  }

  /**
   * Retrieve active settings (dbType, collectionName, autoSync)
   */
  function getActiveSettings() {
    const defaultSettings = {
      dbType: (window.FIREBASE_SETTINGS && window.FIREBASE_SETTINGS.dbType) || 'firestore',
      collectionName: (window.FIREBASE_SETTINGS && window.FIREBASE_SETTINGS.collectionName) || 'motorcycle_fleet',
      autoSync: (window.FIREBASE_SETTINGS && window.FIREBASE_SETTINGS.autoSync !== undefined) ? window.FIREBASE_SETTINGS.autoSync : true
    };

    const saved = localStorage.getItem('honda_firebase_settings');
    if (saved) {
      try {
        return Object.assign({}, defaultSettings, JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }

    return defaultSettings;
  }

  /**
   * Update internal status and notify subscribers
   */
  function setStatus(newStatus, errorMsg = null) {
    state.status = newStatus;
    state.errorMessage = errorMsg;
    notifyStatusChange();
  }

  function notifyStatusChange() {
    const statusPayload = {
      status: state.status,
      errorMessage: state.errorMessage,
      lastSyncTime: state.lastSyncTime,
      dbType: state.dbType,
      collectionName: state.collectionName,
      remoteFleetCount: state.remoteFleetCount,
      hasConfig: Boolean(getActiveConfig())
    };

    state.statusListeners.forEach(fn => {
      try {
        fn(statusPayload);
      } catch (err) {
        console.error('Error in status listener:', err);
      }
    });
  }

  /**
   * Subscribe to status changes
   */
  function onStatusChange(callback) {
    if (typeof callback === 'function') {
      state.statusListeners.push(callback);
      // Immediately notify current status
      callback({
        status: state.status,
        errorMessage: state.errorMessage,
        lastSyncTime: state.lastSyncTime,
        dbType: state.dbType,
        collectionName: state.collectionName,
        remoteFleetCount: state.remoteFleetCount,
        hasConfig: Boolean(getActiveConfig())
      });
    }
  }

  /**
   * Initialize Firebase instance with config and settings
   */
  async function init(onFleetUpdatedCallback) {
    if (typeof onFleetUpdatedCallback === 'function') {
      state.onFleetUpdated = onFleetUpdatedCallback;
    }

    const config = getActiveConfig();
    const settings = getActiveSettings();
    state.dbType = settings.dbType || 'firestore';
    state.collectionName = settings.collectionName || 'motorcycle_fleet';

    if (!config || !config.apiKey || !config.projectId) {
      setStatus('unconfigured');
      return false;
    }

    // Check if firebase script is loaded
    if (typeof firebase === 'undefined') {
      setStatus('error', 'ไม่พบไลบรารี Firebase SDK (กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต)');
      return false;
    }

    setStatus('connecting');

    try {
      // 1. Initialize Firebase App
      if (firebase.apps && firebase.apps.length > 0) {
        state.app = firebase.apps[0];
      } else {
        state.app = firebase.initializeApp(config);
      }

      // 2. Initialize Database client (direct server sync without enablePersistence IndexedDB lock issues)
      if (state.dbType === 'firestore') {
        if (!firebase.firestore) {
          throw new Error('ไม่พบ Firebase Firestore SDK');
        }
        state.db = firebase.firestore();
      } else {
        if (!firebase.database) {
          throw new Error('ไม่พบ Firebase Realtime Database SDK');
        }
        if (!config.databaseURL) {
          // Auto-derive databaseURL if missing: https://<projectId>-default-rtdb.firebaseio.com
          config.databaseURL = `https://${config.projectId}-default-rtdb.firebaseio.com`;
        }
        state.rtdb = firebase.database();
      }

      // 3. Start Real-time synchronization listener
      startRealtimeListener();
      return true;

    } catch (err) {
      console.error('Firebase initialization error:', err);
      setStatus('error', err.message || 'เกิดข้อผิดพลาดในการเชื่อมต่อ Firebase');
      return false;
    }
  }

  // ==================== PERSISTENT OUTBOX & TOMBSTONE TRACKER ====================
  const PENDING_UPSERTS_KEY = 'honda_sync_pending_upserts';
  const PENDING_DELETES_KEY = 'honda_sync_pending_deletes';
  const pendingUpsertQueue = new Map();
  let isFlushingQueue = false;
  let inFlightWrites = 0;

  function getPendingUpsertsMap() {
    try {
      const raw = localStorage.getItem(PENDING_UPSERTS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
      }
    } catch (e) { /* ignore */ }
    return {};
  }

  function savePendingUpsertsMap(map) {
    try {
      localStorage.setItem(PENDING_UPSERTS_KEY, JSON.stringify(map || {}));
    } catch (e) { /* ignore */ }
  }

  function getPendingDeletesMap() {
    try {
      const raw = localStorage.getItem(PENDING_DELETES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
      }
    } catch (e) { /* ignore */ }
    return {};
  }

  function savePendingDeletesMap(map) {
    try {
      localStorage.setItem(PENDING_DELETES_KEY, JSON.stringify(map || {}));
    } catch (e) { /* ignore */ }
  }

  function markPendingUpsert(motoId) {
    if (!motoId) return;
    const upserts = getPendingUpsertsMap();
    upserts[motoId] = Date.now();
    savePendingUpsertsMap(upserts);

    const deletes = getPendingDeletesMap();
    if (deletes[motoId]) {
      delete deletes[motoId];
      savePendingDeletesMap(deletes);
    }
  }

  function clearPendingUpsert(motoId) {
    if (!motoId) return;
    pendingUpsertQueue.delete(motoId);
    const upserts = getPendingUpsertsMap();
    if (upserts[motoId]) {
      delete upserts[motoId];
      savePendingUpsertsMap(upserts);
    }
  }

  function isPendingUpsert(motoId) {
    if (!motoId) return false;
    if (pendingUpsertQueue.has(motoId)) return true;
    const upserts = getPendingUpsertsMap();
    return Boolean(upserts[motoId]);
  }

  function markPendingDelete(motoId, docId) {
    if (!motoId) return;
    clearPendingUpsert(motoId);
    if (docId && docId !== motoId) clearPendingUpsert(docId);

    const deletes = getPendingDeletesMap();
    deletes[motoId] = {
      docId: docId || motoId,
      deletedAt: Date.now()
    };
    savePendingDeletesMap(deletes);
  }

  function clearPendingDelete(motoId) {
    if (!motoId) return;
    const deletes = getPendingDeletesMap();
    if (deletes[motoId]) {
      delete deletes[motoId];
      savePendingDeletesMap(deletes);
    }
  }

  function isPendingDelete(motoId, docId) {
    const deletes = getPendingDeletesMap();
    if (motoId && deletes[motoId]) return true;
    if (docId && deletes[docId]) return true;
    for (const key of Object.keys(deletes)) {
      const entry = deletes[key];
      if (entry && ((motoId && entry.docId === motoId) || (docId && entry.docId === docId))) {
        return true;
      }
    }
    return false;
  }

  function clearAllPendingOutbox() {
    pendingUpsertQueue.clear();
    savePendingUpsertsMap({});
    savePendingDeletesMap({});
  }

  function hasInFlightWrites() {
    return inFlightWrites > 0;
  }

  function getUtf8ByteLength(obj) {
    const str = typeof obj === 'string' ? obj : JSON.stringify(obj);
    if (typeof Blob !== 'undefined') {
      return new Blob([str]).size;
    }
    return encodeURIComponent(str).replace(/%[A-F\d]{2}/g, 'U').length;
  }

  /**
   * Prepare motorcycle payload for Cloud Firestore (< 1 MiB guaranteed)
   */
  async function prepareCleanMotoForCloud(moto) {
    const cleanData = JSON.parse(JSON.stringify(moto));
    delete cleanData._docId;
    cleanData._lastModified = cleanData._lastModified || new Date().toISOString();

    if (Array.isArray(cleanData.photos) && typeof window.ensurePhotosFitCloudLimit === 'function') {
      try {
        cleanData.photos = await window.ensurePhotosFitCloudLimit(cleanData.photos);
      } catch (compErr) {
        console.warn('Photo compression helper warning:', compErr);
      }
    }

    // Firestore hard limit is 1,048,576 bytes; enforce strict 880,000-byte ceiling
    if (state.dbType === 'firestore') {
      const MAX_FIRESTORE_BYTES = 880000;
      while (
        getUtf8ByteLength(cleanData) > MAX_FIRESTORE_BYTES &&
        Array.isArray(cleanData.photos) &&
        cleanData.photos.length > 1
      ) {
        cleanData.photos.pop();
      }
      if (getUtf8ByteLength(cleanData) > MAX_FIRESTORE_BYTES && Array.isArray(cleanData.photos)) {
        cleanData.photos = ['assets/images/forza_350.jpg'];
      }
    }

    return cleanData;
  }

  function translateFirebaseError(err) {
    if (!err) return 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ';
    if (err.code === 'permission-denied') {
      return 'สิทธิ์เข้าถึงถูกปฏิเสธ (Permission Denied) - โปรดตรวจสอบ Security Rules ใน Firebase Console';
    }
    if (err.code === 'resource-exhausted') {
      return 'โควต้าการใช้งาน Firebase เต็มชั่วคราว (Quota Exceeded)';
    }
    if (err.code === 'invalid-argument' || (err.message && err.message.includes('maximum allowed size'))) {
      return 'ขนาดไฟล์รูปภาพรวมเกินขีดจำกัด 1MB ของ Cloud Firestore';
    }
    return err.message || String(err);
  }

  /**
   * Start Real-time listener on the motorcycle fleet collection/node
   */
  function startRealtimeListener() {
    // Stop any existing listener
    if (state.unsubscribe) {
      state.unsubscribe();
      state.unsubscribe = null;
    }

    if (state.dbType === 'firestore' && state.db) {
      const colRef = state.db.collection(state.collectionName);

      state.unsubscribe = colRef.onSnapshot(
        (snapshot) => {
          state.lastSyncTime = new Date();

          const remoteFleet = [];
          snapshot.forEach(doc => {
            if (doc.id && doc.id.startsWith('_health_check_')) return;
            const data = doc.data();
            if (!data) return;
            data._docId = doc.id;
            data.id = data.id || doc.id;
            if (!isPendingDelete(data.id, data._docId)) {
              remoteFleet.push(data);
            }
          });

          state.remoteFleetCount = remoteFleet.length;
          setStatus('connected');

          // Cache remote fleet immediately so subsequent page loads are instant (0ms delay)
          setCachedFleet(remoteFleet);

          // Flush any pending offline deletes or upserts
          flushPendingQueue();

          const hasRemoteChanges = snapshot.docChanges().some(() => {
            return !snapshot.metadata.hasPendingWrites;
          });

          const isFirstLoad = !state.initialLoadDone;
          state.initialLoadDone = true;

          if (typeof state.onFleetUpdated === 'function') {
            state.onFleetUpdated(remoteFleet, {
              isRemote: hasRemoteChanges && !isFirstLoad && !state.isLocalAction,
              isInitial: isFirstLoad,
              docChanges: snapshot.docChanges().map(c => ({
                type: c.type, // 'added' | 'modified' | 'removed'
                id: c.doc.id,
                data: c.doc.data()
              }))
            });
          }
        },
        (error) => {
          console.error('Firestore onSnapshot error:', error);
          setStatus('error', translateFirebaseError(error));
        }
      );

    } else if (state.dbType === 'rtdb' && state.rtdb) {
      const ref = state.rtdb.ref(state.collectionName);

      const rtdbCallback = (snapshot) => {
        state.lastSyncTime = new Date();
        const val = snapshot.val();
        let remoteFleet = [];

        if (Array.isArray(val)) {
          remoteFleet = val.filter(Boolean);
        } else if (val && typeof val === 'object') {
          remoteFleet = Object.keys(val).map(key => {
            if (key.startsWith('_health_check')) return null;
            const item = val[key];
            if (item && typeof item === 'object') {
              item._docId = key;
              item.id = item.id || key;
              return item;
            }
            return null;
          }).filter(Boolean);
        }

        remoteFleet = remoteFleet.filter(item => !isPendingDelete(item.id, item._docId));

        state.remoteFleetCount = remoteFleet.length;
        setCachedFleet(remoteFleet);
        setStatus('connected');
        flushPendingQueue();

        const isFirstLoad = !state.initialLoadDone;
        state.initialLoadDone = true;

        if (typeof state.onFleetUpdated === 'function') {
          state.onFleetUpdated(remoteFleet, {
            isRemote: !isFirstLoad && !state.isLocalAction,
            isInitial: isFirstLoad
          });
        }
      };

      ref.on('value', rtdbCallback, (error) => {
        console.error('RTDB onValue error:', error);
        setStatus('error', error.message || 'สิทธิ์เข้าถึง Realtime Database ถูกปฏิเสธ');
      });

      state.unsubscribe = () => ref.off('value', rtdbCallback);
    }
  }

  async function flushPendingQueue() {
    if (isFlushingQueue) return;
    if (state.status !== 'connected' && state.status !== 'syncing') return;
    if (typeof navigator !== 'undefined' && navigator.onLine === false) return;

    const deletesMap = getPendingDeletesMap();
    const deleteIds = Object.keys(deletesMap);

    const upsertsMap = getPendingUpsertsMap();
    const upsertIds = Array.from(new Set([
      ...Array.from(pendingUpsertQueue.keys()),
      ...Object.keys(upsertsMap)
    ]));

    if (deleteIds.length === 0 && upsertIds.length === 0) return;

    isFlushingQueue = true;
    let backgroundSyncedCount = 0;

    try {
      // 1. Process all pending deletions first so deleted motorcycles NEVER come back
      for (const delId of deleteIds) {
        const entry = deletesMap[delId];
        await deleteMoto(delId, entry ? entry.docId : delId);
      }

      // 2. Process all pending upserts (including photos saved on mobile before tab reload)
      for (const motoId of upsertIds) {
        if (isPendingDelete(motoId)) {
          clearPendingUpsert(motoId);
          continue;
        }
        let moto = pendingUpsertQueue.get(motoId);
        if (!moto && typeof window.getLocalMotoForSync === 'function') {
          moto = await window.getLocalMotoForSync(motoId);
        }
        if (moto && moto.id) {
          const wasFromReload = !pendingUpsertQueue.has(motoId);
          const res = await upsertMoto(moto);
          if (res && res.synced && wasFromReload) {
            backgroundSyncedCount++;
          }
        } else {
          // Vehicle no longer exists locally -> clean stale pending flag
          clearPendingUpsert(motoId);
        }
      }

      if (backgroundSyncedCount > 0 && typeof window.onBackgroundCloudSyncDone === 'function') {
        window.onBackgroundCloudSyncDone(backgroundSyncedCount);
      }
    } catch (flushErr) {
      console.warn('Error flushing pending sync queue:', flushErr);
    } finally {
      isFlushingQueue = false;
    }
  }

  /**
   * Upsert a single motorcycle document to Firebase
   */
  async function upsertMoto(moto) {
    if (!moto || !moto.id) return { ok: false, synced: false, error: 'ไม่มีรหัสรถ' };

    markPendingUpsert(moto.id);
    pendingUpsertQueue.set(moto.id, moto);

    // If not connected yet or offline, keep queued persistently so it syncs automatically when connected
    if (
      (state.status !== 'connected' && state.status !== 'syncing') ||
      (typeof navigator !== 'undefined' && navigator.onLine === false)
    ) {
      console.log(`[FirebaseSync] Persistently queued moto [${moto.id}] for cloud sync when connected`);
      return { ok: true, synced: false, queued: true };
    }

    state.isLocalAction = true;
    inFlightWrites++;
    try {
      const cleanData = await prepareCleanMotoForCloud(moto);

      if (state.dbType === 'firestore' && state.db) {
        const colRef = state.db.collection(state.collectionName);
        await colRef.doc(cleanData.id).set(cleanData);
        // Clean up legacy mismatched document ID if it differed from cleanData.id
        if (moto._docId && moto._docId !== cleanData.id) {
          await colRef.doc(moto._docId).delete().catch(() => { });
        }
      } else if (state.dbType === 'rtdb' && state.rtdb) {
        await state.rtdb.ref(`${state.collectionName}/${cleanData.id}`).set(cleanData);
        if (moto._docId && moto._docId !== cleanData.id) {
          await state.rtdb.ref(`${state.collectionName}/${moto._docId}`).remove().catch(() => { });
        }
      }

      clearPendingUpsert(cleanData.id);
      state.lastSyncTime = new Date();
      notifyStatusChange();
      return { ok: true, synced: true, queued: false, photos: cleanData.photos };
    } catch (err) {
      console.error('Error upserting moto to Firebase:', err);
      // Keep in queue for automatic retry
      pendingUpsertQueue.set(moto.id, moto);
      const errMsg = translateFirebaseError(err);
      if (err && err.code === 'permission-denied') {
        setStatus('error', errMsg);
      }
      return { ok: false, synced: false, queued: true, error: errMsg };
    } finally {
      inFlightWrites = Math.max(0, inFlightWrites - 1);
      setTimeout(() => { state.isLocalAction = false; }, 800);
    }
  }

  /**
   * Update status of a single motorcycle in Firebase
   */
  async function updateMotoStatus(motoId, newStatus, fullMoto = null) {
    if (!motoId) return false;

    if (
      (state.status !== 'connected' && state.status !== 'syncing') ||
      (typeof navigator !== 'undefined' && navigator.onLine === false)
    ) {
      if (fullMoto) {
        await upsertMoto(fullMoto);
        return true;
      }
      return false;
    }

    state.isLocalAction = true;
    inFlightWrites++;
    try {
      const nowIso = new Date().toISOString();
      const targetDocId = (fullMoto && fullMoto._docId) ? fullMoto._docId : motoId;
      const updatePayload = {
        status: newStatus,
        _lastStatusChange: nowIso,
        _lastModified: nowIso
      };

      if (state.dbType === 'firestore' && state.db) {
        await state.db.collection(state.collectionName).doc(targetDocId).set(updatePayload, { merge: true });
      } else if (state.dbType === 'rtdb' && state.rtdb) {
        await state.rtdb.ref(`${state.collectionName}/${targetDocId}/status`).set(newStatus);
        await state.rtdb.ref(`${state.collectionName}/${targetDocId}/_lastStatusChange`).set(nowIso);
        await state.rtdb.ref(`${state.collectionName}/${targetDocId}/_lastModified`).set(nowIso);
      }

      state.lastSyncTime = new Date();
      notifyStatusChange();
      return true;
    } catch (err) {
      console.error('Error updating moto status in Firebase:', err);
      if (fullMoto) {
        markPendingUpsert(fullMoto.id);
        pendingUpsertQueue.set(fullMoto.id, fullMoto);
      }
      return false;
    } finally {
      inFlightWrites = Math.max(0, inFlightWrites - 1);
      setTimeout(() => { state.isLocalAction = false; }, 800);
    }
  }

  /**
   * Delete a motorcycle document from Firebase permanently (including offline queue & duplicate doc IDs)
   */
  async function deleteMoto(motoId, docId = null) {
    if (!motoId) return { ok: false, synced: false };

    markPendingDelete(motoId, docId);

    // Immediately prune from synced cache so instant reload never flashes deleted bike
    const cached = getCachedFleet();
    if (Array.isArray(cached)) {
      setCachedFleet(cached.filter(m => m && m.id !== motoId && m._docId !== motoId && (!docId || (m.id !== docId && m._docId !== docId))));
    }

    if (
      (state.status !== 'connected' && state.status !== 'syncing') ||
      (typeof navigator !== 'undefined' && navigator.onLine === false)
    ) {
      console.log(`[FirebaseSync] Queued deletion of moto [${motoId}] for execution when connected`);
      return { ok: true, synced: false, queued: true };
    }

    state.isLocalAction = true;
    inFlightWrites++;
    try {
      if (state.dbType === 'firestore' && state.db) {
        const colRef = state.db.collection(state.collectionName);
        const deleteTasks = [colRef.doc(motoId).delete()];
        if (docId && docId !== motoId) {
          deleteTasks.push(colRef.doc(docId).delete());
        }
        await Promise.all(deleteTasks);

        // Also locate and remove any documents whose internal field `id` equals motoId (in case Firestore auto-ID differed)
        try {
          const matchingSnap = await colRef.where('id', '==', motoId).get();
          if (!matchingSnap.empty) {
            await Promise.all(matchingSnap.docs.map(d => d.ref.delete()));
          }
        } catch (queryErr) {
          console.warn('Secondary delete query warning:', queryErr);
        }
      } else if (state.dbType === 'rtdb' && state.rtdb) {
        await state.rtdb.ref(`${state.collectionName}/${motoId}`).remove();
        if (docId && docId !== motoId) {
          await state.rtdb.ref(`${state.collectionName}/${docId}`).remove();
        }
      }

      clearPendingDelete(motoId);
      state.lastSyncTime = new Date();
      notifyStatusChange();
      return { ok: true, synced: true };
    } catch (err) {
      console.error('Error deleting moto from Firebase:', err);
      return { ok: false, synced: false, queued: true, error: translateFirebaseError(err) };
    } finally {
      inFlightWrites = Math.max(0, inFlightWrites - 1);
      setTimeout(() => { state.isLocalAction = false; }, 800);
    }
  }

  /**
   * Upload entire fleet array to Firebase (Byte-safe batch migration / sync)
   */
  async function uploadAll(fleetArray, options = {}) {
    if (!Array.isArray(fleetArray)) return { success: false, count: 0, error: 'ข้อมูลไม่ถูกต้อง' };

    const config = getActiveConfig();
    if (!config) return { success: false, count: 0, error: 'ยังไม่ได้ตั้งค่า Firebase' };

    // Ensure initialized
    if (!state.app) {
      const ok = await init(state.onFleetUpdated);
      if (!ok) return { success: false, count: 0, error: state.errorMessage || 'เชื่อมต่อ Firebase ล้มเหลว' };
    }

    state.isLocalAction = true;
    inFlightWrites++;
    setStatus('syncing');

    try {
      const validIds = new Set();
      const preparedList = [];
      const nowIso = new Date().toISOString();

      for (const moto of fleetArray) {
        if (!moto || !moto.id) continue;
        const clean = await prepareCleanMotoForCloud(moto);
        clean._uploadedAt = nowIso;
        validIds.add(clean.id);
        preparedList.push(clean);
      }

      if (state.dbType === 'firestore' && state.db) {
        const colRef = state.db.collection(state.collectionName);
        const MAX_BATCH_OPS = 25;
        const MAX_BATCH_BYTES = 3500000; // 3.5 MB per batch (safely under Firestore's 10 MiB batch limit)

        let batch = state.db.batch();
        let opCount = 0;
        let batchBytes = 0;

        for (const clean of preparedList) {
          const itemBytes = getUtf8ByteLength(clean);
          if (opCount > 0 && (opCount >= MAX_BATCH_OPS || (batchBytes + itemBytes) > MAX_BATCH_BYTES)) {
            await batch.commit();
            batch = state.db.batch();
            opCount = 0;
            batchBytes = 0;
          }
          batch.set(colRef.doc(clean.id), clean);
          opCount++;
          batchBytes += itemBytes;
        }

        if (opCount > 0) {
          await batch.commit();
        }

        // If full replacement requested (e.g. Reset Demo Data or Import JSON), remove stale remote docs
        if (options && options.replaceAll) {
          const existingSnap = await colRef.get();
          const staleDocs = existingSnap.docs.filter(d => !validIds.has(d.id) && !d.id.startsWith('_health_check_'));
          for (let i = 0; i < staleDocs.length; i += 100) {
            const delBatch = state.db.batch();
            staleDocs.slice(i, i + 100).forEach(d => delBatch.delete(d.ref));
            await delBatch.commit();
          }
        }
      } else if (state.dbType === 'rtdb' && state.rtdb) {
        const dict = {};
        preparedList.forEach(clean => {
          dict[clean.id] = clean;
        });
        await state.rtdb.ref(state.collectionName).set(dict);
      }

      clearAllPendingOutbox();
      state.lastSyncTime = new Date();
      state.remoteFleetCount = preparedList.length;
      setStatus('connected');
      return { success: true, count: preparedList.length };

    } catch (err) {
      console.error('Error uploading fleet to Firebase:', err);
      const errMsg = translateFirebaseError(err);
      setStatus('error', errMsg);
      return { success: false, count: 0, error: errMsg };
    } finally {
      inFlightWrites = Math.max(0, inFlightWrites - 1);
      setTimeout(() => { state.isLocalAction = false; }, 1000);
    }
  }

  /**
   * Pull all fleet records from Firebase once
   */
  async function downloadAll() {
    const config = getActiveConfig();
    if (!config) return { success: false, data: null, error: 'ยังไม่ได้ตั้งค่า Firebase' };

    if (!state.app) {
      const ok = await init(state.onFleetUpdated);
      if (!ok) return { success: false, data: null, error: state.errorMessage || 'เชื่อมต่อ Firebase ล้มเหลว' };
    }

    try {
      const list = [];
      if (state.dbType === 'firestore' && state.db) {
        const snap = await state.db.collection(state.collectionName).get();
        snap.forEach(doc => {
          if (doc.id && doc.id.startsWith('_health_check_')) return;
          const item = doc.data();
          if (!item) return;
          item._docId = doc.id;
          item.id = item.id || doc.id;
          list.push(item);
        });
      } else if (state.dbType === 'rtdb' && state.rtdb) {
        const snap = await state.rtdb.ref(state.collectionName).once('value');
        const val = snap.val();
        if (Array.isArray(val)) {
          val.filter(Boolean).forEach(m => list.push(m));
        } else if (val && typeof val === 'object') {
          Object.keys(val).forEach(k => {
            if (k.startsWith('_health_check')) return;
            const item = val[k];
            if (item) {
              item._docId = k;
              item.id = item.id || k;
              list.push(item);
            }
          });
        }
      }

      clearAllPendingOutbox();
      setCachedFleet(list);
      state.lastSyncTime = new Date();
      state.remoteFleetCount = list.length;
      notifyStatusChange();
      return { success: true, data: list };

    } catch (err) {
      console.error('Error downloading fleet from Firebase:', err);
      return { success: false, data: null, error: translateFirebaseError(err) };
    }
  }

  /**
   * Health Check: Test write and read permissions
   */
  async function testConnection(customConfig, customSettings) {
    const config = customConfig || getActiveConfig();
    const settings = customSettings || getActiveSettings();

    if (!config || !config.apiKey || !config.projectId) {
      return {
        success: false,
        message: 'กรุณากรอก apiKey และ projectId ให้ครบถ้วน'
      };
    }

    if (typeof firebase === 'undefined') {
      return {
        success: false,
        message: 'ไม่พบไลบรารี Firebase SDK'
      };
    }

    let tempApp = null;
    const testAppName = 'test_connection_' + Date.now();

    try {
      tempApp = firebase.initializeApp(config, testAppName);

      if (settings.dbType === 'firestore') {
        const testDb = tempApp.firestore();
        const testCol = testDb.collection(settings.collectionName || 'motorcycle_fleet');
        const testDocRef = testCol.doc('_health_check_' + Date.now());

        // 1. Try Write
        await testDocRef.set({
          test: true,
          timestamp: new Date().toISOString(),
          client: 'Honda Dealership Fleet Test'
        });

        // 2. Try Read
        const snap = await testDocRef.get();
        if (!snap.exists) {
          throw new Error('เขียนข้อมูลสำเร็จแต่อ่านไม่พบเอกสาร');
        }

        // 3. Clean up
        await testDocRef.delete();

        return {
          success: true,
          message: 'เชื่อมต่อ Cloud Firestore สำเร็จสมบูรณ์! สิทธิ์อ่าน-เขียนทำงานได้ 100%'
        };

      } else {
        // Realtime Database
        if (!config.databaseURL) {
          config.databaseURL = `https://${config.projectId}-default-rtdb.firebaseio.com`;
        }
        const testRtdb = tempApp.database();
        const testRef = testRtdb.ref(`${settings.collectionName || 'motorcycle_fleet'}/_health_check`);

        await testRef.set({
          test: true,
          timestamp: new Date().toISOString()
        });

        const snap = await testRef.once('value');
        if (!snap.exists()) {
          throw new Error('เขียนข้อมูลสำเร็จแต่อ่านไม่พบ');
        }

        await testRef.remove();

        return {
          success: true,
          message: 'เชื่อมต่อ Firebase Realtime Database สำเร็จสมบูรณ์!'
        };
      }

    } catch (err) {
      console.error('Test connection error:', err);
      let errorDesc = err.message;
      if (err.code === 'permission-denied') {
        errorDesc = 'สิทธิ์การเข้าถึงถูกปฏิเสธ (Permission Denied) - โปรดตรวจสอบ Security Rules ใน Firebase Console ให้เปิดสิทธิ์ (allow read, write: if true;)';
      }
      return {
        success: false,
        message: errorDesc
      };
    } finally {
      if (tempApp) {
        try {
          await tempApp.delete();
        } catch (e) {
          // ignore cleanup
        }
      }
    }
  }

  /**
   * Save configuration to localStorage and re-initialize
   */
  async function saveConfigAndRestart(configObj, settingsObj) {
    if (configObj) {
      localStorage.setItem('honda_firebase_config', JSON.stringify(configObj));
    }
    if (settingsObj) {
      localStorage.setItem('honda_firebase_settings', JSON.stringify(settingsObj));
      state.dbType = settingsObj.dbType || 'firestore';
      state.collectionName = settingsObj.collectionName || 'motorcycle_fleet';
    }

    // Reset current app instance if exists
    if (state.unsubscribe) {
      state.unsubscribe();
      state.unsubscribe = null;
    }

    state.initialLoadDone = false;
    return await init(state.onFleetUpdated);
  }

  /**
   * Clear configuration
   */
  function clearConfig() {
    if (state.unsubscribe) {
      state.unsubscribe();
      state.unsubscribe = null;
    }
    localStorage.removeItem('honda_firebase_config');
    localStorage.removeItem('honda_firebase_settings');
    setStatus('unconfigured');
  }

  const SYNC_CACHE_KEY = 'honda_firebase_synced_fleet';

  function getCachedFleet() {
    try {
      const stored = localStorage.getItem(SYNC_CACHE_KEY);
      if (stored !== null && stored !== undefined) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Error reading synced cache:', e);
    }
    return null;
  }

  function setCachedFleet(fleetList) {
    try {
      if (Array.isArray(fleetList)) {
        localStorage.setItem(SYNC_CACHE_KEY, JSON.stringify(fleetList));
      }
    } catch (e) {
      console.warn('Error saving synced cache:', e);
    }
  }

  function isConfiguredInCode() {
    const codeConfig = window.FIREBASE_CONFIG || (typeof firebaseConfig !== 'undefined' ? firebaseConfig : null);
    return Boolean(codeConfig &&
      typeof codeConfig.apiKey === 'string' && codeConfig.apiKey.trim() !== '' &&
      typeof codeConfig.projectId === 'string' && codeConfig.projectId.trim() !== '');
  }

  // Automatic flush on network recovery + accidental tab-close protection during active photo upload
  if (typeof window !== 'undefined') {
    window.addEventListener('online', () => {
      flushPendingQueue();
    });

    window.addEventListener('beforeunload', (e) => {
      if (inFlightWrites > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  // Pre-initialize Firebase immediately as soon as this script is loaded!
  (function preInitFirebase() {
    try {
      const config = getActiveConfig();
      if (config && config.apiKey && config.projectId && typeof firebase !== 'undefined') {
        if (!firebase.apps || firebase.apps.length === 0) {
          state.app = firebase.initializeApp(config);
        } else {
          state.app = firebase.apps[0];
        }

        const settings = getActiveSettings();
        state.dbType = settings.dbType || 'firestore';
        state.collectionName = settings.collectionName || 'motorcycle_fleet';

        if (state.dbType === 'firestore' && firebase.firestore) {
          state.db = firebase.firestore();
        } else if (state.dbType === 'rtdb' && firebase.database) {
          if (!config.databaseURL) {
            config.databaseURL = `https://${config.projectId}-default-rtdb.firebaseio.com`;
          }
          state.rtdb = firebase.database();
        }
      }
    } catch (err) {
      console.warn('Pre-init error:', err);
    }
  })();

  // Public API
  return {
    init,
    onStatusChange,
    upsertMoto,
    updateMotoStatus,
    deleteMoto,
    uploadAll,
    downloadAll,
    testConnection,
    saveConfigAndRestart,
    clearConfig,
    getActiveConfig,
    getActiveSettings,
    parseConfigInput,
    getCachedFleet,
    setCachedFleet,
    isConfiguredInCode,
    markPendingUpsert,
    clearPendingUpsert,
    isPendingUpsert,
    markPendingDelete,
    clearPendingDelete,
    isPendingDelete,
    clearAllPendingOutbox,
    hasInFlightWrites,
    flushPendingQueue,
    getState: () => ({ ...state })
  };
})();

// Attach to window
window.FirebaseSync = FirebaseSync;

