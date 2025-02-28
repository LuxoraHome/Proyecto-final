import { IUserProfile } from "@/interfaces/IUserProfile";

export const users: IUserProfile[] = [
    {

        id: "1",
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        address: "Calle 123, Buenos Aires",
        phone: 1134567890,
        client: "Standard",
        orders: []
    },
    {

        id: "2",
        name: "María López",
        email: "maria.lopez@example.com",
        address: "Avenida Siempre Viva 742, Córdoba",
        phone: 1122334455,
        client: "Vip",
        orders: []

    },
    {

        id: "3",
        name: "Carlos Gómez",
        email: "carlos.gomez@example.com",
        address: "San Martín 456, Mendoza",
        phone: 1156789012,
        client: "Standard",
        orders: []

    },
    {

        id: "4",
        name: "Ana Rodríguez",
        email: "ana.rodriguez@example.com",
        address: "Mitre 789, Rosario",
        phone: 1198765432,
        client: "Vip",
        orders: []

    },
    {

        id: "5",
        name: "Lucas Fernández",
        email: "lucas.fernandez@example.com",
        address: "Rivadavia 321, La Plata",
        phone: 1176543210,
        client: "Standard",
        orders: []

    }
];