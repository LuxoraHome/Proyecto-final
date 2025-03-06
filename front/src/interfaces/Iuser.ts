export interface IUserRegister {
    name: string,
    uid? : string,
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
    uid ? : string
    password: string,

}


export interface IUserBack {
    access_token?: string,
    uid?: string ,
    id?: string,
    name?: string,
    email?: string | null,
    displayName?: string | null, 
    password?: string,
    address?: string,
    phone?: string,
    city?: string,
    country?: string,

}


export interface IUserContext {
    user: IUserBack | null;
    setUser: (user: IUserBack | null) => void;
}

export interface iAuthProvider {
    children: React.ReactNode
}