import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYXYGQeTG-soTSi93Mij7jwd5P1yY-PhE",
  authDomain: "ideamacedonio-copyexpres-c724e.firebaseapp.com",
  projectId: "ideamacedonio-copyexpres-c724e",
  storageBucket: "ideamacedonio-copyexpres-c724e.appspot.com",
  messagingSenderId: "185943620728",
  appId: "1:185943620728:web:45be7b03d6ec047dc0c18d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);