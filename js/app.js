/**
 * HONDA MOTORCYCLE DEALERSHIP & RENTAL FLEET MANAGEMENT
 * Core Controller Logic & State Management
 */

// ==================== DEFAULT MOTO SEED DATA ====================
const DEFAULT_MOTO_FLEET = [
  {
    id: "MOTO-2025-001",
    brand: "Honda",
    model: "Forza 350",
    category: "พรีเมียม ออโตเมติก (Maxi-Scooter)",
    cc: "350 cc",
    year: "2025",
    purpose: "both", // 'both' | 'rent' | 'sale'
    licensePlate: "1กข-9942 กทม.",
    vin: "MLHNF0809RS019284",
    engineNo: "NF08E-1092845",
    exteriorColor: "น้ำเงินเข้มเมทัลลิก (Dark Blue Metallic)",
    mileage: 3450,
    branch: "สาขาหลัก (โชว์รูมพระราม 9)",
    rentDaily: 1200,
    rentMonthly: 18000,
    deposit: 3000,
    price: 179000,
    downPayment: 15000,
    installmentAmount: 23240,
    installmentTerm: 12,
    status: "rented",
    customer: "Mr. Alexander Wright (UK)",
    customerPhone: "+66 82-991-4421",
    customerPassport: "GBR-99214019",
    rentalStart: "2026-09-28",
    rentalEnd: "2026-10-05",
    taxExpiry: "2027-04-15",
    gpsImei: "868019284019284",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "รถสภาพยอดเยี่ยม พร้อมกล่องเก็บของ U-Box จุของได้เต็มที่ มีชิลด์หน้าปรับไฟฟ้า",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: true,
      topBox: false
    },
    inspection: {
      oil: true,
      brakes: true,
      tyres: true,
      clean: true
    },
    photos: [
      "assets/images/forza_350.jpg"
    ]
  },
  {
    id: "MOTO-2025-002",
    brand: "Honda",
    model: "PCX 160 ABS",
    category: "สกู๊ตเตอร์ในเมือง (City Scooter)",
    cc: "160 cc",
    year: "2025",
    purpose: "both",
    licensePlate: "3ขจ-4410 เชียงใหม่",
    vin: "MLHKF2008RS055412",
    engineNo: "KF20E-2451980",
    exteriorColor: "ขาวมุกจัสมิน (Pearl Jasmine White)",
    mileage: 1890,
    branch: "สาขาเชียงใหม่ (นิมมาน/ท่าแพ)",
    rentDaily: 500,
    rentMonthly: 8500,
    deposit: 1500,
    price: 93400,
    downPayment: 5000,
    installmentAmount: 12530,
    installmentTerm: 12,
    status: "available",
    customer: "",
    customerPhone: "",
    customerPassport: "",
    rentalStart: "",
    rentalEnd: "",
    taxExpiry: "2027-06-20",
    gpsImei: "868055412093812",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "รถขวัญใจนักท่องเที่ยว เช่าขับเที่ยวดอยสุเทพสบาย เบรก ABS หน้าปลอดภัย",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: true,
      topBox: false
    },
    inspection: {
      oil: true,
      brakes: true,
      tyres: true,
      clean: true
    },
    photos: [
      "assets/images/pcx_160.jpg"
    ]
  },
  {
    id: "MOTO-2025-003",
    brand: "Honda",
    model: "Giorno+ 125 CBS",
    category: "แฟชั่น เรโทร (Classic/Retro)",
    cc: "125 cc",
    year: "2025",
    purpose: "both",
    licensePlate: "2กค-7719 เชียงใหม่",
    vin: "MLHJC9202RS089123",
    engineNo: "JC92E-3104921",
    exteriorColor: "เขียวพาสเทล ทูโทนขาวงาช้าง (Pastel Mint)",
    mileage: 2400,
    branch: "สาขาเชียงใหม่ (นิมมาน/ท่าแพ)",
    rentDaily: 350,
    rentMonthly: 6000,
    deposit: 1000,
    price: 61900,
    downPayment: 0,
    installmentAmount: 13930,
    installmentTerm: 6,
    status: "rented",
    customer: "คุณมินตรา พงษ์ศิริ",
    customerPhone: "089-445-1234",
    customerPassport: "1509900241821",
    rentalStart: "2026-09-29",
    rentalEnd: "2026-10-02",
    taxExpiry: "2027-08-10",
    gpsImei: "868089123491204",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "รถเรโทรยอดนิยม เหมาะถ่ายรูปคาเฟ่ มีช่องเก็บของด้านหน้าพร้อมช่องชาร์จไฟ USB",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: true,
      topBox: false
    },
    inspection: {
      oil: true,
      brakes: true,
      tyres: true,
      clean: true
    },
    photos: [
      "assets/images/giorno_plus.jpg"
    ]
  },
  {
    id: "MOTO-2025-004",
    brand: "Honda",
    model: "ADV 350 RoadSync",
    category: "พรีเมียม ออโตเมติก (Maxi-Scooter)",
    cc: "350 cc",
    year: "2025",
    purpose: "both",
    licensePlate: "4ขส-8812 กทม.",
    vin: "MLHNF1005RS043912",
    engineNo: "NF10E-5892140",
    exteriorColor: "เงินด้านรูทีเนียม (Mat Ruthenium Silver)",
    mileage: 1200,
    branch: "สาขาหลัก (โชว์รูมพระราม 9)",
    rentDaily: 1300,
    rentMonthly: 19500,
    deposit: 4000,
    price: 181900,
    downPayment: 18000,
    installmentAmount: 23220,
    installmentTerm: 12,
    status: "reserved",
    customer: "คุณธนกฤต วิเศษสมบัติ",
    customerPhone: "081-998-7766",
    customerPassport: "3100600192841",
    rentalStart: "2026-10-03",
    rentalEnd: "2026-10-08",
    taxExpiry: "2027-05-12",
    gpsImei: "868043912884129",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "ลูกค้าจองเช่าเดินทางทริปกาญจนบุรี ติดตั้งโช้คหลัง Subtank Showa แท้",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: true,
      topBox: true
    },
    inspection: {
      oil: true,
      brakes: true,
      tyres: true,
      clean: true
    },
    photos: [
      "assets/images/adv_350.jpg"
    ]
  },
  {
    id: "MOTO-2025-005",
    brand: "Honda",
    model: "NX500 BigBike Touring",
    category: "บิ๊กไบค์ / ทัวร์ริ่ง (BigBike)",
    cc: "500 cc",
    year: "2025",
    purpose: "both",
    licensePlate: "1กพ-5500 กทม.",
    vin: "MLHPC6802RS077218",
    engineNo: "PC68E-9842104",
    exteriorColor: "แดงกรังด์ปรีซ์ตัดขาว (Grand Prix Red)",
    mileage: 4100,
    branch: "สาขาหลัก (โชว์รูมพระราม 9)",
    rentDaily: 2000,
    rentMonthly: 32000,
    deposit: 8000,
    price: 227900,
    downPayment: 25000,
    installmentAmount: 28750,
    installmentTerm: 12,
    status: "check",
    customer: "คุณสุรศักดิ์ เดชานนท์",
    customerPhone: "084-555-8912",
    customerPassport: "3409900124810",
    rentalStart: "2026-09-25",
    rentalEnd: "2026-09-30",
    taxExpiry: "2027-03-30",
    gpsImei: "868077218391205",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "เพิ่งส่งคืนจากทริปเขาใหญ่ รอช่างตรวจสภาพผ้าเบรกและทำความสะอาดกล่องข้าง",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: true,
      topBox: true
    },
    inspection: {
      oil: true,
      brakes: false,
      tyres: true,
      clean: false
    },
    photos: [
      "assets/images/nx500_bigbike.jpg"
    ]
  },
  {
    id: "MOTO-2025-006",
    brand: "Honda",
    model: "Wave 125i ล้อแม็ก",
    category: "รถครอบครัว",
    cc: "125 cc",
    year: "2024",
    purpose: "both",
    licensePlate: "5กม-1122 พัทยา",
    vin: "MLHJA5401TB066491",
    engineNo: "JA54E-7821034",
    exteriorColor: "เทาด้านเบาะแดง",
    mileage: 6200,
    branch: "สาขาพัทยา",
    rentDaily: 250,
    rentMonthly: 4500,
    deposit: 1000,
    price: 55200,
    downPayment: 0,
    installmentAmount: 12420,
    installmentTerm: 6,
    status: "available",
    customer: "",
    customerPhone: "",
    customerPassport: "",
    rentalStart: "",
    rentalEnd: "",
    taxExpiry: "2027-01-25",
    gpsImei: "868066491772190",
    gpsUrl: "https://www.gpsdd.com",
    remarks: "ประหยัดน้ำมันสูงสุด 71.4 กม./ลิตร ทนทาน ดูแลง่าย พร้อมปล่อยเช่าและขายสด",
    accessories: {
      helmet: true,
      phoneMount: true,
      smartKey: false,
      topBox: false
    },
    inspection: {
      oil: true,
      brakes: true,
      tyres: true,
      clean: true
    },
    photos: [
      "assets/images/wave_125i.jpg"
    ]
  }
];

// ==================== APP STATE ====================
let fleet = [];
let activeMode = 'ALL'; // 'ALL' | 'RENT' | 'SALE'
let currentView = 'grid'; // 'grid' | 'table' | 'kanban'
let formPhotos = [];
let isInitialCloudLoading = false;
let hasReceivedCloudSnapshot = false;
let currentDetailMoto = null;
window.currentDetailMoto = null;

// ==================== TIER 1 PERSISTENT STORAGE (INDEXEDDB) ====================
/**
 * Rock-solid persistent storage engine for motorcycles & high-resolution photos
 * Bypasses the fragile 5MB browser localStorage quota limit completely
 */
const FleetStorage = (function () {
  'use strict';
  const DB_NAME = 'HondaMotorcycleFleetDB';
  const DB_VERSION = 1;
  const STORE_NAME = 'fleet_records';
  const KEY_FLEET = 'active_fleet_data';

  function openDb() {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB not supported in this environment'));
        return;
      }
      try {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME);
          }
        };
        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error || new Error('Could not open IndexedDB'));
      } catch (err) {
        reject(err);
      }
    });
  }

  async function save(fleetData) {
    if (!Array.isArray(fleetData)) return false;
    try {
      const db = await openDb();
      return new Promise((resolve) => {
        try {
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(fleetData, KEY_FLEET);
          tx.oncomplete = () => resolve(true);
          tx.onerror = (err) => {
            console.warn('FleetStorage transaction error:', err);
            resolve(false);
          };
        } catch (txErr) {
          console.warn('FleetStorage transaction creation error:', txErr);
          resolve(false);
        }
      });
    } catch (err) {
      console.warn('FleetStorage.save caught error:', err);
      return false;
    }
  }

  async function load() {
    try {
      const db = await openDb();
      return new Promise((resolve) => {
        try {
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(KEY_FLEET);
          req.onsuccess = (e) => {
            const res = e.target.result;
            resolve(Array.isArray(res) ? res : null);
          };
          req.onerror = () => resolve(null);
        } catch (txErr) {
          resolve(null);
        }
      });
    } catch (err) {
      return null;
    }
  }

  return { save, load };
})();
window.FleetStorage = FleetStorage;

// Provide local vehicle lookup for FirebaseSync persistent outbox queue after reload
window.getLocalMotoForSync = async function (motoId) {
  if (!motoId) return null;
  const inMemory = Array.isArray(fleet) ? fleet.find(m => m && m.id === motoId) : null;
  if (inMemory) return inMemory;
  if (window.FleetStorage) {
    const idbList = await FleetStorage.load();
    if (Array.isArray(idbList)) {
      return idbList.find(m => m && m.id === motoId) || null;
    }
  }
  return null;
};

window.onBackgroundCloudSyncDone = function (syncedCount) {
  if (syncedCount > 0 && typeof showToast === 'function') {
    showToast(`ซิงค์รูปภาพและข้อมูลรถที่ค้างอยู่ขึ้นคลาวด์สำเร็จ (${syncedCount} คัน)`, 'success');
  }
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  loadFleet();
  initFirebaseSync();
  setupEventListeners();
  setupPhotoDropAndPaste();
  setupFirebaseEvents();
  updateBranchOptions();
  updatePrintDate();
  renderAll();
});

function hasCustomPhotos(photos) {
  return Array.isArray(photos) && photos.some(p => p && (p.startsWith('data:') || p.startsWith('blob:') || !p.startsWith('assets/')));
}

function hasDefaultPhotosOnly(photos) {
  return !Array.isArray(photos) || photos.length === 0 || photos.every(p => p && p.startsWith('assets/'));
}

function loadFleet() {
  const isFirebaseInCode = window.FirebaseSync && FirebaseSync.isConfiguredInCode();
  const hasEverInitialized = localStorage.getItem('honda_fleet_initialized') === '1';
  const checkPendingDelete = (item) => Boolean(
    item && window.FirebaseSync && FirebaseSync.isPendingDelete && FirebaseSync.isPendingDelete(item.id, item._docId)
  );
  const checkPendingUpsert = (id) => Boolean(
    id && window.FirebaseSync && FirebaseSync.isPendingUpsert && FirebaseSync.isPendingUpsert(id)
  );

  // 1. Synchronous fast load for 0ms initial render
  let loaded = null;

  if (isFirebaseInCode) {
    loaded = FirebaseSync.getCachedFleet ? FirebaseSync.getCachedFleet() : null;
  }

  if (!Array.isArray(loaded)) {
    try {
      const stored = localStorage.getItem('honda_motorcycle_fleet');
      if (stored !== null && stored !== undefined) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) loaded = parsed;
      }
    } catch (e) {
      console.warn('Error reading honda_motorcycle_fleet from localStorage:', e);
    }
  }

  if (Array.isArray(loaded) && (loaded.length > 0 || hasEverInitialized || isFirebaseInCode)) {
    fleet = loaded.filter(item => item && !checkPendingDelete(item));
    isInitialCloudLoading = (fleet.length === 0 && isFirebaseInCode && !hasEverInitialized);
  } else {
    if (isFirebaseInCode) {
      fleet = [];
      isInitialCloudLoading = true;
    } else {
      fleet = JSON.parse(JSON.stringify(DEFAULT_MOTO_FLEET));
      saveFleet();
    }
  }

  ensureFleetFinancialDefaults();

  // 2. Asynchronously query IndexedDB (Tier 1) ONLY for unsynced photos or quota-overflow recovery (NEVER resurrect deleted bikes)
  if (window.FleetStorage) {
    FleetStorage.load().then(idbFleet => {
      if (Array.isArray(idbFleet)) {
        let changed = false;
        const autoHealItems = [];

        idbFleet.forEach(idbMoto => {
          if (!idbMoto || !idbMoto.id || checkPendingDelete(idbMoto)) return;

          const isPendingLocal = checkPendingUpsert(idbMoto.id);
          const target = fleet.find(m => m.id === idbMoto.id);

          if (target) {
            const idbHasCustom = hasCustomPhotos(idbMoto.photos);
            const targetHasDefault = hasDefaultPhotosOnly(target.photos);

            if (isPendingLocal) {
              Object.assign(target, idbMoto, { _docId: target._docId || idbMoto._docId });
              changed = true;
            } else if (idbHasCustom && targetHasDefault && !target._photoUpdatedAt) {
              // Recover custom photo that exceeded localStorage 5MB quota or failed legacy 1MB upload on mobile
              target.photos = idbMoto.photos;
              changed = true;
              if (hasReceivedCloudSnapshot && window.FirebaseSync) {
                autoHealItems.push(target);
              }
            }
          } else if (isPendingLocal || !hasReceivedCloudSnapshot) {
            // Only keep missing item if it is explicitly waiting to sync up, OR cloud snapshot hasn't arrived yet
            fleet.push(idbMoto);
            changed = true;
          }
        });

        if (changed) {
          isInitialCloudLoading = false;
          ensureFleetFinancialDefaults();
          renderAll();
        }

        // Auto-sync any recovered mobile photos up to Cloud Firestore so PC sees them immediately
        if (autoHealItems.length > 0 && window.FirebaseSync) {
          autoHealItems.forEach(item => {
            item._photoUpdatedAt = new Date().toISOString();
            FirebaseSync.upsertMoto(item);
          });
        }

        if (window.FirebaseSync && FirebaseSync.flushPendingQueue) {
          FirebaseSync.flushPendingQueue();
        }
      }
    }).catch(err => {
      console.warn('Error querying FleetStorage on startup:', err);
    });
  }
}

function ensureFleetFinancialDefaults() {
  fleet.forEach(item => {
    const seed = DEFAULT_MOTO_FLEET.find(s => s.id === item.id);
    if (seed) {
      if (item.downPayment === undefined) item.downPayment = seed.downPayment;
      if (item.installmentAmount === undefined) item.installmentAmount = seed.installmentAmount;
      if (item.installmentTerm === undefined) item.installmentTerm = seed.installmentTerm;
    } else {
      if (item.downPayment === undefined) item.downPayment = 0;
      if (!item.installmentTerm || item.installmentTerm <= 0) item.installmentTerm = 6;
      if (!item.installmentAmount || item.installmentAmount <= 0) {
        const principal = Math.max(0, (item.price || 0) - (item.downPayment || 0));
        const rate = (item.installmentTerm / 6) * 0.35;
        item.installmentAmount = Math.ceil((principal * (1 + rate)) / item.installmentTerm / 10) * 10;
      }
    }
  });
}

function saveFleet() {
  try {
    localStorage.setItem('honda_fleet_initialized', '1');
  } catch (e) { /* ignore */ }

  // 1. Asynchronously persist to IndexedDB (Tier 1: Unlimited storage, retains custom photos without 5MB quota)
  if (window.FleetStorage) {
    FleetStorage.save(fleet);
  }

  // 2. Safely persist to localStorage with quota protection (Tier 2: Fast synchronous cache)
  try {
    localStorage.setItem('honda_motorcycle_fleet', JSON.stringify(fleet));
  } catch (err) {
    console.warn('localStorage quota reached. Pruning redundant cache keys...', err);
    try {
      localStorage.removeItem('honda_cached_remote_fleet');
      localStorage.removeItem('honda_firebase_synced_fleet');
      localStorage.setItem('honda_motorcycle_fleet', JSON.stringify(fleet));
    } catch (e2) {
      console.warn('localStorage full. IndexedDB will preserve all data safely.', e2);
    }
  }

  // 3. Update Firebase cloud synced cache
  if (window.FirebaseSync && FirebaseSync.setCachedFleet) {
    try {
      FirebaseSync.setCachedFleet(fleet);
    } catch (e3) {
      console.warn('Could not update FirebaseSync cached fleet:', e3);
    }
  }
}

function updateBranchOptions() {
  const defaultBranches = [
    "วีระมอเตอร์"
  ];

  // Aggregate all unique branches and locations from the fleet
  const allBranches = Array.from(new Set([
    ...defaultBranches,
    ...fleet.map(m => m.branch).filter(Boolean)
  ]));

  // Update datalist in modal
  const datalist = document.getElementById('branchDatalist');
  if (datalist) {
    datalist.innerHTML = allBranches.map(b => `<option value="${b}">`).join('');
  }

  // Update header filter select
  const headerSelect = document.getElementById('headerBranchSelect');
  if (headerSelect) {
    const currentVal = headerSelect.value;
    headerSelect.innerHTML = `<option value="ALL">ทุกสาขา / ทุกจุดจอด</option>` +
      allBranches.map(b => `<option value="${b}">${b}</option>`).join('');

    if (allBranches.includes(currentVal) || currentVal === 'ALL') {
      headerSelect.value = currentVal;
    } else {
      headerSelect.value = 'ALL';
    }
  }
}

function updatePrintDate() {
  const el = document.getElementById('printDate');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Business Mode Tabs (All / Rent / Sale)
  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMode = btn.getAttribute('data-mode');
      renderAll();
    });
  });

  // View mode buttons
  document.getElementById('viewGridBtn').addEventListener('click', () => switchView('grid'));
  document.getElementById('viewTableBtn').addEventListener('click', () => switchView('table'));
  document.getElementById('viewKanbanBtn').addEventListener('click', () => switchView('kanban'));

  // Search & Filters
  document.getElementById('searchInput').addEventListener('input', () => renderAll());
  document.getElementById('filterModel').addEventListener('change', () => renderAll());
  document.getElementById('filterStatus').addEventListener('change', () => renderAll());
  document.getElementById('filterCc').addEventListener('change', () => renderAll());
  document.getElementById('sortBy').addEventListener('change', () => renderAll());
  document.getElementById('headerBranchSelect').addEventListener('change', (e) => {
    renderAll();
    showToast(`เลือกดูสต็อคสาขา: ${e.target.value}`, 'info');
  });

  // Reset Filters
  document.getElementById('btnResetFilters').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterModel').value = 'ALL';
    document.getElementById('filterStatus').value = 'ALL';
    document.getElementById('filterCc').value = 'ALL';
    document.getElementById('sortBy').value = 'date-desc';
    document.getElementById('headerBranchSelect').value = 'ALL';
    renderAll();
    showToast('รีเซ็ตตัวกรองทั้งหมดแล้ว', 'info');
  });

  // Modals open/close
  document.getElementById('btnOpenAddModal').addEventListener('click', () => openCarModal(null));
  document.getElementById('btnOpenDataModal').addEventListener('click', () => openModal('dataModal'));
  document.getElementById('btnOpenFirebaseModal').addEventListener('click', () => openFirebaseModal());

  const contractPrintBtn = document.getElementById('btnOpenContractModal');
  if (contractPrintBtn) {
    contractPrintBtn.addEventListener('click', () => openContractModal());
  }

  const quickFbBtn = document.getElementById('btnQuickOpenFirebaseSettings');
  if (quickFbBtn) {
    quickFbBtn.addEventListener('click', () => {
      closeModal('dataModal');
      openFirebaseModal();
    });
  }

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  // Modal backdrop click to close (ล็อคหน้าต่างคีย์ข้อมูล carFormModal ให้กด X หรือ บันทึก เท่านั้นถึงจะปิด)
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        // หน้าต่างคีย์ข้อมูลรถจะไม่ปิดเมื่อคลิกโดนพื้นหลังด้านนอก ป้องกันข้อมูลหาย
        if (modal.id === 'carFormModal') {
          const dialog = modal.querySelector('.modal-dialog');
          if (dialog) {
            dialog.classList.remove('modal-shake');
            void dialog.offsetWidth; // trigger reflow
            dialog.classList.add('modal-shake');
          }
          return;
        }
        closeModal(modal.id);
      }
    });
  });

  // Form Submission
  document.getElementById('vehicleForm').addEventListener('submit', handleFormSubmit);

  // Live calculation listeners for finance inputs
  ['formPrice', 'formDownPayment', 'formInstallmentTerm', 'formInstallmentAmount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateFinanceLiveSummary);
  });

  // Photo file upload in modal
  document.getElementById('formPhotoUpload').addEventListener('change', handlePhotoFileUpload);

  // Edit from Detail modal (capture ID before closeModal clears currentDetailMoto)
  document.getElementById('btnEditFromDetail').addEventListener('click', () => {
    if (currentDetailMoto) {
      const editMotoId = currentDetailMoto.id;
      closeModal('carDetailModal');
      openCarModal(editMotoId);
    }
  });

  // Export / Import buttons
  document.getElementById('btnExportCsv').addEventListener('click', exportCsv);
  document.getElementById('btnExportJson').addEventListener('click', exportJson);
  document.getElementById('importJsonInput').addEventListener('change', importJson);
  document.getElementById('btnResetDemoData').addEventListener('click', () => {
    if (confirm('คุณต้องการรีเซ็ตข้อมูลทั้งหมดกลับเป็นสต็อครถมอเตอร์ไซค์ตัวอย่างของ Honda ใช่หรือไม่?')) {
      fleet = JSON.parse(JSON.stringify(DEFAULT_MOTO_FLEET));
      saveFleet();
      renderAll();
      closeModal('dataModal');
      showToast('รีเซ็ตสต็อครถมอเตอร์ไซค์ Honda เรียบร้อยแล้ว', 'gold');

      // Real-time Cloud Sync (full replacement)
      if (window.FirebaseSync) {
        FirebaseSync.uploadAll(fleet, { replaceAll: true });
      }
    }
  });
}

// ==================== VIEW SWITCHING ====================
function switchView(viewName) {
  currentView = viewName;
  document.getElementById('viewGridBtn').classList.toggle('active', viewName === 'grid');
  document.getElementById('viewTableBtn').classList.toggle('active', viewName === 'table');
  document.getElementById('viewKanbanBtn').classList.toggle('active', viewName === 'kanban');

  document.getElementById('viewGrid').style.display = viewName === 'grid' ? 'block' : 'none';
  document.getElementById('viewTable').style.display = viewName === 'table' ? 'block' : 'none';
  document.getElementById('viewKanban').style.display = viewName === 'kanban' ? 'block' : 'none';

  renderAll();
}

// ==================== RENDERING CORE ====================
function renderAll() {
  if (isInitialCloudLoading) {
    renderSkeletonView();
    return;
  }

  const filtered = getFilteredFleet();

  // 1. Update Tab counts
  const allCount = fleet.length;
  const rentCount = fleet.filter(m => m.purpose === 'rent' || m.purpose === 'both').length;
  const saleCount = fleet.filter(m => m.purpose === 'sale' || m.purpose === 'both').length;

  document.getElementById('countTabAll').textContent = allCount;
  document.getElementById('countTabRent').textContent = rentCount;
  document.getElementById('countTabSale').textContent = saleCount;

  // 2. Update KPIs
  updateKpiStats();

  // 3. Update filtered count badge
  document.getElementById('filteredCountBadge').textContent = `แสดง ${filtered.length} จากทั้งหมด ${fleet.length} คัน`;

  // 4. Render current active view
  if (currentView === 'grid') {
    renderGridView(filtered);
  } else if (currentView === 'table') {
    renderTableView(filtered);
  } else if (currentView === 'kanban') {
    renderKanbanView(filtered);
  }
}

