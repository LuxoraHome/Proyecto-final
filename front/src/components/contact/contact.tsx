import { Mail } from "lucide-react"; 

const ContactCard = () => {
  return (
    <div className="border border-gray-300 p-6 rounded-lg flex justify-between items-center max-w-md">
      <div>
        <p className="font-semibold">Por correo</p>
        <p>Servicio Clientes Luxora</p>
        <p>luxora@gmail.com</p>
        <p>+54 9 11 1234-5678</p>
      </div>

      <Mail className="w-10 h-10 text-black" />
    </div>
  );
};

export default ContactCard;
