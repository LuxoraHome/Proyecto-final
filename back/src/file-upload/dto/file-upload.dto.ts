export interface FileUploadDto{
    fieldname: string
    originalname: string
    mimetype: string
    size: number
    buffer: Buffer
}