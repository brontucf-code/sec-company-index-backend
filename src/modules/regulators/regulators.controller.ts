import { Controller, Get, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { RegulatorsService } from './regulators.service';

@Controller('regulators')
export class RegulatorsController {
  constructor(private readonly regulatorsService: RegulatorsService) {}

  @Get()
  list(@Query() query: PaginationQueryDto) {
    return this.regulatorsService.list(query);
  }
}
