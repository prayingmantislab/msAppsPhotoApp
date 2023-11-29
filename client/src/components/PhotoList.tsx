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
    console.log('Photo clicked', photo);
  };

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-3 gap-4 max-w-screen-md'>
        {photos.slice(0, 9).map((photo) => (
          <div onClick={() => handlePhotoClick(photo)}>
            <Photo key={photo.id} photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
