import express, { Request, Response } from 'express';
import pixaService from '../services/PixaService';

const router = express.Router();

router.get('/photos/:category', async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const photos = await pixaService.fetchPhotos(category);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching photos' });
  }
});

export default router;
