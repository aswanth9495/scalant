import { combineReducers } from 'redux';
import resumeBuilderReducer from './resumeBuilderSlice';
import resumeFormsReducer from './resumeFormsSlice';
import resumeReviewReducer from './resumeReviewSlice';
import formStoreReducer from './formStoreSlice';
import metaDataReducer from './metaDataSlice';
import { resumeBuilderApi } from '../services/resumeBuilderApi';

const rootReducer = combineReducers({
  resumeBuilder: resumeBuilderReducer,
  resumeForms: resumeFormsReducer,
  resumeReview: resumeReviewReducer,
  formStore: formStoreReducer,
  metaData: metaDataReducer,
  [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
});

export default rootReducer;
