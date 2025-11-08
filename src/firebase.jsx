// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNzc0nAc3Ukq126zVPPDfB-k36Q_c6Cn0",
  authDomain: "geauxapp-25.firebaseapp.com",
  projectId: "geauxapp-25",
  storageBucket: "geauxapp-25.firebasestorage.app",
  messagingSenderId: "410104553987",
  appId: "1:410104553987:web:38fe5f112f5040bfd52436",
  measurementId: "G-1M35KMSLSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {
    app,
    analytics,
    auth,
}