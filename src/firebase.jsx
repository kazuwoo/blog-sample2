import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCweFSoAYrLnoMNFS9ilxaR6eHr4qAF5m4",
  authDomain: "blog-6654b.firebaseapp.com",
  projectId: "blog-6654b",
  storageBucket: "blog-6654b.appspot.com",
  messagingSenderId: "304185449802",
  appId: "1:304185449802:web:bf8ddb64a4473105b635b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};