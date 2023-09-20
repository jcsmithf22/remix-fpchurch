// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJ98m4A4AeJm4MFgQftC4ADT0FXw4f84",
  authDomain: "fpchurchsantafe-961cc.firebaseapp.com",
  projectId: "fpchurchsantafe-961cc",
  storageBucket: "fpchurchsantafe-961cc.appspot.com",
  messagingSenderId: "685844167426",
  appId: "1:685844167426:web:7172eee8a08ac2320ba01b",
  measurementId: "G-BX66R4KRCP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase.analytics.isSupported().then((isSupported) => {
//   if (isSupported) {
//     firebase.analytics();
//   }
// });

export const db = getFirestore(app);
