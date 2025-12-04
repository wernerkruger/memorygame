// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// 🔥 REPLACE WITH YOUR CONFIG
  const firebaseConfig = {
    apiKey: "AIzaSyAJvCx3vNIK1vg8QJOfD1SxpzRqeCBjikM",
    authDomain: "memorygame-6fc58.firebaseapp.com",
    projectId: "memorygame-6fc58",
    storageBucket: "memorygame-6fc58.firebasestorage.app",
    messagingSenderId: "903465057444",
    appId: "1:903465057444:web:c3c9da9dee129c39683a31",
    measurementId: "G-E0KRTLD641"
  };

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Expose functions globally so index.html can use them
window.db = db;
window.firestoreTools = {
    collection, addDoc, getDocs, query, orderBy, limit
};
