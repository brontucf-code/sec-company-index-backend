import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  search(query: string) {
    return {
      query,
      scopes: ['articles', 'companies', 'regulators', 'filings'],
      engine: 'meilisearch-or-elasticsearch',
    };
  }
}
