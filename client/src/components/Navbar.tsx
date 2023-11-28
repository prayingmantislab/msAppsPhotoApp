import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../store';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  return (
    <nav className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center space-x-4'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Prev
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={openModal}
      >
        Category
      </button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Next
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Category Modal'
      >
        <h2 className='text-2xl font-semibold text-gray-800'>
          Select Category
        </h2>
        <div className='flex space-x-4 space-between justify-center'>
          {['animals', 'sports', 'fashion', 'nature'].map((category) => (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              {category}
            </button>
          ))}
        </div>{' '}
        <button
          onClick={closeModal}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
        >
          Close
        </button>
      </Modal>
    </nav>
  );
};

export default Navbar;
