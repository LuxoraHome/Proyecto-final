"use client"

import { useAuth } from '@/context/AuthContext'
import orderDashboard from '@/helpers/orderDashboard'
import React, { useEffect, useState } from 'react'



export const OrdersDashboardView: React.FC = () => {




    const { user } = useAuth()
    const [dash, setDash] = useState<Order[]>()


    interface Order {
        client: string;
        customerName: string;
        total: string;
        date: string;
        status: string;
        id: string,
    }



    const dataOrder = async () => {
        const data = await orderDashboard(user?.uid)
        if (data?.orders && data?.user) {
            const dataFilter: Order[] = data.orders.map((order: Order) => ({
                client: data.user.client,
                customerName: data.user.name,
                total: order.total,
                date: order.date,
                status: order.status,
                id: data.user.id
            }));
            setDash(dataFilter)
        }

    }

    useEffect(() => {
        dataOrder()
    }, [])



    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Orders Dashboard</h1>
                <ul className="space-y-8">




                    {dash?.map((items) => (
                        <li key={items.id} className="border-b border-gray-300 pb-6">
                            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6">
                                <div>
                                    <strong className="text-xl text-gray-700">{items.customerName}</strong>
                                    <p className="text-base text-gray-500 mt-2">{items.client}</p>
                                    <p className="text-base text-gray-700 mt-1">{items.date}</p>
                                    <p className="text-sm text-gray-500 mt-2">{items.total}</p>
                                    <p className="text-sm mt-2">
                                        <span className={items.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                                            <span className="text-gray-700">Status:{items.status} </span>
                                        </span>
                                    </p>

                                </div>
                            </div>
                        </li>
                    ))}





                </ul>
            </div>
        </div>

    )

}




export default OrdersDashboardView
