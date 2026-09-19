// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-692b8.firebaseapp.com",
  projectId: "fir-692b8",
  storageBucket: "fir-692b8.firebasestorage.app",
  messagingSenderId: "793586148492",
  appId: "1:793586148492:web:e6928613306f5f0aa507a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider };
