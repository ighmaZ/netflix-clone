
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // to add database 

const firebaseConfig = {
  apiKey: "AIzaSyD_Qb9-Ofe4r7gQp-y0FWPcbILjRM81bkk",
  authDomain: "netflix-clone-25a3b.firebaseapp.com",
  projectId: "netflix-clone-25a3b",
  storageBucket: "netflix-clone-25a3b.appspot.com",
  messagingSenderId: "1008181798860",
  appId: "1:1008181798860:web:496b453dad31fbb73f5f69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);