import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/services/cloudinary/cloudinary.service';
import { FileUploadDto } from './dto/file-upload.dto';

@Injectable()
export class FileUploadService {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
    ){}

    async createFileUpload(file: FileUploadDto){
        return await this.cloudinaryService.uploadFile(file.buffer, file.originalname)
    }
}
