import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
//Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "caramelcoffe-app.firebaseapp.com",
    projectId: "caramelcoffe-app",
    storageBucket: "caramelcoffe-app.appspot.com",
    messagingSenderId: "1082454444090",
    appId: "1:1082454444090:web:47bf62347177f1a34a0d03"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
