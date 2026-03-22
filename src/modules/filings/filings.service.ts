import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class FilingsService {
  list(query: PaginationQueryDto) {
    return {
      items: [],
      pagination: query,
      filters: ['regulator', 'filingType', 'status', 'companyId'],
    };
  }
}