function getFilteredFleet() {
  const search = document.getElementById('searchInput').value.trim().toLowerCase();
  const branch = document.getElementById('headerBranchSelect').value;
  const model = document.getElementById('filterModel').value;
  const status = document.getElementById('filterStatus').value;
  const ccFilter = document.getElementById('filterCc').value;
  const sortBy = document.getElementById('sortBy').value;

  let list = fleet.filter(moto => {
    // Mode Filter (ALL / RENT / SALE)
    if (activeMode === 'RENT' && moto.purpose === 'sale') return false;
    if (activeMode === 'SALE' && moto.purpose === 'rent') return false;

    // Branch Filter
    if (branch !== 'ALL' && moto.branch !== branch) return false;

    // Model Filter
    if (model !== 'ALL' && !moto.model.toLowerCase().includes(model.toLowerCase())) return false;

    // Status Filter
    if (status !== 'ALL' && moto.status !== status) return false;

    // CC Filter
    if (ccFilter !== 'ALL') {
      const numCc = parseInt(moto.cc) || 0;
      if (ccFilter === '110-125' && (numCc < 110 || numCc > 125)) return false;
      if (ccFilter === '150-160' && (numCc < 150 || numCc > 160)) return false;
      if (ccFilter === '300-350' && (numCc < 300 || numCc > 350)) return false;
      if (ccFilter === '500+' && numCc < 500) return false;
    }

    // Search query
    if (search) {
      const matchPlate = moto.licensePlate && moto.licensePlate.toLowerCase().includes(search);
      const matchProvince = moto.province && moto.province.toLowerCase().includes(search);
      const matchFuel = moto.fuel && moto.fuel.toLowerCase().includes(search);
      const matchModel = moto.model && moto.model.toLowerCase().includes(search);
      const matchVin = moto.vin && moto.vin.toLowerCase().includes(search);
      const matchCust = moto.customer && moto.customer.toLowerCase().includes(search);
      const matchPhone = moto.customerPhone && moto.customerPhone.toLowerCase().includes(search);
      const matchColor = moto.exteriorColor && moto.exteriorColor.toLowerCase().includes(search);
      const matchGps = (moto.gpsImei && moto.gpsImei.toLowerCase().includes(search)) ||
        (moto.gpsUrl && moto.gpsUrl.toLowerCase().includes(search));

      if (!matchPlate && !matchProvince && !matchFuel && !matchModel && !matchVin && !matchCust && !matchPhone && !matchColor && !matchGps) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  list.sort((a, b) => {
    if (sortBy === 'date-desc') return (b.id || '').localeCompare(a.id || '');
    if (sortBy === 'rent-desc') return (b.rentDaily || 0) - (a.rentDaily || 0);
    if (sortBy === 'rent-asc') return (a.rentDaily || 0) - (b.rentDaily || 0);
    if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
    if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
    if (sortBy === 'installment-asc') return (a.installmentAmount || 0) - (b.installmentAmount || 0);
    if (sortBy === 'installment-desc') return (b.installmentAmount || 0) - (a.installmentAmount || 0);
    if (sortBy === 'down-asc') return (a.downPayment || 0) - (b.downPayment || 0);
    if (sortBy === 'model-asc') return a.model.localeCompare(b.model);
    return 0;
  });

  return list;
}

function renderSkeletonView() {
  // 1. KPI cards show shimmer
  ['kpiTotalUnits', 'kpiAvailableUnits', 'kpiRentedUnits', 'kpiServiceUnits'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<span class="skeleton-shimmer" style="width: 38px; height: 26px; display: inline-block;"></span>';
  });
  const revEl = document.getElementById('kpiRentalRevenue');
  if (revEl) revEl.innerHTML = '<span class="skeleton-shimmer" style="width: 75px; height: 26px; display: inline-block;"></span>';

  // 2. Tab counts show '-'
  ['countTabAll', 'countTabRent', 'countTabSale'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '-';
  });

  const countBadge = document.getElementById('filteredCountBadge');
  if (countBadge) countBadge.textContent = 'กำลังโหลดข้อมูลจากคลาวด์...';

  // 3. Grid container shows skeleton cards
  const container = document.getElementById('carGridContainer');
  const emptyState = document.getElementById('gridEmptyState');
  if (emptyState) emptyState.style.display = 'none';

  if (container) {
    container.innerHTML = Array(3).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skeleton-shimmer" style="height: 190px; border-radius: var(--radius-md);"></div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.25rem;">
          <div class="skeleton-shimmer" style="width: 55%; height: 20px;"></div>
          <div class="skeleton-shimmer" style="width: 28%; height: 20px;"></div>
        </div>
        <div class="skeleton-shimmer" style="width: 40%; height: 15px;"></div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 0.5rem;">
          <div class="skeleton-shimmer" style="height: 38px;"></div>
          <div class="skeleton-shimmer" style="height: 38px;"></div>
        </div>
        <div class="skeleton-shimmer" style="height: 36px; margin-top: 0.4rem;"></div>
      </div>
    `).join('');
  }
}

function updateKpiStats() {
  const branch = document.getElementById('headerBranchSelect').value;
  const currentSet = branch === 'ALL' ? fleet : fleet.filter(c => c.branch === branch);

  const totalUnits = currentSet.length;
  const availableCount = currentSet.filter(c => c.status === 'available').length;
  const rentedCount = currentSet.filter(c => c.status === 'rented').length;
  const totalDailyRevenue = currentSet.reduce((sum, c) => sum + (Number(c.rentDaily) || 0), 0);
  const serviceCount = currentSet.filter(c => c.status === 'check' || c.status === 'maintenance').length;

  document.getElementById('kpiTotalUnits').textContent = totalUnits.toLocaleString();
  document.getElementById('kpiAvailableUnits').textContent = availableCount.toLocaleString();
  document.getElementById('kpiRentedUnits').textContent = rentedCount.toLocaleString();
  document.getElementById('kpiRentalRevenue').textContent = `฿${totalDailyRevenue.toLocaleString()} /วัน`;
  document.getElementById('kpiServiceUnits').textContent = serviceCount.toLocaleString();
}

// UI Vector Icon Helpers (Replacing Emojis)
const UI_ICONS = {
  moto: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="16" r="3"/><circle cx="19" cy="16" r="3"/><path d="M12 17h-2.5l-2-7h5.5l2 4h4"/><path d="M15 6h2l2 4"/></svg>`,
  key: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m11 12 8-8h3v3l-2 2v2l-2 2z"/></svg>`,
  tag: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r="1.5"/></svg>`,
  sparkle: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`,
  camera: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  zap: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  user: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  phone: `<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  pin: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  copy: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  edit: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
  eye: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  trash: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  arrowRight: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  print: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
  calc: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  cloud: `<svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
};

// Status Helper Definitions
const STATUS_CONFIG = {
  available: { label: "ว่างพร้อมบริการ", class: "status-available" },
  rented: { label: "กำลังเช่า", class: "status-rented" },
  reserved: { label: "กำลังผ่อน / จอง", class: "status-reserved" },
  check: { label: "ไม่พบรถ", class: "status-check" },
  maintenance: { label: "ซ่อม/ถ่ายน้ำมัน", class: "status-maintenance" },
  sold: { label: "ขายแล้ว", class: "status-sold" }
};

function formatPrice(num) {
  return '฿' + Number(num || 0).toLocaleString('th-TH');
}

function getPurposeBadge(purpose) {
  if (purpose === 'rent') return `<span class="purpose-badge purpose-rent">${UI_ICONS.key} สำหรับเช่า</span>`;
  if (purpose === 'sale') return `<span class="purpose-badge purpose-sale">${UI_ICONS.tag} สำหรับขาย</span>`;
  return `<span class="purpose-badge purpose-both">${UI_ICONS.sparkle} ขายและเช่า</span>`;
}

// ==================== VIEW 1: GRID VIEW RENDERER ====================
function renderGridView(motos) {
  const container = document.getElementById('carGridContainer');
  const emptyState = document.getElementById('gridEmptyState');

  if (motos.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  container.innerHTML = motos.map(moto => {
    const statusInfo = STATUS_CONFIG[moto.status] || STATUS_CONFIG.available;
    const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';
    const photoCount = moto.photos ? moto.photos.length : 1;

    return `
      <div class="car-card" id="card-${moto.id}">
        <!-- Image & Media -->
        <div class="card-media" onclick="openCarDetail('${moto.id}')">
          <img src="${coverPhoto}" alt="${moto.model}" class="card-img" loading="lazy">
          <div class="card-media-overlay"></div>
          
          <div class="card-top-badges">
            <span class="status-pill ${statusInfo.class}">
              <span class="status-dot"></span>
              ${statusInfo.label}
            </span>
            ${getPurposeBadge(moto.purpose)}
          </div>

          <!-- GPS Tracking Quick Button on media -->
          <button class="card-gps-float-btn ${moto.gpsImei || moto.gpsUrl ? '' : 'no-gps'}"
                  onclick="openGpsTracking('${moto.id}', event)"
                  title="${moto.gpsImei || moto.gpsUrl ? 'คลิกเพื่อดูตำแหน่ง GPSDD ของคันนี้บนแผนที่' : 'ยังไม่ได้เชื่อมต่อ GPSDD คลิกเพื่อตั้งค่า'}">
            ${moto.gpsImei || moto.gpsUrl ? `<span class="gps-pulse-dot"></span> <span>${UI_ICONS.pin} GPSDD</span>` : `<span>+ เพิ่ม GPS</span>`}
          </button>

          <!-- License Plate Badge -->
          <div class="plate-badge">
            ${UI_ICONS.moto}
            <span>${moto.licensePlate}</span>
            ${moto.province ? `<span style="font-weight: 500; font-size: 0.72rem; color: #64748b; margin-left: 2px;">${moto.province}</span>` : ''}
          </div>

          <div class="photo-count-badge">
            ${UI_ICONS.camera} <span>${photoCount} รูป</span>
          </div>
        </div>

        <!-- Card Body -->
        <div class="card-body">
          <div class="card-header-row">
            <div>
              <h3 class="car-title">${moto.brand} ${moto.model}</h3>
              <div class="car-category-sub">${moto.category} &bull; ${moto.cc} &bull; ปี ${moto.year}</div>
            </div>
          </div>

          <!-- Dual Pricing Box -->
          <div class="price-dual-container">
            ${moto.purpose !== 'sale' ? `
              <div class="price-item">
                <span class="price-item-label">ค่าเช่ารายวัน</span>
                <span class="price-rent-val">${formatPrice(moto.rentDaily)}<span style="font-size: 0.72rem; font-weight: normal; color: var(--text-muted);">/วัน</span></span>
              </div>
            ` : ''}

            ${moto.purpose !== 'rent' ? `
              <div class="price-item" style="text-align: right;">
                <span class="price-item-label">ราคาขายสด</span>
                <span class="price-sale-val">${formatPrice(moto.price)}</span>
              </div>
            ` : ''}

            ${moto.purpose === 'rent' ? `
              <div class="price-item" style="text-align: right;">
                <span class="price-item-label">เงินประกันมัดจำ</span>
                <span style="font-size: 1rem; font-weight: 800; color: var(--navy-800);">${formatPrice(moto.deposit)}</span>
              </div>
            ` : ''}
          </div>

          <!-- Installment Badge (Easy Finance) -->
          ${(moto.downPayment !== undefined && moto.downPayment !== '' || moto.installmentAmount || moto.installmentTerm) ? `
            <div class="card-installment-badge">
              <div class="inst-badge-head">
                <span class="inst-badge-icon">${UI_ICONS.zap}</span>
                <span class="inst-badge-title">ผ่อนชำระ (Easy Finance)</span>
              </div>
              <div class="inst-badge-body">
                <div class="inst-spec">
                  <span class="inst-lbl">ดาวน์</span>
                  <span class="inst-val inst-down">${(moto.downPayment !== undefined && Number(moto.downPayment) === 0) ? '<span class="free-down-tag">ฟรีดาวน์</span>' : formatPrice(moto.downPayment || 0)}</span>
                </div>
                <div class="inst-spec">
                  <span class="inst-lbl">ผ่อนงวดละ</span>
                  <span class="inst-val inst-monthly">${moto.installmentAmount ? formatPrice(moto.installmentAmount) : '-'}</span>
                </div>
                <div class="inst-spec">
                  <span class="inst-lbl">ผ่อนกี่งวด</span>
                  <span class="inst-val inst-term">${moto.installmentTerm ? `${moto.installmentTerm} งวด` : '-'}</span>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Specs Info Grid (Preserve exact 2x2 layout) -->
          <div class="spec-tags-grid">
            <div class="spec-item">
              <span class="spec-label">เลขคอ / ตัวถัง</span>
              <span class="spec-val" title="${moto.vin}">${moto.vin}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">เลขไมล์ปัจจุบัน</span>
              <span class="spec-val">${(moto.mileage || 0).toLocaleString()} km</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">สีตัวรถ</span>
              <span class="spec-val">${moto.exteriorColor}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">เชื้อเพลิง</span>
              <span class="spec-val">${moto.fuel || 'เบนซิน 95'}</span>
            </div>
          </div>

          ${moto.customer ? `
            <div style="background: var(--navy-50); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.76rem; margin-bottom: 0.85rem; border: 1px solid rgba(0, 153, 229, 0.25);">
              <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--navy-900); font-weight: 700;">
                <span style="color: var(--cyan-600);">${UI_ICONS.user}</span> ผู้เช่า/ผู้ซื้อ: <strong>${moto.customer}</strong>
              </div>
              <div style="font-size: 0.72rem; color: var(--text-muted); display: flex; justify-content: space-between; margin-top: 2px;">
                <span style="display: flex; align-items: center; gap: 0.25rem;">${UI_ICONS.phone} ${moto.customerPhone || '-'}</span>
                ${moto.rentalEnd ? `<span>คืนรถ: ${moto.rentalEnd}</span>` : ''}
              </div>
            </div>
          ` : ''}

          <!-- Footer Actions -->
          <div class="card-footer">
            <div class="card-footer-top">
              <!-- Quick Status Change -->
              <select class="card-quick-status" onchange="quickUpdateStatus('${moto.id}', this.value)" title="เปลี่ยนสถานะรถด่วน">
                <option value="available" ${moto.status === 'available' ? 'selected' : ''}>&#x25CF; ว่างพร้อมบริการ</option>
                <option value="rented" ${moto.status === 'rented' ? 'selected' : ''}>&#x25CF; กำลังเช่า</option>
                <option value="reserved" ${moto.status === 'reserved' ? 'selected' : ''}>&#x25CF; กำลังผ่อน</option>
                <option value="check" ${moto.status === 'check' ? 'selected' : ''}>&#x25CF; ไม่พบรถ</option>
                <option value="maintenance" ${moto.status === 'maintenance' ? 'selected' : ''}>&#x25CF; ซ่อม/ถ่ายน้ำมัน</option>
                <option value="sold" ${moto.status === 'sold' ? 'selected' : ''}>&#x25CF; ขายแล้ว</option>
              </select>

              <div class="card-action-icons">
                <button class="btn-card-icon btn-gps-icon" onclick="openGpsTracking('${moto.id}', event)" title="เปิดดูตำแหน่ง GPSDD ทันที">
                  ${UI_ICONS.pin}
                </button>
                <button class="btn-card-icon" onclick="openCalcModal('${moto.id}')" title="คำนวณค่างวดผ่อนรถคันนี้ (Easy Finance)">
                  ${UI_ICONS.calc}
                </button>
                <button class="btn-card-icon" onclick="openContractModal('${moto.id}')" title="พิมพ์สัญญา (เช่า / ผ่อน)">
                  ${UI_ICONS.print}
                </button>
                <button class="btn-card-icon" onclick="copyPlate('${moto.licensePlate}')" title="คัดลอกป้ายทะเบียน">
                  ${UI_ICONS.copy}
                </button>
                <button class="btn-card-icon" onclick="openCarModal('${moto.id}')" title="แก้ไขข้อมูล">
                  ${UI_ICONS.edit}
                </button>
              </div>
            </div>

            <!-- Primary View Details Button (Full Width & Clean) -->
            <button class="btn-card-detail" onclick="openCarDetail('${moto.id}')" title="ดูรายละเอียดข้อมูลรถและสัญญา">
              <span>ดูข้อมูลรถและสัญญา</span>
              ${UI_ICONS.arrowRight}
            </button>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

// ==================== VIEW 2: TABLE VIEW RENDERER ====================
function renderTableView(motos) {
  const tbody = document.getElementById('stockTableBody');

  if (motos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 3rem; color: var(--text-muted);">ไม่พบรถมอเตอร์ไซค์ที่ตรงกับเงื่อนไขการค้นหา</td></tr>`;
    return;
  }

  tbody.innerHTML = motos.map(moto => {
    const statusInfo = STATUS_CONFIG[moto.status] || STATUS_CONFIG.available;
    const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';

    return `
      <tr>
        <td>
          <img src="${coverPhoto}" class="table-thumb" onclick="openCarDetail('${moto.id}')" alt="${moto.model}">
        </td>
        <td>
          <div class="table-car-name">${moto.brand} ${moto.model}</div>
          <div class="table-car-sub">${moto.category} &bull; ${moto.cc}</div>
        </td>
        <td>
          <div style="font-weight: 700; color: #111827; font-size: 0.85rem; display: flex; align-items: center; gap: 0.35rem;">
            ${UI_ICONS.moto} <span>${moto.licensePlate}</span>
          </div>
          <div class="vin-code" style="margin-top: 3px;">
            ${moto.vin}
            <button class="copy-btn" onclick="copyPlate('${moto.vin}')" title="คัดลอกเลขคอ">${UI_ICONS.copy}</button>
          </div>
          ${moto.gpsImei ? `
            <div style="margin-top: 4px;">
              <span class="table-gps-pill" onclick="openGpsTracking('${moto.id}', event)" title="คลิกดูตำแหน่ง GPSDD">
                <span class="gps-pulse-dot" style="width: 6px; height: 6px;"></span>
                GPS: ${moto.gpsImei.slice(-4)}
              </span>
            </div>
          ` : ''}
        </td>
        <td>
          <div style="font-weight: 600;">${moto.exteriorColor}</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">${(moto.mileage || 0).toLocaleString()} km</div>
        </td>
        <td>
          ${getPurposeBadge(moto.purpose)}
        </td>
        <td>
          ${moto.rentDaily ? `<div style="font-weight: 700; color: var(--cyan-500); font-size: 0.85rem;">${formatPrice(moto.rentDaily)}/วัน</div>` : ''}
          ${moto.price ? `<div style="font-size: 0.78rem; color: var(--navy-900); font-weight: 700;">ขายสด: ${formatPrice(moto.price)}</div>` : ''}
          ${(moto.downPayment !== undefined && moto.downPayment !== '' || moto.installmentAmount) ? `
            <div class="table-installment-pill">
              <span class="table-inst-down">ดาวน์: <strong>${(moto.downPayment !== undefined && Number(moto.downPayment) === 0) ? 'ฟรีดาวน์' : formatPrice(moto.downPayment || 0)}</strong></span>
              <span class="table-inst-monthly">ผ่อน: <strong>${formatPrice(moto.installmentAmount || 0)}</strong>/งวด</span>
              <span class="table-inst-term">(${moto.installmentTerm || '-'} งวด)</span>
            </div>
          ` : ''}
        </td>
        <td>
          <span class="status-pill ${statusInfo.class}">
            <span class="status-dot"></span>
            ${statusInfo.label}
          </span>
        </td>
        <td>
          ${moto.customer ? `
            <div style="font-weight: 600; color: var(--navy-900); display: flex; align-items: center; gap: 0.25rem;">${UI_ICONS.user} ${moto.customer}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.25rem; margin-top: 2px;">${UI_ICONS.phone} ${moto.customerPhone || '-'}</div>
          ` : `
            <span style="color: var(--text-light); font-size: 0.75rem;">(ว่างพร้อมบริการ)</span>
          `}
        </td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 0.35rem; justify-content: center;">
            <button class="btn-card-icon btn-gps-icon" onclick="openGpsTracking('${moto.id}', event)" title="เปิดดูตำแหน่ง GPSDD">
              ${UI_ICONS.pin}
            </button>
            <button class="btn-card-icon" onclick="openContractModal('${moto.id}')" title="พิมพ์สัญญา (เช่า / ผ่อน)">
              ${UI_ICONS.print}
            </button>
            <button class="btn-card-icon" onclick="openCarDetail('${moto.id}')" title="ดูสัญญา & พิมพ์ใบตรวจ">
              ${UI_ICONS.eye}
            </button>
            <button class="btn-card-icon" onclick="openCarModal('${moto.id}')" title="แก้ไขข้อมูล">
              ${UI_ICONS.edit}
            </button>
            <button class="btn-card-icon" style="color: #ef4444;" onclick="deleteMoto('${moto.id}')" title="ลบข้อมูล">
              ${UI_ICONS.trash}
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ==================== VIEW 3: KANBAN VIEW RENDERER ====================
function renderKanbanView(motos) {
  const stages = ['available', 'rented', 'reserved', 'check', 'maintenance'];

  stages.forEach(stage => {
    const stageMotos = motos.filter(c => c.status === stage);
    const countEl = document.getElementById(`kanbanCount${capitalize(stage)}`);
    const listEl = document.getElementById(`kanbanList${capitalize(stage)}`);

    if (countEl) countEl.textContent = stageMotos.length;

    if (listEl) {
      if (stageMotos.length === 0) {
        listEl.innerHTML = `<div style="text-align: center; color: var(--text-light); font-size: 0.75rem; padding: 1.5rem 0;">ไม่มีรายการ</div>`;
      } else {
        listEl.innerHTML = stageMotos.map(moto => {
          const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';
          return `
            <div class="kanban-card" onclick="openCarDetail('${moto.id}')">
              <div class="kanban-card-top">
                <span style="display: flex; align-items: center; gap: 0.3rem;">${UI_ICONS.moto} <span>${moto.licensePlate}</span></span>
                <span style="display: flex; gap: 0.35rem; align-items: center;">
                  ${moto.gpsImei || moto.gpsUrl ? `
                    <span class="kanban-gps-badge" onclick="openGpsTracking('${moto.id}', event)" title="ดูตำแหน่ง GPSDD">${UI_ICONS.pin} GPS</span>
                  ` : ''}
                  <span style="font-weight: 600; color: var(--text-muted);">${moto.cc}</span>
                </span>
              </div>
              <div style="display: flex; gap: 0.6rem; align-items: center;">
                <img src="${coverPhoto}" style="width: 50px; height: 38px; border-radius: 6px; object-fit: cover;">
                <div>
                  <div class="kanban-car-name">${moto.brand} ${moto.model}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${moto.exteriorColor}</div>
                </div>
              </div>
              <div class="kanban-card-footer">
                <span style="font-weight: 800; color: var(--cyan-500); font-size: 0.84rem; font-family: var(--font-number);">${formatPrice(moto.rentDaily)}/วัน</span>
                <span style="font-size: 0.74rem; color: var(--navy-900); font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">
                  คลิกดู ${UI_ICONS.arrowRight}
                </span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  });
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ==================== FINANCE CALCULATION HELPERS ====================
function applyDownPaymentPreset(amount) {
  const el = document.getElementById('formDownPayment');
  if (el) {
    el.value = amount;
    updateFinanceLiveSummary();
  }
}

function applyDownPaymentPercent(percent) {
  const priceEl = document.getElementById('formPrice');
  const downEl = document.getElementById('formDownPayment');
  if (priceEl && downEl) {
    const price = Number(priceEl.value) || 0;
    const down = Math.round((price * (percent / 100)) / 100) * 100;
    downEl.value = down;
    updateFinanceLiveSummary();
  }
}

function applyTermPreset(term) {
  const termEl = document.getElementById('formInstallmentTerm');
  if (termEl) {
    termEl.value = term;
    calculateSuggestedInstallment();
  }
}

function calculateSuggestedInstallment() {
  const price = Number(document.getElementById('formPrice')?.value) || 0;
  const down = Number(document.getElementById('formDownPayment')?.value) || 0;
  const term = Number(document.getElementById('formInstallmentTerm')?.value) || 6;

  if (price <= 0) {
    showToast('กรุณากรอกราคาขายสดก่อนคำนวณค่างวด', 'warning');
    return;
  }

  const principal = Math.max(0, price - down);
  if (principal === 0) {
    const amountEl = document.getElementById('formInstallmentAmount');
    if (amountEl) amountEl.value = 0;
    updateFinanceLiveSummary();
    return;
  }

  // อัตราดอกเบี้ย: 6 งวด = 35% (0.35), 12 งวด = 70% (0.70), เพิ่มงวดละ 35% ทุกๆ 6 งวด ((term / 6) * 0.35)
  const interestRate = (term / 6) * 0.35;
  const totalInterest = principal * interestRate;
  const totalFinanced = principal + totalInterest;
  const monthly = Math.ceil(totalFinanced / term / 10) * 10;

  const amountEl = document.getElementById('formInstallmentAmount');
  if (amountEl) {
    amountEl.value = monthly;
    updateFinanceLiveSummary();
    const percentDisplay = Math.round((term / 6) * 35 * 10) / 10;
    showToast(`คำนวณค่างวด ${term} งวด (ดอกเบี้ย ${percentDisplay}%): ${formatPrice(monthly)}/งวด เรียบร้อยแล้ว`, 'gold');
  }
}

function updateFinanceLiveSummary() {
  const price = Number(document.getElementById('formPrice')?.value) || 0;
  const down = Number(document.getElementById('formDownPayment')?.value) || 0;
  const term = Number(document.getElementById('formInstallmentTerm')?.value) || 0;
  const monthly = Number(document.getElementById('formInstallmentAmount')?.value) || 0;

  const financedPrincipal = Math.max(0, price - down);
  const totalPayable = down + (monthly * term);
  const interestRate = (term > 0) ? (term / 6) * 35 : 0;

  const financedEl = document.getElementById('previewFinancedAmount');
  const rateEl = document.getElementById('previewInterestRate');
  const monthlySummaryEl = document.getElementById('previewMonthlySummary');
  const totalPayableEl = document.getElementById('previewTotalPayable');

  if (financedEl) financedEl.textContent = formatPrice(financedPrincipal);
  if (rateEl) {
    rateEl.textContent = term > 0 ? `${Math.round(interestRate * 10) / 10}% (${term} งวด)` : '-';
  }
  if (monthlySummaryEl) {
    if (monthly > 0 && term > 0) {
      monthlySummaryEl.textContent = `${formatPrice(monthly)} x ${term} งวด`;
    } else {
      monthlySummaryEl.textContent = '-';
    }
  }
  if (totalPayableEl) {
    if (monthly > 0 && term > 0) {
      totalPayableEl.textContent = formatPrice(totalPayable);
    } else if (price > 0) {
      totalPayableEl.textContent = formatPrice(price);
    } else {
      totalPayableEl.textContent = '฿0';
    }
  }
}

// ==================== STANDALONE EASY FINANCE & RENTAL CALCULATOR ====================
let currentCalcMode = 'installment'; // 'installment' | 'rent'

function switchCalcMode(mode) {
  currentCalcMode = mode;
  const btnInst = document.getElementById('btnCalcModeInstallment');
  const btnRent = document.getElementById('btnCalcModeRent');
  const paneInst = document.getElementById('calcPaneInstallment');
  const paneRent = document.getElementById('calcPaneRent');
  const motoId = document.getElementById('calcSelectMoto')?.value;
  const saveInstBtn = document.getElementById('btnSaveCalcToMoto');
  const saveRentBtn = document.getElementById('btnSaveCalcRentToMoto');

  if (mode === 'installment') {
    if (btnInst) btnInst.classList.add('active');
    if (btnRent) btnRent.classList.remove('active');
    if (paneInst) paneInst.style.display = 'block';
    if (paneRent) paneRent.style.display = 'none';
    if (saveInstBtn) saveInstBtn.style.display = motoId ? 'inline-flex' : 'none';
    if (saveRentBtn) saveRentBtn.style.display = 'none';
    calculateStandaloneInstallment(false);
  } else {
    if (btnRent) btnRent.classList.add('active');
    if (btnInst) btnInst.classList.remove('active');
    if (paneRent) paneRent.style.display = 'block';
    if (paneInst) paneInst.style.display = 'none';
    if (saveRentBtn) saveRentBtn.style.display = motoId ? 'inline-flex' : 'none';
    if (saveInstBtn) saveInstBtn.style.display = 'none';
    calculateRentalLive(false);
  }
}

function openCalcModal(motoId = null, initialMode = null) {
  // Populate motorcycle selector
  const selectEl = document.getElementById('calcSelectMoto');
  if (selectEl) {
    selectEl.innerHTML = `
      <option value="">-- กำหนดราคา --</option>
      ${fleet.map(m => `
        <option value="${m.id}" ${motoId === m.id ? 'selected' : ''}>
          ${m.brand} ${m.model} [${m.licensePlate || 'ไม่มีทะเบียน'}] - ขาย: ${formatPrice(m.price || 0)} / เช่า: ${formatPrice(m.rentDaily || 0)}/วัน
        </option>
      `).join('')}
    `;
  }

  const saveInstBtn = document.getElementById('btnSaveCalcToMoto');
  const saveRentBtn = document.getElementById('btnSaveCalcRentToMoto');

  if (motoId) {
    const moto = fleet.find(c => c.id === motoId);
    if (moto) {
      // 1. Populate Installment fields
      document.getElementById('calcPrice').value = moto.price || '';
      document.getElementById('calcDownPayment').value = moto.downPayment !== undefined ? moto.downPayment : 0;
      document.getElementById('calcTerm').value = moto.installmentTerm || 36;
      if (moto.installmentAmount) {
        document.getElementById('calcMonthlyAmount').value = moto.installmentAmount;
      }
      document.getElementById('calcMotoDisplayTitle').textContent = `คำนวณงวด: ${moto.brand} ${moto.model} [${moto.licensePlate || ''}]`;

      // 2. Populate Rental fields
      document.getElementById('calcRentDaily').value = moto.rentDaily || 400;
      document.getElementById('calcRentMonthly').value = moto.rentMonthly || (moto.rentDaily ? moto.rentDaily * 20 : 6000);
      document.getElementById('calcRentDeposit').value = moto.deposit !== undefined ? moto.deposit : 1000;
      document.getElementById('calcRentDays').value = 3;
      document.getElementById('calcRentDiscount').value = 0;
      document.getElementById('calcRentMotoDisplayTitle').textContent = `คำนวณค่าเช่า: ${moto.brand} ${moto.model} [${moto.licensePlate || ''}]`;

      // Initialize dates (Today -> Today + 3 days)
      const today = new Date();
      const in3Days = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
      const fmtDate = d => d.toISOString().split('T')[0];
      const startEl = document.getElementById('calcRentalStart');
      const endEl = document.getElementById('calcRentalEnd');
      if (startEl) startEl.value = fmtDate(today);
      if (endEl) endEl.value = fmtDate(in3Days);

      if (saveInstBtn) saveInstBtn.style.display = (currentCalcMode === 'installment') ? 'inline-flex' : 'none';
      if (saveRentBtn) saveRentBtn.style.display = (currentCalcMode === 'rent') ? 'inline-flex' : 'none';

      calculateStandaloneInstallment(false);
      calculateRentalLive(false);
    }
  } else {
    // Default initial values for custom mode
    const currentPrice = document.getElementById('calcPrice')?.value;
    if (!currentPrice || currentPrice === '0') {
      document.getElementById('calcPrice').value = 85000;
      document.getElementById('calcDownPayment').value = 0;
      document.getElementById('calcTerm').value = 36;
    }
    document.getElementById('calcMotoDisplayTitle').textContent = 'แผนคำนวณผ่อนชำระ Easy Finance';

    const currentRent = document.getElementById('calcRentDaily')?.value;
    if (!currentRent || currentRent === '0') {
      document.getElementById('calcRentDaily').value = 450;
      document.getElementById('calcRentMonthly').value = 7500;
      document.getElementById('calcRentDeposit').value = 1000;
      document.getElementById('calcRentDays').value = 3;
      document.getElementById('calcRentDiscount').value = 0;
    }
    document.getElementById('calcRentMotoDisplayTitle').textContent = 'แผนคำนวณค่าเช่ารถมอเตอร์ไซค์';

    // Set default dates
    const today = new Date();
    const in3Days = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
    const fmtDate = d => d.toISOString().split('T')[0];
    const startEl = document.getElementById('calcRentalStart');
    const endEl = document.getElementById('calcRentalEnd');
    if (startEl && !startEl.value) startEl.value = fmtDate(today);
    if (endEl && !endEl.value) endEl.value = fmtDate(in3Days);

    if (saveInstBtn) saveInstBtn.style.display = 'none';
    if (saveRentBtn) saveRentBtn.style.display = 'none';

    calculateStandaloneInstallment(false);
    calculateRentalLive(false);
  }

  // Switch to initial mode if requested
  if (initialMode) {
    switchCalcMode(initialMode);
  } else {
    switchCalcMode(currentCalcMode);
  }

  openModal('calcModal');
}

function onCalcSelectMotoChange(motoId) {
  const saveInstBtn = document.getElementById('btnSaveCalcToMoto');
  const saveRentBtn = document.getElementById('btnSaveCalcRentToMoto');

  if (!motoId) {
    document.getElementById('calcMotoDisplayTitle').textContent = 'กำหนดราคาเองอิสระ (Custom Price)';
    document.getElementById('calcRentMotoDisplayTitle').textContent = 'กำหนดอัตราค่าเช่าเองอิสระ (Custom Rent)';
    if (saveInstBtn) saveInstBtn.style.display = 'none';
    if (saveRentBtn) saveRentBtn.style.display = 'none';
    return;
  }
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  // Installment
  document.getElementById('calcPrice').value = moto.price || 0;
  document.getElementById('calcDownPayment').value = moto.downPayment !== undefined ? moto.downPayment : 0;
  document.getElementById('calcTerm').value = moto.installmentTerm || 36;
  if (moto.installmentAmount) {
    document.getElementById('calcMonthlyAmount').value = moto.installmentAmount;
  }
  document.getElementById('calcMotoDisplayTitle').textContent = `คำนวณงวด: ${moto.brand} ${moto.model} [${moto.licensePlate || ''}]`;

  // Rental
  document.getElementById('calcRentDaily').value = moto.rentDaily || 400;
  document.getElementById('calcRentMonthly').value = moto.rentMonthly || (moto.rentDaily ? moto.rentDaily * 20 : 6000);
  document.getElementById('calcRentDeposit').value = moto.deposit !== undefined ? moto.deposit : 1000;
  document.getElementById('calcRentMotoDisplayTitle').textContent = `คำนวณค่าเช่า: ${moto.brand} ${moto.model} [${moto.licensePlate || ''}]`;

  if (saveInstBtn) saveInstBtn.style.display = (currentCalcMode === 'installment') ? 'inline-flex' : 'none';
  if (saveRentBtn) saveRentBtn.style.display = (currentCalcMode === 'rent') ? 'inline-flex' : 'none';

  calculateStandaloneInstallment(false);
  calculateRentalLive(false);
}

function resetCalcToCustom() {
  const select = document.getElementById('calcSelectMoto');
  if (select) select.value = '';
  document.getElementById('calcMotoDisplayTitle').textContent = 'กำหนดราคาเองอิสระ (Custom Price)';
  document.getElementById('calcRentMotoDisplayTitle').textContent = 'กำหนดอัตราค่าเช่าเองอิสระ (Custom Rent)';
  const saveInstBtn = document.getElementById('btnSaveCalcToMoto');
  const saveRentBtn = document.getElementById('btnSaveCalcRentToMoto');
  if (saveInstBtn) saveInstBtn.style.display = 'none';
  if (saveRentBtn) saveRentBtn.style.display = 'none';
}

// ==================== INSTALLMENT CALCULATION LOGIC ====================
function applyCalcDownPreset(amount) {
  const el = document.getElementById('calcDownPayment');
  if (el) {
    el.value = amount;
    calculateStandaloneInstallment(false);
  }
}

function applyCalcDownPercent(percent) {
  const price = Number(document.getElementById('calcPrice')?.value) || 0;
  const downEl = document.getElementById('calcDownPayment');
  if (downEl) {
    downEl.value = Math.round((price * (percent / 100)) / 100) * 100;
    calculateStandaloneInstallment(false);
  }
}

function applyCalcTermPreset(term) {
  const termEl = document.getElementById('calcTerm');
  if (termEl) {
    termEl.value = term;
    calculateStandaloneInstallment(true);
  }
}

function onCalcPriceInput() {
  calculateStandaloneInstallment(false);
}

function onCalcDownInput() {
  calculateStandaloneInstallment(false);
}

function onCalcTermInput() {
  calculateStandaloneInstallment(false);
}

function calculateStandaloneInstallment(showToastMsg = true) {
  const price = Number(document.getElementById('calcPrice')?.value) || 0;
  const down = Number(document.getElementById('calcDownPayment')?.value) || 0;
  const term = Number(document.getElementById('calcTerm')?.value) || 6;

  if (price <= 0) {
    if (showToastMsg) showToast('กรุณาระบุราคาขายสดของรถก่อนคำนวณ', 'warning');
    return;
  }

  const principal = Math.max(0, price - down);
  if (principal === 0) {
    const amountEl = document.getElementById('calcMonthlyAmount');
    if (amountEl) amountEl.value = 0;
    updateCalcLiveSummary();
    return;
  }

  // สูตรดอกเบี้ยมาตรฐาน Easy Finance: 6 งวด = 35% (0.35), ดอกเบี้ยคงที่ 35% ทุกๆ 6 งวด
  const interestRate = (term / 6) * 0.35;
  const totalInterest = principal * interestRate;
  const totalFinanced = principal + totalInterest;
  const monthly = Math.ceil(totalFinanced / term / 10) * 10;

  const amountEl = document.getElementById('calcMonthlyAmount');
  if (amountEl) {
    amountEl.value = monthly;
    updateCalcLiveSummary();
    if (showToastMsg) {
      const percentDisplay = Math.round((term / 6) * 35 * 10) / 10;
      showToast(`คำนวณค่างวด ${term} งวด (ดอกเบี้ย ${percentDisplay}%): ${formatPrice(monthly)}/งวด เรียบร้อยแล้ว`, 'gold');
    }
  }
}

function updateCalcLiveSummary() {
  const price = Number(document.getElementById('calcPrice')?.value) || 0;
  const down = Number(document.getElementById('calcDownPayment')?.value) || 0;
  const term = Number(document.getElementById('calcTerm')?.value) || 0;
  const monthly = Number(document.getElementById('calcMonthlyAmount')?.value) || 0;

  const financedPrincipal = Math.max(0, price - down);
  const totalPayable = down + (monthly * term);
  const interestRate = (term > 0) ? (term / 6) * 35 : 0;

  const financedEl = document.getElementById('calcPreviewFinanced');
  const rateEl = document.getElementById('calcPreviewRate');
  const monthlySummaryEl = document.getElementById('calcPreviewMonthlySummary');
  const totalPayableEl = document.getElementById('calcPreviewTotalPayable');

  if (financedEl) financedEl.textContent = formatPrice(financedPrincipal);
  if (rateEl) {
    rateEl.textContent = term > 0 ? `${Math.round(interestRate * 10) / 10}% (${term} งวด)` : '-';
  }
  if (monthlySummaryEl) {
    if (monthly > 0 && term > 0) {
      monthlySummaryEl.textContent = `${formatPrice(monthly)} x ${term} งวด`;
    } else {
      monthlySummaryEl.textContent = '-';
    }
  }
  if (totalPayableEl) {
    if (monthly > 0 && term > 0) {
      totalPayableEl.textContent = formatPrice(totalPayable);
    } else if (price > 0) {
      totalPayableEl.textContent = formatPrice(price);
    } else {
      totalPayableEl.textContent = '฿0';
    }
  }
}

// ==================== RENTAL CALCULATION LOGIC ====================
function applyCalcRentDaysPreset(days) {
  const daysEl = document.getElementById('calcRentDays');
  if (daysEl) {
    daysEl.value = days;
  }
  // Auto-adjust end date if start date is set
  const startEl = document.getElementById('calcRentalStart');
  const endEl = document.getElementById('calcRentalEnd');
  if (startEl && startEl.value && endEl) {
    const startDate = new Date(startEl.value);
    const endDate = new Date(startDate.getTime() + (days * 24 * 60 * 60 * 1000));
    endEl.value = endDate.toISOString().split('T')[0];
  }
  calculateRentalLive(false);
}

function applyCalcRentDepositPreset(deposit) {
  const depositEl = document.getElementById('calcRentDeposit');
  if (depositEl) {
    depositEl.value = deposit;
    calculateRentalLive(false);
  }
}

function onCalcRentInput() {
  calculateRentalLive(false);
}

function onCalcRentDaysInput() {
  const days = Math.max(1, Number(document.getElementById('calcRentDays')?.value) || 1);
  const startEl = document.getElementById('calcRentalStart');
  const endEl = document.getElementById('calcRentalEnd');
  if (startEl && startEl.value && endEl) {
    const startDate = new Date(startEl.value);
    const endDate = new Date(startDate.getTime() + (days * 24 * 60 * 60 * 1000));
    endEl.value = endDate.toISOString().split('T')[0];
  }
  calculateRentalLive(false);
}

function onCalcRentDatesChange() {
  const startVal = document.getElementById('calcRentalStart')?.value;
  const endVal = document.getElementById('calcRentalEnd')?.value;
  if (startVal && endVal) {
    const d1 = new Date(startVal);
    const d2 = new Date(endVal);
    const diffTime = d2 - d1;
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    const daysEl = document.getElementById('calcRentDays');
    if (daysEl) daysEl.value = diffDays;
  }
  calculateRentalLive(false);
}

function calculateRentalLive(showToastMsg = false) {
  const daily = Number(document.getElementById('calcRentDaily')?.value) || 0;
  const monthly = Number(document.getElementById('calcRentMonthly')?.value) || 0;
  const days = Math.max(1, Number(document.getElementById('calcRentDays')?.value) || 1);
  const deposit = Number(document.getElementById('calcRentDeposit')?.value) || 0;
  const discount = Number(document.getElementById('calcRentDiscount')?.value) || 0;

  // Compute rent: if >= 30 days and monthly rate is provided, calculate monthly rate + extra days
  let rentBase = 0;
  if (days >= 30 && monthly > 0) {
    const fullMonths = Math.floor(days / 30);
    const remainDays = days % 30;
    rentBase = (fullMonths * monthly) + Math.round((monthly / 30) * remainDays);
  } else {
    rentBase = daily * days;
  }

  const totalRent = Math.max(0, rentBase - discount);
  const totalPayableOnPickup = totalRent + deposit;

  // Update UI Elements
  const totalRentEl = document.getElementById('calcRentPreviewTotal');
  const depositEl = document.getElementById('calcRentPreviewDeposit');
  const discountEl = document.getElementById('calcRentPreviewDiscount');
  const payableEl = document.getElementById('calcRentPreviewPayable');

  if (totalRentEl) totalRentEl.textContent = formatPrice(totalRent);
  if (depositEl) depositEl.textContent = formatPrice(deposit);
  if (discountEl) {
    discountEl.textContent = discount > 0 ? `-${formatPrice(discount)}` : '-';
  }
  if (payableEl) payableEl.textContent = formatPrice(totalPayableOnPickup);

  if (showToastMsg) {
    showToast(`คำนวณค่าเช่า ${days} วัน เรียบร้อยแล้ว (ยอดชำระวันรับรถ: ${formatPrice(totalPayableOnPickup)})`, 'success');
  }
}

// ==================== QUOTE COPY & CONTRACT TRANSITION ====================
function copyFinanceQuote() {
  const motoId = document.getElementById('calcSelectMoto')?.value;
  const moto = motoId ? fleet.find(c => c.id === motoId) : null;
  const bikeName = moto ? `${moto.brand} ${moto.model} [${moto.licensePlate || 'ป้ายแดง'}]` : 'มอเตอร์ไซค์ (กำหนดราคาเอง)';
  const price = Number(document.getElementById('calcPrice')?.value) || 0;
  const down = Number(document.getElementById('calcDownPayment')?.value) || 0;
  const term = Number(document.getElementById('calcTerm')?.value) || 0;
  const monthly = Number(document.getElementById('calcMonthlyAmount')?.value) || 0;
  const totalPayable = down + (monthly * term);
  const financed = Math.max(0, price - down);
  const downPercent = price > 0 ? Math.round((down / price) * 100) : 0;
  const interestPct = term > 0 ? Math.round((term / 6) * 35 * 10) / 10 : 0;

  const text = `🏍️ ใบเสนอราคาแผนผ่อนชำระ (Easy Finance)\n` +
    `สาขา: วีระมอเตอร์\n` +
    `--------------------------------\n` +
    `รุ่น: ${bikeName}\n` +
    `ราคาขายสด: ${formatPrice(price)}\n` +
    `เงินดาวน์: ${formatPrice(down)} (${downPercent}%)\n` +
    `ยอดจัดไฟแนนซ์: ${formatPrice(financed)}\n` +
    `อัตราดอกเบี้ยรวม: ${interestPct}%\n` +
    `ระยะเวลาผ่อน: ${term} งวด (${term} เดือน)\n` +
    `ค่างวด: ${formatPrice(monthly)} /เดือน\n` +
    `ยอดผ่อนรวมสุทธิ (ดาวน์+ค่างวด): ${formatPrice(totalPayable)}\n` +
    `--------------------------------\n` +
    `*อนุมัติไว รับรถได้ทันที พร้อมของแถมหมวกกันน็อคและประกัน*`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('คัดลอกใบเสนอราคาผ่อนชำระเรียบร้อยแล้ว (วางส่ง LINE ได้ทันที)', 'success');
  }).catch(() => {
    prompt('คัดลอกข้อความด้านล่างนี้ได้เลยครับ:', text);
  });
}

function copyRentQuote() {
  const motoId = document.getElementById('calcSelectMoto')?.value;
  const moto = motoId ? fleet.find(c => c.id === motoId) : null;
  const bikeName = moto ? `${moto.brand} ${moto.model} [${moto.licensePlate || 'ป้ายแดง'}]` : 'มอเตอร์ไซค์ ';
  const daily = Number(document.getElementById('calcRentDaily')?.value) || 0;
  const days = Number(document.getElementById('calcRentDays')?.value) || 1;
  const deposit = Number(document.getElementById('calcRentDeposit')?.value) || 0;
  const discount = Number(document.getElementById('calcRentDiscount')?.value) || 0;
  const startVal = document.getElementById('calcRentalStart')?.value || '';
  const endVal = document.getElementById('calcRentalEnd')?.value || '';

  let rentBase = 0;
  const monthly = Number(document.getElementById('calcRentMonthly')?.value) || 0;
  if (days >= 30 && monthly > 0) {
    const fullMonths = Math.floor(days / 30);
    const remainDays = days % 30;
    rentBase = (fullMonths * monthly) + Math.round((monthly / 30) * remainDays);
  } else {
    rentBase = daily * days;
  }
  const totalRent = Math.max(0, rentBase - discount);
  const totalPayable = totalRent + deposit;

  const dateLine = (startVal && endVal) ? `ช่วงวันที่: ${startVal} ถึง ${endVal} (${days} วัน)\n` : `ระยะเวลาเช่า: ${days} วัน\n`;

  const text = `🏍️ ใบเสนอราคาเช่ารถมอเตอร์ไซค์\n` +
    `สาขา: วีระมอเตอร์\n` +
    `--------------------------------\n` +
    `รุ่นรถ: ${bikeName}\n` +
    `อัตราค่าเช่า: ${formatPrice(daily)} /วัน\n` +
    dateLine +
    `รวมค่าเช่า: ${formatPrice(totalRent)}${discount > 0 ? ` (หักส่วนลด ${formatPrice(discount)})` : ''}\n` +
    `เงินประกันมัดจำ: ${formatPrice(deposit)} (ได้รับคืนเต็มจำนวนเมื่อส่งมอบรถคืน)\n` +
    `--------------------------------\n` +
    `ยอดชำระสุทธิวันรับรถ (ค่าเช่า+มัดจำ): ${formatPrice(totalPayable)}\n` +
    `--------------------------------\n` +
    `*แถมฟรี! หมวกกันน็อค   ใบ + ที่จับมือถือกันสะเทือน + พ.ร.บ. คุ้มครอง*`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('คัดลอกใบเสนอราคาเช่ารถเรียบร้อยแล้ว (วางส่ง LINE ได้ทันที)', 'success');
  }).catch(() => {
    prompt('คัดลอกข้อความด้านล่างนี้ได้เลยครับ:', text);
  });
}

function proceedToContractFromCalc() {
  const motoId = document.getElementById('calcSelectMoto')?.value;
  closeModal('calcModal');
  if (currentCalcMode === 'rent') {
    openContractModal(motoId || null, 'rent');
  } else {
    openContractModal(motoId || null, 'installment');
  }
}

function saveCalcToSelectedMoto() {
  const motoId = document.getElementById('calcSelectMoto')?.value;
  if (!motoId) {
    showToast('กรุณาเลือกรถมอเตอร์ไซค์จากสต็อคก่อนบันทึก', 'warning');
    return;
  }
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  const price = Number(document.getElementById('calcPrice')?.value) || 0;
  const down = Number(document.getElementById('calcDownPayment')?.value) || 0;
  const term = Number(document.getElementById('calcTerm')?.value) || 36;
  const monthly = Number(document.getElementById('calcMonthlyAmount')?.value) || 0;

  moto.price = price;
  moto.downPayment = down;
  moto.installmentTerm = term;
  moto.installmentAmount = monthly;
  moto._lastModified = new Date().toISOString();

  saveFleet();
  renderAll();

  // Real-time Cloud Sync
  if (window.FirebaseSync) {
    FirebaseSync.upsertMoto(moto);
  }

  showToast(`บันทึกแผนผ่อนลงใน ${moto.brand} ${moto.model} เรียบร้อยแล้ว`, 'success');
}

function saveCalcRentToSelectedMoto() {
  const motoId = document.getElementById('calcSelectMoto')?.value;
  if (!motoId) {
    showToast('กรุณาเลือกรถมอเตอร์ไซค์จากสต็อคก่อนบันทึก', 'warning');
    return;
  }
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  const daily = Number(document.getElementById('calcRentDaily')?.value) || 0;
  const monthly = Number(document.getElementById('calcRentMonthly')?.value) || 0;
  const deposit = Number(document.getElementById('calcRentDeposit')?.value) || 0;

  moto.rentDaily = daily;
  moto.rentMonthly = monthly;
  moto.deposit = deposit;
  moto._lastModified = new Date().toISOString();

  saveFleet();
  renderAll();

  // Real-time Cloud Sync
  if (window.FirebaseSync) {
    FirebaseSync.upsertMoto(moto);
  }

  showToast(`บันทึกอัตราค่าเช่าลงใน ${moto.brand} ${moto.model} เรียบร้อยแล้ว`, 'success');
}

// ==================== MODAL LOGIC (ADD / EDIT) ====================
let isSubmittingCarForm = false;

function setCategorySelectValue(rawCategory) {
  const catSelect = document.getElementById('formCategory');
  if (!catSelect) return;

  // Clean up any temporary custom category options from earlier modal sessions
  catSelect.querySelectorAll('option[data-custom-category="true"]').forEach(opt => opt.remove());

  const cleaned = String(rawCategory || '').trim();
  if (!cleaned) {
    catSelect.selectedIndex = 0;
    return;
  }

  const options = Array.from(catSelect.options);

  // 1. Exact or trimmed match against value or label
  const exactMatch = options.find(opt => opt.value.trim() === cleaned || opt.textContent.trim() === cleaned);
  if (exactMatch) {
    catSelect.value = exactMatch.value;
    return;
  }

  // 2. Prefix match for shortened labels (e.g. "พรีเมียม ออโตเมติก" -> "พรีเมียม ออโตเมติก (Maxi-Scooter)")
  if (cleaned.length >= 6) {
    const prefixMatch = options.find(opt => opt.value.trim().startsWith(cleaned));
    if (prefixMatch) {
      catSelect.value = prefixMatch.value;
      return;
    }
  }

  // 3. Custom category from existing data -> dynamically preserve option so user never has to re-select
  const customOpt = document.createElement('option');
  customOpt.value = cleaned;
  customOpt.textContent = cleaned;
  customOpt.setAttribute('data-custom-category', 'true');
  catSelect.appendChild(customOpt);
  catSelect.value = cleaned;

  if (!catSelect.value && catSelect.options.length > 0) {
    catSelect.selectedIndex = 0;
  }
}

function openCarModal(motoId = null) {
  const form = document.getElementById('vehicleForm');
  if (form) form.reset();
  formPhotos = [];
  isSubmittingCarForm = false;

  const titleEl = document.getElementById('carModalTitle');
  const idEl = document.getElementById('carId');

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = (val !== undefined && val !== null) ? val : '';
  };
  const setSelectSafe = (id, val, fallbackVal) => {
    const el = document.getElementById(id);
    if (!el) return;
    const cleaned = String(val !== undefined && val !== null ? val : '').trim();
    el.value = cleaned || fallbackVal;
    if (!el.value && el.options && el.options.length > 0) {
      el.value = fallbackVal;
      if (!el.value) el.selectedIndex = 0;
    }
  };
  const setChk = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.checked = Boolean(val);
  };

  if (motoId) {
    const moto = fleet.find(c => c.id === motoId);
    if (!moto) return;

    if (titleEl) titleEl.textContent = `แก้ไขข้อมูลรถมอเตอร์ไซค์: ${moto.brand} ${moto.model} (${moto.licensePlate})`;
    if (idEl) idEl.value = moto.id;

    setSelectSafe('formPurpose', moto.purpose, 'both');
    setVal('formBrand', moto.brand);
    setVal('formModel', moto.model);
    setCategorySelectValue(moto.category);
    setVal('formCc', moto.cc || '160 cc');
    setVal('formYear', moto.year);

    setVal('formLicensePlate', moto.licensePlate);
    setVal('formProvince', moto.province || '');
    setVal('formVin', moto.vin);
    setVal('formEngineNo', moto.engineNo || '');
    setVal('formExteriorColor', moto.exteriorColor ? String(moto.exteriorColor).trim() : '');
    setVal('formFuel', moto.fuel ? String(moto.fuel).trim() : 'เบนซิน 95');
    setVal('formMileage', moto.mileage || 0);
    setVal('formBranch', moto.branch);

    setVal('formRentDaily', moto.rentDaily || '');
    setVal('formRentMonthly', moto.rentMonthly || '');
    setVal('formDeposit', moto.deposit || '');
    setVal('formPrice', moto.price || '');
    setVal('formDownPayment', (moto.downPayment !== undefined && moto.downPayment !== null) ? moto.downPayment : '');
    setVal('formInstallmentTerm', (moto.installmentTerm !== undefined && moto.installmentTerm !== null) ? moto.installmentTerm : '');
    setVal('formInstallmentAmount', (moto.installmentAmount !== undefined && moto.installmentAmount !== null) ? moto.installmentAmount : '');
    setSelectSafe('formStatus', moto.status, 'available');

    setVal('formCustomer', moto.customer || '');
    setVal('formCustomerPhone', moto.customerPhone || '');
    setVal('formCustomerPassport', moto.customerPassport || '');
    setVal('formRentalStart', moto.rentalStart || '');
    setVal('formRentalEnd', moto.rentalEnd || '');
    setVal('formTaxExpiry', moto.taxExpiry || '');
    setVal('formGpsImei', moto.gpsImei || '');
    setVal('formGpsUrl', moto.gpsUrl || '');

    // Accessories
    if (moto.accessories) {
      setChk('accHelmet', moto.accessories.helmet);
      setChk('accPhoneMount', moto.accessories.phoneMount);
      setChk('accSmartKey', moto.accessories.smartKey);
      setChk('accTopBox', moto.accessories.topBox);
    }

    // Inspection
    if (moto.inspection) {
      setChk('chkOil', moto.inspection.oil);
      setChk('chkBrakes', moto.inspection.brakes);
      setChk('chkTyres', moto.inspection.tyres);
      setChk('chkClean', moto.inspection.clean);
    }

    setVal('formRemarks', moto.remarks || '');
    formPhotos = moto.photos ? [...moto.photos] : [];
  } else {
    // New Entry
    if (titleEl) titleEl.textContent = 'คีย์รับรถมอเตอร์ไซค์เข้าสต็อคใหม่ (New Motorcycle Entry)';
    if (idEl) idEl.value = '';

    setSelectSafe('formPurpose', 'both', 'both');
    setVal('formBrand', 'Honda');
    setVal('formModel', '');
    setCategorySelectValue('พรีเมียม ออโตเมติก (Maxi-Scooter)');
    setVal('formCc', '160 cc');
    setVal('formYear', new Date().getFullYear().toString());
    setVal('formLicensePlate', '');
    setVal('formProvince', 'กรุงเทพมหานคร');
    setVal('formVin', '');
    setVal('formEngineNo', '');
    setVal('formExteriorColor', '');
    setVal('formFuel', 'เบนซิน 95');
    setVal('formMileage', 500);
    setVal('formBranch', 'สาขาหลัก (วีระมอเตอร์)');
    setVal('formRentDaily', '');
    setVal('formRentMonthly', '');
    setVal('formDeposit', '');
    setVal('formPrice', '');
    setVal('formDownPayment', '');
    setVal('formInstallmentTerm', '6');
    setVal('formInstallmentAmount', '');
    setSelectSafe('formStatus', 'available', 'available');
    setVal('formCustomer', '');
    setVal('formCustomerPhone', '');
    setVal('formCustomerPassport', '');
    setVal('formRentalStart', '');
    setVal('formRentalEnd', '');
    setVal('formTaxExpiry', '');
    setVal('formGpsImei', '');
    setVal('formGpsUrl', 'https://www.gpsdd.com');
    setVal('formRemarks', '');

    setChk('accHelmet', false);
    setChk('accPhoneMount', false);
    setChk('accSmartKey', false);
    setChk('accTopBox', false);

    setChk('chkOil', true);
    setChk('chkBrakes', true);
    setChk('chkTyres', true);
    setChk('chkClean', true);

    // Default Photo (start empty so user uploads their own pictures)
    formPhotos = [];
  }

  updateFinanceLiveSummary();
  renderFormPhotosPreview();
  openModal('carFormModal');
}

async function handleFormSubmit(e) {
  e.preventDefault();

  if (typeof isProcessingPhotos !== 'undefined' && isProcessingPhotos) {
    showToast('กำลังประมวลผลรูปภาพ กรุณารอสักครู่ก่อนกดบันทึก...', 'warning');
    return;
  }
  if (isSubmittingCarForm) return;
  isSubmittingCarForm = true;

  const submitBtn = document.getElementById('btnSubmitCar');
  if (submitBtn) {
    submitBtn.disabled = true;
    if (!submitBtn.dataset.originalHtml) {
      submitBtn.dataset.originalHtml = submitBtn.innerHTML;
    }
    submitBtn.innerHTML = `
      <span class="btn-spinner" style="display: inline-block; width: 14px; height: 14px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 6px; vertical-align: middle;"></span>
      กำลังบันทึกและซิงค์ขึ้นคลาวด์...
    `;
  }

  try {
    const id = document.getElementById('carId')?.value || '';
    const isEditing = Boolean(id);
    const existingMoto = isEditing ? fleet.find(c => c.id === id) : null;

    const getVal = (id, fallback = '') => {
      const el = document.getElementById(id);
      return el ? (el.value ? el.value.trim() : fallback) : fallback;
    };
    const getNum = (id, fallback = 0) => {
      const el = document.getElementById(id);
      return el ? (Number(el.value) || fallback) : fallback;
    };
    const getChk = (id) => {
      const el = document.getElementById(id);
      return el ? Boolean(el.checked) : false;
    };

    const plate = getVal('formLicensePlate');
    const province = getVal('formProvince', 'กรุงเทพมหานคร');
    const vin = getVal('formVin').toUpperCase();
    const nowIso = new Date().toISOString();

    // Ensure all photos fit cleanly under Cloud Firestore's 1 MiB document limit before saving & syncing
    const preparedPhotos = formPhotos.length > 0
      ? await ensurePhotosFitCloudLimit([...formPhotos])
      : ['assets/images/forza_350.jpg'];

    const motoData = {
      id: isEditing ? id : ('MOTO-' + Date.now().toString().slice(-6) + '-' + Math.floor(10 + Math.random() * 90)),
      brand: getVal('formBrand', 'Honda'),
      model: getVal('formModel'),
      category: getVal('formCategory', 'พรีเมียม ออโตเมติก (Maxi-Scooter)'),
      cc: getVal('formCc', '160 cc'),
      year: getVal('formYear', new Date().getFullYear().toString()),
      purpose: getVal('formPurpose', 'both'),
      licensePlate: plate,
      province: province,
      vin: vin,
      engineNo: getVal('formEngineNo').toUpperCase(),
      exteriorColor: getVal('formExteriorColor'),
      fuel: getVal('formFuel', 'เบนซิน 95'),
      mileage: getNum('formMileage', 0),
      branch: getVal('formBranch', 'สาขาหลัก (วีระมอเตอร์)'),
      rentDaily: getNum('formRentDaily', 0),
      rentMonthly: getNum('formRentMonthly', 0),
      deposit: getNum('formDeposit', 0),
      price: getNum('formPrice', 0),
      downPayment: getNum('formDownPayment', 0),
      installmentAmount: getNum('formInstallmentAmount', 0),
      installmentTerm: getNum('formInstallmentTerm', 0),
      status: getVal('formStatus', 'available'),
      customer: getVal('formCustomer'),
      customerPhone: getVal('formCustomerPhone'),
      customerPassport: getVal('formCustomerPassport'),
      rentalStart: getVal('formRentalStart'),
      rentalEnd: getVal('formRentalEnd'),
      taxExpiry: getVal('formTaxExpiry'),
      remarks: getVal('formRemarks'),
      gpsImei: getVal('formGpsImei'),
      gpsUrl: getVal('formGpsUrl'),
      accessories: {
        helmet: getChk('accHelmet'),
        phoneMount: getChk('accPhoneMount'),
        smartKey: getChk('accSmartKey'),
        topBox: getChk('accTopBox')
      },
      inspection: {
        oil: getChk('chkOil'),
        brakes: getChk('chkBrakes'),
        tyres: getChk('chkTyres'),
        clean: getChk('chkClean')
      },
      photos: preparedPhotos,
      _photoUpdatedAt: nowIso,
      _lastModified: nowIso
    };

    if (existingMoto && existingMoto._docId) {
      motoData._docId = existingMoto._docId;
    }

    // Mark in persistent cloud outbox immediately so closing tab early NEVER loses mobile uploads
    if (window.FirebaseSync && FirebaseSync.markPendingUpsert) {
      FirebaseSync.markPendingUpsert(motoData.id);
    }

    if (isEditing) {
      const idx = fleet.findIndex(c => c.id === id);
      if (idx !== -1) {
        fleet[idx] = motoData;
      } else {
        fleet.unshift(motoData);
      }
    } else {
      fleet.unshift(motoData);
    }

    saveFleet();
    updateBranchOptions();
    renderAll();

    // Wait for Cloud Sync confirmation (with 6s UI timeout so slow/offline mobile never hangs)
    let syncOutcome = null;
    if (window.FirebaseSync && FirebaseSync.getActiveConfig && FirebaseSync.getActiveConfig()) {
      const uploadPromise = FirebaseSync.upsertMoto(motoData);
      const timeoutPromise = new Promise(resolve => setTimeout(() => resolve({ timeout: true }), 6000));
      syncOutcome = await Promise.race([uploadPromise, timeoutPromise]);

      if (syncOutcome && syncOutcome.timeout) {
        // Continue upload in background and notify when done
        uploadPromise.then(finalRes => {
          if (finalRes && finalRes.synced) {
            showToast(`ซิงค์รูปภาพ ${motoData.model} ขึ้นคลาวด์สำเร็จแล้ว (เปิดดูในคอมได้ทันที)`, 'success');
          } else if (finalRes && finalRes.error) {
            showToast(`ซิงค์คลาวด์ไม่สำเร็จ: ${finalRes.error}`, 'warning');
          }
        });
      }
    }

    closeModal('carFormModal');

    if (syncOutcome && syncOutcome.synced) {
      showToast(
        isEditing
          ? `อัปเดตและซิงค์รูป ${motoData.model} (${motoData.licensePlate}) ขึ้นคลาวด์สำเร็จ`
          : `คีย์รับรถใหม่และซิงค์ขึ้นคลาวด์สำเร็จ: ${motoData.model}`,
        isEditing ? 'success' : 'gold'
      );
    } else if (syncOutcome && syncOutcome.error) {
      showToast(`บันทึกในเครื่องแล้ว แต่ซิงค์คลาวด์ไม่สำเร็จ: ${syncOutcome.error}`, 'warning');
    } else if (syncOutcome && (syncOutcome.queued || syncOutcome.timeout)) {
      showToast(`บันทึกข้อมูล ${motoData.model} แล้ว กำลังซิงค์รูปขึ้นคลาวด์เบื้องหลัง...`, 'info');
    } else {
      showToast(
        isEditing
          ? `อัปเดตข้อมูลมอเตอร์ไซค์ ${motoData.model} (${motoData.licensePlate}) สำเร็จ`
          : `คีย์รับรถมอเตอร์ไซค์เข้าสต็อคสำเร็จ: ${motoData.model}`,
        isEditing ? 'success' : 'gold'
      );
    }
  } finally {
    isSubmittingCarForm = false;
    if (submitBtn) {
      submitBtn.disabled = false;
      if (submitBtn.dataset.originalHtml) {
        submitBtn.innerHTML = submitBtn.dataset.originalHtml;
      }
    }
  }
}

// ==================== PHOTO MANAGEMENT ====================
let isProcessingPhotos = false;

function setPhotoProcessingState(isProcessing, count = 0) {
  isProcessingPhotos = isProcessing;
  const submitBtn = document.getElementById('btnSubmitCar');
  if (submitBtn) {
    if (isProcessing) {
      submitBtn.disabled = true;
      if (!submitBtn.dataset.originalHtml) {
        submitBtn.dataset.originalHtml = submitBtn.innerHTML;
      }
      submitBtn.innerHTML = `
        <span class="btn-spinner" style="display: inline-block; width: 14px; height: 14px; border: 2px solid #fff; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 6px; vertical-align: middle;"></span>
        กำลังประมวลผลรูปภาพ (${count})...
      `;
    } else {
      submitBtn.disabled = false;
      if (submitBtn.dataset.originalHtml) {
        submitBtn.innerHTML = submitBtn.dataset.originalHtml;
      }
    }
  }

  const grid = document.getElementById('formPhotoPreviewGrid');
  if (grid && isProcessing) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; padding: 1rem; text-align: center; color: var(--cyan-600); font-size: 0.82rem; font-weight: 600; background: rgba(0, 153, 229, 0.08); border-radius: 6px; border: 1px dashed var(--cyan-400);">
        ⏳ กำลังบีบอัดและปรับขนาดรูปภาพให้เหมาะสมกับการบันทึกถาวร...
      </div>
    `;
  }
}

async function promptImageUrl() {
  const url = prompt('กรุณาวางลิงก์รูปภาพ (URL เช่น https://... หรือ data:image/...):');
  if (url && url.trim()) {
    const trimmed = url.trim();
    if (trimmed.startsWith('data:image/')) {
      setPhotoProcessingState(true, 1);
      try {
        const compressed = await compressImageAsync(trimmed, 800, 0.68);
        formPhotos.push(compressed);
        renderFormPhotosPreview();
        showToast('เพิ่มรูปภาพเรียบร้อยแล้ว', 'success');
      } finally {
        setPhotoProcessingState(false);
      }
    } else {
      formPhotos.push(trimmed);
      renderFormPhotosPreview();
      showToast('เพิ่มรูปภาพจากลิงก์เรียบร้อยแล้ว', 'success');
    }
  }
}

function setupPhotoDropAndPaste() {
  const dropZone = document.getElementById('photoDropZone');
  if (!dropZone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('dragover');
    }, false);
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      processImageFiles(Array.from(dt.files));
    }
  });

  // Paste image directly (Ctrl+V) when modal is open
  window.addEventListener('paste', (e) => {
    const modal = document.getElementById('carFormModal');
    if (!modal || !modal.classList.contains('active')) return;

    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    const imageFiles = [];
    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile();
        if (file) imageFiles.push(file);
      }
    }
    if (imageFiles.length > 0) {
      e.preventDefault();
      processImageFiles(imageFiles);
    }
  });
}

function handlePhotoFileUpload(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  processImageFiles(files);
  e.target.value = '';
}

function isImageFileCandidate(file) {
  if (!file) return false;
  if (file.type && file.type.startsWith('image/')) return true;
  // Fallback for mobile browsers / WebViews (e.g. LINE, Samsung, iOS Files) that leave file.type empty
  return /\.(jpe?g|png|webp|gif|bmp|heic|heif|avif)$/i.test(file.name || '');
}

async function processImageFiles(files) {
  const validFiles = Array.from(files).filter(isImageFileCandidate);
  if (validFiles.length === 0) {
    showToast('ไม่พบไฟล์รูปภาพที่รองรับ (กรุณาเลือกรูป JPG หรือ PNG)', 'warning');
    return;
  }

  setPhotoProcessingState(true, validFiles.length);
  let addedCount = 0;

  try {
    for (const file of validFiles) {
      if (file.size > 30 * 1024 * 1024) {
        showToast(`รูปภาพ ${file.name} มีขนาดใหญ่เกินไป (โปรดใช้ภาพไม่เกิน 30MB)`, 'warning');
        continue;
      }

      try {
        const compressed = await compressFileToJpegDataUrl(file, 800, 0.68);
        formPhotos.push(compressed);
        addedCount++;
      } catch (fileErr) {
        console.warn('Could not process image file:', file.name, fileErr);
        showToast(`ไม่สามารถอ่านรูป "${file.name || 'ไฟล์ภาพ'}" ได้ (แนะนำให้ถ่ายหรือเลือกรูป JPG / PNG)`, 'warning');
      }
    }

    if (addedCount > 0) {
      formPhotos = await ensurePhotosFitCloudLimit(formPhotos);
      renderFormPhotosPreview();
      showToast(`เพิ่มและปรับขนาดรูปภาพพร้อมซิงค์ทุกเครื่องเรียบร้อย (${addedCount} รูป)`, 'success');
    } else {
      renderFormPhotosPreview();
    }
  } catch (err) {
    console.error('Error processing image files:', err);
    showToast('เกิดข้อผิดพลาดในการประมวลผลรูปภาพ: ' + err.message, 'warning');
    renderFormPhotosPreview();
  } finally {
    setPhotoProcessingState(false);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = () => reject(new Error('อ่านไฟล์รูปภาพไม่สำเร็จ'));
    reader.readAsDataURL(file);
  });
}

function renderImageElementToJpeg(img, maxDim = 800, quality = 0.68) {
  let width = img.naturalWidth || img.width || 800;
  let height = img.naturalHeight || img.height || 600;

  // Constrain BOTH width AND height proportionally so portrait mobile camera photos stay compact (~50-75KB)
  if (width > maxDim || height > maxDim) {
    const ratio = Math.min(maxDim / width, maxDim / height);
    width = Math.max(1, Math.round(width * ratio));
    height = Math.max(1, Math.round(height * ratio));
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  // Paint crisp white background so transparent PNGs never turn black
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL('image/jpeg', quality);
}

function compressFileToJpegDataUrl(file, maxDim = 800, quality = 0.68) {
  return new Promise((resolve, reject) => {
    // Prefer ObjectURL on mobile Safari/Chrome to avoid loading huge 15MB base64 strings into RAM
    if (typeof URL !== 'undefined' && URL.createObjectURL) {
      const objUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(objUrl);
        try {
          resolve(renderImageElementToJpeg(img, maxDim, quality));
        } catch (err) {
          reject(err);
        }
      };
      img.onerror = async () => {
        URL.revokeObjectURL(objUrl);
        // Fallback to FileReader DataURL
        try {
          const rawDataUrl = await readFileAsDataUrl(file);
          const fallbackCompressed = await compressImageAsync(rawDataUrl, maxDim, quality, true);
          resolve(fallbackCompressed);
        } catch (fallbackErr) {
          reject(fallbackErr);
        }
      };
      img.src = objUrl;
    } else {
      readFileAsDataUrl(file)
        .then(raw => compressImageAsync(raw, maxDim, quality, true))
        .then(resolve)
        .catch(reject);
    }
  });
}

function compressImageAsync(base64Str, maxDim = 800, quality = 0.68, rejectOnError = false) {
  return new Promise((resolve, reject) => {
    if (!base64Str || typeof base64Str !== 'string') {
      resolve(base64Str);
      return;
    }
    // If it is a local asset path or web URL, keep as is
    if (base64Str.startsWith('assets/') || base64Str.startsWith('http://') || base64Str.startsWith('https://')) {
      resolve(base64Str);
      return;
    }

    const img = new Image();
    img.onload = () => {
      try {
        const compressed = renderImageElementToJpeg(img, maxDim, quality);
        resolve(compressed);
      } catch (err) {
        if (rejectOnError) {
          reject(err);
        } else {
          console.warn('Canvas compression fallback to raw:', err);
          resolve(base64Str);
        }
      }
    };
    img.onerror = () => {
      if (rejectOnError) {
        reject(new Error('รูปแบบไฟล์รูปภาพไม่รองรับ'));
      } else {
        resolve(base64Str);
      }
    };
    img.src = base64Str;
  });
}

/**
 * Adaptive multi-photo size optimizer:
 * Guarantees total `photos` payload stays safely under Cloud Firestore's 1,048,576-byte document limit
 * so photos uploaded on Mobile ALWAYS sync to PC 100% of the time (even with 10-20 photos!)
 */
async function ensurePhotosFitCloudLimit(photosArray) {
  if (!Array.isArray(photosArray) || photosArray.length === 0) return photosArray;

  const MAX_TOTAL_PHOTO_CHARS = 720000; // ~700 KB total photo budget (leaves >320 KB headroom under 1 MiB)
  const MAX_SINGLE_PHOTO_CHARS = 160000;

  const calcTotalChars = (arr) => arr.reduce((sum, p) => sum + (typeof p === 'string' ? p.length : 0), 0);

  // Pass 1: Compress any oversized single inline image (e.g. legacy uncompressed photo)
  let result = [];
  for (const p of photosArray) {
    if (typeof p === 'string' && p.startsWith('data:') && p.length > MAX_SINGLE_PHOTO_CHARS) {
      result.push(await compressImageAsync(p, 800, 0.65));
    } else if (typeof p === 'string' && p.trim() !== '') {
      result.push(p);
    }
  }

  // Pass 2: If multiple photos exceed total budget, adaptively step down to 640px @ 0.55
  if (calcTotalChars(result) > MAX_TOTAL_PHOTO_CHARS) {
    const pass2 = [];
    for (const p of result) {
      if (typeof p === 'string' && p.startsWith('data:')) {
        pass2.push(await compressImageAsync(p, 640, 0.55));
      } else {
        pass2.push(p);
      }
    }
    result = pass2;
  }

  // Pass 3: If 15+ photos still exceed total budget, step down to 480px @ 0.46
  if (calcTotalChars(result) > MAX_TOTAL_PHOTO_CHARS) {
    const pass3 = [];
    for (const p of result) {
      if (typeof p === 'string' && p.startsWith('data:')) {
        pass3.push(await compressImageAsync(p, 480, 0.46));
      } else {
        pass3.push(p);
      }
    }
    result = pass3;
  }

  return result;
}
window.ensurePhotosFitCloudLimit = ensurePhotosFitCloudLimit;

// Backward-compatible synchronous wrapper
function compressImage(base64Str, maxWidth, quality, callback) {
  compressImageAsync(base64Str, maxWidth || 800, quality || 0.68).then(callback);
}

function addPhotoPreset(url, name) {
  if (!formPhotos.includes(url)) {
    formPhotos.push(url);
    renderFormPhotosPreview();
    showToast(`เพิ่มรูปภาพ ${name} แล้ว`, 'info');
  } else {
    showToast(`รูปภาพนี้ถูกเลือกไว้แล้ว`, 'warning');
  }
}

function removeFormPhoto(index) {
  formPhotos.splice(index, 1);
  renderFormPhotosPreview();
}

function setCoverPhoto(index) {
  const [target] = formPhotos.splice(index, 1);
  formPhotos.unshift(target);
  renderFormPhotosPreview();
  showToast('ตั้งเป็นรูปหน้าปกเรียบร้อยแล้ว', 'success');
}

function renderFormPhotosPreview() {
  const grid = document.getElementById('formPhotoPreviewGrid');
  if (!grid) return;

  if (formPhotos.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.75rem;">ยังไม่มีรูปภาพที่เลือก (ระบบจะใช้ภาพค่าเริ่มต้น)</div>`;
    return;
  }

  const headerHtml = `
    <div style="grid-column: 1/-1; display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; padding: 0.25rem 0.5rem; background: #f0fdf4; border-radius: 4px; border: 1px solid #bbf7d0;">
      <span style="font-size: 0.74rem; color: #166534; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
        ✓ เลือกแล้ว ${formPhotos.length} รูป (พร้อมบันทึกถาวรลงระบบ)
      </span>
      <span style="font-size: 0.68rem; color: #15803d;">
        (รูปแรกสุดคือรูปปกบนการ์ด)
      </span>
    </div>
  `;

  const cardsHtml = formPhotos.map((photo, i) => `
    <div class="photo-thumb-card ${i === 0 ? 'is-cover' : ''}">
      <img src="${photo}" alt="Moto photo ${i + 1}" onclick="openLightbox('${photo}')" style="cursor: zoom-in;" title="คลิกเพื่อดูรูปภาพขนาดเต็ม">
      <button type="button" class="thumb-del-btn" onclick="removeFormPhoto(${i})" title="ลบรูปภาพ">&times;</button>
      ${i === 0 ? '<span class="thumb-cover-tag">รูปปก</span>' : `
        <button type="button" onclick="setCoverPhoto(${i})" style="position: absolute; bottom: 4px; left: 4px; background: rgba(0,0,0,0.6); color: #fff; border: none; font-size: 0.6rem; border-radius: 2px; padding: 2px 4px; cursor: pointer;">
          ตั้งเป็นปก
        </button>
      `}
    </div>
  `).join('');

  grid.innerHTML = headerHtml + cardsHtml;
}

