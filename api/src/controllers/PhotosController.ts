// Import necessary modules
import express from 'express';
import axios from 'axios';

// Initialize a new router
const router = express.Router();

// Define a GET route for fetching photos by category
router.get('/photos/:category', async (req, res) => {
  // Extract category from route parameters
  const { category } = req.params;
  // Extract page and sort order from query parameters
  const { page, sort } = req.query;

  try {
    // Send a GET request to the Pixabay API
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&category=${category}&page=${page}&order=${sort}`
    );
    // Send the received data as the response
    res.json(response.data.hits);
  } catch (error) {
    // Log the error and send a 500 status code with an error message
    console.error('Failed to fetch photos', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

// Export the router
export default router;
