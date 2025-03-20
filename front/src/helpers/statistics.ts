import { IStatsBuyer, IStatsLoguer, IStatsOrder, IStatsUser, ITopProduct } from "@/interfaces/IStatistics";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getStatistics = async (): Promise<IStatsUser> => {
    const response = await fetch(`${APIURL}/dashboard/stats/users`);
    
    if (!response.ok) {
        throw new Error(`Error al obtener estadísticas: ${response.statusText}`);
    }
    
    return response.json();
};

export const getMostSellersProducts = async (): Promise<ITopProduct[]> => {
    try {
        const response = await fetch(`${APIURL}/dashboard/stats/orders`);
        
        if (!response.ok) {
            throw new Error("Error fetching the top products.");
        }
        
        const data: IStatsOrder = await response.json();
        
        return data.topProducts;
    } catch (error) {
        console.error("Failed to fetch most sold products:", error);
        return [];
    }
};

export const getFrequentBuyers = async (): Promise<IStatsBuyer[] | null> => {
    try {
        const response = await fetch(`${APIURL}/dashboard/stats/buyers`);
        
        if (!response.ok) {
            throw new Error(`Error al obtener los compradores frecuentes: ${response.statusText}`);
        }
        
        const data: IStatsBuyer[] = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error en la solicitud de compradores frecuentes:', error);
        return null;
    }
};

export const getMostLoguersApp = async (): Promise<IStatsLoguer[]> => {
    try {
        const response = await fetch(`${APIURL}/dashboard/stats/frequent`);
        
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios que se loguean con más frecuencia.");
        }
        
        const data: IStatsLoguer[] = await response.json();
        
        return data;
    } catch (error) {
        console.error("Failed to fetch most loguers", error);
        return [];
    }
};
