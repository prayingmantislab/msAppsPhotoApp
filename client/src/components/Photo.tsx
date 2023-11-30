interface PhotoProps {
  photo: {
    id: number;
    largeImageURL: string;
  };
}

const Photo: React.FC<PhotoProps> = ({ photo }) => (
  <div className='w-full h-64 relative '>
    <img
      src={photo.largeImageURL}
      alt={`Photo ${photo.id}`}
      className='w-full h-full object-cover'
    />
  </div>
);

export default Photo;
