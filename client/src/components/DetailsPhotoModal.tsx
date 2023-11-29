import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { setSelectedPhoto } from '../store';
import { RootState } from '../store';

const DetailsPhotoModal: React.FC = () => {
  const { selectedPhoto } = useSelector((state: RootState) => ({
    selectedPhoto: state.selectedPhoto,
  }));
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSelectedPhoto(null));
  };

  return (
    <Modal isOpen={selectedPhoto !== null} onRequestClose={handleClose}>
      {selectedPhoto && (
        <div className='flex flex-col items-center space-y-4'>
          <img
            src={selectedPhoto.largeImageURL}
            alt=''
            className='w-full h-auto'
          />
          <h2 className='text-xl font-bold'>Photo Details</h2>
          <p>ID: {selectedPhoto.id}</p>
          <p>Views: {selectedPhoto.views}</p>
          <p>Downloads: {selectedPhoto.downloads}</p>
          <p>Likes: {selectedPhoto.likes}</p>
          <p>Image Width: {selectedPhoto.imageWidth}</p>
          <p>Image Height: {selectedPhoto.imageHeight}</p>
        </div>
      )}
    </Modal>
  );
};

export default DetailsPhotoModal;
