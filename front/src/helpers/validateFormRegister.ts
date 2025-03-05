import { IUserRegister } from "@/interfaces/Iuser";

export const validateRegister = (values: IUserRegister) => {

  const errors: { name?: string, email?: string, password?: string, confirmPassword?: string, address?: string, phone?: string, city?: string, country?: string } = {}


  if (!values.name) {
    errors.name = "Name is required"
  }

  if (!values.email) {
    errors.email = "Email is required"
  }

  if (!values.password) {
    errors.password = "Password is required"
  } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(values.password)) {
    errors.password = "Password must be at least 8 characters, include one uppercase letter, one number, and one special character";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password dont match"
  }
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.address) {
    errors.address = "Address is required"
  }

  if (!values.phone) {
    errors.phone = "Phone is required"
  }

  if (!values.city) {
    errors.city = "City is required"
  }

  if (!values.country) {
    errors.country = "Country is required"
  }
  
  return errors
}

export default validateRegister ;