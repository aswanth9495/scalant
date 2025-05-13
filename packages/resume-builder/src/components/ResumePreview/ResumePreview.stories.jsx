import ResumePreview from './ResumePreview';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'ResumePreview',
  component: ResumePreview,
};

export const Default = () => (
  <ResumeLayout preview={<ResumePreview />}>
    Dummy Content
  </ResumeLayout>
);
