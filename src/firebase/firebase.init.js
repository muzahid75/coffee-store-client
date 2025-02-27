// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsGxK7kYrjTlptcXqbU2Ur_rXFcWLtP1I",
  authDomain: "coffee-store-f9a36.firebaseapp.com",
  projectId: "coffee-store-f9a36",
  storageBucket: "coffee-store-f9a36.firebasestorage.app",
  messagingSenderId: "49050351302",
  appId: "1:49050351302:web:df7d08bb668e30b74089c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth