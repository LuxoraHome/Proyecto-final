"use client";

import { IRegister } from "@/interfaces/IRegister";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegisterForm } from "@/helpers/validateForms";
import React from "react";

export const RegisterFormView: React.FC = () => {
  const initialValues: IRegister = {
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    termsAccepted: false, 
  };

  const handleSubmit = async (values: IRegister) => {
    console.log("Form submitted", values);
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white border border-black rounded-xl shadow-lg mt-10 mb-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <Formik
        initialValues={initialValues}
        validate={validateRegisterForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
            <div className="flex flex-col">
              <label className="font-medium">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Address</label>
              <Field
                type="text"
                name="address"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Phone</label>
              <Field
                type="text"
                name="phone"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">Country</label>
              <Field
                type="text"
                name="country"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="font-medium">City</label>
              <Field
                type="text"
                name="city"
                className="w-full p-2 border border-black rounded"
              />
              <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="termsAccepted"
                className="w-5 h-5 border border-black rounded"
              />
              <label className="text-sm">
                I accept the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a> of <span className="font-bold">Luxora</span>.
              </label>
            </div>
            <ErrorMessage name="termsAccepted" component="div" className="text-red-500 text-sm" />

            <button
              type="submit"
              className={`w-full font-bold py-2 rounded transition-all ${
                isSubmitting || !values.termsAccepted
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                  : "bg-black text-white hover:bg-gray-800" 
              }`}
              disabled={isSubmitting || !values.termsAccepted} 
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};