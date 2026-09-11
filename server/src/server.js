import express from 'express';
import dotenv from 'dotenv';
import statusCode from 'http-status-codes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res
    .status(statusCode.OK)
    .json({ success: true, message: `Server is running on port: ${port}` });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
