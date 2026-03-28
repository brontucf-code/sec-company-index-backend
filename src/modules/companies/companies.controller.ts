import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  list(@Query() query: PaginationQueryDto) {
    return this.companiesService.list(query);
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.companiesService.getBySlug(slug);
  }
}
