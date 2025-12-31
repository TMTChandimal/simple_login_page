
import express, { json } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(json());
app.use(cors());
app.use('', authRoutes);

export default app;
