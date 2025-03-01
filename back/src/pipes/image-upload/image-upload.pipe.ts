import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ImageUploadPipe implements PipeTransform {
  private readonly allowedMimetypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif"
  ]

  private readonly maxSizeInBytes = 10485760; // 10MB

  transform(file: Express.Multer.File) {
    
    if(!file){
      throw new BadRequestException("No file upload")

    }
    if(!this.allowedMimetypes.includes(file.mimetype)){
      throw new BadRequestException("Invalid file type")
    }

    if(file.size > this.maxSizeInBytes){
      throw new BadRequestException("file too large")
    }
    return file;
  }
}
