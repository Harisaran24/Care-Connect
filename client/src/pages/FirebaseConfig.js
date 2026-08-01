// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv9-WWl4r5EPvpEoUc0eMPyi0c-0r6BZA",
  authDomain: "care-connect-m24.firebaseapp.com",
  projectId: "care-connect-m24",
  storageBucket: "care-connect-m24.appspot.com", // ⚠️ Fix: it should be .app**spot**.com
  messagingSenderId: "354549134890",
  appId: "1:354549134890:web:5ae7e1850a2167f03f3553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db so it can be used in other files
export { db };
