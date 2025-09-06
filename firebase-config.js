// Firebase Configuration for Pitch Parfait Project
const firebaseConfig = {
  apiKey: "AIzaSyBeopoPYcU1y66sCpE2g8ud9Pe67kpMy70",
  authDomain: "pitchpar-535ee.firebaseapp.com",
  projectId: "pitchpar-535ee",
  storageBucket: "pitchpar-535ee.firebasestorage.app",
  messagingSenderId: "116894384863",
  appId: "1:116894384863:web:9a765cd68dae0d39015f6a",
  measurementId: "G-R4SNKYGXXN"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export Firebase services
window.firebase = {
    db,
    auth,
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    signInAnonymously,
    onAuthStateChanged
};

// Initialize authentication
firebase.signInAnonymously(firebase.auth)
    .then(() => {
        console.log('Firebase initialized successfully');
    })
    .catch((error) => {
        console.error('Firebase initialization error:', error);
    });
