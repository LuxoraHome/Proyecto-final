const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getOrdersByUser = async (userId: string) => {
    try {
        const response = await fetch(`${APIURL}/order/user/${userId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`Error fetching orders: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user orders:", error);
        return null;
    }
};
