// 'use client'

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// firebase.initializeApp({
// apiKey: "AIzaSyCqJtegaAQ4WTOm-s0ijAjWAfdxR58jdS8",
// authDomain: "uliive-f1772.firebaseapp.com",
// projectId: "uliive-f1772",
// storageBucket: "uliive-f1772.appspot.com",
// messagingSenderId: "234799469491",
// appId: "1:234799469491:web:8dd78d5f180da3da11b1c6",
// measurementId: "G-N8VBRJ29EJ"
// })


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqJtegaAQ4WTOm-s0ijAjWAfdxR58jdS8",
    authDomain: "uliive-f1772.firebaseapp.com",
    projectId: "uliive-f1772",
    storageBucket: "uliive-f1772.appspot.com",
    messagingSenderId: "234799469491",
    appId: "1:234799469491:web:8dd78d5f180da3da11b1c6",
    measurementId: "G-N8VBRJ29EJ"
};

const firebase = initializeApp(firebaseConfig);
// export const analytics = 
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
export default firebase;