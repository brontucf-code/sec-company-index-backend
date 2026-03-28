import { IsArray, IsOptional, IsString } from 'class-validator';

export class GenerateArticleDto {
  @IsString()
  companyName!: string;

  @IsOptional()
  @IsString()
  regulatorInfo?: string;

  @IsOptional()
  @IsString()
  officialWebsite?: string;

  @IsOptional()
  @IsString()
  filingLink?: string;

  @IsOptional()
  @IsString()
  industry?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsArray()
  keywords?: string[];

  @IsString()
  articleType!: string;

  @IsOptional()
  @IsString()
  tone?: string;
}
