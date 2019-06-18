import * as firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjI8e2Ghy4lrLaQ6AoeJ94OzLyxut4Fz4",
    authDomain: "texasfitt-4b666.firebaseapp.com",
    databaseURL: "https://texasfitt-4b666.firebaseio.com",
    projectId: "texasfitt-4b666",
    storageBucket: "texasfitt-4b666.appspot.com",
    messagingSenderId: "663927912276",
    appId: "1:663927912276:web:0c8c952aa411b615"
  };

const firebaseConnection = firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebaseConnection.firestore();