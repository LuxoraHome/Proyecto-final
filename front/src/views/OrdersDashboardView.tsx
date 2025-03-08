import React from 'react'

interface Order {
  id: number
  customerName: string
  totalAmount: number
  img: string
  date: string
  status: 'Active' | 'Completed'
}

const OrdersDashboardView: React.FC = () => {
  // Example orders
  const orders: Order[] = [
    {
      id: 1,
      customerName: 'Juan Pérez',
      totalAmount: 25.5,
      img: 'https://img.edilportale.com/product-thumbs/b_rectangular-table-turri-598762-rel59a73cf4.jpg',
      date: '2025-03-05',
      status: 'Active'
    },
    {
      id: 2,
      customerName: 'Ana Gómez',
      totalAmount: 45.0,
      img: 'https://img.edilportale.com/product-thumbs/b_Cattelan-Italia_GRETA_REXpceksJ5.jpeg',
      date: '2025-03-04',
      status: 'Completed'
    },
  ]

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Orders Dashboard</h1>
        <ul className="space-y-8">
          {orders.map((order) => (
            <li key={order.id} className="border-b border-gray-300 pb-6">
              <div className="flex items-center space-x-6">
                <img src={order.img} alt={`Order ${order.id}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div>
                  <strong className="text-xl text-gray-700">Order #{order.id}</strong>
                  <p className="text-base text-gray-500 mt-2">Customer: {order.customerName}</p>
                  <p className="text-base text-gray-700 mt-1">Total: ${order.totalAmount.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 mt-2">Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-sm mt-2">
                    <span className="text-gray-700">Status: </span>
                    <span className={order.status === 'Active' ? 'text-green-500' : 'text-red-500'}>
                      {order.status}
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
