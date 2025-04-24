import WorkExperienceForm from './WorkExperienceForm';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'WorkExperienceForm',
  component: WorkExperienceForm,
};

export const Default = () => {
  return (
    <ResumeLayout>
      <WorkExperienceForm />
    </ResumeLayout>
  );
};
