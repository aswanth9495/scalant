import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forms: {}, // Will store multiple form data
  initializedForms: {}, // Will track which forms have been initialized
};

const formStoreSlice = createSlice({
  name: 'formStore',
  initialState,
  reducers: {
    // Initialize a new form with initial data
    initializeForm: (state, action) => {
      const { formId, initialData } = action.payload;
      state.forms[formId] = initialData;
      state.initializedForms[formId] = true;
    },

    // Update specific form data
    updateFormData: (state, action) => {
      const { formId, data } = action.payload;
      if (state.forms[formId]) {
        state.forms[formId] = {
          ...state.forms[formId],
          ...data,
        };
      }
    },

    // Reset specific form data
    resetFormData: (state, action) => {
      const { formId, initialData } = action.payload;
      state.forms[formId] = initialData;
      state.initializedForms[formId] = false;
    },

    // Remove a form
    removeForm: (state, action) => {
      const { formId } = action.payload;
      delete state.forms[formId];
      delete state.initializedForms[formId];
    },

    // Reset all forms
    resetAllForms: (state) => {
      state.forms = {};
      state.initializedForms = {};
    },
  },
});

export const {
  initializeForm,
  updateFormData,
  resetFormData,
  removeForm,
  resetAllForms,
} = formStoreSlice.actions;

export default formStoreSlice.reducer;
