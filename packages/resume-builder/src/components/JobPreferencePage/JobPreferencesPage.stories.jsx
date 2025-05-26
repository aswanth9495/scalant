import JobPreferencePage from './JobPreferencePage';

import resumeData from '../../dummyData/resumeData.json';

export default {
  title: 'JobPreferencePage',
  component: JobPreferencePage,
};

export const Default = () => (
  <JobPreferencePage
    resumeData={resumeData}
  />
);
