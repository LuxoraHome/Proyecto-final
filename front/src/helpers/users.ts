import { IUserLogin, IUserRegister } from "@/interfaces/Iuser";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const RegisterUser = async (userData: IUserRegister) => {

    try {
        const response = await fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            alert("Register successful")
            return response.json()
        }
    } catch (error) {
        console.log(`Here is the error:`, error);
    }
}

export const LoginUser = async (userData: IUserLogin) => {
    try {
        const response = await fetch(`${APIURL}/auth/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            alert("Login Successful")
            return response.json()
        }
    } catch (error) {
        console.log(`Here is the error ${error}`);
    }
}




