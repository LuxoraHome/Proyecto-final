import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

export const FooterEmailSubscription: React.FC = () => {
    
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_0de9t6n', // ID de servicio de EmailJS
            'luxora-template', // ID de plantilla de EmailJS
            form.current as HTMLFormElement, 
            { publicKey: 'CB9ru4SF4iYu5iBIJ' } // clave pública de EmailJS
        )
        .then(() => {
            console.log('SUCCESS!');
            Swal.fire({
                icon: "success",
                title: "Email Sent",
                text: "Your email has been sent successfully."
            });
        }, (error) => {
            console.log('FAILED...', error.text);
            Swal.fire({
                icon: "error",
                title: "Error Sending Email",
                text: "There was an error sending the email. Please try again."
            });
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center mt-4 gap-4 w-full">
            <label>Email</label>
            <input type="email" name="user_email" required className="border p-2 w-full" placeholder="your email address (name@luxora.com)" />
            <button type="submit" className="bg-black text-white px-4 py-2 w-full">Subscribe</button>
        </form>
    );
};