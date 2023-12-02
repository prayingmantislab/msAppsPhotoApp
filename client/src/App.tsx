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
    <div className='bg-blue-800 min-h-screen'>
      <div className='flex items-center justify-center'>
        <div className='animate-spin h-10 w-10 border-t-2 border-b-2 border-white rounded-full'></div>
        <h1 className='text-white text-4xl sm:text-4xl lg:text-4xl leading-none font-extrabold tracking-tight mb-8 mt-4 text-center mx-2'>
          Pixa Bay Photo App
        </h1>
        <div className='animate-spin h-10 w-10 border-t-2 border-b-2 border-white rounded-full'></div>
      </div>
      <div className='transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110'>
        Hover me
      </div>
      <Navbar />
      <PhotoList photos={photos} />
      <DetailsPhotoModal />
    </div>
  );
}

export default App;
