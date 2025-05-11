import { useSelector } from 'react-redux';
import { Button } from 'antd';

import { getResumeTemplateByJobRole } from '../../utils/constants';

import styles from './SampleResumePreview.module.scss';

const SampleResumePreview = () => {
  const { currentJobRole } = useSelector(
    (state) => state.resumePersona.resumePersonaData
  );
  const { preview, pdfLink } = getResumeTemplateByJobRole(currentJobRole);
  return (
    <div className={styles.container}>
      <img className={styles.previewImage} src={preview} alt="resume-preview" />

      <Button
        type="link"
        className={styles.viewPdfButton}
        onClick={() => {
          // eslint-disable-next-line no-undef
          window.open(pdfLink, '_blank');
        }}
      >
        View PDF in new tab
      </Button>
    </div>
  );
};

export default SampleResumePreview;
