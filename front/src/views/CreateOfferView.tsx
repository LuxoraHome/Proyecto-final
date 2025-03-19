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
    <div className="max-w-2xl mx-auto p-8 bg-white text-black shadow-xl rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-gray-900">Create Offer</h1>

      {/* Desplegable de productos */}
      <select
        onChange={(e) => setSelectedProduct(e.target.value)}
        value={selectedProduct || ''}
        className="w-full p-4 mb-6 border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
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
        className="w-full p-4 mb-6 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
      />
      
      {/* Inputs para las fechas de inicio y fin */}
      <div className="grid grid-cols-2 gap-6">
        <input
          type="date"
          value={startDate?.toISOString().split('T')[0] || ''}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="w-full p-4 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
          placeholder="Start date"
        />
        <input
          type="date"
          value={endDate?.toISOString().split('T')[0] || ''}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="w-full p-4 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
          placeholder="End date"
        />
      </div>

      {/* Botón para crear la oferta */}
      <button
        onClick={handleCreateOffer}
        className="w-full py-4 mt-6 bg-gray-800 text-white text-lg font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
      >
        Create Offer
      </button>
    </div>
  );
};

export default CreateOfferView;
