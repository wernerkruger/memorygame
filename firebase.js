// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    enableNetwork,
    disableNetwork
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJvCx3vNIK1vg8QJOfD1SxpzRqeCBjikM",
  authDomain: "memorygame-6fc58.firebaseapp.com",
  projectId: "memorygame-6fc58",
  storageBucket: "memorygame-6fc58.firebasestorage.app",
  messagingSenderId: "903465057444",
  appId: "1:903465057444:web:c3c9da9dee129c39683a31",
  measurementId: "G-E0KRTLD641"
};

// Init Firebase with error handling
let app, db;
let firebaseAvailable = false;

try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    firebaseAvailable = true;
    console.log("Firebase initialized successfully");
} catch (error) {
    console.warn("Firebase initialization failed, using offline mode:", error);
    firebaseAvailable = false;
    db = null;
}

// Expose functions globally so index.html can use them
window.db = db;
window.firebaseAvailable = firebaseAvailable;
window.firestoreTools = {
    collection, addDoc, getDocs, query, orderBy, limit, enableNetwork, disableNetwork
};
