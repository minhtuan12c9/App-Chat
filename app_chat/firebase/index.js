import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8htYexyir9_kBMv9ColupZIYfsOiObxg",
  authDomain: "app-chat-45e0e.firebaseapp.com",
  projectId: "app-chat-45e0e",
  storageBucket: "app-chat-45e0e.appspot.com",
  messagingSenderId: "108740477711",
  appId: "1:108740477711:web:3c137e05c33adceed6747a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export {auth, db, database};
