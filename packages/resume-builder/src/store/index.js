import { combineReducers } from 'redux';
import resumeBuilderReducer from './resumeBuilderSlice';
import resumeFormsReducer from './resumeFormsSlice';
// import resumePersonaReducer from './resumePersonaSlice';
import formStoreReducer from './formStoreSlice';
import metaDataReducer from './metaDataSlice';
import modalsReducer from './modalsSlice';
import { resumeBuilderApi } from '../services/resumeBuilderApi';

const rootReducer = combineReducers({
  resumeBuilder: resumeBuilderReducer,
  resumeForms: resumeFormsReducer,
  // resumePersona: resumePersonaReducer,
  formStore: formStoreReducer,
  metaData: metaDataReducer,
  modals: modalsReducer,
  [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
});

export default rootReducer;
