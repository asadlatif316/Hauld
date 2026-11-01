import 'dotenv/config';
import express from 'express';
import statusCode from 'http-status-codes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './lib/db.js';
import helmet from 'helmet';
import { ErrorHandlerMiddleware } from './middlewares/index.js';
import { authRouter, productRouter, orderRouter } from './routes/index.js';

const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res
    .status(statusCode.OK)
    .json({ success: true, message: `Server is running on port: ${port}` });
});

app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);

app.use(ErrorHandlerMiddleware);

connectDB().then(() => {
  app.listen(port, () => console.log(`Server is running on port: ${port}`));
});
