import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { ArticlesService } from './articles.service';

@Controller()
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get('news')
  list(@Query() query: PaginationQueryDto) {
    return this.articlesService.list(query);
  }

  @Get('news/:slug')
  getBySlug(@Param('slug') slug: string) {
    return this.articlesService.getBySlug(slug);
  }

  @Get('featured')
  featured() {
    return this.articlesService.featured();
  }

  @Get('homepage')
  homepage() {
    return this.articlesService.homepage();
  }
}
