import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "ebuddy-project-abf5a.firebaseapp.com",
    projectId: "ebuddy-project-abf5a",
    storageBucket: "ebuddy-project-abf5a.firebasestorage.app",
    messagingSenderId: "581662335911",
    appId: "1:581662335911:web:575460dc7010b7a8a34c82"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
