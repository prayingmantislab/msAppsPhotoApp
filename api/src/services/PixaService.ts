import 'dotenv/config';
import axios from 'axios';

// Get the Pixabay API key from environment variables
const API_KEY = process.env.PIXABAY_API_KEY;

// Define an async function to fetch photos from Pixabay
async function fetchPhotos(
  // The category of photos to fetch, default is an empty string
  category: string = '',
  // The sort order of photos to fetch, default is 'popular'
  sort: string = 'popular',
  // The page number of photos to fetch, default is 1
  page: number = 1
) {
  // Send a GET request to the Pixabay API
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${category}&order=${sort}&page=${page}`
  );
  return response.data.hits;
}

export default {
  fetchPhotos,
};
