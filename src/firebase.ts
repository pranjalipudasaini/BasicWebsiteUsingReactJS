import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-5XVWlx51Bz6tdcv_J99_fzTsOflhXoQ",
  authDomain: "reactapp-699f3.firebaseapp.com",
  projectId: "reactapp-699f3",
  storageBucket: "reactapp-699f3.firebasestorage.app",
  messagingSenderId: "870588085240",
  appId: "1:870588085240:web:48da21df4b0a95c570dc0d",
  measurementId: "G-JBNRPHQEXX"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);