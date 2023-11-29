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
  <div className='flex justify-center'>
    <div className='grid grid-cols-3 gap-4 max-w-screen-md'>
      {photos.slice(0, 9).map((photo) => (
        <Photo key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </div>
  </div>
);

export default PhotoList;
