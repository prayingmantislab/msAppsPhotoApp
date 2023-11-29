import { configureStore, createSlice } from '@reduxjs/toolkit';

interface Photo {
  id: number;
  largeImageURL: string;
  views: number;
  downloads: number;
  likes: number;
  imageWidth: number;
  imageHeight: number;
}

interface State {
  photos: Photo[];
  isCategoryModalOpen: boolean;
  isDetailsModalOpen: boolean;
  currentPage: number;
  currentCategory: string;
  selectedPhoto: Photo | null;
}

const initialState: State = {
  photos: [],
  isCategoryModalOpen: false,
  isDetailsModalOpen: false,
  currentPage: 1,
  currentCategory: 'monuments',
  selectedPhoto: null,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    toggleCategoryModal: (state) => {
      state.isCategoryModalOpen = !state.isCategoryModalOpen;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setSelectedPhoto: (state, action) => {
      state.selectedPhoto = action.payload;
    },
  },
});

export const {
  setPhotos,
  toggleCategoryModal,
  setCurrentPage,
  setCurrentCategory,
  setSelectedPhoto,
} = slice.actions;

const store = configureStore({
  reducer: slice.reducer,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
