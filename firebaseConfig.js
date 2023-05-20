import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
    apiKey: "AIzaSyCqJtegaAQ4WTOm-s0ijAjWAfdxR58jdS8",
    authDomain: "uliive-f1772.firebaseapp.com",
    projectId: "uliive-f1772",
    storageBucket: "uliive-f1772.appspot.com",
    messagingSenderId: "234799469491",
    appId: "1:234799469491:web:8dd78d5f180da3da11b1c6",
    measurementId: "G-N8VBRJ29EJ"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
export default firebase;