import { configureStore } from '@reduxjs/toolkit';
import resumeBuilderReducer from './resumeBuilderSlice';
import resumeFormsReducer from './resumeFormsSlice';
import resumeQuestionsReducer from './resumeQuestionsSlice';
import { resumeBuilderApi } from '../services/resumeBuilderApi';

const resumeBuilderStore = configureStore({
  reducer: {
    resumeBuilder: resumeBuilderReducer,
    resumeForms: resumeFormsReducer,
    resumeQuestions: resumeQuestionsReducer,
    [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resumeBuilderApi.middleware),
});

export default resumeBuilderStore;
