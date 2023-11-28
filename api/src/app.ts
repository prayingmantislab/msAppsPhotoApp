// app.ts
import dotenv from 'dotenv';
import express from 'express';
import photosController from './controllers/PhotosController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', photosController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
