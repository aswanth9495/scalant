import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resumeQuestionsData: {},
};

const resumeQuestionsSlice = createSlice({
  name: 'resumeQuestions',
  initialState,
  reducers: {
    setResumeQuestionsData: (state, action) => {
      state.resumeQuestionsData = action.payload;
    },
  },
});

export const { setResumeQuestionsData } = resumeQuestionsSlice.actions;

export default resumeQuestionsSlice.reducer;
