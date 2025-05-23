import ResumeBuilder from './ResumeBuilder';
import resumeData from '../../dummyData/resumeData.json';
import resumeData1 from '../../dummyData/resumeData1.json';
import { useState } from 'react';

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
export const WithDummyData = () => {
  const [useResumeData1, setUseResumeData1] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setUseResumeData1(!useResumeData1)}
        style={{ marginBottom: '20px', padding: '8px 16px' }}
      >
        Switch to {useResumeData1 ? 'Resume Data' : 'Resume Data 1'}
      </button>
      <ResumeBuilder
        isOnboarding={true}
        resumeData={useResumeData1 ? resumeData1 : resumeData}
        resumeList={dummyResumeList}
        courseProduct={'data_science'}
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
    </div>
  );
};

export const WithDummyData1 = () => (
  <ResumeBuilder
    isOnboarding={true}
    resumeData={resumeData1}
    resumeList={dummyResumeList}
    courseProduct={'data_science'}
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
