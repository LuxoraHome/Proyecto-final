"use client"
import { getStatistics } from "@/helpers/statistics";
import { IStatsUser } from "@/interfaces/IStatistics";
import React, { useEffect, useState } from "react";

const StatsUserView: React.FC = () => {
  const [stats, setStats] = useState<IStatsUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStatistics();
        setStats(data);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-black mb-6">User Statistics</h2>
  
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : stats ? (
        <div className="grid gap-4">
          <div className="p-4 bg-gray-100 rounded-xl text-center shadow-md border border-gray-300">
            <p className="text-gray-600 text-sm">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl text-center shadow-md border border-gray-300">
            <p className="text-gray-600 text-sm">Active Users (Last 7 Days)</p>
            <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl text-center shadow-md border border-gray-300">
            <p className="text-gray-600 text-sm">New Users (Last 30 Days)</p>
            <p className="text-2xl font-bold text-gray-900">{stats.newUsers}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center font-medium">Failed to load statistics</p>
      )}
    </div>
);
};

export default StatsUserView;
