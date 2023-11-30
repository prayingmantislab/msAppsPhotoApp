import Photo from './Photo';
import { useDispatch } from 'react-redux';
import { setSelectedPhoto } from '../store';

interface IPhoto {
  id: number;
  largeImageURL: string;
}

interface PhotoListProps {
  photos: IPhoto[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Define a function to handle when a photo is clicked
  const handlePhotoClick = (photo: IPhoto) => {
    // Dispatch the setSelectedPhoto action with the clicked photo
    dispatch(setSelectedPhoto(photo));
  };

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-3 gap-4 max-w-screen-md'>
        {photos.slice(0, 9).map((photo) => (
          <div key={photo.id} onClick={() => handlePhotoClick(photo)}>
            <Photo photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
