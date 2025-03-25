export interface iProducts {
    id: string;
    category?: { id: string; name: string; type: string; color: string }; // Para que coincida con la estructura de category
    stock?: number;  // Cambiar a número
    name: string;
    image?: string;
    price: number;
    product?: string; // Si prefieres usar 'product' en lugar de 'type'
    description?: string;
    quantity?: number;
}

export interface iPro {
    products : iProducts
}