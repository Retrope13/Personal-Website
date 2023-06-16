import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
