import { OrderStatusEnum } from "src/order/orderStatus-enum";

export const orderDetailsMock = [
    {
        uid: "Abc123",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        orderDetails: [
            {
                productName: "QISS",
                quantity: 2
            },
            {
                productName: "LOVE MOR",
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
                productName: "SENSE EXPECT",
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
                productName: "WINDOW ASTREA",
                quantity: 2
            },
            {
                productName: "ASTREA LOUNGE",
                quantity: 1
            },
            {
                productName: "LOVE MOR",
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
                productName: "OPEN APEX",
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
                productName: "BILBOQUET XEXY",
                quantity: 3
            },
            {
                productName: "BILBOQUET",
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
                productName: "OPEN APEX",
                quantity: 7
            },
            {
                productName: "ONDO RONDO",
                quantity: 1
            },
            {
                productName: "WHISPER",
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
                productName: "LUMPA",
                quantity: 4
            },
            {
                productName: "LOVE TEL",
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
                productName: "QISS",
                quantity: 3
            },
            {
                productName: "KEEEN",
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
                productName: "BUBBLE 2",
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
                productName: "KEEEN",
                quantity: 2
            },
            {
                productName: "LOVE MOR",
                quantity: 1
            },
            {
                productName: "SENSE EXPECT",
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
                productName: "WINDOW ASTREA",
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
                productName: "ASTREA LOUNGE",
                quantity: 3
            },
            {
                productName: "KEEEN",
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
                productName: "OPEN APEX",
                quantity: 7
            },
            {
                productName: "ONDO RONDO",
                quantity: 1
            },
            {
                productName: "WHISPER",
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
                productName: "LUMPA",
                quantity: 4
            },
            {
                productName: "LOVE TEL",
                quantity: 1
            },
        ],
    },
];