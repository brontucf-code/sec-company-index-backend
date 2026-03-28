import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { UploadMediaDto } from './dto/upload-media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  upload(@Body() payload: UploadMediaDto) {
    return this.mediaService.upload(payload);
  }
}
