// import { ApiProperty } from '@nestjs/swagger';
// import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

// export class ResponseProductDto {
//   @ApiProperty({
//     type: String,
//     description:
//       'The id of the product. This answer is unique and is generated automatically',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   @IsUUID()
//   id: string;

//   @ApiProperty({
//     type: String,
//     description:
//       'The name of the product. The name is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   name: string;

//   @ApiProperty({
//     type: String,
//     description:
//       'The description of the product. The description is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   description: string;

//   @ApiProperty({
//     type: String,
//     description:
//       'The type of the product. The type is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   type: string;

//   @ApiProperty({
//     type: Number,
//     description:
//       'The price of the product. The price is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsNumber()
//   price: number;

//   @ApiProperty({
//     type: String,
//     description:
//       'The designer of the product. The designer is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   designer: string;

//   @ApiProperty({
//     type: String,
//     description:
//       'The image of the product. The image is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   image: string;

//   @ApiProperty({
//     type: Number,
//     description:
//       'The stock of the product. The stock is the answer of the database',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsNumber()
//   stock: number;

//   constructor(partial: Partial<ResponseProductDto>) {
//     const { id, name, description, type, price, designer, image, stock } =
//       partial;

//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.type = type;
//     this.price = price;
//     this.designer = designer;
//     this.image = image;
//     this.stock = stock;
//   }
// }
