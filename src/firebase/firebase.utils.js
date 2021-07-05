import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDvpBwcheOx8vJ_91rJFBjh2RJvCsCb2SA",
  authDomain: "crwn-db-cb988.firebaseapp.com",
  projectId: "crwn-db-cb988",
  storageBucket: "crwn-db-cb988.appspot.com",
  messagingSenderId: "773036967216",
  appId: "1:773036967216:web:20caeacd6b5b31b5ce34f5",
  measurementId: "G-SV8LNLLTCY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
