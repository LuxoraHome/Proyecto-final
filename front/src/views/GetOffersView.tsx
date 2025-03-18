"use client"
import React, { useState, useEffect } from 'react'
import { IGetOffers } from '@/interfaces/IOffer'
import { getOffers } from '@/helpers/adminActions';


const GetOffersView: React.FC = () => {
  const [offers, setOffers] = useState<IGetOffers[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOffers = async () => {
      const data = await getOffers();
      setOffers(data);
      setLoading(false);
    };

    fetchOffers();
  }, []);

  return (
    <div className="min-h-screen bg-transparent p-6">
      <div className="container mx-auto mt-8 p-6 shadow-lg max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl xl:max-w-7xl overflow-y-auto max-h-screen bg-transparent">
        {loading ? (
          <div className="text-center text-gray-500 text-lg">Loading offers...</div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Offers</h1>
            {offers.length > 0 ? (
              <table className="w-full table-auto border-collapse shadow-lg bg-white overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 text-lg">
                    <th className="px-6 py-4 text-left font-medium">Product Name</th>
                    <th className="px-6 py-4 text-left font-medium">Original Price</th>
                    <th className="px-6 py-4 text-left font-medium">Discounted Price</th>
                    <th className="px-6 py-4 text-left font-medium">Final Price</th>
                    <th className="px-6 py-4 text-left font-medium">Valid Dates</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer) => (
                    <tr key={offer.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-800">{offer.productName}</td>
                      <td className="px-6 py-4 text-gray-600">${offer.priceProduct}</td>
                      <td className="px-6 py-4 text-gray-600">${offer.discountPriceProduct}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">${offer.finalPriceProduct}</td>
                      <td className="px-6 py-4 text-gray-500">
                        {new Date(offer.startOfferDate!).toLocaleDateString()} -{" "}
                        {new Date(offer.endOfferDate!).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No offers available at the moment.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
  
}

export default GetOffersView;
