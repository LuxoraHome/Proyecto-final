

interface iInput {
    email: string,
}

export const validateFormNew = (input: iInput) => {

const error : {email ? : string} = {}

if (!input.email) {
    error.email ="Please write your email !"
}

return error

}

export default validateFormNew;