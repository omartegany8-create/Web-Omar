// استيراد المكتبات من Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// الإعدادات الجديدة للمشروع النظيف (omardev-fbfd8)
const firebaseConfig = {
  apiKey: "AIzaSyA4h9MsH0Szht7taowp95WcBr2y6scXe1k",
  authDomain: "omardev-fbfd8.firebaseapp.com",
  projectId: "omardev-fbfd8",
  storageBucket: "omardev-fbfd8.firebasestorage.app",
  messagingSenderId: "115198054751",
  appId: "1:115198054751:web:59f595fe8c06d18d8466ea",
  measurementId: "G-FN14YEJR73"
};

// تشغيل فايربيز بالبيانات الجديدة
const app = initializeApp(firebaseConfig);

// تصدير الأدوات عشان نستخدمها في باقي الموقع
export const auth = getAuth(app);
export const db = getFirestore(app);
