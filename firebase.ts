// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBlw4rhG_IeQya-voMmzVN7CQoY9X6EL0",
  authDomain: "sam-mckay-personal-website.firebaseapp.com",
  databaseURL: "https://sam-mckay-personal-website-default-rtdb.firebaseio.com",
  projectId: "sam-mckay-personal-website",
  storageBucket: "sam-mckay-personal-website.appspot.com",
  messagingSenderId: "823000142706",
  appId: "1:823000142706:web:37a19942634845725543eb",
  measurementId: "G-Y0954CRPMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);