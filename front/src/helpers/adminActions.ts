import { IUserBack } from "@/interfaces/Iuser";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

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

