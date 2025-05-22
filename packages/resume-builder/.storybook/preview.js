import React from 'react';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/store';
import resumeBuilderApi from '../src/services/resumeBuilderApi';
import 'antd/dist/reset.css'; // Optional global reset

const theme = {
  token: {
    fontFamily: 'Inter, sans-serif',
  },
};

const createStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      scalantResumeBuilder: rootReducer,
      [resumeBuilderApi.reducerPath]: resumeBuilderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(resumeBuilderApi.middleware),
    preloadedState,
  });
};

const store = createStore();

const withReduxProvider = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const withAntdConfig = (Story) => (
  <ConfigProvider theme={theme}>
    <Story />
  </ConfigProvider>
);

// ✅ ESM-compatible export
export const decorators = [withReduxProvider, withAntdConfig];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  docs: {
    canvas: {
      sourceState: 'shown',
    },
  },
  backgrounds: {
    default: 'light',
  },
  viewport: {
    defaultViewport: 'responsive',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};