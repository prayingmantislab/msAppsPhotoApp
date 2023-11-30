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
        <div className='bg-white rounded-lg h-auto flex flex-col items-center space-y-4'>
          <img
            src={selectedPhoto.largeImageURL}
            alt=''
            className='w-1/2 h-1/2'
          />
          <h2 className='text-xl font-bold'>Photo Details</h2>
          <p>ID: {selectedPhoto.id}</p>
          <p>Views: {selectedPhoto.views}</p>
          <p>Downloads: {selectedPhoto.downloads}</p>
          <p>Likes: {selectedPhoto.likes}</p>
          <p>Image Width: {selectedPhoto.imageWidth}</p>
          <p>Image Height: {selectedPhoto.imageHeight}</p>
          <button
            onClick={handleClose}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default DetailsPhotoModal;
