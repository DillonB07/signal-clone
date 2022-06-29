import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVS5MFU3_YbS2aLBcyez59CUgXD6tAxG8",
  authDomain: "signal-clone-ec433.firebaseapp.com",
  projectId: "signal-clone-ec433",
  storageBucket: "signal-clone-ec433.appspot.com",
  messagingSenderId: "1059987507244",
  appId: "1:1059987507244:web:35d8081dc5dcd0d6dc2989",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
