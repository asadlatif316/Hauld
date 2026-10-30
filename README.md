# Hauld

Hauld is a bag store app with an admin dashboard for managing products. Store owners can add, edit and publish products, and shoppers can browse the catalogue with search and filters.

## Features

- **Admin product management**
  - "Add product" and "Edit product" pages for mobile and laptop
  - Numbered sections: Basics, Image, Category, Price & stock, Visibility
  - Live preview and a "Ready to publish" panel
  - Save as draft or publish
- **Image uploads** straight to Cloudinary (base64, folder `hauld/products`)
- **Search and filtering** using query params on the backend
- **Dark admin theme** for the Edit page, with a lime accent

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React, Zustand (`useUIStore` for form state) |
| Backend | Node.js, Express |
| Database | MongoDB |
| Image storage | Cloudinary |

> Update this table if your stack differs.

## Project Structure

```
hauld/
├── client/            # React frontend
│   └── src/
│       ├── pages/     # Add product, Edit product, product list
│       ├── store/     # Zustand store (useUIStore)
│       └── components/
└── server/            # Express backend
    ├── controllers/
    ├── models/
    ├── routes/
    └── config/        # Cloudinary and DB setup
```

> Adjust folder names to match your repo.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local or Atlas)
- A Cloudinary account

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd hauld
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the server:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd client
npm install
npm run dev
```

## Image Upload Flow

Hauld does not use `multer`. The frontend sends the image as a base64 string, and the backend uploads it directly to Cloudinary into the `hauld/products` folder. The returned URL is saved with the product.

## Search and Filtering

Products can be searched and filtered with query params, for example:

```
GET /api/products?search=backpack&category=travel&minPrice=1000&maxPrice=5000&sort=price_asc
```

> Replace the param names above with the ones your backend uses.

## Product Fields

| Section | Fields |
| --- | --- |
| Basics | Name, description |
| Image | Product images |
| Category | Category |
| Price & stock | Price, stock quantity |
| Visibility | Draft or published |

## Roadmap

- [ ] Finish the Edit product page (mobile and laptop)
- [ ] Connect search and filters to the frontend
- [ ] Orders and checkout
- [ ] Authentication for admin users

## Author

Asad Latif
