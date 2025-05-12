import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.end.VITE_apiKey,
    authDomain: import.meta.end.VITE_authDomain,
    projectId: import.meta.end.VITE_projectId,
    storageBucket: import.meta.end.VITE_storageBucket,
    messagingSenderId: import.meta.end.VITE_messagingSenderId,
    appId: import.meta.end.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth;