import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACq5_ncXTM9eE4ICIfCgOQAh_hKUpI1fk",
  authDomain: "vue-3-2023-6c7c2.firebaseapp.com",
  projectId: "vue-3-2023-6c7c2",
  storageBucket: "vue-3-2023-6c7c2.appspot.com",
  messagingSenderId: "866754365068",
  appId: "1:866754365068:web:a00dbe076f0771768b5da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export  { auth };
