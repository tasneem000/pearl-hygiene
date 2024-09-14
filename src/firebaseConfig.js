// Firebase configuration object containing credentials to initialize Firebase



// Exporting the firebaseConfig object to make it accessible in other modules



// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAPqD3yYJULbNUjoIK2IBdU1iLr0WNH_j4",
    authDomain: "pearl-hygiene.firebaseapp.com",
    projectId: "pearl-hygiene",
    storageBucket: "pearl-hygiene.appspot.com",
    messagingSenderId: "512859027466",
    appId: "1:512859027466:web:f86436b2e27e1406da47f3",
    measurementId: "G-GH3B86D5QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export { database };
