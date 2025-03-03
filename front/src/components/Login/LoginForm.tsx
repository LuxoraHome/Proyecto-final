"use client"
import { Field, ErrorMessage, Form, Formik } from "formik"
import { LoginUser } from "@/helpers/users"
import { IUserLogin } from "@/interfaces/Iuser"
import { validateLogin } from "@/helpers/validateLogin"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"


export const LoginForm = () => {

    const router = useRouter()
    const { setUser } = useAuth()


    const handelSubmit = async (values: IUserLogin) => {
        const response = await LoginUser(values)
        const { access_token } = response
        setUser(access_token)
        Cookies.set("token", access_token)
        router.push("/")
    }


    return (
        <div className="grid justify-center h-48 m-8 mb-96 mt-20 ">
        
            <fieldset className="border border-black rounded-lg shadow-lg max-w-screen-md mr-auto p-8">
                <h1 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 m-2">
                    Welcome to LUXORA
                </h1>
                <Formik initialValues={{ email: "", password: "" }} validate={validateLogin} onSubmit={handelSubmit} >
                    <Form className="block w-full  px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2 ml-[-7px]" >

                        <div >
                            <label className="px-2">Email:</label>
                            <Field name="email" type="text" className="block w-full  border-black rounded px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2 ml-[-7px]" />
                            <ErrorMessage name="email" component="p" className="text-red-500 font-bold text-sm" />
                        </div>


                        <div>
                            <label className="px-2">Password:</label>
                            <Field name="password" type="password" className="block w-full  border-black rounded px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-blue-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 border m-2 ml-[-7px]" />
                            <ErrorMessage name="password" component="p" className="text-red-500 font-bold text-sm" />
                        </div>




                        <div className="py-4 px-8 w-full text-center space-y-9 ">


                            <button type="submit" className="relative w-1/4 inline-block ml-1 px-2 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group">

                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Log in</span>

                            </button>

                            <p className="font-bold" >
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
                        </div>
                    </Form>
                </Formik>
            </fieldset>
        </div>




    )





}

export default LoginForm;