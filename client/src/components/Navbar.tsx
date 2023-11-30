import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentPage, setSortOrder } from '../store';
import { SortOrder } from '../types/types';

interface RootState {
  currentPage: number;
}
const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Get the current page from the Redux state
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const selectCategory = (category: string) => {
    dispatch(setCurrentCategory(category));
    closeModal();
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(event.target.value as SortOrder));
  };

  return (
    <nav className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-4 mb-4'>
      <button
        onClick={handlePreviousPage}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Prev
      </button>
      <select
        onChange={handleSortChange}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        <option value='popular'>Popular</option>
        <option value='latest'>Latest</option>
        <option value='upcoming'>Upcoming</option>
      </select>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={openModal}
      >
        Category
      </button>
      <button
        onClick={handleNextPage}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Next
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Category Modal'
        className='flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-50'
      >
        <div className='bg-white rounded-lg w-1/2 h-1/2 overflow-auto p-4 flex flex-col items-center'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Select Category
          </h2>
          <div className='flex justify-between w-full mb-4'>
            {['animals', 'nature', 'food', 'science'].map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                {category}
              </button>
            ))}
          </div>
          <div className='w-full flex justify-start'>
            <button
              onClick={closeModal}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded justify-center items-center'
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
