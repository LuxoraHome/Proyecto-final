"use client"
import { useAuth } from '@/context/AuthContext';
import { Link } from 'lucide-react';
import React from 'react'

const AdminProfile = () => {
  const { user } = useAuth(); 

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl p-8 mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-6">Administrator Profile</h2>
      {user ? (
        <>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Name:</span> {user.name || "No name provided"}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Address:</span> {user.address || "No address available"}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Phone:</span> {user.phone || "No phone available"}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Country:</span> {user.country || "No country available"}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">City:</span> {user.city || "No city available"}
          </p>
          <p className="text-gray-700 mb-3 text-center">
            <span className="font-bold">Admin:</span> {user.admin ? "Yes" : "No"}
          </p>
  
          <Link href="/orders" className="bg-black text-white px-6 py-3 w-full sm:w-auto text-center mt-4">
            View Orders
          </Link>
        </>
      ) : (
        <p className="text-gray-700 text-center">No authenticated user.</p>
      )}
    </div>
  );
  
};

export default AdminProfile
