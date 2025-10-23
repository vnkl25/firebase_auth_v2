// public/firebase-config.js
// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtrFL0BEWsspiVenIO1xv0H7OTtujohwc",
  authDomain: "fir-auth-v2-df0f0.firebaseapp.com",
  projectId: "fir-auth-v2-df0f0",
  storageBucket: "fir-auth-v2-df0f0.firebasestorage.app",
  messagingSenderId: "545381131091",
  appId: "1:545381131091:web:dc81e43f959794a4b8b7a6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
