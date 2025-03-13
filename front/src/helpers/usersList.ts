import { IUserBack } from "@/interfaces/Iuser";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getUsersList = async (): Promise<IUserBack[] | null> => {
  try {
    const response = await fetch(`${APIURL}/user/public`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: IUserBack[] = await response.json();

    Swal.fire({
      icon: "success",
      title: "Users Loaded",
      text: "User list retrieved successfully.",
    });

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
