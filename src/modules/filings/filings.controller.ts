import { Controller, Get, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { FilingsService } from './filings.service';

@Controller('filings')
export class FilingsController {
  constructor(private readonly filingsService: FilingsService) {}

  @Get()
  list(@Query() query: PaginationQueryDto) {
    return this.filingsService.list(query);
  }
}
