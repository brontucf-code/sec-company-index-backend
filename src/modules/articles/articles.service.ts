import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class ArticlesService {
  list(query: PaginationQueryDto) {
    return {
      items: [],
      pagination: query,
      supportedTypes: [
        'breaking_news',
        'sec_news',
        'market_news',
        'compliance_news',
        'company_profile_article',
        'educational_article',
        'promotional_article',
      ],
    };
  }

  getBySlug(slug: string) {
    return { slug, payload: 'Article detail placeholder' };
  }

  featured() {
    return { items: [], strategy: 'priority_score + featured_status' };
  }

  homepage() {
    return {
      hero: [],
      latest: [],
      featuredCompanies: [],
      complianceSpotlight: [],
    };
  }
}
