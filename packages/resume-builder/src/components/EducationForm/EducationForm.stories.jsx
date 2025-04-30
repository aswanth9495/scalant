import EducationForm from './EducationForm';
import ResumeLayout from '../../layout/ResumeLayout';
import resumeData from '../../dummyData/resumeData.json';

export default {
  title: 'EducationForm',
  component: EducationForm,
};

export const Default = () => (
  <ResumeLayout>
    <EducationForm resumeData={resumeData} />
  </ResumeLayout>
);
