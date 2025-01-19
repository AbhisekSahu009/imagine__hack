// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgtivj4_VnqcFnIKs62CS23UiTARbwux0",
    authDomain: "imagine-5242d.firebaseapp.com",
    projectId: "imagine-5242d",
    storageBucket: "imagine-5242d.firebasestorage.app",
    messagingSenderId: "984108609059",
    appId: "1:984108609059:web:6400d690a32ca136cd8b96",
    measurementId: "G-DSDBSHQ0L0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };