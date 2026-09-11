# Hauld Roadmap

Vite React + Express + MongoDB Atlas + Cloudinary.
Scope: Basic package + charts + second CRUD module.

---

## Phase 0 — Setup

* [ ] `client/` (Vite) and `server/` (Express) folders
* [ ] `.gitignore` covering both `.env` files — before first commit
* [ ] `vercel.json` with SPA rewrite
* [ ] Atlas cluster + connection
* [ ] `app.js` / `server.js` split
* [ ] Middleware chain: helmet → cors → json → morgan → routes → errorHandler
* [ ] `GET /api/health`

## Phase 1 — Auth

* [ ] User model + bcrypt
* [ ] `POST /auth/login`
* [ ] `authGuard` middleware
* [ ] `GET /auth/me`
* [ ] `POST /auth/logout`
* [ ] Zustand auth store
* [ ] Axios interceptors (attach token, catch 401)
* [ ] Login page
* [ ] `ProtectedRoute`

## Phase 2 — Admin Shell

* [ ] `AdminLayout` — sidebar + header
* [ ] Mobile drawer under 768px
* [ ] Shared UI: Button, Input, Table, Modal, Badge, Spinner, EmptyState, ConfirmDialog, Pagination
* [ ] Toast provider

## Phase 3 — Products

* [ ] Product model + indexes
* [ ] Cloudinary config + multer memory storage
* [ ] `GET /products` — search, filter, sort, paginate
* [ ] `POST /products`
* [ ] `PUT /products/:id` — replace image, delete old asset
* [ ] `DELETE /products/:id` — destroy asset
* [ ] Products table
* [ ] `ProductForm` (create + edit, one component)
* [ ] `useDebounce` on search
* [ ] Field-level validation errors

## Phase 4 — Seed Data

Do this before charts.

* [ ] 28 products, real names and prices
* [ ] 74 orders across the last 8 months
* [ ] 6 messages, 2 unread
* [ ] Settings doc
* [ ] Idempotent — safe to re-run
* [ ] Check: no month has zero orders

## Phase 5 — Orders

* [ ] Order model — embedded customer + items
* [ ] Order number generator
* [ ] `GET /orders` — status filter, search, paginate
* [ ] `POST /orders` — totals computed server-side
* [ ] `PATCH /orders/:id/status`
* [ ] `DELETE /orders/:id`
* [ ] Orders table + status badges
* [ ] Inline status dropdown
* [ ] Order detail page
* [ ] Manual order form

## Phase 6 — Dashboard

* [ ] `GET /stats` — KPI cards
* [ ] `GET /stats/revenue` — gap-fill missing months
* [ ] `GET /stats/status`
* [ ] `GET /stats/top-products`
* [ ] 4 stat cards
* [ ] Revenue chart
* [ ] Status chart
* [ ] Top products chart
* [ ] Recent orders list

## Phase 7 — Messages & Settings

* [ ] Message model
* [ ] `POST /messages` — rate limited
* [ ] `GET /messages` — unread count in meta
* [ ] Mark read on open + `PATCH /messages/:id/read`
* [ ] `DELETE /messages/:id`
* [ ] Messages page + nav badge
* [ ] Setting model
* [ ] `PUT /settings`
* [ ] `PATCH /auth/password`
* [ ] Settings page

## Phase 8 — Public Storefront

* [ ] `PublicLayout`
* [ ] Landing page — hero, products, about, contact
* [ ] Products pulled live from DB
* [ ] Product detail page
* [ ] Contact form
* [ ] Copy driven by settings doc
* [ ] 404 page

## Phase 9 — Hardening

* [ ] CORS locked to Vercel domain
* [ ] Rate limits on login + contact
* [ ] Server-side validation on every body
* [ ] No stack traces in responses
* [ ] Audit git history for secrets
* [ ] Cloudinary thumbnail transforms
* [ ] Responsive: 375 / 768 / 1024 / 1440
* [ ] Focus states, labels, alt text
* [ ] Bundle under 500KB gzipped

## Phase 10 — Deploy

* [ ] Client → Vercel
* [ ] Server → Railway
* [ ] Env vars in both dashboards
* [ ] Seed production DB
* [ ] Keep-warm cron on `/api/health`, every 10 min
* [ ] Cold-start message in client
* [ ] Nightly seed reset
* [ ] Test hard refresh on every admin route
* [ ] Chrome, Firefox, Safari, Edge + mobile

## Phase 11 — Gig Assets

* [ ] README — setup, env, seed, deploy
* [ ] Screenshots: dashboard, products, form, orders, mobile
* [ ] Screen recording for gig video
* [ ] Demo link in gig description + FAQ
* [ ] Portfolio entry on profile

---

## Out of Scope

Payments, cart, customer accounts, checkout, email, multi-admin roles, CSV export, multi-language. Each is a paid extra or higher tier.
