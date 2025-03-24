import { OrderStatusEnum } from "src/order/orderStatus-enum";

export const orderDetailsMock = [
    {
        uid: "30f0bfc2-4992-4ed2-9690-be428631cce7",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/bubble2_orsetto_c3-4p_pers1_test?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231",
        orderDetails: [
            {
                productName: "QISS",
                quantity: 2,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/bubble2_orsetto_c3-4p_pers1_test?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231"
            },
            {
                productName: "LOVE MOR",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/image/rochebobois/Bubble2_C2-5P_calin_blanc_pers?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80"
            },
        ],
    },
    {
        uid: "40f0bfc2-4992-4ed2-9690-be428631cce1",
        status: OrderStatusEnum.CANCELLED,
        shippingAddress: "Calle 456 Carrera 78 No 90-12",
        image: "https://media.roche-bobois.com/is/image/rochebobois/Sense_gc3p_gris_v4_face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80",
        orderDetails: [
            {
                productName: "SENSE EXPECT",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/image/rochebobois/Sense_gc3p_gris_v4_face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80"
            }
        ],
    },
    {
        uid: "60f0bfc2-4992-4ed2-9690-be428631cce3",
        status: OrderStatusEnum.PAID,
        shippingAddress: "Calle 789 Carrera 23 No 45-67",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/astrea_fauteuil_Orseto_pers_v3_VNT?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214",
        orderDetails: [
            {
                productName: "WINDOW ASTREA",
                quantity: 2,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/astrea_fauteuil_Orseto_pers_v3_VNT?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214"
            },
            {
                productName: "ASTREA LOUNGE",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/Astrea_lounge_fauteuil_calin_refonte_face_v2?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=tissu&color=254,247,238"
            },
            {
                productName: "LOVE MOR",
                quantity: 3,
                image: "https://media.roche-bobois.com/is/image/rochebobois/Bubble2_C2-5P_calin_blanc_pers?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80"
            }
        ],
    },
    {
        uid: "70f0bfc2-4992-4ed2-9690-be428631cce4",
        status: OrderStatusEnum.PENDING,
        shippingAddress: "Calle 101 Carrera 56 No 78-90",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231",
        orderDetails: [
            {
                productName: "OPEN APEX",
                quantity: 5,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231"
            }
        ],
    },
    {
        uid: "80f0bfc2-4992-4ed2-9690-be428631cce5",
        status: OrderStatusEnum.SHIPPED,
        shippingAddress: "Calle 112 Carrera 12 No 34-56",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Bilboquet_TB_Champignon_D70_04?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=RevS&color=198,165,105&obj=RevP&color=161,12,14",
        orderDetails: [
            {
                productName: "BILBOQUET XEXY",
                quantity: 3,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Bilboquet_TB_Champignon_D70_04?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=RevS&color=198,165,105&obj=RevP&color=161,12,14"
            },
            {
                productName: "BILBOQUET",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/image/rochebobois/BILBOQUET_TB_Coupole_D58_Rouge_Pers_v2?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80"
            },
        ],
    },
    {
        uid: "90f0bfc2-4992-4ed2-9690-be428631cce6",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231",
        orderDetails: [
            {
                productName: "OPEN APEX",
                quantity: 7,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231"
            },
            {
                productName: "ONDO RONDO",
                quantity: 1,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/rondo2-mtv-face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,234,236&obj=revs&color=219,227,229"
            },
            {
                productName: "WHISPER",
                quantity: 2,
                image: "https://http2.mlstatic.com/D_NQ_NP_2X_802053-MLM40411200376_012020-F.webp"
            }
        ],
    },
    {
        uid: "10f0bfc2-4992-4ed2-9690-be428631cce6",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_354/v1/img/mesas-de-centro-empilhaveis-de-jardim-em-aco-branco-1000-2-27-245822_2.jpg",
        orderDetails: [
            {
                productName: "LUMPA",
                quantity: 4,
                image: "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_354/v1/img/mesas-de-centro-empilhaveis-de-jardim-em-aco-branco-1000-2-27-245822_2.jpg"
            },
            {
                productName: "LOVE TEL",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/Yel_chaise_orsetto_pers?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214"
            },
        ],
    },
    {
        uid: "11f0bfc2-4992-4ed2-9690-be428631cce7",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/bubble2_orsetto_c3-4p_pers1_test?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231",
        orderDetails: [
            {
                productName: "QISS",
                quantity: 3,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/bubble2_orsetto_c3-4p_pers1_test?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231"
            },
            {
                productName: "KEEEN",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/MEUBLES_QISS_CHAISE_ORANGE_TIGE_REVETUE_PERS_MASTER?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=Revp_01&color=0,0,0&obj=Revp_02&color=199,192,190"
            },
        ],
    },
    {
        uid: "13f0bfc2-4992-4ed2-9690-be428631cce9",
        status: OrderStatusEnum.CANCELLED,
        shippingAddress: "Calle 456 Carrera 78 No 90-12",
        image: "https://media.roche-bobois.com/is/render/rocheboboisRender/KEEEN_Buffet_Haut_L200_4portes_4tirroirs_laque_bois_24RB1_Face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=plateau&color=1,1,1&obj=corpus&color=215,209,205&obj=facade&color=249,247,238&obj=eclairage&color=1,1,1",
        orderDetails: [
            {
                productName: "BUBBLE 2",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/KEEEN_Buffet_Haut_L200_4portes_4tirroirs_laque_bois_24RB1_Face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=plateau&color=1,1,1&obj=corpus&color=215,209,205&obj=facade&color=249,247,238&obj=eclairage&color=1,1,1"
            }
        ],
    },
    {
        uid: "14f0bfc2-4992-4ed2-9690-be428631cce0",
        status: OrderStatusEnum.PAID,
        shippingAddress: "Calle 789 Carrera 23 No 45-67",
        image: "https://media.roche-bobois.com/is/render/rocheboboisRender/MEUBLES_QISS_CHAISE_ORANGE_TIGE_REVETUE_PERS_MASTER?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=Revp_01&color=0,0,0&obj=Revp_02&color=199,192,190",
        orderDetails: [
            {
                productName: "KEEEN",
                quantity: 2,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/MEUBLES_QISS_CHAISE_ORANGE_TIGE_REVETUE_PERS_MASTER?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=Revp_01&color=0,0,0&obj=Revp_02&color=199,192,190"
            },
            {
                productName: "LOVE MOR",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/image/rochebobois/Bubble2_C2-5P_calin_blanc_pers?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80"
            },
            {
                productName: "SENSE EXPECT",
                quantity: 3,
                image: "https://media.roche-bobois.com/is/image/rochebobois/Sense_gc3p_gris_v4_face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80"
            }
        ],
    },
    {
        uid: "15f0bfc2-4992-4ed2-9690-be428631cca1",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 101 Carrera 56 No 14-6",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/astrea_fauteuil_Orseto_pers_v3_VNT?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214",
        orderDetails: [
            {
                productName: "WINDOW ASTREA",
                quantity: 5,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/astrea_fauteuil_Orseto_pers_v3_VNT?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214"
            }
        ],
    },
    {
        uid: "16f0bfc2-4992-4ed2-9690-be428631cca2",
        status: OrderStatusEnum.SHIPPED,
        shippingAddress: "Carrera 12 No 34-56",
        image: "https://media.roche-bobois.com/is/render/rocheboboisRender/Astrea_lounge_fauteuil_calin_refonte_face_v2?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=tissu&color=254,247,238",
        orderDetails: [
            {
                productName: "ASTREA LOUNGE",
                quantity: 3,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/Astrea_lounge_fauteuil_calin_refonte_face_v2?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=tissu&color=254,247,238"
            },
            {
                productName: "KEEEN",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/MEUBLES_QISS_CHAISE_ORANGE_TIGE_REVETUE_PERS_MASTER?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=Revp_01&color=0,0,0&obj=Revp_02&color=199,192,190"
            },
        ],
    },
    {
        uid: "17f0bfc2-4992-4ed2-9690-be428631cca3",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231",
        orderDetails: [
            {
                productName: "OPEN APEX",
                quantity: 7,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/Apex-pouf?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=236,236,231"
            },
            {
                productName: "ONDO RONDO",
                quantity: 1,
                image: "https://media.roche-bobois.com/ir/render/rocheboboisRender/rondo2-mtv-face?wid=1250&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,234,236&obj=revs&color=219,227,229"
            },
            {
                productName: "WHISPER",
                quantity: 2,
                image: "https://http2.mlstatic.com/D_NQ_NP_2X_802053-MLM40411200376_012020-F.webp"
            }
        ],
    },
    {
        uid: "30f0bfc2-4992-4ed2-9690-be428631cce7",
        status: OrderStatusEnum.DELIVERED,
        shippingAddress: "Calle 123 Carrera 45 No 67-89",
        image: "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_354/v1/img/mesas-de-centro-empilhaveis-de-jardim-em-aco-branco-1000-2-27-245822_2.jpg",
        orderDetails: [
            {
                productName: "LUMPA",
                quantity: 4,
                image: "https://medias.maisonsdumonde.com/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_354/v1/img/mesas-de-centro-empilhaveis-de-jardim-em-aco-branco-1000-2-27-245822_2.jpg"
            },
            {
                productName: "LOVE TEL",
                quantity: 1,
                image: "https://media.roche-bobois.com/is/render/rocheboboisRender/Yel_chaise_orsetto_pers?wid=2000&fmt=pjpeg&resMode=sharp2&qlt=80&obj=revp&color=224,222,214"
            },
        ],
    },
];