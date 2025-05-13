import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ResumeBuilder from './ResumeBuilder';
import resumeData from '../../dummyData/resumeData.json';
import rootReducer from '../../store';
import resumeBuilderApi from '../../services/resumeBuilderApi';
import { STEPS_ORDER } from '../../utils/constants';

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(resumeBuilderApi.middleware),
    preloadedState,
  });
};

const withReduxProvider = (Story, context) => {
  const store = createTestStore();
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

export default {
  title: 'ResumeBuilder',
  component: ResumeBuilder,
  decorators: [withReduxProvider],
};

export const OnboardingFlow = () => <ResumeBuilder isOnboarding={true} />;
export const ResumeFlow = () => <ResumeBuilder isOnboarding={false} />;
export const WithDummyData = () => {
  const store = createTestStore({
    resumeBuilder: {
      isOnboarding: true,
      currentStep: 0,
      steps: STEPS_ORDER,
      resumeData: resumeData
    }
  });
  
  return (
    <Provider store={store}>
      <ResumeBuilder
        isOnboarding={true}
        resumeData={resumeData}
        baseUrl="https://cf1d948b-f96c-4781-8235-53d3293f0a70.mock.pstmn.io"
      />
    </Provider>
  );
};
