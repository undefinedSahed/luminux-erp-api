import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import * as Util from 'util';
import { GenericObject } from '../types';

const ReadFile = Util.promisify(fs.readFile);

@Injectable()
export class EmailHelper {
  public async sendEmail(payload: { to: string; subject: string; html: string }): Promise<void> {
    console.info(`[EmailHelper] Simulated email send to ${payload.to} with subject: ${payload.subject}`);
  }

  public async sendSms(payload: { recipient: string; message: string }): Promise<void> {
    console.info(`[EmailHelper] Simulated SMS send to ${payload.recipient}: ${payload.message}`);
  }

  public async createEmailContent(data: GenericObject, templateType: string): Promise<string> {
    try {
      const templatePath = path.join(
        process.cwd(),
        `views/email-templates/${templateType}.template.hbs`,
      );
      const content = await ReadFile(templatePath, 'utf8');

      const template = Handlebars.compile(content);

      return template(data);
    } catch (error) {
      console.error('Error reading email template:', error);
      return '';
    }
  }
}
