import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzlUyqnJFUimnUHTTHU8H-asafX-WTe0g",
  authDomain: "altruify-c6531.firebaseapp.com",
  projectId: "altruify-c6531",
  storageBucket: "altruify-c6531.firebasestorage.app",
  messagingSenderId: "995361541225",
  appId: "1:995361541225:web:a92ec0e6361ce7bb5666f8",
  measurementId: "G-1283DHV9SJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;