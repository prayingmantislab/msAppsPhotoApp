import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import photosController from './controllers/PhotosController';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());

app.use('/api', photosController);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
