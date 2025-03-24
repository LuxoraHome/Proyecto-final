"use client"

import { IUserBack, IUserContext } from "@/interfaces/Iuser";
import React, { useState, createContext, useContext } from "react";
import { iAuthProvider } from "@/interfaces/Iuser";


export const AuthContext = createContext<IUserContext>({
    user: null,
    setUser: (user: IUserBack | null) => { }

})


export const AuthProvider: React.FC<iAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<IUserBack | null>(null)
    console.log(`esto tenfo en userContext` , user);
    

    return (<AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>)
}


export const useAuth = () => useContext(AuthContext);