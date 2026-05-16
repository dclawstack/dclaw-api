# DClaw API — v1.2 Feature Roadmap

> 📘 **REVISED PRD v2.3 available:** See `REVISED-PRD.md` for complete gap analysis, current state, and full feature roadmap.


> Based on: Y Combinator vertical SaaS principles, trending GitHub repos (kong, tyk), AI product research (Postman, Stoplight, Kong, Gravitee)

## Pre-Flight Checklist

- [ ] `frontend/package-lock.json` committed after any `npm install` / dependency change
- [ ] `frontend/next-env.d.ts` exists and is committed
- [ ] `docker-compose.yml` healthchecks correct
- [ ] `frontend/Dockerfile` declares `ARG NEXT_PUBLIC_API_URL` before `RUN npm run build`

## v1.0 Feature Inventory (Current)

- [ ] API registry & catalog
- [ ] Endpoint documentation
- [ ] Basic health checks
- [ ] Request/response logging
- [ ] Real backend CRUD (no mocks)
- [ ] Docker + Helm deployment
- [ ] Alembic migrations
- [ ] Backend tests

---

## v1.2 Roadmap

### P0 — Must Have (Ship in v1.0, demo-ready)

#### 1. AI API Copilot (Design Assistant)
**Description:** AI assistant that designs APIs from requirements, reviews specs, and suggests improvements. "Design a REST API for a booking system."
- **AI Angle:** LLM OpenAPI spec generation. Best practice validation.
- **Backend:** `/api/v1/ai/api-chat` endpoint. Spec validator.
- **Frontend:** Chat panel with generated spec preview.
- **Files:** `backend/app/services/api_ai.py`, `frontend/src/components/api-copilot.tsx`

#### 2. API Gateway & Proxy
**Description:** Route, rate-limit, authenticate, and transform API requests. Load balancing.
- **Backend:** Gateway engine with plugin architecture.
- **Frontend:** Gateway configuration UI. Traffic visualization.
- **Files:** `backend/app/services/gateway.py`

#### 3. Auto-Generated Documentation
**Description:** Generate interactive docs from OpenAPI specs. Try-it-now console.
- **Backend:** OpenAPI parser. Static doc generation.
- **Frontend:** Swagger-UI style docs with custom branding.
- **Files:** `backend/app/services/docs.py`

#### 4. API Analytics & Usage Tracking
**Description:** Track request volume, latency, error rates, consumer patterns.
- **Backend:** Metrics aggregation. Consumer identification.
- **Frontend:** Analytics dashboard with top endpoints and consumers.
- **Files:** `backend/app/services/analytics.py`

### P1 — Should Have (v1.1–1.2)

#### 5. AI Test Generation
**Description:** Auto-generate API tests from OpenAPI specs with edge cases and security tests.
- **Backend:** Test case generation engine.
- **Frontend:** Test suite viewer with run results.

#### 6. API Versioning & Deprecation
**Description:** Manage API versions. Automated deprecation notices. Migration guides.
- **Backend:** Version routing. Deprecation scheduler.
- **Frontend:** Version timeline. Breaking change diff.

#### 7. Developer Portal & API Keys
**Description:** Self-service developer portal. API key management. Usage quotas.
- **Backend:** Key generation + validation. Quota enforcement.
- **Frontend:** Developer dashboard with key management.

#### 8. Mock Server Generation
**Description:** Auto-generate mock servers from OpenAPI specs for frontend development.
- **Backend:** Dynamic mock server with configurable responses.
- **Frontend:** Mock configuration UI with scenario editor.

### P2 — Could Have (v1.3+)

#### 9. AI Security Scanning
**Description:** AI scans API specs for security vulnerabilities (OWASP API Top 10).

#### 10. GraphQL Federation Gateway
**Description:** Compose multiple GraphQL services into unified schema.

#### 11. API Monetization
**Description:** Usage-based billing, tiered pricing, and invoicing for API consumers.

#### 12. Real-Time API Streaming
**Description:** WebSocket/SSE support for real-time API subscriptions.

---

## Implementation Priority

1. **Week 1–2:** AI API Copilot (P0.1) + API Gateway (P0.2)
2. **Week 3–4:** Auto Documentation (P0.3) + Analytics (P0.4)
3. **Week 5–6:** Test Generation (P1.5) + Versioning (P1.6)
4. **Week 7–8:** Developer Portal (P1.7) + Mock Server (P1.8)
