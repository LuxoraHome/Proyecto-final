import { Generated } from "typeorm"
import { v4 as uuid } from 'uuid'

export class Product {

    @Generated('uuid')
    id: string = uuid()

    name: string
    description: string
    type: string
    price: number
    designer: string
    image: string
    stock: number

}
