// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDeqjO2Yje1mNBDl9KH2SfpJqa89MQIZo",
  authDomain: "tripplanner-53a47.firebaseapp.com",
  projectId: "tripplanner-53a47",
  storageBucket: "tripplanner-53a47.firebasestorage.app",
  messagingSenderId: "1045209382114",
  appId: "1:1045209382114:web:fe34f231da91143d56f2bb",
  measurementId: "G-0EHEXWMCMD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);