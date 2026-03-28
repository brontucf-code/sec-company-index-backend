import { Injectable } from '@nestjs/common';
import { UploadMediaDto } from './dto/upload-media.dto';

@Injectable()
export class MediaService {
  upload(payload: UploadMediaDto) {
    return {
      message: 'Connect this endpoint to S3-compatible storage and derivative generation.',
      payload,
    };
  }
}
