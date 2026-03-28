import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class RegulatorsService {
  list(query: PaginationQueryDto) {
    return {
      items: [],
      pagination: query,
      supportedPages: ['sec', 'edgar', 'form-d', 'search-links'],
    };
  }
}
