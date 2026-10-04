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
    purpose: "rent",
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
    category: "รถครอบครัว (Family/Moped)",
    cc: "125 cc",
    year: "2024",
    purpose: "both",
    licensePlate: "5กม-1122 พัทยา",
    vin: "MLHJA5401TB066491",
    engineNo: "JA54E-7821034",
    exteriorColor: "เทาด้านเบาะแดง (Matte Gray/Red)",
    mileage: 6200,
    branch: "สาขาพัทยา",
    rentDaily: 250,
    rentMonthly: 4500,
    deposit: 1000,
    price: 55200,
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

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  // Start Firebase sync immediately
  initFirebaseSync();
  loadFleet();
  setupEventListeners();
  setupPhotoDropAndPaste();
  setupFirebaseEvents();
  updateBranchOptions();
  updatePrintDate();
  renderAll();
});

function loadFleet() {
  const isFirebaseInCode = window.FirebaseSync && FirebaseSync.isConfiguredInCode();

  if (isFirebaseInCode) {
    // When Firebase is configured in code, cloud is our Single Source of Truth!
    // Try to load from the latest synced Firebase cache
    const cached = FirebaseSync.getCachedFleet ? FirebaseSync.getCachedFleet() : null;

    if (cached && Array.isArray(cached) && cached.length > 0) {
      // Instant render from latest Firebase cache! Zero delay!
      fleet = cached;
      isInitialCloudLoading = false;
    } else {
      // First visit on this device: do NOT display stale mock data!
      // Set empty fleet and show shimmer skeleton cards until Firestore snapshot arrives (~200ms)
      fleet = [];
      isInitialCloudLoading = true;
    }
  } else {
    // Legacy offline mode (no Firebase keys configured in code)
    const stored = localStorage.getItem('honda_motorcycle_fleet');
    if (stored) {
      try {
        fleet = JSON.parse(stored);
      } catch (e) {
        fleet = [...DEFAULT_MOTO_FLEET];
        saveFleet();
      }
    } else {
      fleet = [...DEFAULT_MOTO_FLEET];
      saveFleet();
    }
  }
}

function saveFleet() {
  localStorage.setItem('honda_motorcycle_fleet', JSON.stringify(fleet));
  if (window.FirebaseSync && FirebaseSync.setCachedFleet) {
    FirebaseSync.setCachedFleet(fleet);
  }
}

