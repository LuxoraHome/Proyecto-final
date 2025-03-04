export interface IUserRegister {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    address: string,
    phone: string,
    city: string,
    country: string,

}


export interface IUserLogin {

    email: string,
    password: string,

}


export interface IUserBack {
    access_token: string,
    id: string,
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
    city: string,
    country: string,

}


export interface IUserContext {
    user: IUserBack | null;
    setUser: (user: IUserBack | null) => void; 
}

export interface iAuthProvider {
    children: React.ReactNode
}