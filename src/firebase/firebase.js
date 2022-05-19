// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "wealth-health-eb909.firebaseapp.com",
  projectId: "wealth-health-eb909",
  storageBucket: "wealth-health-eb909.appspot.com",
  messagingSenderId: "518482065915",
  appId: "1:518482065915:web:991cf781c4bad1ad46f35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db