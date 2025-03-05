import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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


const googleProvider = new GoogleAuthProvider()  // 1 defino mi proveedor/es externo

export const authProvider = async (provider: GoogleAuthProvider) => {  // 2 creo funcion async donde solicito la interaccion de mi proveedor.

    try {
        const response = await signInWithPopup(auth, provider)   //signInWithPopup crea el modulo mail de google
        console.log(response);
        

    } catch (error) {
        console.log(`aca esta el error`, error);

    }

}
