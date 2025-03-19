import { IUserBack } from "@/interfaces/Iuser";
import { IGetOffers } from "@/interfaces/IOffer";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

//Funciones disponibles para SuperAdmin y Administrador comun:
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

export const blockStatusUser = async (userId: string, status: "active" | "suspended") => {
  try {
      const newStatus = status === "active" ? "suspended" : "active";

      const response = await fetch(`${APIURL}/user/${userId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
          throw new Error(`Error al actualizar el estado del usuario: ${response.statusText}`);
      }

      return await response.json(); // Devuelve la respuesta si se necesita
  } catch (error) {
      console.error("Error en blockStatusUser:", error);
  }
};

//Offer's Functions:
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


export const createOffer = () => {

}
