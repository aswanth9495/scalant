import React from 'react';

import styles from './ResumeReviewOverallSummary.module.scss';
import { useSelector } from 'react-redux';

const BACKGROUND_IMAGE_URL = {
  success:
    'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/132/734/original/Rectangle_17.png',
  warning:
    'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/132/730/original/Rectangle_14_%283%29.png',
};

const DEFAULT_SUMMARY_TEXT =
  "You're close! Try improving the Skills and Projects section, based on the provided feedback";

const TYPE_MAP = {
  success: 'success',
  warning: 'warning',
};

const ResumeReviewOverallSummary = ({
  type = TYPE_MAP.success,
  summaryText = DEFAULT_SUMMARY_TEXT,
}) => {
  const { reviewData } = useSelector(
    (state) => state.scalantResumeBuilder.resumeReview
  );
  console.log('reviewData', reviewData);
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL[type]})` }}
    >
      <div className={styles.innerContainer}>
        <div
          className={
            type === TYPE_MAP.success ? styles.successText : styles.warningText
          }
        >
          {summaryText}
        </div>
      </div>
    </div>
  );
};

export default ResumeReviewOverallSummary;
