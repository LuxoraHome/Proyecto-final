"use client"

import { useAuth } from '@/context/AuthContext'
import orderDashboard from '@/helpers/orderDashboard'
import React, { useEffect, useState } from 'react'



export const OrdersDashboardView: React.FC = () => {




    const { user } = useAuth()
    const [dash, setDash] = useState<Order[]>()


    interface Order {
        client: string;
        image: string,
        customerName: string;
        total: string;
        date: string;
        status: string;
        id: string,
    }



    const dataOrder = async () => {
        const data = await orderDashboard(user?.uid)

        console.log(`esta data me devuelve el backENDDDD`, data);


        if (data?.orders && data?.user) {
            const dataFilter: Order[] = data.orders.map((order: Order) => ({
                client: data.user.client,
                customerName: data.user.name,
                image: order.image,
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
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
            <h1 className="text-4xl font-semibold text-center mb-10 text-gray-900">Orders Dashboard</h1>
    
            {dash?.map((items, index) => (
                <li key={index} className="border-b border-gray-200 py-6">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                        <div className="sm:w-2/3">
                            <h2 className="text-xl font-medium text-gray-800">{items.customerName}</h2>
                            <p className="text-sm text-gray-600">{items.client}</p>
    
                            <p className="text-sm text-gray-500 mt-2">
                                {new Date(items.date).toLocaleDateString('es-ES', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-between sm:w-1/3 mt-4 sm:mt-0">
                            <div className="w-20 h-20 relative rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src={items.image}
                                    className="w-full h-full object-cover object-center"
                                    alt="Order Image"
                                />
                            </div>
    
                            <div className="text-right">
                                <p className="text-lg font-semibold text-gray-900">${items.total}</p>
                                <p className={`text-sm mt-1 text-green-500`}>
                                    {items.status}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    </div>

    )

}




export default OrdersDashboardView
