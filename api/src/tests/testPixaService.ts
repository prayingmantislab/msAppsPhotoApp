import pixaService from '../services/PixaService';

async function testFetchPhotos() {
  const photos = await pixaService.fetchPhotos('nature');
  console.log(photos);
}

testFetchPhotos();
