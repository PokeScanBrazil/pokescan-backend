# Roadmap

The backend is in early development. This is the work I plan to do next.

## API
- [ ] Include the edition in the `POST /card` response
- [ ] Input validation and consistent error responses
- [ ] `GET /card/:id`, `GET /cards?name=&edition=` search with pagination
- [ ] `GET /editions` listing
- [ ] Remove the placeholder `/users` routes
- [ ] OpenAPI / Swagger documentation
- [ ] Rate limiting

## Card lookup
- [ ] Handle cards with several editions for the same collection number
- [ ] Timeouts, retries and caching for the crawler
- [ ] Replace the fixed `sleep` calls with explicit Selenium waits
- [ ] Look into official / open card data sources to reduce scraping
- [ ] Background job queue so lookups don't block the request

## Engineering
- [ ] Migrate the source to TypeScript (already a dependency)
- [ ] `.env.example` and config validation
- [ ] Tests with Vitest + Supertest and a test database
- [ ] ESLint and Prettier
- [ ] GitHub Actions: lint, test and build the Docker image
- [ ] Production Dockerfile (multi-stage, no dev server) and deployment
- [ ] Structured logging (replace the debug `console.log` calls)
