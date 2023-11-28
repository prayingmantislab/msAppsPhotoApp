import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import PhotoList from './components/PhotoList';

interface Photo {
  id: number;
  largeImageURL: string;
}

function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [category, setCategory] = useState('default');
  const [page, setPage] = useState(1);

  const onPhotoClick = (photo: Photo) => {
    // Handle the photo click here
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:5001/api/photos/${category}?page=${page}`
          `http://localhost:5001/api/photos/women?page=1`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error('Failed to fetch photos', error);
      }
    };

    fetchPhotos();
  }, []);
  // }, [category, page]);

  return (
    <div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 mt-4 text-center'>
        Pixa Bay Photo App
      </h1>
      <Navbar />
      <PhotoList photos={photos} onPhotoClick={onPhotoClick} />
    </div>
  );
}

export default App;
