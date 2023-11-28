interface PhotoProps {
  photo: {
    id: number;
    largeImageURL: string;
  };
  onClick: (photo: { id: number; largeImageURL: string }) => void;
}

const Photo: React.FC<PhotoProps> = ({ photo, onClick }) => (
  <div className='w-full h-80' onClick={() => onClick(photo)}>
    <img
      src={photo.largeImageURL}
      alt={`Photo ${photo.id}`}
      className='object-contain w-full h-full'
    />
  </div>
);

export default Photo;
