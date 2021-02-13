import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuWWO--DJeZxzxmt38zT2UO2ANC2c63gk",
    authDomain: "formulario-inscripcion.firebaseapp.com",
    databaseURL: "https://formulario-inscripcion-default-rtdb.firebaseio.com",
    projectId: "formulario-inscripcion",
    storageBucket: "formulario-inscripcion.appspot.com",
    messagingSenderId: "673224989380",
    appId: "1:673224989380:web:d3b4cb06b7397a109e0791"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}