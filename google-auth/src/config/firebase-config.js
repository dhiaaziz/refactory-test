// import {initializeApp} from 'firebase/app'
// import {getAnalytics} from 'firebase'
import firebase from 'firebase'

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD3sVr5pq6rpzf0tKX5wgKnOZQxVMI9EbE",

  authDomain: "refactory--auth.firebaseapp.com",

  projectId: "refactory--auth",

  storageBucket: "refactory--auth.appspot.com",

  messagingSenderId: "373632005958",

  appId: "1:373632005958:web:6189cddc0b6cdad6951747",

  measurementId: "G-JW0X8K4Y2P"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.analytics()

export default firebase