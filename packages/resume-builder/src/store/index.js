import { combineReducers } from 'redux';
import resumeBuilderReducer from './resumeBuilderSlice';
import resumeFormsReducer from './resumeFormsSlice';
import resumePersonaReducer from './resumePersonaSlice';
import formStoreReducer from './formStoreSlice';
import { resumeBuilderApi } from '../services/resumeBuilderApi';

const rootReducer = combineReducers({
  resumeBuilder: resumeBuilderReducer,
  resumeForms: resumeFormsReducer,
  resumePersona: resumePersonaReducer,
  formStore: formStoreReducer,
  [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
});

export default rootReducer;
