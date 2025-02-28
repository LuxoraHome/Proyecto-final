import { IRegister } from "@/interfaces/IRegister";

export const validateRegisterForm = (values: IRegister) => {
  const errors: IRegister = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    country: "",
  };

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.address.trim()) {
    errors.address = "Address is required";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } 
  

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Minimum 6 characters";
  }

  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "Confirmation of password is required";
  }

  if (!values.city.trim()) {
    errors.city = "City is required";
  }

  if (!values.country.trim()) {
    errors.country = "Country is required";
  }

  return errors;
};
