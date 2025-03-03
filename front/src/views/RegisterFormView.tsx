"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegisterForm } from "@/helpers/validateFormRegister";
import React from "react";
import { RegisterUser } from "@/helpers/users";
import { IUserRegister } from "@/interfaces/Iuser";
import { useRouter } from "next/navigation";

export const RegisterFormView: React.FC = () => {
  const router = useRouter();

  const initialValues: IUserRegister = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
  };

  const handleSubmit = async (values: IUserRegister) => {
    try {
      await RegisterUser(values);
      router.push("/login");
    } catch (error) {
      console.error("Error to register user:", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white border border-black shadow-lg mt-10 mb-30">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <Formik initialValues={initialValues} validate={validateRegisterForm} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Address", name: "address", type: "text" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Password", name: "password", type: "password" },
            { label: "Confirm Password", name: "confirmPassword", type: "password" },
            { label: "Country", name: "country", type: "text" },
            { label: "City", name: "city", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="flex flex-col" key={name}>
              <label className="font-medium">{label}</label>
              <Field type={type} name={name} className="w-full p-2 border border-black rounded" />
              <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
            </div>
          ))}

          <button type="submit" className="w-full font-bold py-2 rounded transition-all bg-black text-white hover:bg-gray-800">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
