import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN2zacI66UudSM7kjjVVgMr1BwuwTiLc0",
  authDomain: "deardeaf-fi.firebaseapp.com",
  projectId: "deardeaf-fi",
  storageBucket: "deardeaf-fi.appspot.com",
  messagingSenderId: "579718753893",
  appId: "1:579718753893:web:92bf3972983e8dbcd2208c",
};

// const fire = initializeApp(app);
// export const db = getFirestore(fire);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
