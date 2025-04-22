import PageHeader from './PageHeader';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'PageHeader',
  component: PageHeader,
};

export const Default = () => (
  <ResumeLayout>
    <PageHeader title="Scaler Resume Builder" subtitle="Build a Resume with ATS Compliance" />
  </ResumeLayout>
);