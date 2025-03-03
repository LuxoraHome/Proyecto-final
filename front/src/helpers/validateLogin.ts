export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginErrors {
    email?: string;
    password?: string;
}

export const validateLogin = (values: ILogin) => {
    const errors : ILoginErrors = {}

    if(!values.email) {
        errors.email = "email required"
    }

    if (!values.password) {
        errors.password = "password is required"
    }
    return errors
}