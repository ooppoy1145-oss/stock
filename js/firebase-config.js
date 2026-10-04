/**
 * WIRA EASY FINANCE & RENTAL FLEET SYSTEM
 * ไฟล์ตั้งค่า Firebase แบบถาวรในโค้ด (Permanent Firebase Configuration)
 * 
 * ==================================================================================
 * คำแนะนำ: 
 * นำค่า API Key / Config ที่คัดลอกมาจาก Firebase Console มาใส่ในช่องด้านล่างนี้ได้เลย
 * เมื่อใส่ในไฟล์นี้แล้ว การตั้งค่าจะมีผลถาวร "ทุกคนที่เปิดหน้าเว็บ" จากคอมพิวเตอร์,
 * แท็บเล็ต หรือมือถือเครื่องใดก็ตาม จะเชื่อมต่อและซิงค์ข้อมูลสดให้อัตโนมัติทันที
 * โดยไม่ต้องกดตั้งค่าหรือกรอกคีย์เองอีกต่อไป!
 * ==================================================================================
 */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBqytKc2acI-3UrSz38OyXDnv805NIyGl4",
  authDomain: "stock-a8450.firebaseapp.com",
  projectId: "stock-a8450",
  storageBucket: "stock-a8450.firebasestorage.app",
  messagingSenderId: "801319766750",
  appId: "1:801319766750:web:ec3bc2f71a9ee44085104f",
  measurementId: "G-6EQBWXHRT7"
};

window.FIREBASE_SETTINGS = {
  // เลือกฐานข้อมูล: 'firestore' (Cloud Firestore - แนะนำ) หรือ 'rtdb' (Realtime Database)
  dbType: 'firestore',

  // ชื่อ Collection ใน Firestore หรือชื่อ Root Node ใน Realtime Database
  collectionName: 'motorcycle_fleet',

  // ซิงค์อัตโนมัติทันทีเมื่อเปิดเว็บ
  autoSync: true
};

// กรณีที่ผู้ใช้คัดลอก const firebaseConfig = { ... } มาวางทับด้านล่างนี้
if (typeof firebaseConfig !== 'undefined' && (!window.FIREBASE_CONFIG || !window.FIREBASE_CONFIG.apiKey)) {
  window.FIREBASE_CONFIG = firebaseConfig;
}
