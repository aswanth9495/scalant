import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resumePersonaData: {},
};

const resumePersonaSlice = createSlice({
  name: 'resumePersona',
  initialState,
  reducers: {
    setResumePersonaData: (state, action) => {
      state.resumePersonaData = action.payload;
    },
  },
});

export const { setResumePersonaData } = resumePersonaSlice.actions;

export default resumePersonaSlice.reducer;
