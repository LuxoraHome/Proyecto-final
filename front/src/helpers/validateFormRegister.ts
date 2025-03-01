import { IUserRegister } from "@/interfaces/Iuser";

export const validateRegister = (values: IUserRegister) => {

  const errors: { name?: string, email?: string, password?: string, confirmPassword?:string, address?: string, phone?: string, city?: string, country?: string } = {}


  if (!values.name) {
    errors.name = "name is required"
  }

  if (!values.email) {
    errors.email = "email is required"
  }

  if (!values.password) {
    errors.password = "password is required"
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "password dont match"
  }
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.address) {
    errors.address = "address is required"
  }

  if (!values.phone) {
    errors.phone = "phone is required"
  }

  if (!values.city) {
    errors.city = "city is required"
  }

  if (!values.country) {
    errors.country = "country is required"
  }



  return errors


}

export default validateRegister