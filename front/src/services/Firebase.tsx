

import { initializeApp } from "firebase/app";
import { AuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";


const firebaseConfig = {
    apiKey: "AIzaSyB8V2cFqEV8vc9N9fYxYi3zLuPS8RqbHVA",
    authDomain: "luxora-proyectofinal.firebaseapp.com",
    projectId: "luxora-proyectofinal",
    storageBucket: "luxora-proyectofinal.firebasestorage.app",
    messagingSenderId: "378605874445",
    appId: "1:378605874445:web:bd8ec31a5f79b40d409444",
    measurementId: "G-ZV345BC8W8"
};


initializeApp(firebaseConfig);

const auth = getAuth()

export const googleProvider = new GoogleAuthProvider()  

export const authProvider = async (provider : AuthProvider) => {                


    try {
        const response = await signInWithPopup(auth , provider)   
     
        console.log(`esto me responde fireBase` ,response.user);
        
    } catch (error) {
        console.log(`aca esta el error`, error);  }

}
