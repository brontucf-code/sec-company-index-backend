import { Injectable } from '@nestjs/common';
import { GenerateArticleDto } from './dto/generate-article.dto';
import { GenerateSummaryDto } from './dto/generate-summary.dto';
import { GenerateCompanyIntroDto } from './dto/generate-company-intro.dto';

@Injectable()
export class AiService {
  generateArticle(payload: GenerateArticleDto) {
    return {
      workflow: ['company_lookup', 'regulation_lookup', 'template_selection', 'generation', 'editor_review'],
      payload,
    };
  }

  generateSummary(payload: GenerateSummaryDto) {
    return {
      mode: payload.mode,
      outputSections: ['summary', 'seo_title', 'meta_description', 'key_takeaways'],
    };
  }

  generateCompanyIntro(payload: GenerateCompanyIntroDto) {
    return {
      outputSections: ['short_intro', 'long_intro', 'faq', 'about_page_copy'],
      payload,
    };
  }
}