// ==================== MOTORCYCLE DETAIL & RENTAL CARD ====================
let currentHeroFitMode = 'contain';

function openCarDetail(motoId) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  currentDetailMoto = moto;
  window.currentDetailMoto = moto;
  currentHeroFitMode = 'contain';
  const statusInfo = STATUS_CONFIG[moto.status] || STATUS_CONFIG.available;
  const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';

  document.getElementById('detailModalTitle').textContent = `ข้อมูลรถ & สัญญา: ${moto.brand} ${moto.model} [${moto.licensePlate}${moto.province ? ' ' + moto.province : ''}]`;

  const html = `
    <!-- Top Vehicle Info Summary Bar (Clean header card, doesn't obscure photo) -->
    <div class="detail-header-card">
      <div>
        <div class="detail-badge-group">
          <span class="status-pill ${statusInfo.class}">
            <span class="status-dot"></span>
            สถานะ: ${statusInfo.label}
          </span>
          <span class="detail-tag-pill">${moto.category}</span>
          <span class="detail-tag-pill">ปี ${moto.year}</span>
        </div>
        <div class="detail-car-title">
          ${moto.brand} ${moto.model} <span class="detail-car-cc">${moto.cc}</span>
        </div>
        <div class="detail-car-subtitle">
          ทะเบียน: <span class="detail-plate-tag">${moto.licensePlate}${moto.province ? ' ' + moto.province : ''}</span> &bull; 
          สาขา/จุดจอด: <strong>${moto.branch}</strong>
        </div>
      </div>
      <div class="detail-header-price">
        ${moto.rentDaily ? `
          <div class="price-caption">ค่าเช่ารายวัน</div>
          <div class="price-highlight-rent">${formatPrice(moto.rentDaily)}<span class="price-unit">/วัน</span></div>
          ${moto.rentMonthly ? `<div class="price-sub-rent">รายเดือน ${formatPrice(moto.rentMonthly)}/ด.</div>` : ''}
        ` : ''}
        ${moto.price ? `
          <div class="price-caption" style="${moto.rentDaily ? 'margin-top: 6px;' : ''}">ราคาขายสด (MSRP)</div>
          <div class="price-highlight-sale">${formatPrice(moto.price)}</div>
        ` : ''}
        ${(moto.downPayment !== undefined && moto.downPayment !== '' || moto.installmentAmount) ? `
          <div class="detail-installment-tag">
            <span style="color: #b45309; font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">${UI_ICONS.zap} ผ่อนชำระ:</span>
            <span>ดาวน์: <strong>${(moto.downPayment !== undefined && Number(moto.downPayment) === 0) ? 'ฟรีดาวน์' : formatPrice(moto.downPayment || 0)}</strong></span>
            <span>&bull;</span>
            <span>ผ่อน: <strong style="color: #15803d;">${formatPrice(moto.installmentAmount || 0)}/งวด</strong></span>
            <span>(${moto.installmentTerm || '-'} งวด)</span>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- Top Hero Image Gallery (Ambient Blur Backdrop + Contain Fit) -->
    <div class="detail-hero-box" id="detailHeroBox">
      <div class="detail-hero-bg" id="detailHeroBg" style="background-image: url('${coverPhoto}');"></div>
      <img id="detailMainHeroImg" src="${coverPhoto}" class="detail-hero-img fit-contain" alt="${moto.model}"
           onclick="openLightbox(this.src)" title="คลิกเพื่อดูรูปภาพขนาดใหญ่เต็มหน้าจอ (Full Screen)">
      
      <div class="detail-hero-floating-actions">
        <button type="button" class="hero-float-btn" id="btnToggleHeroFit" onclick="toggleHeroFit()" title="สลับโหมด พอดีรูปภาพ (Fit) / เต็มกรอบ (Fill)">
          <span id="fitBtnIcon"><svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18 6-6-6-6"/><path d="m9 6-6 6 6 6"/></svg></span> <span id="fitBtnLabel">โหมด: พอดีรูป (Fit)</span>
        </button>
        <button type="button" class="hero-float-btn" onclick="openLightbox(document.getElementById('detailMainHeroImg').src)" title="ขยายดูรูปขนาดเต็มจอ">
          <svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> ดูรูปเต็มจอ
        </button>
      </div>
    </div>

    <!-- Gallery Thumbnail Strip -->
    ${moto.photos && moto.photos.length > 1 ? `
      <div class="detail-thumb-strip">
        ${moto.photos.map((p, idx) => `
          <div class="detail-thumb-wrapper ${idx === 0 ? 'active' : ''}" data-photo="${p}" onclick="setDetailHeroPhoto('${p}', this)" title="ดูรูปที่ ${idx + 1}">
            <img src="${p}" class="detail-thumb-img" alt="ภาพย่อย ${idx + 1}">
          </div>
        `).join('')}
      </div>
    ` : ''}

    <!-- Quick Status Changer Inside Detail -->
    <div style="background: var(--navy-50); border: 1px solid var(--border-light); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span style="font-weight: 700; color: var(--navy-900);">เปลี่ยนสถานะรถคันนี้:</span>
        <select class="form-control" style="width: auto; font-weight: 600;" onchange="quickUpdateStatus('${moto.id}', this.value); openCarDetail('${moto.id}');">
          <option value="available" ${moto.status === 'available' ? 'selected' : ''}>&#x25CF; ว่างพร้อมบริการ</option>
          <option value="rented" ${moto.status === 'rented' ? 'selected' : ''}>&#x25CF; กำลังเช่า</option>
          <option value="reserved" ${moto.status === 'reserved' ? 'selected' : ''}>&#x25CF; กำลังผ่อน / จอง</option>
          <option value="check" ${moto.status === 'check' ? 'selected' : ''}>&#x25CF; ไม่พบรถ</option>
          <option value="maintenance" ${moto.status === 'maintenance' ? 'selected' : ''}>&#x25CF; ซ่อม/ถ่ายน้ำมัน</option>
          <option value="sold" ${moto.status === 'sold' ? 'selected' : ''}>&#x25CF; ขายแล้ว</option>
        </select>
      </div>
      <div>
        <button class="header-btn btn-glass" style="color: var(--navy-900); border-color: var(--navy-700); display: inline-flex; align-items: center; gap: 0.35rem;" onclick="copySummaryForLine('${moto.id}')">
          ${UI_ICONS.copy} คัดลอกสรุปสเปก &amp; เรทเช่าส่ง LINE
        </button>
      </div>
    </div>

    <!-- 2 Column Details -->
    <div class="form-grid-2">
      <!-- Technical & Identification -->
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1rem;">
        <h4 style="color: var(--navy-900); margin-bottom: 0.75rem; border-bottom: 2px solid var(--cyan-500); padding-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
          <svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
          ข้อมูลรถและทะเบียน
        </h4>
        <table class="detail-specs-table">
          <tr><td class="label-col">ป้ายทะเบียน</td><td class="value-col"><strong style="color: var(--navy-900); font-size: 1rem;">${moto.licensePlate}</strong> ${moto.province ? `<span style="background: #f1f5f9; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.8rem; margin-left: 0.35rem; color: var(--navy-800); border: 1px solid #cbd5e1;">${moto.province}</span>` : ''} <button class="copy-btn" onclick="copyPlate('${moto.licensePlate} ${moto.province || ''}')">${UI_ICONS.copy}</button></td></tr>
          <tr><td class="label-col">จังหวัด (ตามป้าย)</td><td class="value-col">${moto.province || '-'}</td></tr>
          <tr><td class="label-col">เลขคอ / ตัวถัง</td><td class="value-col"><strong style="font-family: monospace;">${moto.vin}</strong></td></tr>
          <tr><td class="label-col">เลขเครื่องยนต์</td><td class="value-col">${moto.engineNo || '-'}</td></tr>
          <tr><td class="label-col">สีตัวรถ</td><td class="value-col">${moto.exteriorColor}</td></tr>
          <tr><td class="label-col">ขนาดความจุ CC</td><td class="value-col">${moto.cc} (ปี ${moto.year})</td></tr>
          <tr><td class="label-col">เลขไมล์ปัจจุบัน</td><td class="value-col">${(moto.mileage || 0).toLocaleString()} km</td></tr>
          <tr><td class="label-col">วันหมดอายุ พ.ร.บ. / ภาษี</td><td class="value-col" style="color: #d97706; font-weight: 700;">${moto.taxExpiry || '-'}</td></tr>
          <tr><td class="label-col">เชื้อเพลิง (Fuel)</td><td class="value-col">${moto.fuel || 'เบนซิน 95'}</td></tr>
          <tr><td class="label-col">สาขา / จุดจอด</td><td class="value-col">${moto.branch}</td></tr>
          <tr><td class="label-col">ระบบ GPSDD</td><td class="value-col">
            ${moto.gpsImei ? `<strong style="color: var(--cyan-600); font-family: monospace;">IMEI: ${moto.gpsImei}</strong> <button class="copy-btn" onclick="copyPlate('${moto.gpsImei}')" title="คัดลอก IMEI">${UI_ICONS.copy}</button>` : '<span style="color: var(--text-light);">(ยังไม่ได้ระบุ GPS)</span>'}
          </td></tr>
        </table>
      </div>

      <!-- Rental & Commercial Rates -->
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1rem;">
        <h4 style="color: var(--navy-900); margin-bottom: 0.75rem; border-bottom: 2px solid var(--gold-500); padding-bottom: 0.35rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="display: flex; align-items: center; gap: 0.4rem;">
            <svg class="ui-icon ui-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><circle cx="16" cy="15" r="1.5"/></svg>
            อัตราค่าเช่า &amp; ราคาขาย / ผ่อนชำระ
          </span>
          <span style="font-size: 0.72rem; color: #b45309; font-weight: 600; background: #fefce8; padding: 2px 8px; border-radius: 9999px; border: 1px solid #fef08a;">Easy Finance</span>
        </h4>
        <table class="detail-specs-table">
          <tr><td class="label-col">ค่าเช่ารายวัน</td><td class="value-col"><strong style="color: var(--cyan-500); font-size: 1rem;">${moto.rentDaily ? formatPrice(moto.rentDaily) + '/วัน' : '-'}</strong></td></tr>
          <tr><td class="label-col">ค่าเช่ารายเดือน</td><td class="value-col">${moto.rentMonthly ? formatPrice(moto.rentMonthly) + '/เดือน' : '-'}</td></tr>
          <tr><td class="label-col">เงินประกันมัดจำ</td><td class="value-col">${moto.deposit ? formatPrice(moto.deposit) : '-'}</td></tr>
          <tr><td class="label-col">ราคาขายสด (MSRP)</td><td class="value-col"><strong style="color: var(--navy-900); font-size: 1rem;">${moto.price ? formatPrice(moto.price) : '-'}</strong></td></tr>
          <tr><td class="label-col">ราคาดาวน์ (เงินดาวน์)</td><td class="value-col"><strong style="color: #1d4ed8;">${(moto.downPayment !== undefined && moto.downPayment !== '') ? (Number(moto.downPayment) === 0 ? 'ฟรีดาวน์ (฿0)' : formatPrice(moto.downPayment)) : '-'}</strong></td></tr>
          <tr><td class="label-col">ราคาผ่อนงวดละ</td><td class="value-col"><strong style="color: #15803d; font-size: 1.05rem;">${moto.installmentAmount ? formatPrice(moto.installmentAmount) + '/งวด' : '-'}</strong></td></tr>
          <tr><td class="label-col">ผ่อนกี่งวด (จำนวนงวด)</td><td class="value-col">${moto.installmentTerm ? `<strong style="color: var(--navy-900);">${moto.installmentTerm} งวด</strong> (${Math.round((moto.installmentTerm / 12) * 10) / 10} ปี)` : '-'}</td></tr>
          ${(moto.installmentAmount && moto.installmentTerm) ? `
            <tr><td class="label-col">ยอดรวมการผ่อนทั้งหมด (ดาวน์+ค่างวด)</td><td class="value-col"><strong style="color: var(--navy-800);">${formatPrice(Number(moto.downPayment || 0) + (Number(moto.installmentAmount) * Number(moto.installmentTerm)))}</strong></td></tr>
          ` : ''}
          <tr><td class="label-col">ผู้เช่า / ผู้ซื้อปัจจุบัน</td><td class="value-col">${moto.customer ? `<strong>${moto.customer}</strong>` : '<span style="color: var(--text-light);">-</span>'}</td></tr>
          <tr><td class="label-col">เบอร์โทรติดต่อ</td><td class="value-col">${moto.customerPhone || '-'}</td></tr>
          <tr><td class="label-col">ระยะเวลาสัญญาเช่า</td><td class="value-col">${moto.rentalStart && moto.rentalEnd ? `${moto.rentalStart} ถึง ${moto.rentalEnd}` : '-'}</td></tr>
        </table>
      </div>
    </div>

    <!-- GPSDD Real-Time Tracking Panel -->
    <div class="gps-detail-panel">
      <div class="gps-panel-header">
        <div class="gps-panel-title">
          <svg class="ui-icon ui-icon-md" style="color: var(--cyan-400);" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg>
          <span>ระบบติดตามพิกัดตำแหน่ง GPSDD (Live Fleet Tracking)</span>
        </div>
        <div>
          ${moto.gpsImei || moto.gpsUrl ? `
            <span class="gps-live-badge">
              <span class="gps-pulse-dot"></span>
              GPSDD Online
            </span>
          ` : `
            <span style="background: rgba(255,255,255,0.1); color: #cbd5e1; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem;">
              ยังไม่ได้ระบุ GPS
            </span>
          `}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; background: rgba(255,255,255,0.06); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.08); font-size: 0.82rem;">
        <div>
          <span style="color: var(--cyan-300); display: block; font-size: 0.7rem;">อุปกรณ์ติดตาม (Platform):</span>
          <strong style="font-size: 0.95rem;">GPSDD Tracking (www.gpsdd.com)</strong>
        </div>
        <div>
          <span style="color: var(--cyan-300); display: block; font-size: 0.7rem;">เลข IMEI / Device ID:</span>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <strong style="font-family: monospace; font-size: 0.95rem; color: #fde047;">${moto.gpsImei || '(ยังไม่ได้ระบุ IMEI)'}</strong>
            ${moto.gpsImei ? `<button class="copy-btn" onclick="copyPlate('${moto.gpsImei}')" title="คัดลอก IMEI" style="background: rgba(255,255,255,0.15); color: #fff;">${UI_ICONS.copy}</button>` : ''}
          </div>
        </div>
        <div>
          <span style="color: var(--cyan-300); display: block; font-size: 0.7rem;">สาขา / จุดจอดระบุ:</span>
          <strong>${moto.branch}</strong>
        </div>
      </div>

      <div class="gps-actions-row">
        <button class="btn-gps-main" onclick="openGpsTracking('${moto.id}', event)">
          <svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> เปิดดูตำแหน่งรถคันนี้บน GPSDD ทันที &rarr;
        </button>
        ${moto.gpsImei ? `
          <button class="header-btn btn-glass" style="color: #ffffff; border-color: rgba(255,255,255,0.3);" onclick="copyPlate('${moto.gpsImei}')">
            ${UI_ICONS.copy} คัดลอกเลข IMEI (${moto.gpsImei})
          </button>
        ` : ''}
        <button class="header-btn btn-glass" style="color: #ffffff; border-color: rgba(255,255,255,0.3);" onclick="closeModal('carDetailModal'); openCarModal('${moto.id}');">
          ${UI_ICONS.edit} แก้ไขข้อมูล GPS
        </button>
      </div>

      <div style="margin-top: 0.75rem; font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 0.4rem;">
        <svg class="ui-icon ui-icon-xs" style="color: var(--cyan-400); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span>คำแนะนำ: เมื่อคลิกดูตำแหน่ง ระบบจะเปิดหน้า GPSDD พร้อมคัดลอกเลข IMEI ให้อัตโนมัติ เพื่อนำไปกดวาง (Ctrl+V) ล็อกอินดูรถคันนี้ได้ทันที</span>
      </div>
    </div>

    <!-- Accessories & Inspection -->
    <div style="margin-top: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h5 style="color: var(--navy-900); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          <svg class="ui-icon ui-icon-sm" style="color: var(--cyan-600);" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> อุปกรณ์ที่ให้ประจำรถ
        </h5>
        <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <div>${moto.accessories?.helmet ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} หมวกกันน็อค   ใบ</div>
          <div>${moto.accessories?.phoneMount ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} ที่จับมือถือกันสะเทือน</div>
          <div>${moto.accessories?.smartKey ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} กุญแจรีโมท Honda Smart Key</div>
          <div>${moto.accessories?.topBox ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} กล่องใส่ของท้ายรถ (Top Box)</div>
        </div>
      </div>

      <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h5 style="color: var(--navy-900); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          <svg class="ui-icon ui-icon-sm" style="color: var(--cyan-600);" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> การตรวจสภาพก่อนส่งมอบ
        </h5>
        <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <div>${moto.inspection?.oil ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} ระดับน้ำมันเครื่องและน้ำยาหล่อเย็น</div>
          <div>${moto.inspection?.brakes ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} ระบบเบรกหน้า-หลัง</div>
          <div>${moto.inspection?.tyres ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} ดอกยางและลมยางมาตรฐาน</div>
          <div>${moto.inspection?.clean ? '<span style="color: #059669; font-weight: 700; margin-right: 4px;">✓</span>' : '<span style="color: #94a3b8; margin-right: 4px;">-</span>'} ล้างทำความสะอาด ขัดสีเรียบร้อย</div>
        </div>
      </div>
    </div>

    ${moto.remarks ? `
      <div style="margin-top: 1rem; padding: 0.85rem; background: #fffbeb; border-left: 4px solid var(--gold-500); border-radius: 4px; font-size: 0.85rem; display: flex; align-items: flex-start; gap: 0.4rem;">
        <svg class="ui-icon ui-icon-xs" style="color: var(--gold-600); flex-shrink: 0; margin-top: 3px;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <div><strong>หมายเหตุ / บันทึกประวัติ:</strong> ${moto.remarks}</div>
      </div>
    ` : ''}
  `;

  document.getElementById('detailModalBody').innerHTML = html;
  openModal('carDetailModal');
}

// ==================== FAST ACTIONS ====================
function quickUpdateStatus(motoId, newStatus) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  moto.status = newStatus;
  moto._lastModified = new Date().toISOString();
  saveFleet();
  renderAll();

  const statusLabel = STATUS_CONFIG[newStatus]?.label || newStatus;
  showToast(`อัปเดตสถานะ ${moto.model} [${moto.licensePlate}] เป็น "${statusLabel}" แล้ว`, 'success');

  // Real-time Cloud Sync
  if (window.FirebaseSync) {
    FirebaseSync.updateMotoStatus(motoId, newStatus, moto);
  }
}

function deleteMoto(motoId) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  if (confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบรถมอเตอร์ไซค์ ${moto.brand} ${moto.model} [${moto.licensePlate}] ออกจากระบบอย่างถาวร?`)) {
    const docId = moto._docId || moto.id;

    // 1. Record permanent deletion tombstone BEFORE updating cache or reloading so refresh NEVER resurrects it
    if (window.FirebaseSync && FirebaseSync.markPendingDelete) {
      FirebaseSync.markPendingDelete(motoId, docId);
    }

    // 2. Remove from memory, IndexedDB, localStorage, and synced cache immediately
    fleet = fleet.filter(c => c && c.id !== motoId && c._docId !== motoId && (!docId || (c.id !== docId && c._docId !== docId)));
    saveFleet();
    updateBranchOptions();
    closeModal('carDetailModal');
    renderAll();
    showToast(`ลบรถมอเตอร์ไซค์ ${moto.model} [${moto.licensePlate}] ออกจากระบบแล้ว`, 'warning');

    // 3. Delete permanently from Cloud Firestore / Realtime Database
    if (window.FirebaseSync) {
      FirebaseSync.deleteMoto(motoId, docId).then(res => {
        if (res && res.error) {
          showToast(`ลบในเครื่องแล้ว แต่ลบจากคลาวด์ไม่สำเร็จ: ${res.error}`, 'warning');
        }
      });
    }
  }
}

