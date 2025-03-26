import Swal from "sweetalert2";

import { IUserR } from "@/interfaces/Iuser";

const APIURL = process.env.NEXT_PUBLIC_API_URL
console.log("API URL:", APIURL);

export const RegisterUser = async (userData: IUserR) => {
    try {
        const response = await fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "Your account has been created successfully."
            });
            return response.json();
          
            
        } else {
            Swal.fire({
                icon: "error",
                title: "Registration Error",
                text: "There was a problem creating the account."
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Unexpected Error",
            text: "An error occurred, please try again."
        });
        console.log(`Here is the error:`, error);
    }
};

export const LoginUser = async (userData: IUserR) => {
    try {
        const response = await fetch(`${APIURL}/auth/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have logged in successfully."
            });
            return response.json();
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Error",
                text: "Incorrect username or password."
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Unexpected Error",
            text: "An error occurred, please try again."
        });
        console.log(`Here is the error:`, error);
    }
};
