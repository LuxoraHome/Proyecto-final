"use client"
import React, { useEffect, useState } from "react";
import { getUsersList } from "@/helpers/adminActions";
import { IUserBack } from "@/interfaces/Iuser";
import { FaLock, FaLockOpen } from "react-icons/fa"; 
import { changeStatusUser } from "@/helpers/adminActions";
import { useAuth } from "@/context/AuthContext";

const UsersListStatusView: React.FC = () => {
  const [users, setUsers] = useState<IUserBack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { user } = useAuth(); 

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsersList();
      if (usersData) {
        setUsers(usersData);
        setLoading(false);
      } else {
        setError("There was an error fetching the users.");
        setLoading(false);
        throw new Error("No users found");
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChangeStatus = async (userUid: string, currentStatus: "active" | "suspended") => {
    const newStatus = currentStatus === "active" ? "suspended" : "active";
    
    
    if (user && user.access_token) {
      const updatedUser = await changeStatusUser(userUid, newStatus, user.access_token); 
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.uid === userUid ? { ...user, status: updatedUser.status } : user
        )
      );
    } else {
      console.error("User not found or token missing");
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 mt-12 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Users List</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {loading ? (
        <p className="text-gray-600">Loading users...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p className="text-gray-600">No users found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Uid</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Name</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Email</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">City</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Country</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Status</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Role</th>
                <th className="px-4 py-2 text-left text-gray-800 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.uid} className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-4 py-2 text-gray-800 border-b">{user.uid}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.name}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.email}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.city}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.country}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.status}</td>
                  <td className="px-4 py-2 text-gray-800 border-b">{user.role}</td>
                  <td className="px-4 py-2 text-gray-800 border-b flex gap-4">
                    {user.status === "active" ? (
                      <FaLockOpen
                        onClick={() => handleChangeStatus(user.uid, user.status)}
                        className="text-green-500 h-6 w-6 cursor-pointer"
                      />
                    ) : (
                      <FaLock
                        onClick={() => handleChangeStatus(user.uid, user.status)}
                        className="text-red-500 h-6 w-6 cursor-pointer"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersListStatusView;
