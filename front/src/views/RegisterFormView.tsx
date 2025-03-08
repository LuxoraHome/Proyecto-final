"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { RegisterUser } from "@/helpers/users";
import { IUserRegister } from "@/interfaces/Iuser";
import validateRegister from "@/helpers/validateFormRegister";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/Firebase";





export const RegisterFormView: React.FC =  () => {


  const router = useRouter();


  const handleSubmit = async (values: IUserRegister) => {

    try {
      const usercredential =await createUserWithEmailAndPassword(auth ,  values.email , values.password)
      const uid = usercredential.user.uid
      const userData = {...values , uid}
      console.log(`esto tengo en userdata` , userData);
      
      const response = await RegisterUser( userData);
      console.log(`esta info es la que mandamos al back`, response);
      
      router.push("/login");
    } catch (error) {
      console.log(error);
    }

  }
    


  return (
    <div className="w-1/2 mx-auto p-6 bg-white border border-black rounded-xl shadow-lg ">
      <h2 className="text-2xl font-bold mb-6  text-center">Register</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          phone: "",
          confirmPassword: "",
          password: "",
          country: "",
          city: "",
        }}
        validate={validateRegister}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Address</label>
            <Field
              type="text"
              name="address"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="address" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Phone</label>
            <Field
              type="text"
              name="phone"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>



          <div className="flex flex-col">
            <label className="font-medium">Confirm password</label>
            <Field
              type="password"
              name="confirmPassword"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm" />
          </div>


          <div className="flex flex-col">
            <label className="font-medium">Country</label>
            <Field
              type="text"
              name="country"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">City</label>
            <Field
              type="text"
              name="city"
              className="w-full p-2 border border-black rounded"
            />
            <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full font-bold py-2 rounded transition-all bg-black text-white hover:bg-gray-800">
            Register
          </button>

          <div className="text-gray-800 dark:text-white text-lg">
            <span className="mr-1 text-black">Already have an account?</span>
            <Link href="/login " className="font-semibold underline hover:text-gray-600 transition-colors text-black">
              Log in
            </Link>
          </div>



        </Form>
      </Formik>
    </div>
  );
}; 