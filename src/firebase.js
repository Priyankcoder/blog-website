import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDShL7TUDUP6RX3V--J80CxT9jJk_01CuA",
  authDomain: "anshu-blog-3ce5e.firebaseapp.com",
  databaseURL: "https://anshu-blog-3ce5e.firebaseio.com",
  projectId: "anshu-blog-3ce5e",
  storageBucket: "anshu-blog-3ce5e.appspot.com",
  messagingSenderId: "432736274996",
  appId: "1:432736274996:web:5a18b370749d4992f6d861",
  measurementId: "G-1X5Q1JMHWE",
};

export const fire = firebase.initializeApp(firebaseConfig);
export const firebaseDb = fire.database().ref();
