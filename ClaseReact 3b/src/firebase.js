// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtPJ-ScpPac64XnMDJa7cuidd9LDWrUJ8",
  authDomain: "mdprograma-20c6b.firebaseapp.com",
  projectId: "mdprograma-20c6b",
  storageBucket: "mdprograma-20c6b.appspot.com",
  messagingSenderId: "663591067141",
  appId: "1:663591067141:web:70a40fa6696ecedcfbc66c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app);
export default app