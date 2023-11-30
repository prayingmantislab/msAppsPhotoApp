interface PhotoProps {
  photo: {
    id: number;
    largeImageURL: string;
  };
}

const Photo: React.FC<PhotoProps> = ({ photo }) => (
  <div className='w-full h-64'>
    <img
      src={photo.largeImageURL}
      alt={`Photo ${photo.id}`}
      className='w-full h-full object-cover rounded-md  rounded-md shadow-md border-2 border-blue-200'
    />
  </div>
);

export default Photo;
