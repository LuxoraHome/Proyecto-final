import { IUserBack } from "@/interfaces/Iuser";
import { IGetOffers, IPostOffer } from "@/interfaces/IOffer";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

// FUNCION PARA OBTENER LISTA DE USUARIOS.
export const getUsersList = async (): Promise<IUserBack[] | null> => {
  try {
    const response = await fetch(`${APIURL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: IUserBack[] = await response.json();
    return data;

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error Fetching Users",
      text: `There was a problem retrieving the users. Please try again.`,
    });

    console.error(`Error fetching users: ${error}`);
    return null;
  }
};

// FUNCION PARA ELIMINAR USUARIO.
export const deleteUser = async (userId: string) => {
  try {
    const response = await fetch(`${APIURL}/user/${userId}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete user');

    Swal.fire({
      icon: 'success',
      title: 'User Deleted',
      text: 'User was deleted successfully.',
    });

    return true;
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error deleting the user.',
    });

    return false;
  }
};

// FUNCION PARA OBTENER OFERTAS.
export const getOffers = async (): Promise<IGetOffers[]> => {
  try {
    const response = await fetch(`${APIURL}/offer`);

    if (!response.ok) {
      throw new Error('Error fetching offers');
    }

    const offers: IGetOffers[] = await response.json();
    return offers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// FUNCION PARA CREAR OFERTAS.
export const createOffer = async (offerData: IPostOffer) => {
  try {
    const response = await fetch(`${APIURL}/offer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(offerData),
    });

    if (!response.ok) {
      throw new Error('Error creating the offer');
    }

    const data = await response.json();


    Swal.fire({
      title: 'Success!',
      text: 'The offer has been created successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    return data;
  } catch (error) {
    console.error('Error:', error);


    Swal.fire({
      title: 'Error',
      text: 'There was an issue creating the offer. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK',
    });

    throw error;
  }
};


