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

export const changeStatusUser = async (userUid: string, status: "active" | "suspended") => {
  
  const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4YzZmZDU4ZC0zMjY2LTQ3OTEtOGZhMS05YTliZDUyNjVjNzMiLCJlbWFpbCI6Imx1eG9yYXN1cGVyYWRtaW5pc3RyYWRvckBnbWFpbC5jb20iLCJ1aWQiOiI5T0cxZHV2NmxrYktFWEdsQ1JVUHpjZU14MTcyIiwicm9sZXMiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzQyODQwMzM2LCJleHAiOjE3NDI4NDc1MzZ9.K59ryz9Ko3NF7SuBZTXPSqj2nVWsO6kcOQmkaMXXKRk"; // Token del admin

  try {
    const response = await fetch(`${APIURL}/user/${userUid}`, {  
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`, 
      },
      body: JSON.stringify({
        userUid,  
        status,  
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error updating user status.");
    }

    const updatedUser = await response.json();
    console.log("User updated:", updatedUser);
    
    Swal.fire({
      icon: "success",
      title: "Status Updated",
      text: `User has been ${status === "active" ? "activated" : "suspended"} successfully.`,
    });

    return updatedUser;
  } catch (error) {
    console.error("Error in changeStatusUser:", error);
    
    let errorMessage = "There was an issue changing the user status.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    Swal.fire({
      icon: "error",
      title: "Error",
      text: errorMessage,
    });

    throw error;
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

