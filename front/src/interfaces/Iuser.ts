import { Phone } from "lucide-react";

export interface IUserRegister {
    name?: string,

    email: string,
    password: string,
    confirmPassword?: string,
    address?: string,
    phone?: string,
    city?: string,
    country?: string,
    admin?: boolean,
}




export interface IUserR {
    name?: string,
    uid : string,
    email?: string ,
    city?: string ,
    country?: string , 
    phone?: string,

}


export interface IUserLogin {

    email: string,
    uid ? : string
    password: string,

}


export interface IUserBack {
    access_token?: string,
    uid?: string  ,
    name?: string,
    email?: string | null,
    displayName?: string | null, 
    password?: string,
    address?: string,
    phone?: string,
    city?: string,
    country?: string,
    client?: "standard" | "premium",
    role?: "superadmin"| "admin" | "user",
    status?: "active" | "suspended",
}


export interface IUserContext {
    user: IUserBack | null;
    setUser: (user: IUserBack | null) => void;
}

export interface iAuthProvider {
    children: React.ReactNode
}