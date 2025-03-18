

const APIURL = process.env.NEXT_PUBLIC_API_URL

export const orderDashboard = async (uid: string|undefined) => {
    try {
        const response = await fetch(`${APIURL}/order/user/${uid}`, {
            method: "GET",
            headers: { "Content-type": "Application/json" }

        })
        if (response.ok) {
            const data = await response.json()
            console.log(`esto responde el bback con las ordenes del user`, data);
            return data
        }
    } catch (error) {
        console.log(`Aca esta el error`, error);
    }
}

export default orderDashboard 