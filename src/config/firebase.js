// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDvOP0pr1D4SdVtgKlMOXGfoTzIZRIybi4",
  authDomain: "vite-contact-57bdf.firebaseapp.com",
  projectId: "vite-contact-57bdf",
  storageBucket: "vite-contact-57bdf.firebasestorage.app",
  messagingSenderId: "190406259538",
  appId: "1:190406259538:web:426b82530c7b7df177808b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);