import DeleteConfirmationModal from './DeleteConfirmationModal';
import ResumeLayout from '../../layout/ResumeLayout';

export default {
  title: 'DeleteConfirmationModal',
  component: DeleteConfirmationModal,
};

export const Default = () => {
  return (
    <ResumeLayout>
      <DeleteConfirmationModal />
    </ResumeLayout>
  );
};
