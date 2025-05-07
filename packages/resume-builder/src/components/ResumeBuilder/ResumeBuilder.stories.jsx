import ResumeBuilder from './ResumeBuilder';
import resumeData from '../../dummyData/resumeData.json';

export default {
  title: 'ResumeBuilder',
  component: ResumeBuilder,
};

export const OnboardingFlow = () => <ResumeBuilder isOnboarding={true} />;
export const ResumeFlow = () => <ResumeBuilder isOnboarding={false} />;
export const WithDummyData = () => (
  <ResumeBuilder
    isOnboarding={false}
    resumeData={resumeData}
    baseUrl="https://cf1d948b-f96c-4781-8235-53d3293f0a70.mock.pstmn.io"
  />
);
