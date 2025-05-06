import ResumeBuilder from './ResumeBuilder';
import resumeData from '../../dummyData/resumeData.json';

export default {
  title: 'ResumeBuilder',
  component: ResumeBuilder,
};

export const OnboardingFlow = () => <ResumeBuilder isOnboarding={true} />;
export const ResumeFlow = () => <ResumeBuilder isOnboarding={false} />;
export const WithDummyData = () => <ResumeBuilder isOnboarding={false} resumeData={resumeData} />;