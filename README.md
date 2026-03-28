# SEC Company Index Backend

A NestJS-oriented backend architecture scaffold for a financial news, SEC/regulatory, and company profile content network.

## Platform goals

- One backend serving multiple frontend websites.
- Company, regulator, filing, and article management in one CMS-oriented API.
- AI-assisted content generation for articles, summaries, SEO, FAQ, and company introductions.
- Media uploads for logos, banners, filing snapshots, and reusable assets.
- Scheduler and queue hooks for automated ingestion, generation, and publishing.

## Recommended stack

- **Framework:** NestJS
- **Database:** PostgreSQL via Prisma
- **Cache / Queue:** Redis + BullMQ
- **Object storage:** S3-compatible storage such as R2, MinIO, or AWS S3
- **Search:** Meilisearch or Elasticsearch
- **Admin UI:** Next.js admin or Nest-compatible admin panel

## Core modules

- `auth`: users, roles, permissions, audit logs
- `companies`: company profiles, promotional metadata, SEO metadata
- `articles`: editorial content, AI drafts, taxonomy, FAQ
- `regulators`: regulator registry and metadata
- `filings`: SEC / Form D / filing records and parsed summaries
- `media`: upload, storage metadata, alt text, derivative assets
- `ai`: generation requests, templates, prompts, outputs, workflows
- `distribution`: frontend sites, API consumers, publish logs
- `search`: unified content and profile search facade
- `scheduler`: recurring jobs for ingestion and generation

## API routing strategy

Public API routes are versioned under `/api/v1`.

### Content delivery

- `GET /api/v1/news`
- `GET /api/v1/news/:slug`
- `GET /api/v1/featured`
- `GET /api/v1/homepage`
- `GET /api/v1/search`

### Company and regulatory data

- `GET /api/v1/companies`
- `GET /api/v1/companies/:slug`
- `GET /api/v1/regulators`
- `GET /api/v1/filings`

### AI and media

- `POST /api/v1/ai/generate/article`
- `POST /api/v1/ai/generate/summary`
- `POST /api/v1/ai/generate/company-intro`
- `POST /api/v1/media/upload`

## Service layering

1. **API Layer**: NestJS controllers and DTO validation.
2. **Service Layer**: editorial, profile, SEO, compliance, and distribution business logic.
3. **AI Layer**: template-driven generation workflows and model abstraction.
4. **Data Layer**: Prisma repositories, storage adapters, cache/search integrations.
5. **Distribution Layer**: site-aware delivery, API keys, publish history, cache invalidation.

## Project structure

```txt
src/
  app.module.ts
  main.ts
  config/
  common/
  modules/
    auth/
    companies/
    articles/
    regulators/
    filings/
    media/
    ai/
    distribution/
    search/
    scheduler/
prisma/
  schema.prisma
```

## Next implementation steps

1. Install dependencies with your preferred package manager.
2. Wire Prisma migrations and repository patterns.
3. Add JWT authentication, RBAC guards, and audit-log interceptors.
4. Connect Redis/BullMQ for AI jobs, ingestion jobs, and publish jobs.
5. Implement storage adapters and signed-upload flows.
6. Add admin-facing endpoints and OpenAPI documentation.
