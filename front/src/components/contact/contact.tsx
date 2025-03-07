import { Mail } from "lucide-react"; 

const ContactCard = () => {
  return (
    <div className="border border-gray-300 p-8 rounded-lg flex flex-col items-center w-96 shadow-lg bg-white">
      <Mail className="w-12 h-12 text-black mb-4" />
      
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">By email</p>
        <p className="text-gray-700">Servicio Clientes Luxora</p>
        <p className="text-gray-700 font-medium">luxora@gmail.com</p>
        <p className="text-gray-700 font-medium">+54 9 11 1234-5678</p>
      </div>
    </div>
  );
};

export default ContactCard;
