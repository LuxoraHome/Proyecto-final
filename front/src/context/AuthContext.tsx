"use client"

import { IUserBack, IUserContext } from "@/interfaces/Iuser";
import React, { useState, createContext, useContext } from "react";
import { iAuthProvider } from "@/interfaces/Iuser";


export const AuthContext = createContext<IUserContext>({
    user: null,
    setUser: (user: IUserBack) => { },
})


export const AuthProvider: React.FC<iAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<IUserBack | null>(null)
    return (<AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>)
}


export const useAuth = () => useContext(AuthContext);