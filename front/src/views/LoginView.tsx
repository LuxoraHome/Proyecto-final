"use client"
import { ILogin, ILoginErrors, validateLogin } from "@/helpers/validateForms";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginErrors>({});

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    //const response = login(userData)
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (isSubmitted) {
      const errors = validateLogin(userData);
      setErrors(errors);
    }
  }, [userData]);

  return (
    <div className="grid justify-center h-screen border-solid border-red-500">
        <fieldset>

        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 m-2">Welcome to LUXORA</h1>
      <form onSubmit={handleSubmit}>
        <div >
            <label className="px-2">Email:</label>
          <input
            type="text"
            value={userData.email}
            onChange={handleChange}
            placeholder="Example@mail.com"
            className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2"
            />
          {errors.email && <span className="text-red-500 font-bold text-sm">{errors.email}</span>}
        </div>
        <label className="px-2" >Password:</label>
        <div>
          <input
            type="text"
            value={userData.password}
            onChange={handleChange}
            placeholder="****"
            className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2"
       
            />
          {errors.password && <span className="text-red-500 font-bold text-sm">{errors.password}</span>}
        </div>
    
        
        <div className="py-5 m-2">

        <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Log in</span>
        </Link>
        </div>
        <p className="font-bold">
          Are not registered?
        <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Register now</span>
        </Link>
        </p>
    
        
      </form>
            </fieldset>
    </div>
  );
};

export default LoginView;
