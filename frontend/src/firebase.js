import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUbW4x3COxaamodz9Ko6Obyziu8l0MoD0",
  authDomain: "excelanalyticsauth.firebaseapp.com",
  projectId: "excelanalyticsauth",
  storageBucket: "excelanalyticsauth.firebasestorage.app",
  messagingSenderId: "114501544545",
  appId: "1:114501544545:web:d359a38dddb7407c235820"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
