import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBaJ8eWeVQOweOOhzoWlfeWiLv3oXopk",
  authDomain: "fir-user-reg-auth-463c4.firebaseapp.com",
  projectId: "fir-user-reg-auth-463c4",
  storageBucket: "fir-user-reg-auth-463c4.appspot.com",
  messagingSenderId: "867740989070",
  appId: "1:867740989070:web:dcdc8a839daa70ee613bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth, googleProvider};