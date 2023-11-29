import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/photos/:category', async (req, res) => {
  const { category } = req.params;
  const { page, sort } = req.query;

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&category=${category}&page=${page}&order=${sort}`
    );
    res.json(response.data.hits);
  } catch (error) {
    console.error('Failed to fetch photos', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

export default router;
