import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { RegulatorsModule } from './modules/regulators/regulators.module';
import { FilingsModule } from './modules/filings/filings.module';
import { MediaModule } from './modules/media/media.module';
import { AiModule } from './modules/ai/ai.module';
import { DistributionModule } from './modules/distribution/distribution.module';
import { SearchModule } from './modules/search/search.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CompaniesModule,
    ArticlesModule,
    RegulatorsModule,
    FilingsModule,
    MediaModule,
    AiModule,
    DistributionModule,
    SearchModule,
    SchedulerModule,
  ],
})
export class AppModule {}
