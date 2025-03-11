"use client"
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import validateRegister from '@/helpers/validateFormRegister'
import { IUserRegister } from "@/interfaces/Iuser"

export const FormCompleteRegistration: React.FC = () => {
  const handleSubmit = (values: IUserRegister) => {
    console.log('Form data', values)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 shadow-lg w-full sm:w-2/3 lg:w-2/3 xl:w-2/3 max-w-4xl border border-black">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          Complete Your Registration
        </h2>

        <Formik
          initialValues={{
            name: '',
            address: '',
            phone: '',
            country: '',
            city: ''
          }}
          validate={validateRegister} 
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Nombre */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg text-gray-700">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="p-3 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label htmlFor="address" className="text-lg text-gray-700">Address</label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="p-3 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-lg text-gray-700">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="p-3 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label htmlFor="country" className="text-lg text-gray-700">Country</label>
                <Field
                  type="text"
                  name="country"
                  id="country"
                  className="p-3 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                />
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-lg text-gray-700">City</label>
                <Field
                  type="text"
                  name="city"
                  id="city"
                  className="p-3 border border-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800"
                />
                <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Botón de enviar */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-800 text-white py-2 px-6 text-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
