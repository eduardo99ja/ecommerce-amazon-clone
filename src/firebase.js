import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDSqdNU61cCBVJwm9DqnKdRumA89ZbqcWM",
  authDomain: "ecommerce-87211.firebaseapp.com",
  databaseURL: "https://ecommerce-87211.firebaseio.com",
  projectId: "ecommerce-87211",
  storageBucket: "ecommerce-87211.appspot.com",
  messagingSenderId: "886750156896",
  appId: "1:886750156896:web:b354503ca812e411190b05",
  measurementId: "G-PPPRNPLP3F"
});


const auth = firebase.auth();

export {auth};
