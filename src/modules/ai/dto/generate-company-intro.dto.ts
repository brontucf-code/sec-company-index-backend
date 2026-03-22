import { IsOptional, IsString, IsUrl } from 'class-validator';

export class GenerateCompanyIntroDto {
  @IsString()
  companyName!: string;

  @IsOptional()
  @IsUrl()
  officialWebsite?: string;

  @IsOptional()
  @IsString()
  regulatorInfo?: string;

  @IsOptional()
  @IsString()
  companyDescription?: string;
}
