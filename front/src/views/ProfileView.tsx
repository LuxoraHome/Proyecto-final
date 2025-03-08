"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const ProfileView: React.FC = () => {
    const { user } = useAuth(); // Get the authenticated user from context

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            {user ? (
                <>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold">Name:</span> {user.name}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold">Email:</span> {user.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold">Address:</span> {user.address}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold">Phone:</span> {user.phone}
                    </p>
                    <Link
                        href="/orders"
                        className= "bg-black text-white px-4 py-2 w-full"
                    >
                        View Orders
                    </Link>
                </>
            ) : (
                <p className="text-gray-700">No authenticated user.</p>
            )}
        </div>
    );
};

export default ProfileView;