function updateBranchOptions() {
  const defaultBranches = [
    "สาขาหลัก (โชว์รูมพระราม 9)",
    "สาขาเชียงใหม่ (นิมมาน/ท่าแพ)",
    "สาขาภูเก็ต (ป่าตอง/ในเมือง)",
    "สาขาพัทยา"
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

  // Photo file upload in modal
  document.getElementById('formPhotoUpload').addEventListener('change', handlePhotoFileUpload);

  // Edit from Detail modal
  document.getElementById('btnEditFromDetail').addEventListener('click', () => {
    if (currentDetailMoto) {
      closeModal('carDetailModal');
      openCarModal(currentDetailMoto.id);
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

      // Real-time Cloud Sync
      if (window.FirebaseSync) {
        FirebaseSync.uploadAll(fleet);
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
      const matchModel = moto.model && moto.model.toLowerCase().includes(search);
      const matchVin = moto.vin && moto.vin.toLowerCase().includes(search);
      const matchCust = moto.customer && moto.customer.toLowerCase().includes(search);
      const matchPhone = moto.customerPhone && moto.customerPhone.toLowerCase().includes(search);
      const matchColor = moto.exteriorColor && moto.exteriorColor.toLowerCase().includes(search);
      const matchGps = (moto.gpsImei && moto.gpsImei.toLowerCase().includes(search)) ||
        (moto.gpsUrl && moto.gpsUrl.toLowerCase().includes(search));

      if (!matchPlate && !matchModel && !matchVin && !matchCust && !matchPhone && !matchColor && !matchGps) {
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

// Status Helper Definitions
const STATUS_CONFIG = {
  available: { label: "ว่าง", class: "status-available", icon: "🟢" },
  rented: { label: "กำลังเช่า", class: "status-rented", icon: "🔵" },
  reserved: { label: "กำลังผ่อน", class: "status-reserved", icon: "🟡" },
  check: { label: "รอตรวจส่งคืน", class: "status-check", icon: "🟣" },
  maintenance: { label: "ซ่อมบำรุง/ถ่ายน้ำมัน", class: "status-maintenance", icon: "🔴" },
  sold: { label: "ขายแล้ว", class: "status-sold", icon: "⚪" }
};

function formatPrice(num) {
  return '฿' + Number(num || 0).toLocaleString('th-TH');
}

function getPurposeBadge(purpose) {
  if (purpose === 'rent') return `<span class="purpose-badge purpose-rent">🛵 สำหรับเช่า</span>`;
  if (purpose === 'sale') return `<span class="purpose-badge purpose-sale">🏷️ สำหรับขาย</span>`;
  return `<span class="purpose-badge purpose-both">🛵🏷️ ขายและเช่า</span>`;
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
            ${moto.gpsImei || moto.gpsUrl ? '<span class="gps-pulse-dot"></span> <span>📍 GPSDD</span>' : '<span>🛰️ เพิ่ม GPS</span>'}
          </button>

          <!-- License Plate Badge -->
          <div class="plate-badge">
            <span>🛵</span>
            <span>${moto.licensePlate}</span>
          </div>

          <div class="photo-count-badge">
            <span>📷 ${photoCount} รูป</span>
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
                <span class="price-rent-val">${formatPrice(moto.rentDaily)}<span style="font-size: 0.7rem; font-weight: normal; color: var(--text-muted);">/วัน</span></span>
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
                <span style="font-size: 1rem; font-weight: 700; color: var(--navy-800);">${formatPrice(moto.deposit)}</span>
              </div>
            ` : ''}
          </div>

          <!-- Specs Info Grid -->
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
            <div style="background: var(--cyan-50); padding: 0.45rem 0.65rem; border-radius: var(--radius-sm); font-size: 0.75rem; margin-bottom: 0.85rem; border: 1px solid rgba(0, 153, 229, 0.25);">
              <span style="color: var(--cyan-500); font-weight: 700;">👤 ผู้เช่า/ผู้ซื้อ:</span> <strong>${moto.customer}</strong>
              <div style="font-size: 0.7rem; color: var(--text-muted); display: flex; justify-content: space-between;">
                <span>📞 ${moto.customerPhone || '-'}</span>
                ${moto.rentalEnd ? `<span>คืนรถ: ${moto.rentalEnd}</span>` : ''}
              </div>
            </div>
          ` : ''}

          <!-- Footer Actions -->
          <div class="card-footer">
            <!-- Quick Status Change -->
            <select class="card-quick-status" onchange="quickUpdateStatus('${moto.id}', this.value)" title="เปลี่ยนสถานะรถด่วน">
              <option value="available" ${moto.status === 'available' ? 'selected' : ''}>🟢 ว่าง</option>
              <option value="rented" ${moto.status === 'rented' ? 'selected' : ''}>🔵 กำลังเช่า</option>
              <option value="reserved" ${moto.status === 'reserved' ? 'selected' : ''}>🟡 กำลังผ่อน</option>
              <option value="check" ${moto.status === 'check' ? 'selected' : ''}>🟣 รอตรวจส่งคืน</option>
              <option value="maintenance" ${moto.status === 'maintenance' ? 'selected' : ''}>🔴 ซ่อม/ถ่ายน้ำมัน</option>
              <option value="sold" ${moto.status === 'sold' ? 'selected' : ''}>⚪ ขายแล้ว</option>
            </select>

            <div class="card-action-btns">
              <button class="btn-card-icon btn-gps-icon" onclick="openGpsTracking('${moto.id}', event)" title="เปิดดูตำแหน่ง GPSDD ทันที">
                🛰️
              </button>
              <button class="btn-card-icon" onclick="copyPlate('${moto.licensePlate}')" title="คัดลอกป้ายทะเบียน">
                📋
              </button>
              <button class="btn-card-icon" onclick="openCarModal('${moto.id}')" title="แก้ไขข้อมูล">
                ✏️
              </button>
              <button class="btn-card-detail" onclick="openCarDetail('${moto.id}')">
                ดูข้อมูล &rarr;
              </button>
            </div>
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
          <div style="font-weight: 700; color: #111827; font-size: 0.85rem;">🛵 ${moto.licensePlate}</div>
          <div class="vin-code" style="margin-top: 3px;">
            ${moto.vin}
            <button class="copy-btn" onclick="copyPlate('${moto.vin}')" title="คัดลอกเลขคอ">📄</button>
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
          ${moto.rentDaily ? `<div style="font-weight: 700; color: var(--cyan-500);">${formatPrice(moto.rentDaily)}/วัน</div>` : ''}
          ${moto.price ? `<div style="font-size: 0.75rem; color: var(--navy-900); font-weight: 600;">ขาย: ${formatPrice(moto.price)}</div>` : ''}
        </td>
        <td>
          <span class="status-pill ${statusInfo.class}">
            <span class="status-dot"></span>
            ${statusInfo.label}
          </span>
        </td>
        <td>
          ${moto.customer ? `
            <div style="font-weight: 600; color: var(--navy-900);">👤 ${moto.customer}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">📞 ${moto.customerPhone || '-'}</div>
          ` : `
            <span style="color: var(--text-light); font-size: 0.75rem;">(ว่างพร้อมบริการ)</span>
          `}
        </td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 0.35rem; justify-content: center;">
            <button class="btn-card-icon btn-gps-icon" onclick="openGpsTracking('${moto.id}', event)" title="เปิดดูตำแหน่ง GPSDD">
              🛰️
            </button>
            <button class="btn-card-icon" onclick="openCarDetail('${moto.id}')" title="ดูสัญญา & พิมพ์ใบตรวจ">
              👁️
            </button>
            <button class="btn-card-icon" onclick="openCarModal('${moto.id}')" title="แก้ไขข้อมูล">
              ✏️
            </button>
            <button class="btn-card-icon" style="color: #ef4444;" onclick="deleteMoto('${moto.id}')" title="ลบข้อมูล">
              🗑️
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
                <span>🛵 ${moto.licensePlate}</span>
                <span style="display: flex; gap: 0.35rem; align-items: center;">
                  ${moto.gpsImei || moto.gpsUrl ? `
                    <span class="kanban-gps-badge" onclick="openGpsTracking('${moto.id}', event)" title="ดูตำแหน่ง GPSDD">🛰️ GPS</span>
                  ` : ''}
                  <span>${moto.cc}</span>
                </span>
              </div>
              <div style="display: flex; gap: 0.6rem; align-items: center;">
                <img src="${coverPhoto}" style="width: 50px; height: 38px; border-radius: 4px; object-fit: cover;">
                <div>
                  <div class="kanban-car-name">${moto.brand} ${moto.model}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${moto.exteriorColor}</div>
                </div>
              </div>
              <div class="kanban-card-footer">
                <span style="font-weight: 700; color: var(--cyan-500); font-size: 0.82rem;">${formatPrice(moto.rentDaily)}/วัน</span>
                <span style="font-size: 0.72rem; color: var(--navy-900); font-weight: 600;">คลิกดู &rarr;</span>
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

// ==================== MODAL LOGIC (ADD / EDIT) ====================
function openCarModal(motoId = null) {
  const form = document.getElementById('vehicleForm');
  if (form) form.reset();
  formPhotos = [];

  const titleEl = document.getElementById('carModalTitle');
  const idEl = document.getElementById('carId');

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = (val !== undefined && val !== null) ? val : '';
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

    setVal('formPurpose', moto.purpose || 'both');
    setVal('formBrand', moto.brand);
    setVal('formModel', moto.model);
    setVal('formCategory', moto.category);
    setVal('formCc', moto.cc || '160 cc');
    setVal('formYear', moto.year);

    setVal('formLicensePlate', moto.licensePlate);
    setVal('formVin', moto.vin);
    setVal('formEngineNo', moto.engineNo || '');
    setVal('formExteriorColor', moto.exteriorColor);
    setVal('formFuel', moto.fuel || 'เบนซิน 95');
    setVal('formMileage', moto.mileage || 0);
    setVal('formBranch', moto.branch);

    setVal('formRentDaily', moto.rentDaily || '');
    setVal('formRentMonthly', moto.rentMonthly || '');
    setVal('formDeposit', moto.deposit || '');
    setVal('formPrice', moto.price || '');
    setVal('formStatus', moto.status);

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

    setVal('formPurpose', 'both');
    setVal('formBrand', 'Honda');
    setVal('formModel', '');
    setVal('formCategory', 'พรีเมียม ออโตเมติก (Maxi-Scooter)');
    setVal('formCc', '160 cc');
    setVal('formYear', new Date().getFullYear().toString());
    setVal('formLicensePlate', '');
    setVal('formVin', '');
    setVal('formEngineNo', '');
    setVal('formExteriorColor', '');
    setVal('formFuel', 'เบนซิน 95');
    setVal('formMileage', 500);
    setVal('formBranch', 'สาขาหลัก (โชว์รูมพระราม 9)');
    setVal('formRentDaily', '');
    setVal('formRentMonthly', '');
    setVal('formDeposit', '');
    setVal('formPrice', '');
    setVal('formStatus', 'available');
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

  renderFormPhotosPreview();
  openModal('carFormModal');
}

function handleFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('carId')?.value || '';
  const isEditing = Boolean(id);

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
  const vin = getVal('formVin').toUpperCase();

  const motoData = {
    id: isEditing ? id : 'MOTO-' + Date.now().toString().slice(-6),
    brand: getVal('formBrand', 'Honda'),
    model: getVal('formModel'),
    category: getVal('formCategory', 'พรีเมียม ออโตเมติก (Maxi-Scooter)'),
    cc: getVal('formCc', '160 cc'),
    year: getVal('formYear', new Date().getFullYear().toString()),
    purpose: getVal('formPurpose', 'both'),
    licensePlate: plate,
    vin: vin,
    engineNo: getVal('formEngineNo').toUpperCase(),
    exteriorColor: getVal('formExteriorColor'),
    fuel: getVal('formFuel', 'เบนซิน 95'),
    mileage: getNum('formMileage', 0),
    branch: getVal('formBranch', 'สาขาหลัก (โชว์รูมพระราม 9)'),
    rentDaily: getNum('formRentDaily', 0),
    rentMonthly: getNum('formRentMonthly', 0),
    deposit: getNum('formDeposit', 0),
    price: getNum('formPrice', 0),
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
    photos: formPhotos.length > 0 ? formPhotos : ['assets/images/forza_350.jpg']
  };

  if (isEditing) {
    const idx = fleet.findIndex(c => c.id === id);
    if (idx !== -1) {
      fleet[idx] = motoData;
      showToast(`อัปเดตข้อมูลมอเตอร์ไซค์ ${motoData.model} (${motoData.licensePlate}) สำเร็จ`, 'success');
    }
  } else {
    fleet.unshift(motoData);
    showToast(`คีย์รับรถมอเตอร์ไซค์เข้าสต็อคสำเร็จ: ${motoData.model}`, 'gold');
  }

  saveFleet();
  updateBranchOptions();
  closeModal('carFormModal');
  renderAll();

  // Real-time Cloud Sync
  if (window.FirebaseSync) {
    FirebaseSync.upsertMoto(motoData);
  }
}

// ==================== PHOTO MANAGEMENT ====================
function promptImageUrl() {
  const url = prompt('กรุณาวางลิงก์รูปภาพ (URL เช่น https://... หรือ data:image/...):');
  if (url && url.trim()) {
    formPhotos.push(url.trim());
    renderFormPhotosPreview();
    showToast('เพิ่มรูปภาพจากลิงก์เรียบร้อยแล้ว', 'success');
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
      showToast(`วางรูปภาพจากคลิปบอร์ด ${imageFiles.length} รูปเรียบร้อย`, 'success');
    }
  });
}

function processImageFiles(files) {
  files.forEach(file => {
    if (!file.type.startsWith('image/')) return;
    if (file.size > 8 * 1024 * 1024) {
      alert(`รูปภาพ ${file.name} มีขนาดใหญ่เกินไป (โปรดใช้ภาพไม่เกิน 8MB)`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      compressImage(ev.target.result, 1000, 0.75, (compressedBase64) => {
        formPhotos.push(compressedBase64);
        renderFormPhotosPreview();
      });
    };
    reader.readAsDataURL(file);
  });
}

function handlePhotoFileUpload(e) {
  const files = Array.from(e.target.files);
  if (!files.length) return;
  processImageFiles(files);
  e.target.value = '';
}

function compressImage(base64Str, maxWidth, quality, callback) {
  const img = new Image();
  img.src = base64Str;
  img.onload = () => {
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', quality));
  };
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
  if (formPhotos.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; color: var(--text-muted); font-size: 0.75rem;">ยังไม่มีรูปภาพที่เลือก</div>`;
    return;
  }

  grid.innerHTML = formPhotos.map((photo, i) => `
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
}

// ==================== MOTORCYCLE DETAIL & RENTAL CARD ====================
let currentHeroFitMode = 'contain';

function openCarDetail(motoId) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  currentDetailMoto = moto;
  currentHeroFitMode = 'contain';
  const statusInfo = STATUS_CONFIG[moto.status] || STATUS_CONFIG.available;
  const coverPhoto = (moto.photos && moto.photos.length > 0) ? moto.photos[0] : 'assets/images/forza_350.jpg';

  document.getElementById('detailModalTitle').textContent = `ข้อมูลรถ & สัญญา: ${moto.brand} ${moto.model} [${moto.licensePlate}]`;

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
          ทะเบียน: <span class="detail-plate-tag">${moto.licensePlate}</span> &bull; 
          สาขา/จุดจอด: <strong>${moto.branch}</strong>
        </div>
      </div>
      <div class="detail-header-price">
        ${moto.rentDaily ? `
          <div class="price-caption">ค่าเช่ารายวัน</div>
          <div class="price-highlight-rent">${formatPrice(moto.rentDaily)}<span class="price-unit">/วัน</span></div>
          ${moto.rentMonthly ? `<div class="price-sub-rent">รายเดือน ${formatPrice(moto.rentMonthly)}/ด.</div>` : ''}
        ` : `
          <div class="price-caption">ราคาขายสด (MSRP)</div>
          <div class="price-highlight-sale">${formatPrice(moto.price)}</div>
        `}
      </div>
    </div>

    <!-- Top Hero Image Gallery (Ambient Blur Backdrop + Contain Fit) -->
    <div class="detail-hero-box" id="detailHeroBox">
      <div class="detail-hero-bg" id="detailHeroBg" style="background-image: url('${coverPhoto}');"></div>
      <img id="detailMainHeroImg" src="${coverPhoto}" class="detail-hero-img fit-contain" alt="${moto.model}"
           onclick="openLightbox(this.src)" title="คลิกเพื่อดูรูปภาพขนาดใหญ่เต็มหน้าจอ (Full Screen)">
      
      <div class="detail-hero-floating-actions">
        <button type="button" class="hero-float-btn" id="btnToggleHeroFit" onclick="toggleHeroFit()" title="สลับโหมด พอดีรูปภาพ (Fit) / เต็มกรอบ (Fill)">
          <span id="fitBtnIcon">↔️</span> <span id="fitBtnLabel">โหมด: พอดีรูป (Fit)</span>
        </button>
        <button type="button" class="hero-float-btn" onclick="openLightbox(document.getElementById('detailMainHeroImg').src)" title="ขยายดูรูปขนาดเต็มจอ">
          🔍 ดูรูปเต็มจอ
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
        <span style="font-weight: 700; color: var(--navy-900);">🔄 เปลี่ยนสถานะรถคันนี้:</span>
        <select class="form-control" style="width: auto; font-weight: 600;" onchange="quickUpdateStatus('${moto.id}', this.value); openCarDetail('${moto.id}');">
          <option value="available" ${moto.status === 'available' ? 'selected' : ''}>🟢 ว่าง (Available)</option>
          <option value="rented" ${moto.status === 'rented' ? 'selected' : ''}>🔵 กำลังเช่า (On Rent)</option>
          <option value="reserved" ${moto.status === 'reserved' ? 'selected' : ''}>🟡 กำลังผ่อน (Reserved)</option>
          <option value="check" ${moto.status === 'check' ? 'selected' : ''}>🟣 รอตรวจส่งคืน (Inspection)</option>
          <option value="maintenance" ${moto.status === 'maintenance' ? 'selected' : ''}>🔴 ซ่อม/ถ่ายน้ำมัน (Maintenance)</option>
          <option value="sold" ${moto.status === 'sold' ? 'selected' : ''}>⚪ ขายแล้ว (Sold Out)</option>
        </select>
      </div>
      <div>
        <button class="header-btn btn-glass" style="color: var(--navy-900); border-color: var(--navy-700);" onclick="copySummaryForLine('${moto.id}')">
          📋 คัดลอกสรุปสเปก & เรทเช่าส่ง LINE
        </button>
      </div>
    </div>

    <!-- 2 Column Details -->
    <div class="form-grid-2">
      <!-- Technical & Identification -->
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1rem;">
        <h4 style="color: var(--navy-900); margin-bottom: 0.75rem; border-bottom: 2px solid var(--cyan-500); padding-bottom: 0.35rem;">
          🔢 ข้อมูลรถและทะเบียน
        </h4>
        <table class="detail-specs-table">
          <tr><td class="label-col">ป้ายทะเบียน</td><td class="value-col"><strong style="color: var(--navy-900); font-size: 1rem;">${moto.licensePlate}</strong> <button class="copy-btn" onclick="copyPlate('${moto.licensePlate}')">📋</button></td></tr>
          <tr><td class="label-col">เลขคอ / ตัวถัง</td><td class="value-col"><strong style="font-family: monospace;">${moto.vin}</strong></td></tr>
          <tr><td class="label-col">เลขเครื่องยนต์</td><td class="value-col">${moto.engineNo || '-'}</td></tr>
          <tr><td class="label-col">สีตัวรถ</td><td class="value-col">${moto.exteriorColor}</td></tr>
          <tr><td class="label-col">ขนาดความจุ CC</td><td class="value-col">${moto.cc} (ปี ${moto.year})</td></tr>
          <tr><td class="label-col">เลขไมล์ปัจจุบัน</td><td class="value-col">${(moto.mileage || 0).toLocaleString()} km</td></tr>
          <tr><td class="label-col">วันหมดอายุ พ.ร.บ. / ภาษี</td><td class="value-col" style="color: #d97706; font-weight: 700;">📅 ${moto.taxExpiry || '-'}</td></tr>
          <tr><td class="label-col">เชื้อเพลิง (Fuel)</td><td class="value-col">⛽ ${moto.fuel || 'เบนซิน 95'}</td></tr>
          <tr><td class="label-col">สาขา / จุดจอด</td><td class="value-col">${moto.branch}</td></tr>
          <tr><td class="label-col">ระบบ GPSDD</td><td class="value-col">
            ${moto.gpsImei ? `<strong style="color: var(--cyan-600); font-family: monospace;">🛰️ IMEI: ${moto.gpsImei}</strong> <button class="copy-btn" onclick="copyPlate('${moto.gpsImei}')" title="คัดลอก IMEI">📋</button>` : '<span style="color: var(--text-light);">(ยังไม่ได้ระบุ GPS)</span>'}
          </td></tr>
        </table>
      </div>

      <!-- Rental & Commercial Rates -->
      <div style="background: #ffffff; border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1rem;">
        <h4 style="color: var(--navy-900); margin-bottom: 0.75rem; border-bottom: 2px solid var(--gold-500); padding-bottom: 0.35rem;">
          💰 อัตราค่าเช่า &amp; ราคาขาย
        </h4>
        <table class="detail-specs-table">
          <tr><td class="label-col">ค่าเช่ารายวัน</td><td class="value-col"><strong style="color: var(--cyan-500); font-size: 1rem;">${moto.rentDaily ? formatPrice(moto.rentDaily) + '/วัน' : '-'}</strong></td></tr>
          <tr><td class="label-col">ค่าเช่ารายเดือน</td><td class="value-col">${moto.rentMonthly ? formatPrice(moto.rentMonthly) + '/เดือน' : '-'}</td></tr>
          <tr><td class="label-col">เงินประกันมัดจำ</td><td class="value-col">${moto.deposit ? formatPrice(moto.deposit) : '-'}</td></tr>
          <tr><td class="label-col">ราคาขายสด (MSRP)</td><td class="value-col"><strong style="color: var(--navy-900);">${moto.price ? formatPrice(moto.price) : '-'}</strong></td></tr>
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
          <span style="font-size: 1.3rem;">🛰️</span>
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
            ${moto.gpsImei ? `<button class="copy-btn" onclick="copyPlate('${moto.gpsImei}')" title="คัดลอก IMEI" style="background: rgba(255,255,255,0.15); color: #fff;">📋</button>` : ''}
          </div>
        </div>
        <div>
          <span style="color: var(--cyan-300); display: block; font-size: 0.7rem;">สาขา / จุดจอดระบุ:</span>
          <strong>${moto.branch}</strong>
        </div>
      </div>

      <div class="gps-actions-row">
        <button class="btn-gps-main" onclick="openGpsTracking('${moto.id}', event)">
          <span>🌐</span> เปิดดูตำแหน่งรถคันนี้บน GPSDD ทันที &rarr;
        </button>
        ${moto.gpsImei ? `
          <button class="header-btn btn-glass" style="color: #ffffff; border-color: rgba(255,255,255,0.3);" onclick="copyPlate('${moto.gpsImei}')">
            📋 คัดลอกเลข IMEI (${moto.gpsImei})
          </button>
        ` : ''}
        <button class="header-btn btn-glass" style="color: #ffffff; border-color: rgba(255,255,255,0.3);" onclick="closeModal('carDetailModal'); openCarModal('${moto.id}');">
          ⚙️ แก้ไขข้อมูล GPS
        </button>
      </div>

      <div style="margin-top: 0.75rem; font-size: 0.75rem; color: #94a3b8; display: flex; align-items: center; gap: 0.4rem;">
        <span>💡</span>
        <span>คำแนะนำ: เมื่อคลิกดูตำแหน่ง ระบบจะเปิดหน้า GPSDD พร้อมคัดลอกเลข IMEI ให้อัตโนมัติ เพื่อนำไปกดวาง (Ctrl+V) ล็อกอินดูรถคันนี้ได้ทันที</span>
      </div>
    </div>

    <!-- Accessories & Inspection -->
    <div style="margin-top: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h5 style="color: var(--navy-900); margin-bottom: 0.5rem;">🪖 อุปกรณ์ที่ให้ประจำรถ</h5>
        <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <div>${moto.accessories?.helmet ? '✅' : '❌'} หมวกกันน็อค 2 ใบ</div>
          <div>${moto.accessories?.phoneMount ? '✅' : '❌'} ที่จับมือถือกันสะเทือน</div>
          <div>${moto.accessories?.smartKey ? '✅' : '❌'} กุญแจรีโมท Honda Smart Key</div>
          <div>${moto.accessories?.topBox ? '✅' : '❌'} กล่องใส่ของท้ายรถ (Top Box)</div>
        </div>
      </div>

      <div style="background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <h5 style="color: var(--navy-900); margin-bottom: 0.5rem;">🔧 การตรวจสภาพก่อนส่งมอบ</h5>
        <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 0.35rem;">
          <div>${moto.inspection?.oil ? '✅' : '❌'} ระดับน้ำมันเครื่องและน้ำยาหล่อเย็น</div>
          <div>${moto.inspection?.brakes ? '✅' : '❌'} ระบบเบรกหน้า-หลัง</div>
          <div>${moto.inspection?.tyres ? '✅' : '❌'} ดอกยางและลมยางมาตรฐาน</div>
          <div>${moto.inspection?.clean ? '✅' : '❌'} ล้างทำความสะอาด ขัดสีเรียบร้อย</div>
        </div>
      </div>
    </div>

    ${moto.remarks ? `
      <div style="margin-top: 1rem; padding: 0.85rem; background: #fffbeb; border-left: 4px solid var(--gold-500); border-radius: 4px; font-size: 0.85rem;">
        <strong>📝 หมายเหตุ / บันทึกประวัติ:</strong> ${moto.remarks}
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
  saveFleet();
  renderAll();

  const statusLabel = STATUS_CONFIG[newStatus]?.label || newStatus;
  showToast(`อัปเดตสถานะ ${moto.model} [${moto.licensePlate}] เป็น "${statusLabel}" แล้ว`, 'success');

  // Real-time Cloud Sync
  if (window.FirebaseSync) {
    FirebaseSync.updateMotoStatus(motoId, newStatus);
  }
}

function deleteMoto(motoId) {
  const moto = fleet.find(c => c.id === motoId);
  if (!moto) return;

  if (confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบรถมอเตอร์ไซค์ ${moto.brand} ${moto.model} [${moto.licensePlate}] ออกจากระบบ?`)) {
    fleet = fleet.filter(c => c.id !== motoId);
    saveFleet();
    renderAll();
    closeModal('carDetailModal');
    showToast(`ลบรถมอเตอร์ไซค์ออกจากระบบแล้ว`, 'warning');

    // Real-time Cloud Sync
    if (window.FirebaseSync) {
      FirebaseSync.deleteMoto(motoId);
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

  const summary = `🛵 ข้อมูลรถมอเตอร์ไซค์ HONDA
รุ่น: ${moto.brand} ${moto.model} (${moto.cc})
ทะเบียน: ${moto.licensePlate}
สี: ${moto.exteriorColor}
เชื้อเพลิง: ${moto.fuel || 'เบนซิน 95'}
${moto.rentDaily ? `เรทเช่ารายวัน: ${formatPrice(moto.rentDaily)}/วัน` : ''}
${moto.rentMonthly ? `เรทเช่ารายเดือน: ${formatPrice(moto.rentMonthly)}/เดือน` : ''}
${moto.deposit ? `เงินประกันมัดจำ: ${formatPrice(moto.deposit)}` : ''}
${moto.price ? `ราคาขายสด: ${formatPrice(moto.price)}` : ''}
สาขา/จุดรับรถ: ${moto.branch}
${moto.gpsImei ? `GPS ติดตามรถ (GPSDD): IMEI ${moto.gpsImei}\n` : ''}สถานะ: ${STATUS_CONFIG[moto.status]?.label || moto.status}
อุปกรณ์ที่ให้: หมวกกันน็อค 2 ใบ + ที่จับมือถือ
ติดต่อจองรถ โทร: 081-xxx-xxxx หรือทักแชทได้ทันทีครับ`;

  navigator.clipboard.writeText(summary).then(() => {
    showToast('คัดลอกสรุปสเปกและอัตราค่าเช่าสำหรับส่ง LINE ลูกค้าแล้ว!', 'gold');
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
    "License Plate", "Frame No (VIN)", "Engine No", "Exterior Color", "Fuel",
    "Mileage (km)", "Branch", "Rent Daily (THB)", "Rent Monthly (THB)",
    "Deposit (THB)", "Price Sale (THB)", "Status",
    "Customer Name", "Customer Phone", "Rental Start", "Rental End", "Tax Expiry",
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

        // Real-time Cloud Sync
        if (window.FirebaseSync) {
          FirebaseSync.uploadAll(fleet);
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
    if (icon) icon.textContent = '↕️';
    showToast('เปลี่ยนเป็นโหมดเต็มกรอบ (Fill)', 'info');
  } else {
    currentHeroFitMode = 'contain';
    img.classList.remove('fit-cover');
    img.classList.add('fit-contain');
    if (label) label.textContent = 'โหมด: พอดีรูป (Fit)';
    if (icon) icon.textContent = '↔️';
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

  const icon = type === 'success' ? '✅' :
    type === 'warning' ? '⚠️' :
      type === 'gold' ? '⭐' : 'ℹ️';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
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
        showToast(`🛰️ เปิด GPSDD คัน [${moto.licensePlate}] แล้ว (คัดลอก IMEI: ${moto.gpsImei} ให้อัตโนมัติ)`, 'gold');
      }).catch(() => {
        showToast(`🛰️ เปิดลิงก์ GPS คัน [${moto.licensePlate}] เรียบร้อย`, 'success');
      });
    } else {
      showToast(`🛰️ กำลังเปิดหน้าติดตาม GPS คัน [${moto.licensePlate}]...`, 'success');
    }
  } else if (moto.gpsImei && moto.gpsImei.trim()) {
    // Has IMEI but no direct URL - copy IMEI and open default GPSDD web portal
    const imei = moto.gpsImei.trim();
    navigator.clipboard.writeText(imei).then(() => {
      showToast(`🛰️ คัดลอกเลข IMEI (${imei}) แล้ว! กำลังเปิดเว็บ www.gpsdd.com ให้คุณกดวาง (Ctrl+V) ล็อกอินได้ทันที`, 'gold');
    }).catch(() => {
      showToast(`🛰️ กำลังเปิดเว็บ www.gpsdd.com (IMEI: ${imei})`, 'info');
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
    statusText.textContent = `☁️ Firebase: ซิงค์สด (${state.remoteFleetCount || 0} คัน)`;
    if (modalPill) {
      modalPill.classList.add('online');
      modalText.textContent = `🟢 เชื่อมต่อเรียลไทม์แล้ว (${state.dbType === 'firestore' ? 'Cloud Firestore' : 'Realtime DB'})`;
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = '🟢 ซิงค์สดเรียลไทม์';
      dataModalBadge.style.color = '#10b981';
      dataModalBadge.style.borderColor = '#10b981';
    }
  } else if (state.status === 'connecting') {
    statusBtn.classList.add('status-connecting');
    statusText.textContent = '☁️ Firebase: กำลังเชื่อมต่อ...';
    if (modalPill) {
      modalPill.classList.add('connecting');
      modalText.textContent = '🟡 กำลังเชื่อมต่อระบบคลาวด์...';
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = 'กำลังเชื่อมต่อ...';
      dataModalBadge.style.color = '#f59e0b';
      dataModalBadge.style.borderColor = '#f59e0b';
    }
  } else if (state.status === 'syncing') {
    statusBtn.classList.add('status-syncing');
    statusText.textContent = '☁️ Firebase: กำลังซิงค์...';
    if (modalPill) {
      modalPill.classList.add('connecting');
      modalText.textContent = '🔄 กำลังส่งข้อมูลไปยังคลาวด์...';
    }
  } else if (state.status === 'error') {
    statusBtn.classList.add('status-error');
    statusText.textContent = '☁️ Firebase: เกิดข้อผิดพลาด';
    if (modalPill) {
      modalPill.classList.add('error');
      modalText.textContent = state.errorMessage ? `🔴 ข้อผิดพลาด: ${state.errorMessage}` : '🔴 เกิดข้อผิดพลาดในการเชื่อมต่อ';
    }
    if (dataModalBadge) {
      dataModalBadge.textContent = '🔴 เชื่อมต่อไม่สำเร็จ';
      dataModalBadge.style.color = '#ef4444';
      dataModalBadge.style.borderColor = '#ef4444';
    }
  } else {
    // Unconfigured / offline
    statusBtn.classList.add('status-offline');
    statusText.textContent = '☁️ Firebase: คลิกเพื่อตั้งค่าซิงค์';
    if (modalPill) {
      modalPill.classList.add('offline');
      modalText.textContent = '⚪ ยังไม่ได้ตั้งค่า Firebase (ใช้ข้อมูลในเครื่อง)';
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

  if (Array.isArray(remoteFleet)) {
    // Only re-render if fleet actually changed or if it was in skeleton loading state
    const isDifferent = JSON.stringify(fleet) !== JSON.stringify(remoteFleet);

    fleet = remoteFleet;
    saveFleet();
    updateBranchOptions();

    if (isDifferent || wasInitialLoading || meta?.isInitial) {
      renderAll();
    }

    // If detail modal is open for a motorcycle that got updated, refresh view
    if (currentDetailMoto) {
      const updated = fleet.find(m => m.id === currentDetailMoto.id);
      if (updated) {
        openCarDetail(updated.id);
      }
    }

    if (meta && meta.isRemote) {
      playSyncChime();
      showToast('🔄 ซิงค์เรียลไทม์: ได้รับการอัปเดตข้อมูลรถจากผู้ใช้อื่น', 'info');
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
      saveBtn.textContent = '⏳ กำลังบันทึกและเชื่อมต่อ...';

      const ok = await FirebaseSync.saveConfigAndRestart(parsedConfig, settings);
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 บันทึกและเริ่มซิงค์สด';

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
      testBtn.textContent = '⏳ กำลังทดสอบ...';

      const result = await FirebaseSync.testConnection(parsedConfig, {
        dbType: selectedDbType,
        collectionName: colName
      });

      testBtn.disabled = false;
      testBtn.textContent = '⚡ ทดสอบการเชื่อมต่อ';

      if (result.success) {
        alert('✅ ' + result.message);
        showToast('ทดสอบการเชื่อมต่อ Firebase สำเร็จสมบูรณ์', 'success');
      } else {
        alert('❌ การทดสอบล้มเหลว:\n' + result.message);
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
      uploadBtn.textContent = '⏳ กำลังอัปโหลดข้อมูล...';

      const res = await FirebaseSync.uploadAll(fleet);
      uploadBtn.disabled = false;
      uploadBtn.textContent = '☁️ ส่งข้อมูลสต็อคในเครื่องขึ้น Firebase ทันที';

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
      downloadBtn.textContent = '⏳ กำลังดึงข้อมูล...';

      const res = await FirebaseSync.downloadAll();
      downloadBtn.disabled = false;
      downloadBtn.textContent = '📥 ดึงข้อมูลล่าสุดจาก Firebase ลงเครื่องนี้';

      if (res.success) {
        if (res.data && res.data.length > 0) {
          fleet = res.data;
          saveFleet();
          updateBranchOptions();
          renderAll();
          showToast(`ดึงข้อมูลจาก Firebase สำเร็จ ${fleet.length} คัน`, 'success');
        } else {
          showToast('บน Firebase ยังไม่มีข้อมูลรถ', 'info');
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


