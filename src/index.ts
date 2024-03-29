import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { initializedDatabase } from './database/index';
import 'dotenv/config';

const app = express();
const port: number = 2000;

const CorsOptions: {
  origin: string;
  credential: boolean;
} = {
  origin: '*',
  credential: true,
};
app.use(cors(CorsOptions));
app.use(compression());
app.use(cookieParser());
app.use(express.json());

app.listen(port, async () => {
  await initializedDatabase();
  console.log(`server is running on ${port}`);
});
