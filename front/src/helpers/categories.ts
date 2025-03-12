
const APIURL=process.env.NEXT_PUBLIC_API_URL

export const getCategories = async (): Promise<{ id: string; name: string }[]> => {
    try {
      const response = await fetch(`${APIURL}/categories`);
      if (!response.ok) {
        throw new Error("Error loading the categories");
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to load categories:", error);
      return [];
    }
  };