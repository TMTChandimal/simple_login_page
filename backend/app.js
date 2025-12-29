import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

import authRoutes from './routes/authRoutes.js';
app.use('', authRoutes);

export default app;
