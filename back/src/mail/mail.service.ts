import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to,
      subject,
      text,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('The email has been sent successfully');
    } catch (error) {
      console.error('Error to send email, the email was not sent', error);
      throw new Error('Error to send email, the email was not sent');
    }
  }
}
