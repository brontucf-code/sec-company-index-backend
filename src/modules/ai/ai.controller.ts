import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { GenerateArticleDto } from './dto/generate-article.dto';
import { GenerateSummaryDto } from './dto/generate-summary.dto';
import { GenerateCompanyIntroDto } from './dto/generate-company-intro.dto';

@Controller('ai/generate')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('article')
  generateArticle(@Body() payload: GenerateArticleDto) {
    return this.aiService.generateArticle(payload);
  }

  @Post('summary')
  generateSummary(@Body() payload: GenerateSummaryDto) {
    return this.aiService.generateSummary(payload);
  }

  @Post('company-intro')
  generateCompanyIntro(@Body() payload: GenerateCompanyIntroDto) {
    return this.aiService.generateCompanyIntro(payload);
  }
}
