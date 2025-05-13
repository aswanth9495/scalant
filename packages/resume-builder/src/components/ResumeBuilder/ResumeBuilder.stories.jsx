import ResumeBuilder from './ResumeBuilder';
import resumeData from '../../dummyData/resumeData.json';
import { STEPS_ORDER } from '../../utils/constants';

export default {
  title: 'ResumeBuilder',
  component: ResumeBuilder,
};

const dummyResumeList = [
  { id: 1, name: 'Resume 1', default: true },
  { id: 2, name: 'Resume 2', default: false },
  { id: 3, name: 'Resume 3', default: false },
];

export const OnboardingFlow = () => <ResumeBuilder isOnboarding={true} />;
export const ResumeFlow = () => <ResumeBuilder isOnboarding={false} />;
export const WithDummyData = () => (
  <ResumeBuilder
    isOnboarding={true}
    resumeData={resumeData}
    resumeList={dummyResumeList}
    onResumeClick={(id) => {
      console.log('Resume with id', id, 'clicked');
    }}
    onAddResumeClick={() => {
      console.log('Add Resume clicked');
    }}
    onManageResumesClick={() => {
      console.log('Manage Resumes clicked');
    }}
    onEditClick={() => {
      console.log('Edit clicked');
    }}
    onDeleteClick={() => {
      console.log('Delete clicked');
    }}
    baseUrl="https://cf1d948b-f96c-4781-8235-53d3293f0a70.mock.pstmn.io"
  />
);
