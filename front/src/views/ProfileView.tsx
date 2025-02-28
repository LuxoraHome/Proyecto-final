"use client";
import React, { useState } from 'react';
import { users } from '@/helpers/usersProfileArray';

const ProfileView: React.FC = () => {
   const [currentUser, setCurrentUser] = useState(0);
   const user = users[currentUser];

   const handleNextUser = () => {
      setCurrentUser((prevUser) => (prevUser + 1) % users.length);
   };

   return (
      <div className="max-w-md mx-auto bg-white shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          {user ? (
              <>
                  <p className="text-gray-700 mb-2">Name: <span className="font-bold">{user.name}</span></p>
                  <p className="text-gray-700 mb-2">Email: <span className="font-bold">{user.email}</span></p>
                  <p className="text-gray-700 mb-2">Address: <span className="font-bold">{user.address}</span></p>
                  <p className="text-gray-700 mb-2">Phone: <span className="font-bold">{user.phone}</span></p>
                  <p className="text-gray-700 mb-4">Client: <span className="font-bold">{user.client}</span></p>
                  <p className="text-gray-700 mb-2">Orders: {user.orders && user.orders.length > 0
                      ? user.orders.map(order => <span key={order.id} className="font-bold">{order.id} </span>)
                      : "No orders"}
                  </p>
                  <button 
                      onClick={handleNextUser} 
                      className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200">
                      Change User
                  </button>
              </>
          ) : (
              <p className="text-gray-700">No hay usuarios disponibles</p>
          )}
      </div>
  );
};

export default ProfileView;
