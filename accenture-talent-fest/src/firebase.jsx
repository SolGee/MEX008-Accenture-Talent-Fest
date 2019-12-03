import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const settings = {timestampsInSnapshots: true};
const firebaseConfig = {
    apiKey: "AIzaSyCjrD_yDdUQQG8z7z76rqenYrKbNimh2_I",
    authDomain: "unam-titulacion.firebaseapp.com",
    databaseURL: "https://unam-titulacion.firebaseio.com",
    projectId: "unam-titulacion",
    storageBucket: "unam-titulacion.appspot.com",
    messagingSenderId: "209903135160",
    appId: "1:209903135160:web:d054af68478e1d85ed474d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore.settings();
  export default firebase;
