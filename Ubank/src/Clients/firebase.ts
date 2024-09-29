import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI_jk6jiCWrwv7cwmd4T_OfLbU-8Z97To",
  authDomain: "ubank-6f760.firebaseapp.com",
  projectId: "ubank-6f760",
  storageBucket: "gs://ubank-6f760.appspot.com",
  messagingSenderId: "757991047784",
  appId: "1:757991047784:web:b961f22e7afa898fd5f1dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };









    
    








