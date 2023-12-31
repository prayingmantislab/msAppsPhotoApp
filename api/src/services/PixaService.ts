import 'dotenv/config';
import axios from 'axios';

const API_KEY = process.env.PIXABAY_API_KEY;

async function fetchPhotos(
  category: string = '',
  sort: string = 'popular',
  page: number = 1
) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${category}&order=${sort}&page=${page}`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}

export default {
  fetchPhotos,
};
