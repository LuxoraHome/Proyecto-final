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
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-center mb-4">User Statistics</h2>

      {loading ? (
        <p className="text-gray-400 text-center">Loading...</p>
      ) : stats ? (
        <div className="grid gap-4">
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow">
            <p className="text-gray-400">Total Users</p>
            <p className="text-2xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow">
            <p className="text-gray-400">Active Users (Last 7 Days)</p>
            <p className="text-2xl font-bold">{stats.activeUsers}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg text-center shadow">
            <p className="text-gray-400">New Users (Last 30 Days)</p>
            <p className="text-2xl font-bold">{stats.newUsers}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">Failed to load statistics</p>
      )}
    </div>
  );
};

export default StatsUserView;
