export interface IRegister {
    id?: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
    city: string;
    country: string;
    termsAccepted?: boolean;
}