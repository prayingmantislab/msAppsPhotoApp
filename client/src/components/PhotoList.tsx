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
  const dispatch = useDispatch();

  const handlePhotoClick = (photo: IPhoto) => {
    dispatch(setSelectedPhoto(photo));
  };

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
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
