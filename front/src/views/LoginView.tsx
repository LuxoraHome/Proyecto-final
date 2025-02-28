"use client"
import { LoginUser } from "@/helpers/users";
import { ILogin, ILoginErrors, validateLogin } from "@/helpers/validateLogin";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LoginView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginErrors>({});

  const handleSubmit = async(event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const response = await LoginUser(userData)
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
    <div className="grid justify-center h-screen m-10  ">
      <div className="inline-block">
        <fieldset className="border border-black rounded-lg shadow-lg max-w-lg mr-auto p-6">

        <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 m-2">Welcome to LUXORA</h1>
      <form onSubmit={handleSubmit}>
            <label className="px-2">Email:</label>
        <div className="text-left ml-4" >
          <input
            type="text"
            value={userData.email}
            onChange={handleChange}
            placeholder="Example@mail.com"
            className="block w-full  border-black rounded px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2 ml-[-7px]"
            />
          {errors.email && <span className="text-red-500 font-bold text-sm">{errors.email}</span>}
        </div>
        <label className="px-2" >Password:</label>
        <div className="text-left ml-4">
          <input
            type="text"
            value={userData.password}
            onChange={handleChange}
            placeholder="****"
            className="block w-full p-2  border-black rounded px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2 ml-[-7px]"
       
            />
          {errors.password && <span className="text-red-500 font-bold text-sm">{errors.password}</span>}
        </div>
    
        
        <div className="py-5 px-1.5 w-full text-center  ">

        <Link href="#_" className="relative w-full inline-block ml-1 px-2 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group">
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
        <Link href="/register" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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
    </div>
  );
};

export default LoginView;
