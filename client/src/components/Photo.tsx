interface PhotoProps {
  photo: {
    id: number;
    largeImageURL: string;
  };
}

const Photo: React.FC<PhotoProps> = ({ photo }) => (
  <div className='w-full h-full '>
    <img
      src={photo.largeImageURL}
      alt={`Photo ${photo.id}`}
      className='object-contain w-80 h-80 mx-auto mx-2'
    />
  </div>
);

export default Photo;
