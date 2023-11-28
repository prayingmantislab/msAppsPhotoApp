import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PhotoList from './components/PhotoList';

interface Photo {
  id: number;
  largeImageURL: string;
}
function App() {
  // const [photos, setPhotos] = useState([]); // Add your photos here
  const onPhotoClick = (photo: Photo) => {
    // Handle the photo click here
  };
  const photos = [
    {
      id: 1,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 2,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 3,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 4,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 5,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 6,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 7,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 8,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
    {
      id: 9,
      largeImageURL:
        'https://pixabay.com/get/g882615cbe1a827259cf2d89696a6961a373e927a72780baed5ebffaac64aae6ba76fcb176c8505bf55e7534d42dd975b5ea8ad351c0f34501c98a105d2c812a6_1280.png',
    },
  ];
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 mt-4 text-center'>
        Pixa Bay Photo App
      </h1>
      <Navbar />
      <PhotoList photos={photos} onPhotoClick={onPhotoClick} />
    </div>
  );
}

export default App;
