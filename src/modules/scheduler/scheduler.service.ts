import { Injectable } from '@nestjs/common';

@Injectable()
export class SchedulerService {
  getDefaultJobs() {
    return [
      'daily-sec-ingestion',
      'hourly-market-summary-generation',
      'daily-featured-company-article-generation',
      'weekly-company-profile-refresh',
      'post-publish-faq-and-summary-generation',
    ];
  }
}
