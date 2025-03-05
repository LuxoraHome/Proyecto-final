
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8V2cFqEV8vc9N9fYxYi3zLuPS8RqbHVA",
  authDomain: "luxora-proyectofinal.firebaseapp.com",
  projectId: "luxora-proyectofinal",
  storageBucket: "luxora-proyectofinal.firebasestorage.app",
  messagingSenderId: "378605874445",
  appId: "1:378605874445:web:bd8ec31a5f79b40d409444",
  measurementId: "G-ZV345BC8W8"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);