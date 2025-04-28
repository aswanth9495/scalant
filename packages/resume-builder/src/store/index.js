import { configureStore } from '@reduxjs/toolkit';
import resumeBuilderReducer from './resumeBuilderSlice';

export const store = configureStore({
  reducer: {
    resumeBuilder: resumeBuilderReducer,
  },
});

export default store;
