import React, { useState, useEffect } from 'react'
import { createOffer } from '@/helpers/adminActions'
import { getProducts } from '@/helpers/getProducts'
import { iProducts } from '@/interfaces/iProducts'

const CreateOfferView: React.FC = () => {
  // Estado para los productos, producto seleccionado, descuento, fechas de inicio y fin, etc.
  const [products, setProducts] = useState<iProducts[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [discount, setDiscount] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Cargar productos al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);


  // Manejar la creación de la oferta
  const handleCreateOffer = async () => {
    if (selectedProduct && discount && startDate && endDate) {
      const offerData = {
        productName: selectedProduct,
        productDiscount: discount,
        startDate,
        endDate,
      };

      try {
        const createdOffer = await createOffer(offerData);
        console.log('Oferta creada:', createdOffer);

        // Mostrar mensaje de éxito o redirigir

        // Vaciar el formulario después de crear la oferta
        setSelectedProduct(null);
        setDiscount(0);
        setStartDate(null);
        setEndDate(null);
      } catch (error) {
        console.error('Error al crear la oferta:', error);
      }
    } else {
      console.error('Por favor, complete todos los campos');
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-6 sm:p-8 bg-white text-black shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Create Offer</h1>

      {/* Desplegable de productos */}
      <select
        onChange={(e) => setSelectedProduct(e.target.value)}
        value={selectedProduct || ''}
        className="w-full p-3 sm:p-4 mb-4 border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-lg transition-all"
      >
        <option value="">Select a product</option>
        {products.map((product: iProducts) => (
          <option key={product.id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>

      {/* Input de descuento */}
      <input
        type="number"
        placeholder="Discount (%)"
        value={discount}
        onChange={(e) => setDiscount(Number(e.target.value))}
        className="w-full p-3 sm:p-4 mb-4 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-lg transition-all"
      />

      {/* Inputs para fechas de inicio y fin */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="date"
          value={startDate?.toISOString().split('T')[0] || ''}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="w-full p-3 sm:p-4 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-lg transition-all"
        />
        <input
          type="date"
          value={endDate?.toISOString().split('T')[0] || ''}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="w-full p-3 sm:p-4 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-lg transition-all"
        />
      </div>

      {/* Botón para crear la oferta */}
      <button
        onClick={handleCreateOffer}
        className="w-full py-3 sm:py-4 mt-6 bg-gray-900 text-white text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg transition-all"
      >
        Create Offer
      </button>
    </div>
  );

};

export default CreateOfferView;

