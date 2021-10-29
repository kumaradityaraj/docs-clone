// import firebase from "firebase";
// import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAf0Tdra6l3HKCloae56o3llzOXxpCJ2n8",
  authDomain: "docs-f57bd.firebaseapp.com",
  projectId: "docs-f57bd",
  storageBucket: "docs-f57bd.appspot.com",
  messagingSenderId: "55186855501",
  appId: "1:55186855501:web:8d8e2055dce8ace5f76e04",
};

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//  : firebase.app();

const app = initializeApp(firebaseConfig);

// const db = app.firestore();
const db = getFirestore(app);
export { db };