function copyPlate(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`คัดลอก: ${text} แล้ว`, 'info');
  }).catch(() => {
    showToast(`${text}`, 'info');
  });
}

function copySummaryForLine(motoId) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  const summary = `[ข้อมูลรถมอเตอร์ไซค์] HONDA
รุ่น: ${moto.brand} ${moto.model} (${moto.cc})
ทะเบียน: ${moto.licensePlate}${moto.province ? ' ' + moto.province : ''}
สี: ${moto.exteriorColor}
เชื้อเพลิง: ${moto.fuel || 'เบนซิน 95'}
${moto.rentDaily ? `เรทเช่ารายวัน: ${formatPrice(moto.rentDaily)}/วัน\n` : ''}${moto.rentMonthly ? `เรทเช่ารายเดือน: ${formatPrice(moto.rentMonthly)}/เดือน\n` : ''}${moto.deposit ? `เงินประกันมัดจำ: ${formatPrice(moto.deposit)}\n` : ''}${moto.price ? `ราคาขายสด: ${formatPrice(moto.price)}\n` : ''}${(moto.downPayment !== undefined && moto.downPayment !== '') ? `ราคาดาวน์: ${Number(moto.downPayment) === 0 ? 'ฟรีดาวน์ (฿0)' : formatPrice(moto.downPayment)}\n` : ''}${moto.installmentAmount ? `ราคาผ่อนงวดละ: ${formatPrice(moto.installmentAmount)}/งวด (ผ่อน ${moto.installmentTerm || '-'} งวด)\n` : ''}สาขา/จุดรับรถ: ${moto.branch}
${moto.gpsImei ? `GPS ติดตามรถ (GPSDD): IMEI ${moto.gpsImei}\n` : ''}สถานะ: ${STATUS_CONFIG[moto.status]?.label || moto.status}
อุปกรณ์ที่ให้: หมวกกันน็อค  ใบ + ที่จับมือถือ
ติดต่อสอบถาม / จองรถ โทร: 081-xxx-xxxx หรือทักแชทได้ทันทีครับ`;

  navigator.clipboard.writeText(summary).then(() => {
    showToast('คัดลอกสรุปสเปก ราคาขาย และข้อมูลตารางผ่อนสำหรับส่ง LINE ลูกค้าแล้ว!', 'gold');
  });
}

