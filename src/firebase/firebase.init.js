// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXnSWZh3S5tkUWDmuqwPE6ufHxzBUTwj8",
  authDomain: "shopping-site-with-auth.firebaseapp.com",
  projectId: "shopping-site-with-auth",
  storageBucket: "shopping-site-with-auth.appspot.com",
  messagingSenderId: "255720716508",
  appId: "1:255720716508:web:4380de4b8b22daf6639c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;