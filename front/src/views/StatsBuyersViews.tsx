"use client";
import { getFrequentBuyers } from "@/helpers/statistics";
import { IStatsBuyer } from "@/interfaces/IStatistics";
import React, { useEffect, useState } from "react";


const FrequentBuyers: React.FC = () => {
  const [frequentBuyers, setFrequentBuyers] = useState<IStatsBuyer[]>([]);

  useEffect(() => {
    const fetchFrequentBuyers = async () => {
      const buyers = await getFrequentBuyers();
      setFrequentBuyers(buyers || []); 
    };

    fetchFrequentBuyers();
  }, []);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-black mb-4">Frequent Buyers</h1>
      {frequentBuyers.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left text-black">Name</th>
                <th className="py-2 px-4 border-b text-left text-black">Email</th>
                <th className="py-2 px-4 border-b text-left text-black">Orders Count</th>
              </tr>
            </thead>
            <tbody>
              {frequentBuyers.map((buyer) => (
                <tr key={buyer.users_id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4 text-black">{buyer.users_name}</td>
                  <td className="py-2 px-4 text-black">{buyer.users_email}</td>
                  <td className="py-2 px-4 text-black">{buyer.ordersCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FrequentBuyers;
