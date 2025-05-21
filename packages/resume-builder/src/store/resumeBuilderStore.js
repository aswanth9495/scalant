import { configureStore } from '@reduxjs/toolkit';
import resumeBuilderReducer from './resumeBuilderSlice';
import resumeFormsReducer from './resumeFormsSlice';
// import resumePersonaReducer from './resumePersonaSlice';
import formStoreReducer from './formStoreSlice';
import metaDataReducer from './metaDataSlice';
import { resumeBuilderApi } from '../services/resumeBuilderApi';

const resumeBuilderStore = configureStore({
  reducer: {
    resumeBuilder: resumeBuilderReducer,
    resumeForms: resumeFormsReducer,
    // resumePersona: resumePersonaReducer,
    formStore: formStoreReducer,
    metaData: metaDataReducer,
    [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(resumeBuilderApi.middleware),
});

export default resumeBuilderStore;
