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
    <div className="max-w-full mx-auto p-6 mt-12 bg-white rounded-lg shadow-md max-h-96 overflow-y-auto">
    <h1 className="text-3xl font-semibold text-gray-900 mb-4">Available Offers</h1>
    {loading ? (
      <div className="text-center text-gray-600">Loading offers...</div>
    ) : (
      <div>
        {offers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-gray-800 border-b">Product Name</th>
                  <th className="px-6 py-4 text-left text-gray-800 border-b">Original Price</th>
                  <th className="px-6 py-4 text-left text-gray-800 border-b">Discounted Price</th>
                  <th className="px-6 py-4 text-left text-gray-800 border-b">Final Price</th>
                  <th className="px-6 py-4 text-left text-gray-800 border-b">Valid Dates</th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr key={offer.id} className="bg-gray-100 hover:bg-gray-200">
                    <td className="px-6 py-4 text-gray-800 border-b">{offer.productName}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">${offer.priceProduct}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">${offer.discountPriceProduct}</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold border-b">${offer.finalPriceProduct}</td>
                    <td className="px-6 py-4 text-gray-500 border-b">
                      {new Date(offer.startOfferDate!).toLocaleDateString()} -{" "}
                      {new Date(offer.endOfferDate!).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">No offers available at the moment.</p>
        )}
      </div>
    )}
  </div>  
  );

}

export default GetOffersView;
