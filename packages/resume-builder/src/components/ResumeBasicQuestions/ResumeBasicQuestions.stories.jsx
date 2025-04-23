import ResumeBasicQuestions from './ResumeBasicQuestions';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'ResumeBasicQuestions',
  component: ResumeBasicQuestions,
};

export const Default = () => (
  <ResumeLayout>
    <ResumeBasicQuestions />
  </ResumeLayout>
);
