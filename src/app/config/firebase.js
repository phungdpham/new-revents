import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAnt8OhFXxXb6WRqBFOBdF6PN3EjYrnbUY",
    authDomain: "refined-gravity-269622.firebaseapp.com",
    databaseURL: "https://refined-gravity-269622.firebaseio.com",
    projectId: "refined-gravity-269622",
    storageBucket: "refined-gravity-269622.appspot.com",
    messagingSenderId: "12583970080",
    appId: "1:12583970080:web:843a02484c33dd660f2345",
    measurementId: "G-RP98HJ265K"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;