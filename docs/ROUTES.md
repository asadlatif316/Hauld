# Hauld Navigation Structure

This document outlines the client-side routes used across the Hauld platform. Routes are grouped by access level: public and admin. There is no customer account tier in this build.

## Public Routes

| Page           | Path             | Description                                    |
| -------------- | ---------------- | ---------------------------------------------- |
| Home           | `/`              | Landing page: hero, featured products, about, contact |
| Product Detail | `/products/:slug` | Full description, image, price, stock status  |
| Login          | `/login`         | Admin sign-in, with demo credentials shown     |
| Not Found      | `*`              | 404 fallback                                   |

## Admin Routes (JWT required)

All routes below sit behind a `<ProtectedRoute>` wrapper and share the admin shell layout.

| Page          | Path                    | Description                                  |
| ------------- | ----------------------- | -------------------------------------------- |
| Dashboard     | `/admin`                | KPI cards, three charts, recent orders       |
| Products      | `/admin/products`       | Paginated table, search, category filter     |
| Add Product   | `/admin/products/new`   | Creation form with image upload              |
| Edit Product  | `/admin/products/:id/edit` | Pre-populated form, image replacement     |
| Orders        | `/admin/orders`         | Paginated table, status filter, inline status edit |
| Add Order     | `/admin/orders/new`     | Manual order entry with product line items   |
| Order Detail  | `/admin/orders/:id`     | Customer details, line items, computed total |
| Messages      | `/admin/messages`       | Contact submissions, read/unread state       |
| Settings      | `/admin/settings`       | Profile, password change, site content       |

## Route Guards

| Condition                        | Behaviour                                      |
| -------------------------------- | ---------------------------------------------- |
| No token, admin route requested  | Redirect to `/login`, preserve intended path   |
| Valid token, `/login` requested  | Redirect to `/admin`                           |
| Token expired mid-session        | Clear token, redirect to `/login` with notice  |
| Unknown path                      | Render 404 page                                |

## Deployment Note

Vercel needs an SPA rewrite so deep links and hard refreshes resolve to `index.html` rather than 404ing.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Planned Routes

Not in this build. Each maps to a paid extra or a higher package tier.

| Page             | Path                | Description                          |
| ---------------- | ------------------- | ------------------------------------ |
| Categories       | `/admin/categories` | Third CRUD module (+$40 extra)       |
| User Management   | `/admin/users`      | Multi-admin and roles (+$60 extra)   |
| Analytics        | `/admin/analytics`  | Extended reporting, Premium tier     |
| Cart             | `/cart`             | Requires payment gateway (+$150 extra) |
| Checkout         | `/checkout`         | Requires payment gateway (+$150 extra) |
