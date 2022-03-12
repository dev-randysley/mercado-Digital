import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCW49K6s3I6XhpiApEm7LjPnjFPYQA0vdY",
  authDomain: "mercado-digital-4fbd5.firebaseapp.com",
  projectId: "mercado-digital-4fbd5",
  storageBucket: "mercado-digital-4fbd5.appspot.com",
  messagingSenderId: "962645676681",
  appId: "1:962645676681:web:bc5675cc494b75a9dc6c58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