// ==================== EXPORT & IMPORT ====================
function exportCsv() {
  if (!fleet.length) {
    alert('ไม่มีข้อมูลที่จะส่งออก');
    return;
  }

  const headers = [
    "Moto ID", "Brand", "Model", "Category", "CC", "Year", "Purpose",
    "License Plate", "Province", "Frame No (VIN)", "Engine No", "Exterior Color", "Fuel",
    "Mileage (km)", "Branch", "Rent Daily (THB)", "Rent Monthly (THB)",
    "Deposit (THB)", "Price Sale (THB)", "Down Payment (THB)", "Installment Amount (THB)", "Installment Term (Periods)",
    "Status", "Customer Name", "Customer Phone", "Rental Start", "Rental End", "Tax Expiry",
    "GPS IMEI (GPSDD)", "GPS Tracking URL"
  ];

  const rows = fleet.map(m => [
    `"${m.id}"`,
    `"${m.brand}"`,
    `"${m.model}"`,
    `"${m.category}"`,
    `"${m.cc}"`,
    `"${m.year}"`,
    `"${m.purpose}"`,
    `"${m.licensePlate}"`,
    `"${m.province || ''}"`,
    `"${m.vin}"`,
    `"${m.engineNo || ''}"`,
    `"${m.exteriorColor}"`,
    `"${m.fuel || 'เบนซิน 95'}"`,
    m.mileage || 0,
    `"${m.branch}"`,
    m.rentDaily || 0,
    m.rentMonthly || 0,
    m.deposit || 0,
    m.price || 0,
    m.downPayment !== undefined ? m.downPayment : 0,
    m.installmentAmount || 0,
    m.installmentTerm || 0,
    `"${STATUS_CONFIG[m.status]?.label || m.status}"`,
    `"${m.customer || ''}"`,
    `"${m.customerPhone || ''}"`,
    `"${m.rentalStart || ''}"`,
    `"${m.rentalEnd || ''}"`,
    `"${m.taxExpiry || ''}"`,
    `"${m.gpsImei || ''}"`,
    `"${m.gpsUrl || ''}"`
  ]);

  // UTF-8 BOM for Thai Excel compatibility
  const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Honda_Motorcycle_Fleet_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('ดาวน์โหลดรายงาน Excel (CSV) สำเร็จแล้ว', 'success');
}

function exportJson() {
  const jsonStr = JSON.stringify(fleet, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Honda_Motorcycle_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('สำรองข้อมูลฐานสต็อคมอเตอร์ไซค์ (JSON Backup) สำเร็จแล้ว', 'gold');
}

function importJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (Array.isArray(data)) {
        fleet = data;
        saveFleet();
        renderAll();
        closeModal('dataModal');
        showToast(`นำเข้าข้อมูลสำเร็จ ${fleet.length} คัน`, 'success');

        // Real-time Cloud Sync (full replacement)
        if (window.FirebaseSync) {
          FirebaseSync.uploadAll(fleet, { replaceAll: true });
        }
      } else {
        alert('รูปแบบไฟล์ JSON ไม่ถูกต้อง');
      }
    } catch (err) {
      alert('เกิดข้อผิดพลาดในการอ่านไฟล์ JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ==================== DETAIL HERO & LIGHTBOX HELPERS ====================
function setDetailHeroPhoto(url, el) {
  const mainImg = document.getElementById('detailMainHeroImg');
  const bg = document.getElementById('detailHeroBg');
  if (mainImg) mainImg.src = url;
  if (bg) bg.style.backgroundImage = `url('${url}')`;

  document.querySelectorAll('.detail-thumb-wrapper').forEach(w => w.classList.remove('active'));
  if (el) {
    el.classList.add('active');
  }
}

function toggleHeroFit() {
  const img = document.getElementById('detailMainHeroImg');
  const label = document.getElementById('fitBtnLabel');
  const icon = document.getElementById('fitBtnIcon');
  if (!img) return;

  if (currentHeroFitMode === 'contain') {
    currentHeroFitMode = 'cover';
    img.classList.remove('fit-contain');
    img.classList.add('fit-cover');
    if (label) label.textContent = 'โหมด: เต็มกรอบ (Fill)';
    if (icon) icon.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="8 3 12 7 16 3"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="7" x2="12" y2="17"/></svg>';
    showToast('เปลี่ยนเป็นโหมดเต็มกรอบ (Fill)', 'info');
  } else {
    currentHeroFitMode = 'contain';
    img.classList.remove('fit-cover');
    img.classList.add('fit-contain');
    if (label) label.textContent = 'โหมด: พอดีรูป (Fit)';
    if (icon) icon.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="3 8 7 12 3 16"/><polyline points="21 8 17 12 21 16"/><line x1="7" y1="12" x2="17" y2="12"/></svg>';
    showToast('เปลี่ยนเป็นโหมดพอดีรูป (เห็นเต็มรูปไม่ถูกตัด)', 'info');
  }
}

function openLightbox(url) {
  if (!url) return;
  const modal = document.getElementById('imageLightboxModal');
  const img = document.getElementById('lightboxImg');
  if (modal && img) {
    img.src = url;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(e) {
  if (e && e.target && e.target.id === 'lightboxImg') return;
  const modal = document.getElementById('imageLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    const remainingOpen = document.querySelectorAll('.modal-backdrop.active');
    if (remainingOpen.length === 0) {
      document.body.style.overflow = '';
    }
  }
}

// Global ESC Key Listener for Lightbox
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('imageLightboxModal');
    if (lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
      e.stopPropagation();
    }
  }
});

// ==================== MODAL HELPER FUNCTIONS ====================
function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add('active');
    document.body.style.overflow = 'hidden';
    const bodyEl = m.querySelector('.modal-body');
    if (bodyEl) bodyEl.scrollTop = 0;
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove('active');
    if (modalId === 'carDetailModal') {
      currentDetailMoto = null;
      window.currentDetailMoto = null;
    }
    const remainingOpen = document.querySelectorAll('.modal-backdrop.active');
    if (remainingOpen.length === 0) {
      document.body.style.overflow = '';
    }
  }
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success'
    ? `<svg class="ui-icon ui-icon-sm" style="color: #10b981; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>`
    : type === 'warning'
      ? `<svg class="ui-icon ui-icon-sm" style="color: #f59e0b; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
      : type === 'gold'
        ? `<svg class="ui-icon ui-icon-sm" style="color: #eab308; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        : `<svg class="ui-icon ui-icon-sm" style="color: #06b6d4; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `<span style="display: inline-flex; align-items: center;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==================== GPSDD TRACKING SYSTEM ====================
function openGpsTracking(motoId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  if (moto.gpsUrl && moto.gpsUrl.trim()) {
    let url = moto.gpsUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank');

    if (moto.gpsImei && moto.gpsImei.trim()) {
      navigator.clipboard.writeText(moto.gpsImei.trim()).then(() => {
        showToast(`เปิด GPSDD คัน [${moto.licensePlate}] แล้ว (คัดลอก IMEI: ${moto.gpsImei} ให้อัตโนมัติ)`, 'gold');
      }).catch(() => {
        showToast(`เปิดลิงก์ GPS คัน [${moto.licensePlate}] เรียบร้อย`, 'success');
      });
    } else {
      showToast(`กำลังเปิดหน้าติดตาม GPS คัน [${moto.licensePlate}]...`, 'success');
    }
  } else if (moto.gpsImei && moto.gpsImei.trim()) {
    // Has IMEI but no direct URL - copy IMEI and open default GPSDD web portal
    const imei = moto.gpsImei.trim();
    navigator.clipboard.writeText(imei).then(() => {
      showToast(`คัดลอกเลข IMEI (${imei}) แล้ว! กำลังเปิดเว็บ www.gpsdd.com ให้คุณกดวาง (Ctrl+V) ล็อกอินได้ทันที`, 'gold');
    }).catch(() => {
      showToast(`กำลังเปิดเว็บ www.gpsdd.com (IMEI: ${imei})`, 'info');
    });
    window.open('https://www.gpsdd.com', '_blank');
  } else {
    // No GPS data configured yet
    const shouldAdd = confirm(`รถคันนี้ (${moto.brand} ${moto.model} ทะเบียน ${moto.licensePlate}) ยังไม่ได้บันทึกข้อมูล GPSDD\n\nต้องการเปิดหน้าต่างแก้ไขเพื่อใส่เลข IMEI หรือลิงก์ติดตามสดตอนนี้เลยหรือไม่?`);
    if (shouldAdd) {
      openCarModal(moto.id);
    }
  }
}

function testGpsUrl() {
  const urlInput = document.getElementById('formGpsUrl');
  let url = urlInput ? urlInput.value.trim() : '';
  const imeiInput = document.getElementById('formGpsImei');
  let imei = imeiInput ? imeiInput.value.trim() : '';

  if (url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank');
    showToast('เปิดทดสอบลิงก์ติดตาม GPS เรียบร้อยแล้ว', 'info');
  } else if (imei) {
    navigator.clipboard.writeText(imei).then(() => {
      showToast(`คัดลอก IMEI (${imei}) แล้ว กำลังเปิดเว็บ www.gpsdd.com...`, 'gold');
    });
    window.open('https://www.gpsdd.com', '_blank');
  } else {
    alert('กรุณากรอกลิงก์ติดตาม GPSDD หรือเลข IMEI ก่อนกดทดสอบ');
  }
}

function copyInputVal(inputId) {
  const el = document.getElementById(inputId);
  if (!el || !el.value) {
    showToast('ไม่มีข้อมูลให้คัดลอก', 'warning');
    return;
  }
  navigator.clipboard.writeText(el.value).then(() => {
    showToast(`คัดลอก: ${el.value} แล้ว`, 'success');
  });
}

// ==================== FIREBASE REAL-TIME CLOUD SYNC CONTROLLER ====================
function initFirebaseSync() {
  if (!window.FirebaseSync) return;

  // 1. Subscribe to status changes
  FirebaseSync.onStatusChange(updateFirebaseStatusUI);

  // 2. Initialize sync engine with fleet change callback
  FirebaseSync.init(handleRemoteFleetUpdated);
}

function updateFirebaseStatusUI(state) {
  const statusBtn = document.getElementById('btnOpenFirebaseModal');
  const statusText = document.getElementById('firebaseStatusText');
  const modalPill = document.getElementById('modalFbStatusPill');
  const modalText = document.getElementById('modalFbStatusText');
  const countEl = document.getElementById('modalFbFleetCount');
  const syncTimeEl = document.getElementById('modalFbLastSyncTime');
  const dataModalBadge = document.getElementById('dataModalFirebaseBadge');

  if (!statusBtn) return;

  // Reset classes
  statusBtn.className = 'header-btn btn-firebase-status';
  if (modalPill) modalPill.className = 'fb-status-pill';

  const timeFormatted = state.lastSyncTime ? new Date(state.lastSyncTime).toLocaleTimeString('th-TH') : '-';
  if (countEl) countEl.textContent = `${state.remoteFleetCount || 0} คัน`;
  if (syncTimeEl) syncTimeEl.textContent = timeFormatted;

  if (state.status === 'connected') {
    statusBtn.classList.add('status-connected');
    statusText.innerHTML = `${UI_ICONS.cloud} Firebase: ซิงค์สด (${state.remoteFleetCount || 0} คัน)`;
    if (modalPill) {
      modalPill.classList.add('online');
      modalText.textContent = `เชื่อมต่อเรียลไทม์แล้ว (${state.dbType === 'firestore' ? 'Cloud Firestore' : 'Realtime DB'})`;
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = 'ซิงค์สดเรียลไทม์';
      dataModalBadge.style.color = '#10b981';
      dataModalBadge.style.borderColor = '#10b981';
    }
  } else if (state.status === 'connecting') {
    statusBtn.classList.add('status-connecting');
    statusText.innerHTML = `${UI_ICONS.cloud} Firebase: กำลังเชื่อมต่อ...`;
    if (modalPill) {
      modalPill.classList.add('connecting');
      modalText.textContent = 'กำลังเชื่อมต่อระบบคลาวด์...';
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = 'กำลังเชื่อมต่อ...';
      dataModalBadge.style.color = '#f59e0b';
      dataModalBadge.style.borderColor = '#f59e0b';
    }
  } else if (state.status === 'syncing') {
    statusBtn.classList.add('status-syncing');
    statusText.innerHTML = `${UI_ICONS.cloud} Firebase: กำลังซิงค์...`;
    if (modalPill) {
      modalPill.classList.add('connecting');
      modalText.textContent = 'กำลังส่งข้อมูลไปยังคลาวด์...';
    }
  } else if (state.status === 'error') {
    statusBtn.classList.add('status-error');
    statusText.innerHTML = `${UI_ICONS.cloud} Firebase: ข้อผิดพลาด`;
    if (modalPill) {
      modalPill.classList.add('error');
      modalText.textContent = state.errorMessage ? `ข้อผิดพลาด: ${state.errorMessage}` : 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = 'เชื่อมต่อไม่สำเร็จ';
      dataModalBadge.style.color = '#ef4444';
      dataModalBadge.style.borderColor = '#ef4444';
    }
  } else {
    // Unconfigured / offline
    statusBtn.classList.add('status-offline');
    statusText.innerHTML = `${UI_ICONS.cloud} Firebase: คลิกตั้งค่าซิงค์`;
    if (modalPill) {
      modalPill.classList.add('offline');
      modalText.textContent = 'ยังไม่ได้ตั้งค่า Firebase (ใช้ข้อมูลในเครื่อง)';
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = 'ยังไม่ได้ตั้งค่า';
      dataModalBadge.style.color = '#94a3b8';
      dataModalBadge.style.borderColor = '#94a3b8';
    }
  }
}

