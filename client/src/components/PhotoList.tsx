import Photo from './Photo';
interface Photo {
  id: number;
  largeImageURL: string;
}

interface PhotoListProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, onPhotoClick }) => (
  <div className='grid grid-cols-3 space-x-2 space-y-2 h-screen'>
    {photos.map((photo) => (
      <Photo key={photo.id} photo={photo} onClick={onPhotoClick} />
    ))}
  </div>
);

export default PhotoList;
