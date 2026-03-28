# Backend Architecture Blueprint

## Module map

### 1. Auth & Roles

Responsible for administrator authentication, RBAC, audit logging, and admin actions.

### 2. Companies

Stores company profile data, featured/sponsor metadata, SEO metadata, and reusable marketing fields.

### 3. Articles

Supports manual publishing, AI-generated content, summaries, FAQs, and article taxonomies.

### 4. Regulators

Maintains regulator metadata and reusable regulator detail pages.

### 5. Filings

Separates filing records from companies so the platform can build SEC, EDGAR, and Form D experiences.

### 6. Media

Provides a unified upload center for logos, banners, thumbnails, PDF assets, and screenshots.

### 7. AI Studio

Implements template-driven generation for article bodies, summaries, FAQs, company intros, and SEO metadata.

### 8. Distribution API

Delivers site-aware data feeds to multiple frontend properties through one backend.

### 9. Search

Aggregates company, article, regulator, and filing search through one API contract.

### 10. Scheduler / Jobs

Automates ingestion, generation, publication, and downstream cache refreshes.

## Suggested admin navigation

- Dashboard
- Content
  - Articles
  - Categories
  - Tags
  - FAQ Blocks
  - AI Drafts
- Companies
  - Company List
  - Add Company
  - Featured Companies
  - Sponsor Entries
  - Company SEO
- Regulations
  - Regulators
  - Filings
  - SEC Records
  - Form D
  - Search Links
- Media
  - Logos
  - Banners
  - Upload Center
- AI Studio
  - Generate Article
  - Generate Summary
  - Generate Company Intro
  - Generate FAQ
  - Batch Generate
- Distribution
  - Frontend Sites
  - API Keys
  - Publish Channels
  - Webhook Logs
- Settings
  - SEO Defaults
  - Schema Templates
  - Prompt Templates
  - Language Settings

## Delivery flow

### Company article workflow

1. Select company.
2. Load company, regulator, and filing records.
3. Select article template.
4. Generate headline, summary, body, SEO fields, and FAQ.
5. Send to editorial/compliance review.
6. Publish and distribute to frontend sites.

### News brief workflow

1. Ingest source URL or structured filing data.
2. Extract key facts.
3. Generate summary.
4. Expand to short or long-form article.
5. Attach internal links and related company links.
6. Publish and distribute.

### Company intro workflow

1. Upload logo and related media.
2. Save website, address, and regulator details.
3. Generate short intro, long intro, SEO description, and FAQ.
4. Publish to company profile pages and promotional landing pages.
