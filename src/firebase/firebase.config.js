// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7C8XsPvRtENM4EIOPruqalPDiybdo5RA",
  authDomain: "coffee-store-7a464.firebaseapp.com",
  projectId: "coffee-store-7a464",
  storageBucket: "coffee-store-7a464.appspot.com",
  messagingSenderId: "369942988963",
  appId: "1:369942988963:web:cc551121f2a215b2809716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;