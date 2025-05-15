import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'antd';

import { getSampleResume } from '../../utils/sampleResumeUtils';

import styles from './SampleResumePreview.module.scss';

const SampleResumePreview = () => {
  const { currentJobRole, techExperience } = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms.basicQuestions
  );
  const program = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.program
  );

  const { preview, pdfLink } = getSampleResume(
    currentJobRole,
    techExperience,
    program
  );

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
