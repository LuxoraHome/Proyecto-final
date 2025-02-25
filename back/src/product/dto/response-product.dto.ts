export class ResponseProductDto {

    id: string
    name: string
    description: string
    type: string
    price: number
    designer: string
    image: string
    stock: number


    constructor(partial: Partial<ResponseProductDto>) {
        const { id, name, description, type, price, designer, image, stock } = partial

        this.id = id
        this.name = name
        this.description = description
        this.type = type
        this.price = price
        this.designer = designer
        this.image = image
        this.stock = stock

    }
}