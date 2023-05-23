// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVbqhmKQBaCIJmWT-R5ThOJfTsCEv7924",
  authDomain: "fireboard-cb070.firebaseapp.com",
  projectId: "fireboard-cb070",
  storageBucket: "fireboard-cb070.appspot.com",
  messagingSenderId: "1011089137467",
  appId: "1:1011089137467:web:0d9dd67ac7de1ddb67611e",
};

// Initialize Firebase
export const boardApp = initializeApp(firebaseConfig);
