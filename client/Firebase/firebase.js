// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCT83_NQuf6wL09qBVMKavoTAavrO7-b7k',
  authDomain: 'findmyvape-49a06.firebaseapp.com',
  projectId: 'findmyvape-49a06',
  storageBucket: 'findmyvape-49a06.appspot.com',
  messagingSenderId: '811457269286',
  appId: '1:811457269286:web:b464b25bbcc95c9b9360e7',
  measurementId: 'G-WN8FCSW1WT',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
