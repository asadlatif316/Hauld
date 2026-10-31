// Run from your backend folder:  node seed.js
// Adjust the 3 paths/names marked CHANGE to match your project.
import 'dotenv/config';
import mongoose from 'mongoose';
import { ProductModel as Product } from './src/models/index.js'; // CHANGE: path to your Product model
import products from './product.seed.js'; // the file I gave you

const MONGO_URI = process.env.MONGO_URI_DEV; // CHANGE: your env variable name

async function seedProducts() {
  const result = await Product.bulkWrite(
    products.map((p) => ({
      updateOne: {
        filter: { name: p.name },
        update: { $set: p },
        upsert: true,
      },
    })),
  );
  console.log(
    `Products -> inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}`,
  );

  const total = await Product.countDocuments();
  console.log(`Products in database: ${total}`);
  if (total < products.length) {
    throw new Error(
      `Expected at least ${products.length} products, found ${total}`,
    );
  }
}

async function main() {
  if (!MONGO_URI) throw new Error('MONGO_URI is missing in your .env file');
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  await seedProducts();
  // Orders, messages and settings will be added here in the next steps.

  await mongoose.disconnect();
  console.log('Done.');
}

main().catch(async (err) => {
  console.error('Seed failed:', err.message);
  await mongoose.disconnect();
  process.exit(1);
});