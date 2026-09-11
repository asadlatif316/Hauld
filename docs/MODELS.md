# Hauld Data Models

MongoDB collections via Mongoose. All models include `createdAt` and `updatedAt` through `{ timestamps: true }` unless stated otherwise.

### User Model

Admin accounts only. There are no customer accounts in this build.

| Field        | Type    | Required | Description                          |
| ------------ | ------- | -------- | ------------------------------------ |
| name         | String  | Yes      | Display name shown in the header     |
| email        | String  | Yes      | Unique, lowercased, used for login   |
| password     | String  | Yes      | bcrypt hash, `select: false`         |
| role         | String  | Yes      | Values: admin, demo                  |
| isProtected  | Boolean | Yes      | Demo account cannot be edited/deleted |
| lastLoginAt  | Date    | No       | Updated on successful login          |

### Product Model

| Field         | Type    | Required | Description                              |
| ------------- | ------- | -------- | ---------------------------------------- |
| name          | String  | Yes      | Indexed for text search                  |
| slug          | String  | Yes      | Unique, generated from name              |
| description   | String  | No       | Long-form copy for the detail view       |
| price         | Number  | Yes      | Minor units (paisa/cents) to avoid floats |
| category      | String  | Yes      | Values: tote, backpack, crossbody, clutch, travel |
| stock         | Number  | Yes      | Non-negative integer                     |
| imageUrl      | String  | Yes      | Cloudinary secure URL                    |
| imagePublicId | String  | Yes      | Cloudinary ID, needed for deletion       |
| isFeatured    | Boolean | Yes      | Controls display on the public landing page |
| isActive      | Boolean | Yes      | Soft hide from the storefront            |

### Order Model

| Field       | Type     | Required | Description                                        |
| ----------- | -------- | -------- | -------------------------------------------------- |
| orderNumber | String   | Yes      | Unique, human-readable (e.g. `ORD-2026-0148`)      |
| customer    | Object   | Yes      | Embedded — see Customer Subdocument                |
| items       | [Object] | Yes      | Embedded — see Order Item Subdocument, min length 1 |
| subtotal    | Number   | Yes      | Sum of line totals, computed server-side           |
| shipping    | Number   | Yes      | Flat rate, defaults to 0                           |
| total       | Number   | Yes      | subtotal + shipping, never accepted from client    |
| status      | String   | Yes      | Values: pending, processing, shipped, delivered, cancelled |
| notes       | String   | No       | Internal admin note                                |
| placedAt    | Date     | Yes      | Distinct from createdAt so seed data can backdate  |

### Customer Subdocument

Denormalised on purpose. Orders must stay accurate even though there is no customer collection.

| Field   | Type   | Required | Description                |
| ------- | ------ | -------- | -------------------------- |
| name    | String | Yes      | Full name                  |
| email   | String | Yes      | Contact email              |
| phone   | String | No       | Optional contact number    |
| address | String | No       | Single-line shipping address |

### Order Item Subdocument

| Field     | Type     | Required | Description                                     |
| --------- | -------- | -------- | ----------------------------------------------- |
| product   | ObjectId | Yes      | Reference to Product                            |
| name      | String   | Yes      | Snapshot at time of order                       |
| unitPrice | Number   | Yes      | Snapshot at time of order                       |
| quantity  | Number   | Yes      | Positive integer                                |
| lineTotal | Number   | Yes      | unitPrice × quantity, computed server-side      |

Name and price are snapshotted so editing or deleting a product never rewrites order history.

### Message Model

Contact form submissions from the public site.

| Field   | Type    | Required | Description                          |
| ------- | ------- | -------- | ------------------------------------ |
| name    | String  | Yes      | Sender name                          |
| email   | String  | Yes      | Sender email, format-validated       |
| subject | String  | Yes      | Short subject line                   |
| body    | String  | Yes      | Message content, max 2000 chars      |
| isRead  | Boolean | Yes      | Defaults to false, drives nav badge  |
| ipHash  | String  | No       | Hashed IP for rate limiting only     |

### Setting Model

Single document. Edited in the admin, consumed by the public landing page.

| Field        | Type   | Required | Description                     |
| ------------ | ------ | -------- | ------------------------------- |
| shopName     | String | Yes      | Rendered in nav and footer      |
| contactEmail | String | Yes      | Shown in the contact section    |
| heroHeading  | String | Yes      | Landing page headline           |
| heroSubtext  | String | No       | Landing page supporting copy    |
| aboutText    | String | No       | Brand/about section copy        |

### Indexes

| Collection | Index                        | Reason                          |
| ---------- | ---------------------------- | ------------------------------- |
| users      | `email` (unique)             | Login lookup                    |
| products   | `name` (text)                | Search endpoint                 |
| products   | `slug` (unique)              | Public detail route             |
| products   | `category`                   | Filter dropdown                 |
| products   | `isFeatured, isActive`       | Landing page query              |
| orders     | `orderNumber` (unique)       | Search by order ID              |
| orders     | `status`                     | Status filter and chart aggregation |
| orders     | `placedAt` (descending)      | Default sort and revenue chart  |
| messages   | `isRead, createdAt`          | Unread badge and list sort      |

### Relations

See `assets/svgs/database-relations.svg`.

- `Order.items[].product` → `Product` (many-to-one)
- `User`, `Message`, and `Setting` are standalone; nothing references them
