interface PhotoProps {
  photo: {
    id: number;
    largeImageURL: string;
  };
  onClick: (photo: { id: number; largeImageURL: string }) => void;
}

const Photo: React.FC<PhotoProps> = ({ photo, onClick }) => (
  <div className='w-full h-full' onClick={() => onClick(photo)}>
    <img
      src={photo.largeImageURL}
      alt={`Photo ${photo.id}`}
      className='object-contain w-80 h-80'
    />
  </div>
);

export default Photo;
