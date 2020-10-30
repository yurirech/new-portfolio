import * as firebase from "firebase/app";
import 'firebase/storage';
//Adding firestore
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBf8vVNPwTPs1z9Y7KNoWxNVAvFpn15Yr8",
  authDomain: "yr-portfolio-35891.firebaseapp.com",
  databaseURL: "https://yr-portfolio-35891.firebaseio.com",
  projectId: "yr-portfolio-35891",
  storageBucket: "yr-portfolio-35891.appspot.com",
  messagingSenderId: "1031129642626",
  appId: "1:1031129642626:web:65330fbd269c29888c669b",
  measurementId: "G-7D2Z781ZYW"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

const storage = firebase.storage();

export const storageRef = storage.ref();
export const imagesRef = storageRef.child('35239431.jpg');
export const imagesOfImagesRef = storageRef.child('images/35239431.jpg');

