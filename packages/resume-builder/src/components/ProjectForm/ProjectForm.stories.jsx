import ProjectForm from './ProjectForm';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'ProjectForm',
  component: ProjectForm,
};

export const Default = () => {
  return (
    <ResumeLayout>
      <ProjectForm />
    </ResumeLayout>
  );
};
