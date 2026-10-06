import express from 'express';

import disneyRoutes from './routes/disneyRoutes.js';

const app = express();

app.use(express.json());

app.use("/api/disney", disneyRoutes);

