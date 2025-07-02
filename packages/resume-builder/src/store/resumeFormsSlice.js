import { createSlice } from '@reduxjs/toolkit';
import { STEPS_ORDER } from '../utils/constants';

const initialState = {
  currentIncompleteForm: '',
  nextIncompleteForm: '',
  allForms: STEPS_ORDER,
  incompleteForms: [],
  completed: false,
};

const resumeFormsSlice = createSlice({
  name: 'resumeForms',
  initialState,
  reducers: {
    setCurrentIncompleteForm: (state, action) => {
      state.currentIncompleteForm = action.payload;
    },
    setNextIncompleteForm: (state, action) => {
      state.nextIncompleteForm = action.payload;
    },
    setIncompleteForms: (state, action) => {
      state.incompleteForms = action.payload;
    },
    setCompleted: (state, action) => {
      state.completed = action.payload;
    },
  },
});

export const {
  setCurrentIncompleteForm,
  setNextIncompleteForm,
  setIncompleteForms,
  setCompleted,
} = resumeFormsSlice.actions;
export default resumeFormsSlice.reducer;
