
import { IUserBack, IUserR } from "@/interfaces/Iuser";
import { initializeApp } from "firebase/app";
import { AuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { RegisterUser } from "@/helpers/users";



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
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export const authProvider = async (provider: AuthProvider, setUser: (user: IUserBack | null) => void) => {

    try {
        const response = await signInWithPopup(auth, provider) 
        Cookies.set("access_uid", response.user.uid)  
        console.log('esto me deveuelvddev ffirbeBase' , response);   
        const uidR :IUserR = {
            uid
            : response.user.uid
        }
        console.log('UID de Firebase:', response.user.uid);


      await RegisterUser(uidR);
      
        
        setUser({ uid: response.user.uid, displayName: response.user.displayName, email: response.user.email , status:"active", });
        
      




    } catch (error) {
        console.log(`aca esta el error`, error);
    }

}
