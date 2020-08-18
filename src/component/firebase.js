import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzAugumsGd3Drf2NRO-WT5Vsk7YJzNDz8",
  authDomain: "instareels-a39bf.firebaseapp.com",
  databaseURL: "https://instareels-a39bf.firebaseio.com",
  projectId: "instareels-a39bf",
  storageBucket: "instareels-a39bf.appspot.com",
  messagingSenderId: "332046456912",
  appId: "1:332046456912:web:f5c303ed6f49d15dcc5955",
  measurementId: "G-MFV6HE19NS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
