import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FooterEmailSubscription: React.FC = () => {
    
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qwk3g6q', // ID de servicio de EmailJS
            'luxora-template', // ID de plantilla de EmailJS
            form.current as HTMLFormElement, 
            { publicKey: '4-agjYYN_tQ3yMoZz' } // clave pública de EmailJS
        )
        .then(() => {
            console.log('SUCCESS!');
            alert("¡Correo enviado!");
        }, (error) => {
            console.log('FAILED...', error.text);
            alert("Hubo un error al enviar el correo.");
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center mt-4 gap-4 w-full">
            <label>Email</label>
            <input type="email" name="user_email" required className="border p-2 w-full"placeholder= "your email address (name@luxora.com) " />
            <button type="submit" className="bg-black text-white px-4 py-2 w-full">Subscribe</button>
        </form>
    );
};
