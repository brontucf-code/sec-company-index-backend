import { Injectable } from '@nestjs/common';

@Injectable()
export class DistributionService {
  getSites() {
    return {
      channels: [
        'main-news-site',
        'company-directory-site',
        'regulator-topic-site',
        'english-site',
        'chinese-site',
        'promo-landing-pages',
      ],
    };
  }
}
