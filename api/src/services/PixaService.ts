import 'dotenv/config';
import axios from 'axios';

const API_KEY = process.env.PIXABAY_API_KEY;

async function fetchPhotos(category: string) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${category}`
  );
  return response.data.hits;
}

export default {
  fetchPhotos,
};
