'use client'

import { getMostSellersProducts } from '@/helpers/statistics';
import { ITopProduct } from '@/interfaces/IStatistics';
import React, { useEffect, useState } from 'react';


const StatsOrdersView: React.FC = () => {
  const [mostSellers, setMostSellers] = useState<ITopProduct[]>([]);

  useEffect(() => {
    const fetchMostSellers = async () => {
      const products = await getMostSellersProducts();
      setMostSellers(products);
    };

    fetchMostSellers();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-black mb-6">Most Sold Products</h2>
      <div className="text-black">
        {mostSellers.length === 0 ? (
          <p className="text-lg text-gray-600">No most sold products found.</p>
        ) : (
          <ul className="space-y-4">
            {mostSellers.map((product) => (
              <li key={product.productId} className="border-b pb-3">
                <span className="font-bold">{product.productName}</span>: <span className="text-gray-700">{product.totalSold} sold</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StatsOrdersView;
