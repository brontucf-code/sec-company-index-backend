import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class CompaniesService {
  list(query: PaginationQueryDto) {
    return {
      items: [],
      pagination: query,
      filters: ['industry', 'country', 'featuredStatus', 'sponsorStatus'],
    };
  }

  getBySlug(slug: string) {
    return {
      slug,
      sections: ['profile', 'seo', 'regulatory', 'featured', 'media'],
    };
  }
}
