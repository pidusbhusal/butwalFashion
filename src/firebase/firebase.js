import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0odMcWsqAjII2KjkagpmLeNMwauft8_M",
  authDomain: "butwalfashion-c8a88.firebaseapp.com",
  projectId: "butwalfashion-c8a88",
  storageBucket: "butwalfashion-c8a88.appspot.com",
  messagingSenderId: "934885901738",
  appId: "1:934885901738:web:1865a75ee0eb0a51d017d3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export{app, auth, db}
