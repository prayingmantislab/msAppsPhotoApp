import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import photosController from './controllers/PhotosController';

// Load environment variables from .env file
dotenv.config();

// Initialize express application
const app = express();

// Set the port for the server from environment variables or default to 5001
const PORT = process.env.PORT || 5001;

// Use cors middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Use photosController for routes starting with '/api'
app.use('/api', photosController);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
