import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UploadMediaDto {
  @IsString()
  filename!: string;

  @IsString()
  mimeType!: string;

  @IsOptional()
  @IsString()
  altText?: string;

  @IsOptional()
  @IsString()
  folder?: string;

  @IsOptional()
  @IsUrl()
  sourceUrl?: string;
}