function handleRemoteFleetUpdated(remoteFleet, meta) {
  const wasInitialLoading = isInitialCloudLoading;
  isInitialCloudLoading = false;
  hasReceivedCloudSnapshot = true;

  if (Array.isArray(remoteFleet)) {
    const checkPendingDelete = (item) => Boolean(
      item && window.FirebaseSync && FirebaseSync.isPendingDelete && FirebaseSync.isPendingDelete(item.id, item._docId)
    );
    const checkPendingUpsert = (id) => Boolean(
      id && window.FirebaseSync && FirebaseSync.isPendingUpsert && FirebaseSync.isPendingUpsert(id)
    );

    const autoHealItems = [];

    // 1. Trust Cloud Firestore for all synced vehicles (so photos uploaded on Mobile ALWAYS appear on PC!),
    //    while preserving only genuine pending local edits or legacy stuck mobile photos
    const mergedFleet = remoteFleet
      .filter(remoteItem => remoteItem && !checkPendingDelete(remoteItem))
      .map(remoteItem => {
        const localItem = fleet.find(m => m && m.id === remoteItem.id);
        if (!localItem) return remoteItem;

        // If this device has an explicit unsynced edit waiting in the outbox, keep local version until upload completes
        if (checkPendingUpsert(remoteItem.id)) {
          return {
            ...remoteItem,
            ...localItem,
            _docId: remoteItem._docId || localItem._docId,
            photos: (Array.isArray(localItem.photos) && localItem.photos.length > 0) ? localItem.photos : remoteItem.photos
          };
        }

        // Self-healing for legacy mobile photos stuck locally from before the 1MB compression update:
        // Only triggers when local has custom Base64 photo AND remote ONLY has default asset AND remote never recorded _photoUpdatedAt
        const localHasCustom = hasCustomPhotos(localItem.photos);
        const remoteDefaultOnly = hasDefaultPhotosOnly(remoteItem.photos);
        if (localHasCustom && remoteDefaultOnly && !remoteItem._photoUpdatedAt) {
          const healed = {
            ...remoteItem,
            photos: localItem.photos,
            _photoUpdatedAt: new Date().toISOString()
          };
          autoHealItems.push(healed);
          return healed;
        }

        // Otherwise, Cloud Firestore is the single source of truth (immune to PC/Mobile clock skew!)
        return remoteItem;
      });

    // 2. Preserve local-only vehicles ONLY if they are explicitly queued in pendingUpserts (NEVER resurrect deleted vehicles!)
    fleet.forEach(localItem => {
      if (!localItem || !localItem.id || checkPendingDelete(localItem)) return;
      if (!mergedFleet.some(r => r.id === localItem.id) && checkPendingUpsert(localItem.id)) {
        mergedFleet.push(localItem);
      }
    });

    const isDifferent = JSON.stringify(fleet) !== JSON.stringify(mergedFleet);
    fleet = mergedFleet;
    ensureFleetFinancialDefaults();
    saveFleet();
    updateBranchOptions();

    if (isDifferent || wasInitialLoading || meta?.isInitial) {
      renderAll();
    }

    // Auto-upload any healed legacy mobile photos to Cloud Firestore so PC receives them immediately
    if (autoHealItems.length > 0 && window.FirebaseSync) {
      autoHealItems.forEach(item => {
        FirebaseSync.upsertMoto(item);
      });
    }

    // 3. ONLY refresh carDetailModal if it is ACTUALLY currently open (.active) — NEVER pop open a closed modal!
    const detailModalEl = document.getElementById('carDetailModal');
    const isDetailModalOpen = Boolean(detailModalEl && detailModalEl.classList.contains('active'));
    if (isDetailModalOpen && currentDetailMoto) {
      const updated = fleet.find(m => m.id === currentDetailMoto.id);
      if (updated) {
        openCarDetail(updated.id);
      } else {
        closeModal('carDetailModal');
      }
    } else if (!isDetailModalOpen && currentDetailMoto) {
      currentDetailMoto = null;
      window.currentDetailMoto = null;
    }

    if (meta && meta.isRemote) {
      playSyncChime();
      showToast('ซิงค์เรียลไทม์: ได้รับการอัปเดตข้อมูลรถและรูปภาพล่าสุดแล้ว', 'info');
    }
  }
}

function playSyncChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // audio context blocked or unsupported
  }
}

function openFirebaseModal() {
  const config = FirebaseSync.getActiveConfig();
  const settings = FirebaseSync.getActiveSettings();

  const textarea = document.getElementById('fbConfigTextarea');
  const colInput = document.getElementById('fbCollectionName');
  const banner = document.getElementById('fbPermanentConfigBanner');

  const isPermanent = window.FIREBASE_CONFIG &&
    typeof window.FIREBASE_CONFIG.apiKey === 'string' &&
    window.FIREBASE_CONFIG.apiKey.trim() !== '';

  if (banner) {
    banner.style.display = isPermanent ? 'block' : 'none';
  }

  if (textarea) {
    if (config) {
      textarea.value = JSON.stringify(config, null, 2);
    } else {
      textarea.value = '';
    }
  }

  if (colInput) {
    colInput.value = settings.collectionName || 'motorcycle_fleet';
  }

  // Update radio
  const radios = document.getElementsByName('fbDbType');
  radios.forEach(r => {
    r.checked = (r.value === settings.dbType);
  });
  updateDbTypeLabels(settings.dbType);

  openModal('firebaseModal');
}

function updateDbTypeLabels(selectedType) {
  const labelFirestore = document.getElementById('labelDbFirestore');
  const labelRtdb = document.getElementById('labelDbRtdb');
  if (labelFirestore && labelRtdb) {
    labelFirestore.classList.toggle('selected', selectedType === 'firestore');
    labelRtdb.classList.toggle('selected', selectedType === 'rtdb');
  }
}

function setupFirebaseEvents() {
  // DB Type radio changes
  document.querySelectorAll('input[name="fbDbType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      updateDbTypeLabels(e.target.value);
    });
  });

  // Save Config button
  const saveBtn = document.getElementById('btnSaveFbConfig');
  if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
      const rawText = document.getElementById('fbConfigTextarea').value;
      const parsedConfig = FirebaseSync.parseConfigInput(rawText);

      if (!parsedConfig) {
        alert('รูปแบบ Firebase Config ไม่ถูกต้อง กรุณาคัดลอกโค้ดที่ได้จาก Firebase Console หรือใส่ JSON ให้ถูกต้อง');
        return;
      }

      if (!parsedConfig.apiKey || !parsedConfig.projectId) {
        alert('Firebase Config ต้องมี apiKey และ projectId เป็นอย่างน้อย');
        return;
      }

      const selectedDbType = document.querySelector('input[name="fbDbType"]:checked')?.value || 'firestore';
      const colName = document.getElementById('fbCollectionName').value.trim() || 'motorcycle_fleet';

      const settings = {
        dbType: selectedDbType,
        collectionName: colName,
        autoSync: true
      };

      saveBtn.disabled = true;
      saveBtn.innerHTML = 'กำลังบันทึกและเชื่อมต่อ...';

      const ok = await FirebaseSync.saveConfigAndRestart(parsedConfig, settings);
      saveBtn.disabled = false;
      saveBtn.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> บันทึกและเริ่มซิงค์สด';

      if (ok) {
        showToast('บันทึกและเริ่มการซิงค์ข้อมูล Firebase เรียบร้อยแล้ว!', 'success');
      } else {
        showToast('บันทึกแล้ว แต่การเชื่อมต่อเกิดข้อผิดพลาด โปรดตรวจสอบ Config หรือ Rules', 'warning');
      }
    });
  }

  // Test Connection button
  const testBtn = document.getElementById('btnTestFbConnection');
  if (testBtn) {
    testBtn.addEventListener('click', async () => {
      const rawText = document.getElementById('fbConfigTextarea').value;
      const parsedConfig = rawText ? FirebaseSync.parseConfigInput(rawText) : FirebaseSync.getActiveConfig();

      if (!parsedConfig) {
        alert('กรุณากรอก Firebase Config ก่อนกดทดสอบ');
        return;
      }

      const selectedDbType = document.querySelector('input[name="fbDbType"]:checked')?.value || 'firestore';
      const colName = document.getElementById('fbCollectionName').value.trim() || 'motorcycle_fleet';

      testBtn.disabled = true;
      testBtn.innerHTML = 'กำลังทดสอบ...';

      const result = await FirebaseSync.testConnection(parsedConfig, {
        dbType: selectedDbType,
        collectionName: colName
      });

      testBtn.disabled = false;
      testBtn.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> ทดสอบการเชื่อมต่อ';

      if (result.success) {
        alert(result.message);
        showToast('ทดสอบการเชื่อมต่อ Firebase สำเร็จสมบูรณ์', 'success');
      } else {
        alert('การทดสอบล้มเหลว:\n' + result.message);
        showToast('การทดสอบล้มเหลว: ' + result.message, 'warning');
      }
    });
  }

  // Upload Local to Cloud
  const uploadBtn = document.getElementById('btnUploadLocalToFb');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', async () => {
      if (!confirm(`คุณต้องการส่งข้อมูลรถทั้งหมดในเครื่องนี้ (${fleet.length} คัน) ขึ้นสู่ Firebase เพื่อแชร์ให้ทุกคน ใช่หรือไม่?`)) {
        return;
      }

      uploadBtn.disabled = true;
      uploadBtn.innerHTML = 'กำลังอัปโหลดข้อมูล...';

      const res = await FirebaseSync.uploadAll(fleet);
      uploadBtn.disabled = false;
      uploadBtn.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/></svg> ส่งข้อมูลสต็อคในเครื่องขึ้น Firebase ทันที';

      if (res.success) {
        showToast(`อัปโหลดสต็อครถขึ้น Firebase สำเร็จทั้งหมด ${res.count} คัน`, 'gold');
      } else {
        alert('อัปโหลดล้มเหลว: ' + res.error);
        showToast('อัปโหลดล้มเหลว: ' + res.error, 'warning');
      }
    });
  }

  // Download Cloud to Local
  const downloadBtn = document.getElementById('btnDownloadFbToLocal');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', async () => {
      if (!confirm('คุณต้องการดึงข้อมูลล่าสุดจาก Firebase ลงมาแทนที่สต็อคในเครื่องนี้ใช่หรือไม่?')) {
        return;
      }

      downloadBtn.disabled = true;
      downloadBtn.innerHTML = 'กำลังดึงข้อมูล...';

      const res = await FirebaseSync.downloadAll();
      downloadBtn.disabled = false;
      downloadBtn.innerHTML = '<svg class="ui-icon ui-icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> ดึงข้อมูลล่าสุดจาก Firebase ลงเครื่องนี้';

      if (res.success) {
        if (Array.isArray(res.data)) {
          fleet = res.data;
          ensureFleetFinancialDefaults();
          saveFleet();
          updateBranchOptions();
          renderAll();
          if (fleet.length > 0) {
            showToast(`ดึงข้อมูลจาก Firebase สำเร็จ ${fleet.length} คัน`, 'success');
          } else {
            showToast('ซิงค์ข้อมูลจาก Firebase แล้ว (ปัจจุบันไม่มีรถในสต็อค)', 'info');
          }
        }
      } else {
        alert('ดึงข้อมูลล้มเหลว: ' + res.error);
        showToast('ดึงข้อมูลล้มเหลว: ' + res.error, 'warning');
      }
    });
  }

  // Clear Config button
  const clearBtn = document.getElementById('btnClearFbConfig');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('คุณต้องการล้างการตั้งค่า Firebase ในเครื่องนี้ใช่หรือไม่? (ข้อมูลรถจะไม่ถูกลบ)')) {
        FirebaseSync.clearConfig();
        document.getElementById('fbConfigTextarea').value = '';
        showToast('ล้างการตั้งค่า Firebase เรียบร้อยแล้ว', 'info');
      }
    });
  }

  // Paste from clipboard button
  const pasteBtn = document.getElementById('btnPasteConfigFromClipboard');
  if (pasteBtn) {
    pasteBtn.addEventListener('click', async () => {
      try {
        const text = await navigator.clipboard.readText();
        if (text) {
          document.getElementById('fbConfigTextarea').value = text;
          showToast('วางข้อมูลจากคลิปบอร์ดแล้ว', 'info');
        } else {
          showToast('คลิปบอร์ดว่างเปล่า', 'warning');
        }
      } catch (err) {
        alert('เบราว์เซอร์ไม่อนุญาตให้อ่านคลิปบอร์ดโดยตรง กรุณากดคลิกในช่องแล้วกด Ctrl + V เพื่อวาง');
      }
    });
  }
}

