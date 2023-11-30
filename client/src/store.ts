import { configureStore, createSlice } from '@reduxjs/toolkit';
import { SortOrder } from './types/types';

// Define the structure of a photo object
interface Photo {
  id: number;
  largeImageURL: string;
  views: number;
  downloads: number;
  likes: number;
  imageWidth: number;
  imageHeight: number;
}

// Define the structure of the state
interface State {
  photos: Photo[];
  isCategoryModalOpen: boolean;
  isDetailsModalOpen: boolean;
  currentPage: number;
  currentCategory: string;
  selectedPhoto: Photo | null;
  sortOrder: SortOrder;
}

// Define the initial state
const initialState: State = {
  photos: [],
  isCategoryModalOpen: false,
  isDetailsModalOpen: false,
  currentPage: 1,
  currentCategory: 'cats',
  selectedPhoto: null,
  sortOrder: 'popular',
};

// Create a slice of the Redux store
const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Define a reducer to set the photos
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    // Define a reducer to toggle the category modal
    toggleCategoryModal: (state) => {
      state.isCategoryModalOpen = !state.isCategoryModalOpen;
    },
    // Define a reducer to set the current page
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // Define a reducer to set the current category
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    // Define a reducer to set the selected photo
    setSelectedPhoto: (state, action) => {
      state.selectedPhoto = action.payload;
    },
    // Define a reducer to set the sort order
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

// Export the actions
export const {
  setPhotos,
  toggleCategoryModal,
  setCurrentPage,
  setCurrentCategory,
  setSelectedPhoto,
  setSortOrder,
} = slice.actions;

// Configure the Redux store
const store = configureStore({
  reducer: slice.reducer,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
