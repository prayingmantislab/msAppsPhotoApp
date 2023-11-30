import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentPage, setSortOrder } from '../store';
import { SortOrder } from '../types/types';
import { categoryData } from '../data/categoryData';
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
        className='flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-blue-100 bg-opacity-50'
      >
        <div className='bg-blue-100 rounded-lg w-1/2 h-1/2 overflow-auto p-4 flex flex-col items-center'>
          <h2>Select Category</h2>
          <div className='grid grid-cols-6 justify-center w-full mb-4 mt-4 gap-4'>
            {categoryData.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded'
              >
                {category}
              </button>
            ))}
          </div>
          <div className='w-full flex items-center justify-center'>
            <button
              onClick={closeModal}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded'
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
