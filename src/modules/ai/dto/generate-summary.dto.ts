import { IsIn, IsString } from 'class-validator';

export class GenerateSummaryDto {
  @IsString()
  sourceText!: string;

  @IsIn(['summary_only', 'seo_only', 'full'])
  mode!: 'summary_only' | 'seo_only' | 'full';
}
