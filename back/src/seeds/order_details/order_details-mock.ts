import { OrderStatusEnum } from "src/order/orderStatus-enum";

export const orderDetailsMock = [
    {
        uid: "Abc123",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "BUBBLE 2",
                quantity: 2
            },
            {
                productName: "BAMBOO MOOD",
                quantity: 1
            },
        ],
    },
    {
        uid: "Abc456",
        status: OrderStatusEnum.CANCELLED,
        shippingAddress: "Calle 456 Carrera 78 No 90-12",
        orderDetails: [
            {
                productName: "FOLK",
                quantity: 1
            }
        ],
    },
    {
        uid: "Abc789",
        status: OrderStatusEnum.PAID,
        shippingAddress: "Calle 789 Carrera 23 No 45-67",
        orderDetails: [
            {
                productName: "MORSA",
                quantity: 2
            },
            {
                productName: "CESTELLO",
                quantity: 1
            },
            {
                productName: "BAMBOO MOOD",
                quantity: 3
            }
        ],
    },
    {
        uid: "Abc789",
        status: OrderStatusEnum.PENDING,
        shippingAddress: "Calle 101 Carrera 56 No 78-90",
        orderDetails: [
            {
                productName: "IVRESSE",
                quantity: 5
            }
        ],
    },
    {
        uid: "Abc789",
        status: OrderStatusEnum.SHIPPED,
        shippingAddress: "Calle 112 Carrera 12 No 34-56",
        orderDetails: [
            {
                productName: "PIXL",
                quantity: 3
            },
            {
                productName: "CELTA",
                quantity: 1
            },
        ],
    },
    {
        uid: "Abc789",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "IVRESSE",
                quantity: 7
            },
            {
                productName: "JANE",
                quantity: 1
            },
            {
                productName: "AVA",
                quantity: 2
            }
        ],
    },
    {
        uid: "Abc789",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "MANGROVE",
                quantity: 4
            },
            {
                productName: "TRACE",
                quantity: 1
            },
        ],
    },
    {
        uid: "Abc105",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "BUBBLE",
                quantity: 3
            },
            {
                productName: "PULP",
                quantity: 1
            },
        ],
    },
    {
        uid: "Abc106",
        status: OrderStatusEnum.CANCELLED,
        shippingAddress: "Calle 456 Carrera 78 No 90-12",
        orderDetails: [
            {
                productName: "CEO",
                quantity: 1
            }
        ],
    },
    {
        uid: "Abc456",
        status: OrderStatusEnum.PAID,
        shippingAddress: "Calle 789 Carrera 23 No 45-67",
        orderDetails: [
            {
                productName: "PULP",
                quantity: 2
            },
            {
                productName: "MELT",
                quantity: 1
            },
            {
                productName: "RIO IPANEMA",
                quantity: 3
            }
        ],
    },
    {
        uid: "Abc110",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 101 Carrera 56 No 14-6",
        orderDetails: [
            {
                productName: "LIFT",
                quantity: 5
            }
        ],
    },
    {
        uid: "Abc456",
        status: OrderStatusEnum.SHIPPED,
        shippingAddress: "Carrera 12 No 34-56",
        orderDetails: [
            {
                productName: "GLOBO",
                quantity: 3
            },
            {
                productName: "PULP",
                quantity: 1
            },
        ],
    },
    {
        uid: "Abc108",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "IVRESSE",
                quantity: 7
            },
            {
                productName: "JANE",
                quantity: 1
            },
            {
                productName: "AVA",
                quantity: 2
            }
        ],
    },
    {
        uid: "Abc109",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "MANGROVE",
                quantity: 4
            },
            {
                productName: "TRACE",
                quantity: 1
            },
        ],
    },
];