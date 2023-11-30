import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import PhotoList from './components/PhotoList';
import { useSelector } from 'react-redux';
import DetailsPhotoModal from './components/DetailsPhotoModal';
import { SortOrder } from './types/types';
interface Photo {
  id: number;
  largeImageURL: string;
}
interface RootState {
  photos: Photo[];
  isCategoryModalOpen: boolean;
  currentPage: number;
  currentCategory: string;
  selectedPhoto: Photo | null;
  sortOrder: SortOrder;
}
function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const category = useSelector((state: RootState) => state.currentCategory);
  const page = useSelector((state: RootState) => state.currentPage);
  const sortOrder = useSelector((state: RootState) => state.sortOrder);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/photos/${category}?page=${page}&sort=${sortOrder}`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error('Failed to fetch photos', error);
      }
    };

    fetchPhotos();
  }, [category, page, sortOrder]);

  return (
    <div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 mt-4 text-center'>
        Pixa Bay Photo App
      </h1>
      <Navbar />
      <PhotoList photos={photos} />
      <DetailsPhotoModal />
    </div>
  );
}

export default App;