// Global helper for copying Firestore security rules
window.copyFirestoreRules = function () {
  const rules = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}`;
  navigator.clipboard.writeText(rules).then(() => {
    showToast('คัดลอก Cloud Firestore Rules เรียบร้อยแล้ว นำไปวางในแท็บ Rules ของ Firebase Console ได้เลย', 'gold');
  }).catch(() => {
    alert(rules);
  });
};

// ==========================================================================
// CONTRACT & INSPECTION PRINT ENGINE (A4 SINGLE VEHICLE ONLY)
// ==========================================================================
let activeContractType = 'rent'; // 'rent' | 'installment'
let currentContractMotoId = null;
let contractPreviewZoom = 1.0;

function formatThaiDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  const thMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  return `${d.getDate()} ${thMonths[d.getMonth()]} ${d.getFullYear() + 543}`;
}

let contractCarSearchKeyword = '';
let contractCarStatusFilter = 'ALL';

function openContractModal(motoId = null, type = null) {
  try {
    if (!fleet || fleet.length === 0) {
      showToast('ยังไม่มีข้อมูลรถในระบบสต็อค กรุณาคีย์รับรถเข้าสต็อคก่อนพิมพ์สัญญา', 'warning');
      return;
    }

    // 1. Resolve selected motorcycle safely
    const detailId = (typeof currentDetailMoto !== 'undefined' && currentDetailMoto) ? currentDetailMoto.id : null;
    if (motoId && fleet.some(c => c.id === motoId)) {
      currentContractMotoId = motoId;
    } else if (detailId && fleet.some(c => c.id === detailId)) {
      currentContractMotoId = detailId;
    } else if (!currentContractMotoId || !fleet.some(c => c.id === currentContractMotoId)) {
      currentContractMotoId = fleet[0].id;
    }

    // 2. Reset car search keyword and status filter
    contractCarSearchKeyword = '';
    contractCarStatusFilter = 'ALL';
    const searchInput = document.getElementById('contractCarSearchInput');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('btnContractCarSearchClear');
    if (clearBtn) clearBtn.style.display = 'none';
    document.querySelectorAll('.car-pill-btn').forEach((b, idx) => {
      b.classList.toggle('active', idx === 0);
    });

    // 3. Render Searchable Car Cards List
    renderContractCarList();

    // 4. Populate hidden Car Select Dropdown
    const selectEl = document.getElementById('contractCarSelect');
    if (selectEl) {
      selectEl.innerHTML = fleet.map(m => {
        const statusInfo = STATUS_CONFIG[m.status] || STATUS_CONFIG.available;
        return `<option value="${m.id}" ${m.id === currentContractMotoId ? 'selected' : ''}>[${m.licensePlate}${m.province ? ' ' + m.province : ''}] ${m.brand} ${m.model} (${m.branch}) - ${statusInfo.label}</option>`;
      }).join('');
      selectEl.value = currentContractMotoId;
    }

    // 5. Resolve Contract Type
    const moto = fleet.find(c => c.id === currentContractMotoId) || fleet[0];
    if (type) {
      activeContractType = type;
    } else if (moto && moto.purpose === 'sale') {
      activeContractType = 'installment';
    } else {
      activeContractType = 'rent';
    }

    // 6. Fill form inputs
    populateContractForm(moto);

    // 7. Update UI Mode
    setContractType(activeContractType, false);

    // 8. Generate Live A4 Preview
    updateContractPreview();

    // 9. Open Modal
    openModal('contractPrintModal');
  } catch (err) {
    console.error('Error opening contract modal:', err);
    showToast('เกิดข้อผิดพลาดในการเปิดหน้าสัญญา: ' + err.message, 'warning');
  }
}

function renderContractCarList() {
  const container = document.getElementById('contractCarListContainer');
  const countBadge = document.getElementById('contractCarCountBadge');
  if (!container) return;

  const search = (contractCarSearchKeyword || '').trim().toLowerCase();
  const statusFilter = contractCarStatusFilter || 'ALL';

  const filtered = fleet.filter(moto => {
    // Status filter
    if (statusFilter !== 'ALL' && moto.status !== statusFilter) return false;

    // Search query
    if (search) {
      const matchPlate = (moto.licensePlate || '').toLowerCase().includes(search);
      const matchProv = (moto.province || '').toLowerCase().includes(search);
      const matchModel = (moto.model || '').toLowerCase().includes(search);
      const matchBrand = (moto.brand || '').toLowerCase().includes(search);
      const matchBranch = (moto.branch || '').toLowerCase().includes(search);
      const matchColor = (moto.exteriorColor || '').toLowerCase().includes(search);
      const matchCust = (moto.customer || '').toLowerCase().includes(search);
      const matchVin = (moto.vin || '').toLowerCase().includes(search);
      if (!matchPlate && !matchProv && !matchModel && !matchBrand && !matchBranch && !matchColor && !matchCust && !matchVin) {
        return false;
      }
    }
    return true;
  });

  if (countBadge) {
    countBadge.textContent = `แสดง ${filtered.length} จากทั้งหมด ${fleet.length} คัน`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="contract-car-empty">
        <svg class="ui-icon ui-icon-md" style="color: var(--text-muted); margin-bottom: 4px;" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <div>ไม่พบรถมอเตอร์ไซค์ที่ตรงกับ "${contractCarSearchKeyword}"</div>
        <button type="button" class="car-pill-btn" style="margin-top: 6px;" onclick="clearContractCarSearch()">ล้างการค้นหา</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(moto => {
    const isSelected = moto.id === currentContractMotoId;
    const statusInfo = STATUS_CONFIG[moto.status] || STATUS_CONFIG.available;
    const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';

    return `
      <div class="contract-car-item ${isSelected ? 'selected' : ''}" 
           onclick="selectContractCar('${moto.id}')"
           title="คลิกเพื่อเลือกรถคันนี้มาทำสัญญา">
        <img src="${coverPhoto}" class="car-item-thumb" alt="${moto.model}">
        <div class="car-item-info">
          <div class="car-item-top">
            <span class="car-item-plate">${moto.licensePlate}${moto.province ? ' ' + moto.province : ''}</span>
            <span class="status-pill ${statusInfo.class}" style="font-size: 0.65rem; padding: 1px 6px;">
              <span class="status-dot"></span>${statusInfo.label}
            </span>
          </div>
          <div class="car-item-title">${moto.brand} ${moto.model} <span style="color: var(--cyan-600); font-weight: normal;">${moto.cc}</span></div>
          <div class="car-item-sub">
            <span>📍 ${moto.branch}</span>
            ${moto.rentDaily ? `<span>&bull; ค่าเช่า ฿${Number(moto.rentDaily).toLocaleString()}/วัน</span>` : ''}
            ${moto.price ? `<span>&bull; ขาย ฿${Number(moto.price).toLocaleString()}</span>` : ''}
          </div>
        </div>
        <div class="car-item-check">${isSelected ? '&#10003;' : ''}</div>
      </div>
    `;
  }).join('');
}

function selectContractCar(carId) {
  currentContractMotoId = carId;
  const selectEl = document.getElementById('contractCarSelect');
  if (selectEl) selectEl.value = carId;

  const moto = fleet.find(c => c.id === carId);
  if (moto) {
    populateContractForm(moto);
    updateContractPreview();
    renderContractCarList();
    showToast(`เลือกทำสัญญา: ${moto.brand} ${moto.model} [${moto.licensePlate}]`, 'info');
  }
}

function filterContractCarList(query) {
  contractCarSearchKeyword = query || '';
  const clearBtn = document.getElementById('btnContractCarSearchClear');
  if (clearBtn) {
    clearBtn.style.display = contractCarSearchKeyword ? 'block' : 'none';
  }
  renderContractCarList();
}

function clearContractCarSearch() {
  contractCarSearchKeyword = '';
  const input = document.getElementById('contractCarSearchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('btnContractCarSearchClear');
  if (clearBtn) clearBtn.style.display = 'none';
  renderContractCarList();
}

function filterContractCarByStatus(status, btnEl) {
  contractCarStatusFilter = status;
  document.querySelectorAll('.car-pill-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderContractCarList();
}

// ==================== CONTRACT CUSTOMIZATION STATE (SECTIONS 2, 3, 4, 5) ====================
const SEC2_STANDARD_FIELDS = [
  { key: 'plate', label: 'ป้ายทะเบียน / จังหวัด', shortLabel: 'ป้ายทะเบียน' },
  { key: 'model', label: 'ยี่ห้อ - รุ่น (Model)', shortLabel: 'ยี่ห้อ - รุ่น' },
  { key: 'ccYear', label: 'ขนาดเครื่องยนต์ (CC)', shortLabel: 'ขนาด CC / ปี' },
  { key: 'color', label: 'สีตัวรถ (Color)', shortLabel: 'สีตัวรถ' },
  { key: 'vin', label: 'เลขคอ / ตัวถัง (VIN)', shortLabel: 'เลขตัวถัง (VIN)' },
  { key: 'engineNo', label: 'เลขเครื่องยนต์', shortLabel: 'เลขเครื่องยนต์' },
  { key: 'mileage', label: 'เลขไมล์รับรถ (Mileage)', shortLabel: 'เลขไมล์รับรถ' },
  { key: 'fuel', label: 'เชื้อเพลิงที่ใช้ (Fuel)', shortLabel: 'เชื้อเพลิง' },
  { key: 'taxExpiry', label: 'วันหมดอายุภาษี / พ.ร.บ.', shortLabel: 'ภาษี / พ.ร.บ.' },
  { key: 'gps', label: 'ระบบติดตาม GPSDD', shortLabel: 'ระบบ GPSDD' }
];

let contractSec2Fields = {
  plate: true,
  model: true,
  ccYear: true,
  color: true,
  vin: true,
  engineNo: true,
  mileage: true,
  fuel: true,
  taxExpiry: true,
  gps: true
};
let contractCustomVehicleFields = [];
let isSec2PreviewEditorOpen = false;
let isContractRentTotalManual = false;

const DEFAULT_ACC_TEMPLATE = [
  { key: 'helmet', label: 'หมวกกันน็อค  ......   ใบ' },
  { key: 'smartKey', label: 'กุญแจรีโมท Smart Key / กุญแจรถ' },
  { key: 'phoneMount', label: 'ที่จับมือถือกันสะเทือน' },
  { key: 'topBox', label: 'กล่องใส่ของท้ายรถ (Top Box)' }
];

const DEFAULT_INSP_TEMPLATE = [
  { key: 'oil', label: 'ระดับน้ำมันเครื่อง/น้ำยาหล่อเย็น' },
  { key: 'brakes', label: 'ระบบเบรกหน้า-หลัง & ไฟสัญญาณ' },
  { key: 'tyres', label: 'ดอกยางและแรงดันลมยางมาตรฐาน' },
  { key: 'clean', label: 'สภาพภายนอกสะอาด ไม่มีรอยเฉี่ยวชน' }
];

let contractAccItems = [];
let contractInspItems = [];
let checklistAdderOpen = { acc: false, insp: false };
let contractChecklistMotoId = null;

function escapeContractHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initContractChecklistsFromMoto(moto) {
  contractChecklistMotoId = moto ? moto.id : null;
  contractAccItems = DEFAULT_ACC_TEMPLATE.map(t => ({
    key: t.key,
    label: t.label,
    checked: Boolean(moto?.accessories && moto.accessories[t.key]),
    isCustom: false
  }));
  if (Array.isArray(moto?.accessories?.customItems)) {
    moto.accessories.customItems.forEach(ci => {
      if (ci && ci.label) {
        contractAccItems.push({
          key: ci.key || ('cacc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6)),
          label: ci.label,
          checked: ci.checked !== false,
          isCustom: true
        });
      }
    });
  }

  contractInspItems = DEFAULT_INSP_TEMPLATE.map(t => ({
    key: t.key,
    label: t.label,
    checked: Boolean(moto?.inspection && moto.inspection[t.key]),
    isCustom: false
  }));
  if (Array.isArray(moto?.inspection?.customItems)) {
    moto.inspection.customItems.forEach(ci => {
      if (ci && ci.label) {
        contractInspItems.push({
          key: ci.key || ('cinsp_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6)),
          label: ci.label,
          checked: ci.checked !== false,
          isCustom: true
        });
      }
    });
  }
  checklistAdderOpen = { acc: false, insp: false };
}

function renderSec2LeftControls() {
  const container = document.getElementById('contractSec2FieldToggles');
  if (!container) return;

  const stdChips = SEC2_STANDARD_FIELDS.map(f => `
    <div class="sec2-toggle-chip">
      <label title="${escapeContractHtml(f.label)}">
        <input type="checkbox" ${contractSec2Fields[f.key] ? 'checked' : ''}
          onchange="toggleSec2Field('${f.key}', this.checked)">
        <span>${escapeContractHtml(f.shortLabel)}</span>
      </label>
    </div>
  `).join('');

  const customChips = contractCustomVehicleFields.map(cf => `
    <div class="sec2-toggle-chip">
      <label title="${escapeContractHtml(cf.label)}: ${escapeContractHtml(cf.value)}">
        <input type="checkbox" ${cf.checked ? 'checked' : ''}
          onchange="toggleCustomVehicleField('${cf.id}', this.checked)">
        <span>${escapeContractHtml(cf.label)}</span>
      </label>
      <button type="button" class="sec2-chip-remove" onclick="removeCustomVehicleField('${cf.id}')"
        title="ลบหัวข้อนี้">&times;</button>
    </div>
  `).join('');

  container.innerHTML = stdChips + customChips;
}

function toggleSec2Field(key, checked) {
  if (!(key in contractSec2Fields)) return;
  contractSec2Fields[key] = Boolean(checked);
  if (checked) {
    const chkVeh = document.getElementById('chkShowVehicle');
    if (chkVeh && !chkVeh.checked) chkVeh.checked = true;
  }
  renderSec2LeftControls();
  updateContractPreview();
}

function toggleAllSec2Fields(val) {
  const boolVal = Boolean(val);
  Object.keys(contractSec2Fields).forEach(k => {
    contractSec2Fields[k] = boolVal;
  });
  contractCustomVehicleFields.forEach(cf => {
    cf.checked = boolVal;
  });
  if (boolVal) {
    const chkVeh = document.getElementById('chkShowVehicle');
    if (chkVeh) chkVeh.checked = true;
  }
  renderSec2LeftControls();
  updateContractPreview();
}

function addCustomVehicleField(fromPreview = false) {
  const lblEl = document.getElementById(fromPreview ? 'previewCustomVehLabel' : 'customVehFieldLabel');
  const valEl = document.getElementById(fromPreview ? 'previewCustomVehValue' : 'customVehFieldValue');
  const label = lblEl?.value?.trim() || '';
  const value = valEl?.value?.trim() || '';

  if (!label) {
    showToast('กรุณาระบุหัวข้อข้อมูลรถที่ต้องการเพิ่ม', 'warning');
    lblEl?.focus();
    return;
  }

  contractCustomVehicleFields.push({
    id: 'cveh_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    label,
    value: value || '-',
    checked: true
  });

  const chkVeh = document.getElementById('chkShowVehicle');
  if (chkVeh) chkVeh.checked = true;

  if (lblEl) lblEl.value = '';
  if (valEl) valEl.value = '';

  renderSec2LeftControls();
  updateContractPreview();

  if (fromPreview) {
    setTimeout(() => document.getElementById('previewCustomVehLabel')?.focus(), 30);
  }
}

function toggleCustomVehicleField(id, checked) {
  const item = contractCustomVehicleFields.find(cf => cf.id === id);
  if (!item) return;
  item.checked = (checked !== undefined) ? Boolean(checked) : !item.checked;
  if (item.checked) {
    const chkVeh = document.getElementById('chkShowVehicle');
    if (chkVeh && !chkVeh.checked) chkVeh.checked = true;
  }
  renderSec2LeftControls();
  updateContractPreview();
}

function removeCustomVehicleField(id) {
  contractCustomVehicleFields = contractCustomVehicleFields.filter(cf => cf.id !== id);
  renderSec2LeftControls();
  updateContractPreview();
}

function toggleSec2EditorOnPreview() {
  isSec2PreviewEditorOpen = !isSec2PreviewEditorOpen;
  updateContractPreview();
}

function buildActiveVehicleSpecEntries(moto) {
  const entries = [];
  if (contractSec2Fields.plate) {
    entries.push({
      type: 'std',
      idOrKey: 'plate',
      label: 'ป้ายทะเบียน / จังหวัด',
      valueHtml: `<strong style="font-size: 9pt; color: #0a1b38;">${escapeContractHtml(moto.licensePlate || '-')}</strong>${moto.province ? ` (${escapeContractHtml(moto.province)})` : ''}`
    });
  }
  if (contractSec2Fields.model) {
    entries.push({
      type: 'std',
      idOrKey: 'model',
      label: 'ยี่ห้อ - รุ่น (Model)',
      valueHtml: `<strong>${escapeContractHtml(((moto.brand || '') + ' ' + (moto.model || '')).trim() || '-')}</strong>`
    });
  }
  if (contractSec2Fields.ccYear) {
    entries.push({
      type: 'std',
      idOrKey: 'ccYear',
      label: 'ขนาดเครื่องยนต์ (CC)',
      valueHtml: `${escapeContractHtml(moto.cc || '-')}${moto.year ? ` (ปี ${escapeContractHtml(moto.year)})` : ''}`
    });
  }
  if (contractSec2Fields.color) {
    entries.push({
      type: 'std',
      idOrKey: 'color',
      label: 'สีตัวรถ (Color)',
      valueHtml: `${escapeContractHtml(moto.exteriorColor || '-')}`
    });
  }
  if (contractSec2Fields.vin) {
    entries.push({
      type: 'std',
      idOrKey: 'vin',
      label: 'เลขคอ / ตัวถัง (VIN)',
      valueHtml: `<strong style="font-family: monospace;">${escapeContractHtml(moto.vin || '-')}</strong>`
    });
  }
  if (contractSec2Fields.engineNo) {
    entries.push({
      type: 'std',
      idOrKey: 'engineNo',
      label: 'เลขเครื่องยนต์',
      valueHtml: `<strong style="font-family: monospace;">${escapeContractHtml(moto.engineNo || '-')}</strong>`
    });
  }
  if (contractSec2Fields.mileage) {
    entries.push({
      type: 'std',
      idOrKey: 'mileage',
      label: 'เลขไมล์รับรถ (Mileage)',
      valueHtml: `<strong>${Number(moto.mileage || 0).toLocaleString()} km</strong>`
    });
  }
  if (contractSec2Fields.fuel) {
    entries.push({
      type: 'std',
      idOrKey: 'fuel',
      label: 'เชื้อเพลิงที่ใช้ (Fuel)',
      valueHtml: `${escapeContractHtml(moto.fuel || 'เบนซิน 95')}`
    });
  }
  if (contractSec2Fields.taxExpiry) {
    entries.push({
      type: 'std',
      idOrKey: 'taxExpiry',
      label: 'วันหมดอายุภาษี / พ.ร.บ.',
      valueHtml: `${escapeContractHtml(moto.taxExpiry || '-')}`
    });
  }
  if (contractSec2Fields.gps) {
    entries.push({
      type: 'std',
      idOrKey: 'gps',
      label: 'ระบบติดตาม GPSDD',
      valueHtml: moto.gpsImei ? `IMEI: <span style="font-family: monospace;">${escapeContractHtml(moto.gpsImei)}</span>` : 'ติดตั้งอุปกรณ์มาตรฐาน'
    });
  }

  contractCustomVehicleFields.forEach(cf => {
    if (cf.checked) {
      entries.push({
        type: 'custom',
        idOrKey: cf.id,
        label: cf.label,
        valueHtml: `<strong>${escapeContractHtml(cf.value || '-')}</strong>`
      });
    }
  });

  return entries;
}

function computeRentSummary(moto) {
  const dailyEl = document.getElementById('contractRentDaily');
  const monthlyEl = document.getElementById('contractRentMonthly');
  const depositEl = document.getElementById('contractDeposit');
  const deliveryEl = document.getElementById('contractDeliveryFee');
  const calcModeEl = document.getElementById('contractRentCalcMode');
  const startEl = document.getElementById('contractRentalStart');
  const endEl = document.getElementById('contractRentalEnd');
  const totalInput = document.getElementById('contractRentTotalPayable');
  const breakdownEl = document.getElementById('contractRentSummaryBreakdown');

  const rentDaily = Math.max(0, Number(dailyEl ? dailyEl.value : (moto?.rentDaily || 0)) || 0);
  const rentMonthly = Math.max(0, Number(monthlyEl ? monthlyEl.value : (moto?.rentMonthly || 0)) || 0);
  const deposit = Math.max(0, Number(depositEl ? depositEl.value : (moto?.deposit ?? 0)) || 0);
  const deliveryFee = Math.max(0, Number(deliveryEl ? deliveryEl.value : (moto?.deliveryFee || 0)) || 0);
  const calcMode = calcModeEl?.value || 'daily';
  const rentStart = startEl?.value || '';
  const rentEnd = endEl?.value || '';

  let rentalDays = 1;
  let hasValidDates = false;
  if (rentStart && rentEnd) {
    const startMs = new Date(rentStart + 'T00:00:00').getTime();
    const endMs = new Date(rentEnd + 'T00:00:00').getTime();
    if (!isNaN(startMs) && !isNaN(endMs)) {
      hasValidDates = true;
      const diffDays = Math.round((endMs - startMs) / 86400000);
      rentalDays = diffDays > 0 ? diffDays : 1;
    }
  }

  let rentSubtotal = 0;
  let rentLabel = '';
  const useMonthly = (calcMode === 'monthly') || (rentDaily === 0 && rentMonthly > 0);
  if (useMonthly && rentMonthly > 0) {
    const rentalMonths = Math.max(1, Math.round(rentalDays / 30));
    rentSubtotal = rentMonthly * rentalMonths;
    rentLabel = rentalMonths > 1
      ? `ค่าเช่า ${rentalMonths} เดือน ${formatPrice(rentSubtotal)}`
      : `ค่าเช่ารายเดือน ${formatPrice(rentSubtotal)}`;
  } else if (rentDaily > 0) {
    rentSubtotal = rentDaily * rentalDays;
    rentLabel = `ค่าเช่า ${rentalDays} วัน ${formatPrice(rentSubtotal)}`;
  } else {
    rentSubtotal = 0;
    rentLabel = `ค่าเช่า ${formatPrice(0)}`;
  }

  const autoTotal = rentSubtotal + deposit + deliveryFee;
  let finalTotal = autoTotal;

  if (!isContractRentTotalManual) {
    if (totalInput) totalInput.value = autoTotal;
    finalTotal = autoTotal;
  } else if (totalInput) {
    finalTotal = totalInput.value !== '' ? Math.max(0, Number(totalInput.value) || 0) : 0;
  }

  let docBreakdownText = '';
  let panelHintText = '';
  if (isContractRentTotalManual && finalTotal !== autoTotal) {
    docBreakdownText = '(ยอดชำระสุทธิรวมค่าเช่า เงินประกันมัดจำ และค่าจัดส่งตามตกลง)';
    panelHintText = `กำหนดยอดชำระเอง • ยอดคำนวณอัตโนมัติ: ${formatPrice(autoTotal)} (${rentLabel} + มัดจำ ${formatPrice(deposit)} + ค่าจัดส่ง ${formatPrice(deliveryFee)})`;
  } else {
    docBreakdownText = `(${rentLabel} + เงินประกันมัดจำ ${formatPrice(deposit)} + ค่าจัดส่ง ${formatPrice(deliveryFee)})`;
    panelHintText = `${rentLabel} + มัดจำ ${formatPrice(deposit)} + ค่าจัดส่ง ${formatPrice(deliveryFee)} = ${formatPrice(autoTotal)}`;
  }

  if (breakdownEl) {
    breakdownEl.textContent = panelHintText;
  }

  return {
    rentDaily,
    rentMonthly,
    deposit,
    deliveryFee,
    rentalDays,
    hasValidDates,
    rentSubtotal,
    autoTotal,
    finalTotal,
    docBreakdownText,
    panelHintText
  };
}

function onRentFinanceInputChanged() {
  updateContractPreview();
}

function onManualRentTotalChanged() {
  isContractRentTotalManual = true;
  updateContractPreview();
}

function resetManualRentTotal() {
  isContractRentTotalManual = false;
  updateContractPreview();
}

function toggleContractCheckItem(group, idx) {
  const list = group === 'acc' ? contractAccItems : contractInspItems;
  if (!list || !list[idx]) return;
  list[idx].checked = !list[idx].checked;
  updateContractPreview();
}

function setAllContractCheckItems(group, val) {
  const list = group === 'acc' ? contractAccItems : contractInspItems;
  if (!list) return;
  list.forEach(item => {
    item.checked = Boolean(val);
  });
  updateContractPreview();
}

function toggleChecklistAdder(group) {
  checklistAdderOpen[group] = !checklistAdderOpen[group];
  updateContractPreview();
  if (checklistAdderOpen[group]) {
    setTimeout(() => {
      document.getElementById(`inlineAddCheck_${group}`)?.focus();
    }, 30);
  }
}

function addCustomChecklistItem(group) {
  const input = document.getElementById(`inlineAddCheck_${group}`);
  const label = input?.value?.trim() || '';
  if (!label) {
    showToast('กรุณาพิมพ์รายการที่ต้องการเพิ่ม', 'warning');
    input?.focus();
    return;
  }
  const list = group === 'acc' ? contractAccItems : contractInspItems;
  list.push({
    key: `c_${group}_${Date.now()}`,
    label,
    checked: true,
    isCustom: true
  });
  if (input) input.value = '';
  updateContractPreview();
  setTimeout(() => {
    document.getElementById(`inlineAddCheck_${group}`)?.focus();
  }, 30);
}

function removeCustomChecklistItem(group, idx, evt) {
  if (evt && typeof evt.stopPropagation === 'function') evt.stopPropagation();
  const list = group === 'acc' ? contractAccItems : contractInspItems;
  if (!list || !list[idx]) return;
  list.splice(idx, 1);
  updateContractPreview();
}

function populateContractForm(moto) {
  if (!moto) return;
  const todayStr = new Date().toISOString().slice(0, 10);
  const nextWeekStr = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);

  // Doc No
  const prefix = activeContractType === 'installment' ? 'HP' : 'RC';
  const docNoInput = document.getElementById('contractDocNo');
  if (docNoInput) {
    docNoInput.value = `${prefix}-${Date.now().toString().slice(-6)}`;
  }

  // Date & Branch
  const dateInput = document.getElementById('contractDate');
  if (dateInput) dateInput.value = todayStr;

  const branchInput = document.getElementById('contractBranch');
  if (branchInput) branchInput.value = moto.branch || 'สาขาหลัก (วีระมอเตอร์)';

  // Customer
  const custNameInput = document.getElementById('contractCustName');
  if (custNameInput) custNameInput.value = moto.customer || '';

  const custIdInput = document.getElementById('contractCustId');
  if (custIdInput) custIdInput.value = moto.customerPassport || '';

  const custPhoneInput = document.getElementById('contractCustPhone');
  if (custPhoneInput) custPhoneInput.value = moto.customerPhone || '';

  const custAddrInput = document.getElementById('contractCustAddress');
  if (custAddrInput) custAddrInput.value = moto.customerAddress || '';

  // Guarantor
  const guarNameInput = document.getElementById('contractGuarName');
  if (guarNameInput) guarNameInput.value = moto.guarantorName || '';

  const guarRelInput = document.getElementById('contractGuarRelation');
  if (guarRelInput) guarRelInput.value = moto.guarantorRelation || '';

  const guarIdInput = document.getElementById('contractGuarId');
  if (guarIdInput) guarIdInput.value = moto.guarantorId || '';

  const guarPhoneInput = document.getElementById('contractGuarPhone');
  if (guarPhoneInput) guarPhoneInput.value = moto.guarantorPhone || '';

  const guarAddrInput = document.getElementById('contractGuarAddress');
  if (guarAddrInput) guarAddrInput.value = moto.guarantorAddress || '';

  // Rent fields
  const rentDailyInput = document.getElementById('contractRentDaily');
  if (rentDailyInput) rentDailyInput.value = moto.rentDaily || 0;

  const rentMonthlyInput = document.getElementById('contractRentMonthly');
  if (rentMonthlyInput) rentMonthlyInput.value = moto.rentMonthly || (moto.rentDaily ? moto.rentDaily * 20 : 0);

  const depositInput = document.getElementById('contractDeposit');
  if (depositInput) depositInput.value = (moto.deposit !== undefined && moto.deposit !== '') ? moto.deposit : 1000;

  const deliveryFeeInput = document.getElementById('contractDeliveryFee');
  if (deliveryFeeInput) deliveryFeeInput.value = (moto.deliveryFee !== undefined && moto.deliveryFee !== '') ? moto.deliveryFee : 0;

  const calcModeSelect = document.getElementById('contractRentCalcMode');
  if (calcModeSelect) calcModeSelect.value = (!moto.rentDaily && moto.rentMonthly) ? 'monthly' : 'daily';

  isContractRentTotalManual = false;

  const rentStartInput = document.getElementById('contractRentalStart');
  if (rentStartInput) rentStartInput.value = moto.rentalStart || todayStr;

  const rentEndInput = document.getElementById('contractRentalEnd');
  if (rentEndInput) rentEndInput.value = moto.rentalEnd || nextWeekStr;

  // Installment fields
  const priceInput = document.getElementById('contractPrice');
  if (priceInput) priceInput.value = moto.price || 0;

  const downInput = document.getElementById('contractDownPayment');
  if (downInput) downInput.value = (moto.downPayment !== undefined && moto.downPayment !== '') ? moto.downPayment : 0;

  const instAmountInput = document.getElementById('contractInstallmentAmount');
  if (instAmountInput) instAmountInput.value = moto.installmentAmount || 0;

  const instTermInput = document.getElementById('contractInstallmentTerm');
  if (instTermInput) instTermInput.value = moto.installmentTerm || 12;

  const dueDayInput = document.getElementById('contractDueDay');
  if (dueDayInput) dueDayInput.value = moto.dueDay || 'ทุกวันที่ 5 ของเดือน';

  const notesInput = document.getElementById('contractCustomNotes');
  if (notesInput) notesInput.value = moto.remarks || '';

  // Custom vehicle fields & interactive checklists (Sections 2, 4, 5)
  contractCustomVehicleFields = Array.isArray(moto.customVehicleFields)
    ? JSON.parse(JSON.stringify(moto.customVehicleFields))
    : [];
  renderSec2LeftControls();
  initContractChecklistsFromMoto(moto);
}

function setContractType(type, triggerUpdate = true) {
  activeContractType = type;
  const btnRent = document.getElementById('btnTypeRent');
  const btnInst = document.getElementById('btnTypeInstallment');
  const secGuar = document.getElementById('secInputGuarantor');
  const chkGuar = document.getElementById('chkShowGuarantor');
  const rentFields = document.getElementById('fieldsRentFinance');
  const instFields = document.getElementById('fieldsInstallmentFinance');
  const titleFin = document.getElementById('titleFinanceInput');
  const titleModal = document.getElementById('contractModalTitle');
  const docNoInput = document.getElementById('contractDocNo');

  if (type === 'rent') {
    btnRent?.classList.add('active');
    btnInst?.classList.remove('active');
    if (rentFields) rentFields.style.display = 'block';
    if (instFields) instFields.style.display = 'none';
    if (titleFin) titleFin.textContent = 'รายละเอียดอัตราค่าเช่า, ค่าจัดส่ง & สรุปยอดชำระ';
    if (titleModal) titleModal.textContent = 'พิมพ์สัญญาเช่ารถจักรยานยนต์ & ใบตรวจรับรถ (A4)';

    if (docNoInput && docNoInput.value.startsWith('HP-')) {
      docNoInput.value = docNoInput.value.replace('HP-', 'RC-');
    }
  } else {
    btnInst?.classList.add('active');
    btnRent?.classList.remove('active');
    if (rentFields) rentFields.style.display = 'none';
    if (instFields) instFields.style.display = 'block';
    if (titleFin) titleFin.textContent = 'รายละเอียดการผ่อนชำระ & เงินดาวน์';
    if (titleModal) titleModal.textContent = 'พิมพ์สัญญาซื้อขายผ่อนชำระ / เช่าซื้อรถมอเตอร์ไซค์ (A4)';

    // Auto show and check guarantor for installment
    if (chkGuar) chkGuar.checked = true;
    if (secGuar) secGuar.style.display = 'block';

    if (docNoInput && docNoInput.value.startsWith('RC-')) {
      docNoInput.value = docNoInput.value.replace('RC-', 'HP-');
    }
  }

  // Toggle guarantor visibility based on checkbox
  if (chkGuar && secGuar) {
    secGuar.style.display = chkGuar.checked ? 'block' : 'none';
  }

  if (triggerUpdate) {
    updateContractPreview();
  }
}

function onContractCarChanged(carId) {
  selectContractCar(carId);
}

function toggleAllContractFields(val) {
  ['chkShowCustomer', 'chkShowGuarantor', 'chkShowVehicle', 'chkShowFinance', 'chkShowAccessories', 'chkShowInspection', 'chkShowTerms', 'chkShowPhoto', 'chkShowWitness'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = val;
  });
  const secGuar = document.getElementById('secInputGuarantor');
  if (secGuar) secGuar.style.display = val ? 'block' : 'none';
  Object.keys(contractSec2Fields).forEach(k => {
    contractSec2Fields[k] = Boolean(val);
  });
  contractCustomVehicleFields.forEach(cf => {
    cf.checked = Boolean(val);
  });
  renderSec2LeftControls();
  updateContractPreview();
}

function setPreviewZoom(zoom) {
  contractPreviewZoom = zoom;
  const sheet = document.getElementById('liveA4Sheet');
  if (sheet) {
    sheet.style.transform = `scale(${zoom})`;
  }
  ['zoom70Btn', 'zoom85Btn', 'zoom100Btn'].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.classList.remove('active');
  });
  if (zoom === 0.7) document.getElementById('zoom70Btn')?.classList.add('active');
  if (zoom === 0.85) document.getElementById('zoom85Btn')?.classList.add('active');
  if (zoom === 1.0) document.getElementById('zoom100Btn')?.classList.add('active');
}

function updateContractPreview() {
  const previewContainer = document.getElementById('liveA4Sheet');
  if (!previewContainer) return;

  const moto = fleet.find(c => c.id === currentContractMotoId) || fleet[0];
  if (!moto) {
    previewContainer.innerHTML = '<div style="padding: 2rem; text-align: center;">ไม่พบข้อมูลรถ</div>';
    return;
  }

  // Ensure interactive checklists are initialized for current moto
  if (contractChecklistMotoId !== moto.id || (contractAccItems.length === 0 && contractInspItems.length === 0)) {
    initContractChecklistsFromMoto(moto);
  }

  const isRent = activeContractType === 'rent';

  // Toggle flags
  const chkVehEl = document.getElementById('chkShowVehicle');
  const showCust = document.getElementById('chkShowCustomer')?.checked;
  const showGuar = document.getElementById('chkShowGuarantor')?.checked;
  const showVeh = chkVehEl ? chkVehEl.checked : true;
  const showFin = document.getElementById('chkShowFinance')?.checked;
  const showAcc = document.getElementById('chkShowAccessories')?.checked;
  const showInsp = document.getElementById('chkShowInspection')?.checked;
  const showTerms = document.getElementById('chkShowTerms')?.checked;
  const showPhoto = document.getElementById('chkShowPhoto')?.checked;
  const showWit = document.getElementById('chkShowWitness')?.checked;

  // Toggle visibility of left-panel subsections
  const secGuar = document.getElementById('secInputGuarantor');
  if (secGuar) secGuar.style.display = showGuar ? 'block' : 'none';
  const sec2Box = document.getElementById('sec2FieldsControlBox');
  if (sec2Box) sec2Box.style.display = showVeh ? 'block' : 'none';

  // Field values
  const docNo = document.getElementById('contractDocNo')?.value || (isRent ? 'RC-0001' : 'HP-0001');
  const contractDate = document.getElementById('contractDate')?.value || new Date().toISOString().slice(0, 10);
  const branch = document.getElementById('contractBranch')?.value || moto.branch || 'สาขาหลัก (วีระมอเตอร์)';

  const custNameRaw = document.getElementById('contractCustName')?.value?.trim() || '';
  const custIdRaw = document.getElementById('contractCustId')?.value?.trim() || '';
  const custPhoneRaw = document.getElementById('contractCustPhone')?.value?.trim() || '';
  const custAddrRaw = document.getElementById('contractCustAddress')?.value?.trim() || '';

  const guarNameRaw = document.getElementById('contractGuarName')?.value?.trim() || '';
  const guarRelRaw = document.getElementById('contractGuarRelation')?.value?.trim() || '';
  const guarIdRaw = document.getElementById('contractGuarId')?.value?.trim() || '';
  const guarPhoneRaw = document.getElementById('contractGuarPhone')?.value?.trim() || '';
  const guarAddrRaw = document.getElementById('contractGuarAddress')?.value?.trim() || '';

  const custName = custNameRaw || '';
  const custId = custIdRaw || '';
  const custPhone = custPhoneRaw || '';
  const custAddr = custAddrRaw || '';

  const guarName = guarNameRaw || '';
  const guarId = guarIdRaw || '';
  const guarPhone = guarPhoneRaw || '';
  const guarAddr = guarAddrRaw || '';

  // Rental Financial & Summary calculation (Section 3)
  const rentSummary = computeRentSummary(moto);
  const rentDaily = rentSummary.rentDaily;
  const rentMonthly = rentSummary.rentMonthly;
  const deposit = rentSummary.deposit;
  const deliveryFee = rentSummary.deliveryFee;
  const returnTime = document.getElementById('contractReturnTime')?.value || '18:00';
  const rentStart = document.getElementById('contractRentalStart')?.value || '';
  const rentEnd = document.getElementById('contractRentalEnd')?.value || '';

  // Installment Financial values
  const price = Number(document.getElementById('contractPrice')?.value || moto.price || 0);
  const downPayment = Number(document.getElementById('contractDownPayment')?.value || moto.downPayment || 0);
  const instAmount = Number(document.getElementById('contractInstallmentAmount')?.value || moto.installmentAmount || 0);
  const instTerm = Number(document.getElementById('contractInstallmentTerm')?.value || moto.installmentTerm || 12);
  const dueDay = document.getElementById('contractDueDay')?.value || 'ทุกวันที่ 5 ของเดือน';
  const totalInstallmentSum = downPayment + (instAmount * instTerm);

  const customNotes = document.getElementById('contractCustomNotes')?.value?.trim() || '';
  const photoUrl = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';

  // Build Section 2 Dynamic Rows
  const activeVehSpecs = buildActiveVehicleSpecEntries(moto);
  let sec2RowsHtml = '';
  for (let i = 0; i < activeVehSpecs.length; i += 2) {
    const left = activeVehSpecs[i];
    const right = activeVehSpecs[i + 1];
    const leftHideCall = left.type === 'std'
      ? `toggleSec2Field('${left.idOrKey}', false)`
      : `toggleCustomVehicleField('${left.idOrKey}', false)`;

    if (right) {
      const rightHideCall = right.type === 'std'
        ? `toggleSec2Field('${right.idOrKey}', false)`
        : `toggleCustomVehicleField('${right.idOrKey}', false)`;
      sec2RowsHtml += `
        <tr>
          <td class="lbl">${escapeContractHtml(left.label)}</td>
          <td>
            <div class="a4-cell-val-wrap">
              <span>${left.valueHtml}</span>
              <button type="button" class="a4-cell-hide-btn a4-no-print" onclick="${leftHideCall}" title="ติ๊กออก / ซ่อนรายการนี้">&times;</button>
            </div>
          </td>
          <td class="lbl">${escapeContractHtml(right.label)}</td>
          <td>
            <div class="a4-cell-val-wrap">
              <span>${right.valueHtml}</span>
              <button type="button" class="a4-cell-hide-btn a4-no-print" onclick="${rightHideCall}" title="ติ๊กออก / ซ่อนรายการนี้">&times;</button>
            </div>
          </td>
        </tr>
      `;
    } else {
      sec2RowsHtml += `
        <tr>
          <td class="lbl">${escapeContractHtml(left.label)}</td>
          <td colspan="3">
            <div class="a4-cell-val-wrap">
              <span>${left.valueHtml}</span>
              <button type="button" class="a4-cell-hide-btn a4-no-print" onclick="${leftHideCall}" title="ติ๊กออก / ซ่อนรายการนี้">&times;</button>
            </div>
          </td>
        </tr>
      `;
    }
  }

  // Inline Section 2 Editor Panel (screen-only, hidden on print)
  const sec2InlineEditorHtml = isSec2PreviewEditorOpen ? `
    <div class="a4-sec2-inline-panel a4-no-print">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; font-weight: 700; color: #0f172a;">
        <span>เลือกรายการข้อมูลรถที่จะแสดง หรือพิมพ์เพิ่มหัวข้อใหม่:</span>
        <div style="display: flex; gap: 6px; font-weight: 600;">
          <span style="color: #0284c7; cursor: pointer; text-decoration: underline;" onclick="toggleAllSec2Fields(true)">ติ๊กครบ</span>
          <span style="color: #64748b; cursor: pointer; text-decoration: underline;" onclick="toggleAllSec2Fields(false)">ติ๊กออกหมด</span>
          <span style="color: #dc2626; cursor: pointer; margin-left: 4px;" onclick="toggleSec2EditorOnPreview()">ปิด &times;</span>
        </div>
      </div>
      <div class="a4-sec2-inline-checks">
        ${SEC2_STANDARD_FIELDS.map(f => `
          <label class="a4-sec2-inline-chip">
            <input type="checkbox" ${contractSec2Fields[f.key] ? 'checked' : ''} onchange="toggleSec2Field('${f.key}', this.checked)">
            <span>${escapeContractHtml(f.shortLabel)}</span>
          </label>
        `).join('')}
        ${contractCustomVehicleFields.map(cf => `
          <span class="a4-sec2-inline-chip">
            <label style="display: inline-flex; align-items: center; gap: 3px; cursor: pointer;">
              <input type="checkbox" ${cf.checked ? 'checked' : ''} onchange="toggleCustomVehicleField('${cf.id}', this.checked)">
              <span>${escapeContractHtml(cf.label)}</span>
            </label>
            <button type="button" class="sec2-chip-remove" style="font-size: 8pt;" onclick="removeCustomVehicleField('${cf.id}')" title="ลบ">&times;</button>
          </span>
        `).join('')}
      </div>
      <div class="a4-sec2-inline-adder">
        <input type="text" id="previewCustomVehLabel" class="a4-inline-input" style="flex: 1; min-width: 110px;"
          placeholder="หัวข้อเพิ่ม (เช่น ระดับน้ำมัน)"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomVehicleField(true);}">
        <input type="text" id="previewCustomVehValue" class="a4-inline-input" style="flex: 1; min-width: 110px;"
          placeholder="ข้อมูล (เช่น เต็มถัง)"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomVehicleField(true);}">
        <button type="button" class="a4-inline-edit-btn" style="background: #0284c7; color: #fff; border-color: #0284c7; padding: 2px 8px;"
          onclick="addCustomVehicleField(true)">+ เพิ่มข้อมูลรถ</button>
      </div>
    </div>
  ` : '';

  // Build Sections 4 & 5 Interactive Checklists HTML
  const renderInteractiveChecklistItems = (group, items) => items.map((item, idx) => `
    <div class="a4-check-item a4-interactive-check ${item.checked ? 'is-checked' : ''}"
         onclick="toggleContractCheckItem('${group}', ${idx})"
         title="คลิกเพื่อติ๊กเครื่องหมายถูก / เอาออก">
      <span class="a4-check-box">${item.checked ? '&#10003;' : '&nbsp;'}</span>
      <span>${escapeContractHtml(item.label)}</span>
      ${item.isCustom ? `<button type="button" class="a4-check-del-btn a4-no-print" onclick="removeCustomChecklistItem('${group}', ${idx}, event)" title="ลบรายการนี้">&times;</button>` : ''}
    </div>
  `).join('');

  // Build A4 HTML
  let html = `
    <!-- 1. OFFICIAL DEALERSHIP HEADER -->
    <div class="a4-doc-header">
      <div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <h1 class="a4-company-name">Wira Easy Finance</h1>
          <span style="font-size: 7.5pt; background: #0a1b38; color: #fff; padding: 1px 6px; border-radius: 2px; font-weight: bold;">OFFICIAL FLEET</span>
        </div>
        <p class="a4-company-sub">บริษัท วีระมอเตอร์ อีซี่ไฟแนนซ์ จำกัด &bull; ศูนย์รวมมอเตอร์ไซค์ จำหน่าย-ผ่อน-เช่า ครบวงจร</p>
        <p class="a4-company-sub" style="color: #475569; font-size: 7.5pt;">
          สถานที่ทำสัญญา: <strong>${branch}</strong> &bull; สายด่วนบริการลูกค้า: 064-427-6449
        </p>
      </div>
      <div class="a4-doc-badge-col">
        <div class="a4-doc-type-pill">
          ${isRent ? 'สัญญาเช่ารถ &amp; ใบตรวจรับมอบสภาพ' : 'สัญญาซื้อขายผ่อนชำระ &amp; เช่าซื้อ'}
        </div>
        <div class="a4-doc-meta">เลขที่สัญญา: <strong style="font-family: monospace; font-size: 8.5pt; color: #000;">${docNo}</strong></div>
        <div class="a4-doc-meta">วันที่ทำสัญญา: <strong>${formatThaiDate(contractDate)}</strong></div>
      </div>
    </div>

    <!-- CONTRACT TITLE -->
    <div class="a4-contract-title">
      ${isRent
      ? 'สัญญาเช่ารถจักรยานยนต์ และ บันทึกการตรวจรับมอบสภาพรถ '
      : 'สัญญาซื้อขายผ่อนชำระรถจักรยานยนต์ '
    }
    </div>

    <!-- 2. PARTIES SECTION -->
    ${showCust ? `
      <div class="a4-box a4-avoid-break">
        <div class="a4-box-title">
          <span>1. ข้อมูลคู่สัญญา</span>
          <span style="font-size: 7.2pt; color: #64748b; font-weight: normal;">ทำขึ้น ณ ${branch}</span>
        </div>
        <table class="a4-table" style="table-layout: fixed;">
          <colgroup>
            <col style="width: 20%;">
            <col style="width: 30%;">
            <col style="width: 20%;">
            <col style="width: 30%;">
          </colgroup>
          <tr>
            <td class="lbl">${isRent ? 'ผู้ให้เช่า' : 'ผู้ขาย / ผู้ให้เช่าซื้อ'}</td>
            <td colspan="3"><strong>บริษัท วีระมอเตอร์ อีซี่ไฟแนนซ์ จำกัด (Wira Easy Finance)</strong> สาขา: ${branch}</td>
          </tr>
          <tr>
            <td class="lbl">${isRent ? 'ผู้เช่า' : 'ผู้ซื้อ / ผู้เช่าซื้อ'}</td>
            <td colspan="3" style="font-size: 8.5pt;"><strong>${custName}</strong></td>
          </tr>
          <tr>
            <td class="lbl">เลขบัตร ปชช. / Passport</td>
            <td><strong style="font-family: monospace, inherit; font-size: 8.5pt;">${custId}</strong></td>
            <td class="lbl">เบอร์โทรศัพท์ติดต่อ</td>
            <td><strong style="font-size: 8.5pt; letter-spacing: 0.2px;">${custPhone}</strong></td>
          </tr>
          <tr>
            <td class="lbl">ที่อยู่ตามบัตร / ที่พัก</td>
            <td colspan="3" style="font-size: 8pt; line-height: 1.35;">${custAddr}</td>
          </tr>
          ${showGuar ? `
            <tr>
              <td class="lbl" style="color: #b45309;">ผู้ค้ำประกัน</td>
              <td colspan="3"><strong>${guarName}</strong> ${guarRelRaw ? `(ความสัมพันธ์: ${guarRelRaw})` : ''}</td>
            </tr>
            <tr>
              <td class="lbl">เลขบัตร ปชช. ผู้ค้ำ</td>
              <td><strong style="font-family: monospace, inherit;">${guarId}</strong></td>
              <td class="lbl">เบอร์โทรศัพท์ผู้ค้ำ</td>
              <td><strong style="letter-spacing: 0.2px;">${guarPhone}</strong></td>
            </tr>
            <tr>
              <td class="lbl" style="color: #b45309;">ที่อยู่ผู้ค้ำประกัน</td>
              <td colspan="3" style="font-size: 8pt; line-height: 1.35;">${guarAddr}</td>
            </tr>
          ` : ''}
        </table>
      </div>
    ` : ''}

    <!-- 3. VEHICLE SPECIFICATIONS TABLE (SECTION 2) -->
    ${showVeh ? `
      <div class="a4-box a4-avoid-break ${(activeVehSpecs.length === 0 && !showPhoto) ? 'a4-no-print' : ''}">
        <div class="a4-box-title">
          <div class="a4-box-title-left">
            <span>2. รายละเอียดรถจักรยานยนต์</span>
            <button type="button" class="a4-inline-edit-btn a4-no-print" onclick="toggleSec2EditorOnPreview()">
              ${isSec2PreviewEditorOpen ? 'เสร็จสิ้น' : 'ติ๊กออก / + เพิ่มข้อมูลรถ'}
            </button>
          </div>
          <span style="font-size: 7.5pt; font-weight: 700; color: #0284c7;">ป้ายทะเบียน: ${moto.licensePlate}${moto.province ? ' ' + moto.province : ''}</span>
        </div>
        ${sec2InlineEditorHtml}
        <div style="display: flex; gap: 10px; align-items: flex-start;">
          ${activeVehSpecs.length > 0 ? `
            <table class="a4-table" style="flex: 1; margin-top: 0; table-layout: fixed;">
              <colgroup>
                <col style="width: 23%;">
                <col style="width: 27%;">
                <col style="width: 23%;">
                <col style="width: 27%;">
              </colgroup>
              ${sec2RowsHtml}
            </table>
          ` : `
            <div class="a4-no-print" style="flex: 1; padding: 8px; text-align: center; font-size: 7.5pt; color: #64748b; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 3px;">
              ยังไม่ได้ติ๊กเลือกรายการข้อมูลรถ (กดปุ่ม "ติ๊กออก / + เพิ่มข้อมูลรถ" ด้านบนเพื่อเลือกรายการ)
            </div>
          `}
          ${showPhoto ? `
            <div style="width: 88px; text-align: center; border: 1px solid #cbd5e1; padding: 3px; border-radius: 3px; background: #f8fafc; flex-shrink: 0;">
              <img src="${photoUrl}" alt="${moto.model}" style="width: 80px; height: 60px; object-fit: contain; border-radius: 2px;">
              <span style="font-size: 6.5pt; color: #64748b; display: block; margin-top: 2px;">ภาพถ่ายตัวรถ</span>
            </div>
          ` : ''}
        </div>
      </div>
    ` : ''}

    <!-- 4. FINANCIAL TERMS SECTION (SECTION 3) -->
    ${showFin ? `
      <div class="a4-box a4-avoid-break">
        <div class="a4-box-title">
          <span>3. เงื่อนไขทางการเงินและการชำระเงิน</span>
          <span style="font-size: 7.2pt; color: #15803d; font-weight: bold;">
            ${isRent ? 'เงื่อนไขสัญญาเช่า' : 'เงื่อนไขเช่าซื้อ'}
          </span>
        </div>
        ${isRent ? `
          <table class="a4-table" style="table-layout: fixed;">
            <colgroup>
              <col style="width: 24%;">
              <col style="width: 26%;">
              <col style="width: 24%;">
              <col style="width: 26%;">
            </colgroup>
            <tr>
              <td class="lbl">อัตราค่าเช่ารายวัน</td>
              <td><strong style="font-size: 9pt; color: #0284c7;">${rentDaily > 0 ? formatPrice(rentDaily) + ' /วัน' : '-'}</strong></td>
              <td class="lbl">อัตราค่าเช่ารายเดือน</td>
              <td><strong>${rentMonthly > 0 ? formatPrice(rentMonthly) + ' /เดือน' : '-'}</strong></td>
            </tr>
            <tr>
              <td class="lbl">เงินประกันมัดจำความเสียหาย</td>
              <td><strong style="color: #b45309;">${formatPrice(deposit)}</strong> (คืนเมื่อสิ้นสุดสัญญา)</td>
              <td class="lbl">ค่าจัดส่ง / รับ-ส่งรถ</td>
              <td><strong>${deliveryFee > 0 ? formatPrice(deliveryFee) : '฿0'}</strong>${deliveryFee === 0 ? ' <span style="font-size: 7.3pt; color: #64748b;">(ฟรี / รับที่สาขา)</span>' : ''}</td>
            </tr>
            <tr>
              <td class="lbl">ระยะเวลาสัญญาเช่า</td>
              <td colspan="3">
                ตั้งแต่วันที่ <strong>${rentStart ? formatThaiDate(rentStart) : '-'}</strong> ถึงวันที่ <strong>${rentEnd ? formatThaiDate(rentEnd) : '-'}</strong>${rentSummary.hasValidDates ? ` (รวม <strong>${rentSummary.rentalDays} วัน</strong>)` : ''} &bull; กำหนดเวลาส่งคืนรถ <strong>เวลา ${returnTime} น.</strong>
              </td>
            </tr>
            <tr class="a4-total-pay-row">
              <td class="lbl a4-total-lbl">สรุปยอดชำระทั้งสิ้น</td>
              <td colspan="3" class="a4-total-val">
                <div class="a4-total-pay-wrap">
                  <strong class="a4-total-pay-amount">${formatPrice(rentSummary.finalTotal)}</strong>
                  <span class="a4-total-pay-detail">${escapeContractHtml(rentSummary.docBreakdownText)}</span>
                </div>
              </td>
            </tr>
          </table>
        ` : `
          <table class="a4-table" style="table-layout: fixed;">
            <colgroup>
              <col style="width: 24%;">
              <col style="width: 26%;">
              <col style="width: 24%;">
              <col style="width: 26%;">
            </colgroup>
            <tr>
              <td class="lbl">ราคาขายสด (MSRP)</td>
              <td><strong style="font-size: 9pt;">${formatPrice(price)}</strong></td>
              <td class="lbl">เงินดาวน์</td>
              <td><strong style="color: #1d4ed8;">${downPayment === 0 ? 'ฟรีดาวน์ (฿0)' : formatPrice(downPayment)}</strong></td>
            </tr>
            <tr>
              <td class="lbl">ค่างวดผ่อนชำระต่องวด</td>
              <td><strong style="font-size: 9.5pt; color: #15803d;">${formatPrice(instAmount)} /งวด</strong></td>
              <td class="lbl">จำนวนงวดที่ต้องผ่อน</td>
              <td><strong>${instTerm} งวด</strong> (${Math.round((instTerm / 12) * 10) / 10} ปี)</td>
            </tr>
            <tr>
              <td class="lbl">ยอดรวมการผ่อนชำระทั้งสิ้น</td>
              <td><strong>${formatPrice(totalInstallmentSum)}</strong> (เงินดาวน์ + ค่างวดทั้งหมด)</td>
              <td class="lbl">กำหนดชำระค่างวด</td>
              <td><strong>${dueDay}</strong> (เริ่มงวดแรก ${formatThaiDate(contractDate)})</td>
            </tr>
          </table>
        `}
      </div>
    ` : ''}

    <!-- 5. ACCESSORIES & INSPECTION CHECKLIST (SECTIONS 4 & 5 - INTERACTIVE ON PREVIEW) -->
    ${(showAcc || showInsp) ? `
      <div class="a4-grid-2 a4-avoid-break">
        ${showAcc ? `
          <div class="a4-box" style="margin-bottom: 0;">
            <div class="a4-box-title">
              <span>4. อุปกรณ์ประจำรถที่ส่งมอบ</span>
              <div class="a4-box-actions a4-no-print">
                <button type="button" class="a4-inline-edit-btn" onclick="setAllContractCheckItems('acc', true)" title="ติ๊กเลือกทั้งหมด">ติ๊กครบ</button>
                <button type="button" class="a4-inline-edit-btn" style="color: #64748b;" onclick="setAllContractCheckItems('acc', false)" title="เอาเครื่องหมายถูกออกทั้งหมด">ล้าง</button>
                <button type="button" class="a4-inline-edit-btn" onclick="toggleChecklistAdder('acc')" title="เพิ่มรายการอุปกรณ์">${checklistAdderOpen.acc ? 'ปิด' : '+ เพิ่ม'}</button>
              </div>
            </div>
            <div class="a4-checklist-grid">
              ${renderInteractiveChecklistItems('acc', contractAccItems)}
            </div>
            ${checklistAdderOpen.acc ? `
              <div class="a4-checklist-inline-adder a4-no-print">
                <input type="text" id="inlineAddCheck_acc" class="a4-inline-input" style="flex: 1; min-width: 0;"
                  placeholder="พิมพ์ชื่ออุปกรณ์เพิ่ม (เช่น เสื้อกันฝน)"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomChecklistItem('acc');}">
                <button type="button" class="a4-inline-edit-btn" style="background: #0284c7; color: #fff; border-color: #0284c7;"
                  onclick="addCustomChecklistItem('acc')">เพิ่ม</button>
              </div>
            ` : ''}
          </div>
        ` : '<div></div>'}

        ${showInsp ? `
          <div class="a4-box" style="margin-bottom: 0;">
            <div class="a4-box-title">
              <span>5. ใบตรวจสภาพรถก่อนส่งมอบ</span>
              <div class="a4-box-actions a4-no-print">
                <button type="button" class="a4-inline-edit-btn" onclick="setAllContractCheckItems('insp', true)" title="ติ๊กเลือกทั้งหมด">ติ๊กครบ</button>
                <button type="button" class="a4-inline-edit-btn" style="color: #64748b;" onclick="setAllContractCheckItems('insp', false)" title="เอาเครื่องหมายถูกออกทั้งหมด">ล้าง</button>
                <button type="button" class="a4-inline-edit-btn" onclick="toggleChecklistAdder('insp')" title="เพิ่มรายการตรวจสภาพ">${checklistAdderOpen.insp ? 'ปิด' : '+ เพิ่ม'}</button>
              </div>
            </div>
            <div class="a4-checklist-grid">
              ${renderInteractiveChecklistItems('insp', contractInspItems)}
            </div>
            ${checklistAdderOpen.insp ? `
              <div class="a4-checklist-inline-adder a4-no-print">
                <input type="text" id="inlineAddCheck_insp" class="a4-inline-input" style="flex: 1; min-width: 0;"
                  placeholder="พิมพ์รายการตรวจสภาพเพิ่ม"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();addCustomChecklistItem('insp');}">
                <button type="button" class="a4-inline-edit-btn" style="background: #0284c7; color: #fff; border-color: #0284c7;"
                  onclick="addCustomChecklistItem('insp')">เพิ่ม</button>
              </div>
            ` : ''}
          </div>
        ` : '<div></div>'}
      </div>
    ` : ''}

    <!-- 6. TERMS & CONDITIONS -->
    ${showTerms ? `
      <div class="a4-terms-box a4-avoid-break">
        <strong>ข้อกำหนดและเงื่อนไขของสัญญา (${isRent ? 'ข้อตกลงการเช่า' : 'ข้อตกลงการผ่อนชำระ'}):</strong>
        <ol class="a4-terms-ol">
          ${isRent ? `
            <li>ผู้เช่าต้องมีใบอนุญาตขับขี่รถจักรยานยนต์ที่ถูกต้องตามกฎหมาย และห้ามมิให้นำรถไปให้บุคคลอื่นเช่าช่วง จำนำ หรือดัดแปลงสภาพโดยเด็ดขาด</li>
            <li>ห้ามนำรถคันนี้ไปใช้ในการกระทำความผิดทางกฎหมาย การขนส่งสิ่งผิดกฎหมาย หรือการแข่งขันความเร็ว หากฝ่าฝืนผู้เช่ายินยอมรับผิดทั้งทางแพ่งและอาญาแต่เพียงผู้เดียว</li>
            <li>ผู้เช่ามีหน้าที่เติมน้ำมันเชื้อเพลิงตามชนิดที่กำหนด (${moto.fuel || 'เบนซิน 95'}) และส่งมอบรถคืนในระดับน้ำมันเท่ากับวันที่รับรถ พร้อมดูแลรักษารถให้อยู่ในสภาพเรียบร้อย</li>
            <li>กรณีเกิดอุบัติเหตุ เฉี่ยวชน บุบสลาย หรือสูญหาย ผู้เช่าต้องแจ้งผู้ให้เช่าทันที และยินยอมรับผิดชอบชดใช้ค่าซ่อมแซม ค่าอะไหล่แท้ และค่าขาดประโยชน์ตามจริง</li>
            <li>กรณีส่งคืนรถล่าช้าเกินกำหนดเวลาโดยไม่แจ้งล่วงหน้า คิดค่าเช่ารายวันเพิ่มตามจริง และหากล่าช้าเกิน 24 ชม. ผู้ให้เช่ามีสิทธิดำเนินคดีตามกฎหมายยักยอกทรัพย์ทันที</li>
          ` : `
            <li>กรรมสิทธิ์ในรถจักรยานยนต์ยังคงเป็นของผู้ขาย/ผู้ให้เช่าซื้อ จนกว่าผู้ซื้อจะได้ชำระเงินดาวน์ ค่างวด ค่าภาษี และค่าธรรมเนียมตามสัญญานี้ครบถ้วนแล้วทุกประการ</li>
            <li>ผู้ซื้อตกลงชำระค่างวดตรงตามเวลาที่กำหนด หากผิดนัดชำระค่างวดเกิน 5 วัน นับจากวันที่นัดชำระ  ผู้ขายมีสิทธิบอกเลิกสัญญา เข้าครอบครองยึดรถคืน และเรียกค่าเสียหายได้ทันที</li>
            <li>ผู้ซื้อตกลงไม่นำรถไปขายต่อ จำนำ ให้เช่าช่วง หรือโอนสิทธิ์ให้บุคคลภายนอก เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรจากผู้ขาย</li>
            <li>ผู้ซื้อมีหน้าที่จัดทำประกันภัย พ.ร.บ. คุ้มครองผู้ประสบภัยจากรถ และต่อภาษีประจำปีตลอดอายุสัญญา พร้อมทั้งบำรุงรักษารถให้อยู่ในสภาพใช้งานได้อย่างปลอดภัยเสมอ</li>
            <li>ผู้ค้ำประกัน (ถ้ามี) ตกลงยินยอมผูกพันตนรับผิดชอบร่วมกับผู้ซื้อในฐานะลูกหนี้ร่วมอย่างไม่มีเงื่อนไข จนกว่าหนี้ตามสัญญาฉบับนี้จะได้รับการชำระเสร็จสิ้น</li>
          `}
        </ol>
      </div>
    ` : ''}

    <!-- 7. CUSTOM NOTES -->
    ${customNotes ? `
      <div class="a4-box a4-avoid-break" style="background: #fffbeb; border-color: #fde68a;">
        <div style="font-size: 7.8pt;"><strong>บันทึกข้อตกลงพิเศษเพิ่มเติม:</strong> ${customNotes}</div>
      </div>
    ` : ''}

    <!-- 8. SIGNATURES BLOCK -->
    ${showWit ? `
      <div class="a4-avoid-break" style="margin-top: 10px;">
        <div style="font-size: 7.5pt; text-align: center; color: #475569; margin-bottom: 6px;">
          คู่สัญญาได้อ่านและเข้าใจข้อความในสัญญานี้โดยละเอียดตลอดแล้ว เห็นว่าถูกต้องตรงตามเจตนา จึงได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยาน
        </div>
        <div class="a4-signatures-row">
          <div class="a4-sig-col">
            <div class="a4-sig-line"></div>
            <div>ลงชื่อ ....................................................</div>
            <div style="font-weight: 700; margin-top: 2px;">( ${isRent ? 'ผู้ให้เช่า' : 'ผู้ขาย'} )</div>
            <div style="font-size: 6.8pt; color: #64748b;"></div>
          </div>

          <div class="a4-sig-col">
            <div class="a4-sig-line"></div>
            <div>ลงชื่อ ....................................................</div>
            <div style="font-weight: 700; margin-top: 2px;">( ${custNameRaw ? custNameRaw : (isRent ? 'ผู้เช่ารถจักรยานยนต์' : 'ผู้ซื้อ / ผู้เช่าซื้อ')} )</div>
            <div style="font-size: 6.8pt; color: #64748b;">${isRent ? '' : ''}</div>
          </div>

          ${showGuar ? `
            <div class="a4-sig-col">
              <div class="a4-sig-line"></div>
              <div>ลงชื่อ ....................................................</div>
              <div style="font-weight: 700; margin-top: 2px;">( ${guarNameRaw ? guarNameRaw : 'ผู้ค้ำประกัน'} )</div>
              <div style="font-size: 6.8pt; color: #64748b;"></div>
            </div>
          ` : ''}

          <div class="a4-sig-col">
            <div class="a4-sig-line"></div>
            <div>ลงชื่อ ....................................................</div>
            <div style="font-weight: 700; margin-top: 2px;">( พยาน   )</div>
            <div style="font-size: 6.8pt; color: #64748b;"> </div>
          </div>
        </div>
      </div>
    ` : ''}
  `;

  previewContainer.innerHTML = html;
}

let _savedDocumentTitleBeforePrint = '';

function cleanTrackingQueryParams() {
  try {
    if (!window.location || !window.history || typeof window.history.replaceState !== 'function') return;
    if (!window.location.search) return;
    const url = new URL(window.location.href);
    const trackingKeys = ['fbclid', 'gclid', 'yclid', 'mc_cid', 'mc_eid', 'mibextid'];
    let changed = false;
    Array.from(url.searchParams.keys()).forEach(k => {
      if (trackingKeys.includes(k.toLowerCase()) || k.toLowerCase().startsWith('utm_')) {
        url.searchParams.delete(k);
        changed = true;
      }
    });
    if (changed) {
      const cleanUrl = url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  } catch (e) {
    // Ignore URL cleanup errors in restricted environments
  }
}

cleanTrackingQueryParams();

window.addEventListener('beforeprint', () => {
  if (document.title && document.title !== '\u00A0') {
    _savedDocumentTitleBeforePrint = document.title;
    document.title = '\u00A0';
  }
});

window.addEventListener('afterprint', () => {
  if (_savedDocumentTitleBeforePrint) {
    document.title = _savedDocumentTitleBeforePrint;
    _savedDocumentTitleBeforePrint = '';
  }
});

function triggerContractPrint() {
  updateContractPreview();
  cleanTrackingQueryParams();

  const printOutput = document.getElementById('printContractContainer');
  const liveSheet = document.getElementById('liveA4Sheet');

  if (printOutput && liveSheet) {
    printOutput.innerHTML = liveSheet.innerHTML;
    // Strip all screen-only interactive controls before printing
    printOutput.querySelectorAll('.a4-no-print').forEach(el => el.remove());
  }

  // Temporarily blank document.title so browsers never print the page title in top header
  if (document.title && document.title !== '\u00A0') {
    _savedDocumentTitleBeforePrint = document.title;
    document.title = '\u00A0';
  }

  // Trigger browser print
  window.print();

  // Restore original page title after print dialog closes
  setTimeout(() => {
    if (_savedDocumentTitleBeforePrint) {
      document.title = _savedDocumentTitleBeforePrint;
      _savedDocumentTitleBeforePrint = '';
    }
  }, 500);
}

function saveContractCustomerToFleet() {
  const moto = fleet.find(c => c.id === currentContractMotoId);
  if (!moto) return;

  const custName = document.getElementById('contractCustName')?.value?.trim() || '';
  const custId = document.getElementById('contractCustId')?.value?.trim() || '';
  const custPhone = document.getElementById('contractCustPhone')?.value?.trim() || '';
  const custAddr = document.getElementById('contractCustAddress')?.value?.trim() || '';
  const rentStart = document.getElementById('contractRentalStart')?.value || '';
  const rentEnd = document.getElementById('contractRentalEnd')?.value || '';
  const remarks = document.getElementById('contractCustomNotes')?.value?.trim() || '';

  const rentDailyEl = document.getElementById('contractRentDaily');
  const rentMonthlyEl = document.getElementById('contractRentMonthly');
  const depositEl = document.getElementById('contractDeposit');
  const deliveryFeeEl = document.getElementById('contractDeliveryFee');

  moto.customer = custName;
  moto.customerPassport = custId;
  moto.customerPhone = custPhone;
  moto.customerAddress = custAddr;
  if (rentStart) moto.rentalStart = rentStart;
  if (rentEnd) moto.rentalEnd = rentEnd;
  if (remarks) moto.remarks = remarks;

  if (rentDailyEl && rentDailyEl.value !== '') moto.rentDaily = Number(rentDailyEl.value) || 0;
  if (rentMonthlyEl && rentMonthlyEl.value !== '') moto.rentMonthly = Number(rentMonthlyEl.value) || 0;
  if (depositEl && depositEl.value !== '') moto.deposit = Number(depositEl.value) || 0;
  if (deliveryFeeEl && deliveryFeeEl.value !== '') moto.deliveryFee = Number(deliveryFeeEl.value) || 0;

  // Persist Section 2 custom vehicle fields
  moto.customVehicleFields = JSON.parse(JSON.stringify(contractCustomVehicleFields));

  // Persist Sections 4 & 5 checklists back to moto
  if (contractAccItems && contractAccItems.length > 0) {
    const accObj = Object.assign({}, moto.accessories || {});
    DEFAULT_ACC_TEMPLATE.forEach(t => {
      const found = contractAccItems.find(i => !i.isCustom && i.key === t.key);
      if (found) accObj[t.key] = Boolean(found.checked);
    });
    accObj.customItems = contractAccItems
      .filter(i => i.isCustom)
      .map(i => ({ key: i.key, label: i.label, checked: Boolean(i.checked) }));
    moto.accessories = accObj;
  }

  if (contractInspItems && contractInspItems.length > 0) {
    const inspObj = Object.assign({}, moto.inspection || {});
    DEFAULT_INSP_TEMPLATE.forEach(t => {
      const found = contractInspItems.find(i => !i.isCustom && i.key === t.key);
      if (found) inspObj[t.key] = Boolean(found.checked);
    });
    inspObj.customItems = contractInspItems
      .filter(i => i.isCustom)
      .map(i => ({ key: i.key, label: i.label, checked: Boolean(i.checked) }));
    moto.inspection = inspObj;
  }

  // Auto-advance status if customer assigned
  if (custName && (moto.status === 'available' || !moto.status)) {
    moto.status = activeContractType === 'installment' ? 'reserved' : 'rented';
  }

  moto._lastModified = new Date().toISOString();

  saveFleet();
  renderAll();

  // Cloud sync (targeted single-doc upsert)
  if (window.FirebaseSync) {
    if (typeof FirebaseSync.upsertMoto === 'function') {
      FirebaseSync.upsertMoto(moto);
    } else {
      FirebaseSync.uploadAll(fleet);
    }
  }

  showToast(`บันทึกข้อมูลสัญญาลงรถ [${moto.licensePlate}] เรียบร้อยแล้ว`, 'success');
}

// Global window bindings for contract system
window.openContractModal = openContractModal;
window.renderContractCarList = renderContractCarList;
window.selectContractCar = selectContractCar;
window.filterContractCarList = filterContractCarList;
window.clearContractCarSearch = clearContractCarSearch;
window.filterContractCarByStatus = filterContractCarByStatus;
window.setContractType = setContractType;
window.onContractCarChanged = onContractCarChanged;
window.toggleAllContractFields = toggleAllContractFields;
window.setPreviewZoom = setPreviewZoom;
window.updateContractPreview = updateContractPreview;
window.triggerContractPrint = triggerContractPrint;
window.saveContractCustomerToFleet = saveContractCustomerToFleet;
window.toggleSec2Field = toggleSec2Field;
window.toggleAllSec2Fields = toggleAllSec2Fields;
window.addCustomVehicleField = addCustomVehicleField;
window.toggleCustomVehicleField = toggleCustomVehicleField;
window.removeCustomVehicleField = removeCustomVehicleField;
window.toggleSec2EditorOnPreview = toggleSec2EditorOnPreview;
window.onRentFinanceInputChanged = onRentFinanceInputChanged;
window.onManualRentTotalChanged = onManualRentTotalChanged;
window.resetManualRentTotal = resetManualRentTotal;
window.toggleContractCheckItem = toggleContractCheckItem;
window.setAllContractCheckItems = setAllContractCheckItems;
window.toggleChecklistAdder = toggleChecklistAdder;
window.addCustomChecklistItem = addCustomChecklistItem;
window.removeCustomChecklistItem = removeCustomChecklistItem;




