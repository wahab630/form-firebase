// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDepB_8N5h6PLN61P_SGgxc1dV_TDF5F4A",
  authDomain: "react-firebase-auth-c4170.firebaseapp.com",
  projectId: "react-firebase-auth-c4170",
  storageBucket: "react-firebase-auth-c4170.appspot.com",
  messagingSenderId: "149750838440",
  appId: "1:149750838440:web:2ad1b3eb3b06a390713e9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage();