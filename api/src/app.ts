import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import photosController from './controllers/PhotosController';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS
app.use('/api', photosController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
