"use client"
import { getMostLoguersApp } from '@/helpers/statistics';
import { IStatsLoguer } from '@/interfaces/IStatistics';
import React, { useEffect, useState } from 'react'

const StatsLoguersView: React.FC = () => {
  const [loguers, setLoguers] = useState<IStatsLoguer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLoguers = async () => {
      const data = await getMostLoguersApp();
      setLoguers(data);
      setLoading(false);
    };
    
    fetchLoguers();
  }, []);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-black mb-4">Most Frequent Loggers</h1>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-white text-black">
          <div className="text-lg">Loading...</div>
        </div>
      ) : loguers.length === 0 ? (
        <div className="text-lg text-gray-500">No data available.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left text-black">Name</th>
                <th className="py-2 px-4 border-b text-left text-black">Email</th>
                <th className="py-2 px-4 border-b text-left text-black">Login Count</th>
              </tr>
            </thead>
            <tbody>
              {loguers.map((loguer) => (
                <tr key={loguer.id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4 text-black">{loguer.name}</td>
                  <td className="py-2 px-4 text-black">{loguer.email}</td>
                  <td className="py-2 px-4 text-black">{loguer.loginCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StatsLoguersView