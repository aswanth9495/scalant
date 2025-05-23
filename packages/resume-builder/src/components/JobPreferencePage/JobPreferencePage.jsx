import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import ResumeLayout from '../../layout/ResumeLayout';
import { PREFERENCE_SETTINGS_IMAGE } from '../../utils/constants';
import { setResumeData } from '../../store/resumeBuilderSlice';

import styles from './JobPreferencePage.module.scss';
import PreferenceSettings from '../PreferenceSettings';

const JobPreferencePage = ({ resumeData }) => {
  const dispatch = useDispatch();
  const storeResumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );

  useEffect(() => {
    if (resumeData) {
      dispatch(setResumeData(resumeData));
    }
  }, [dispatch, resumeData]);

  if (!storeResumeData) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingOutlined className={styles.loadingIcon} size="large" />
        <h1>Loading your preferences...</h1>
      </div>
    );
  }

  return (
    <ResumeLayout
      preview={
        <img
          src={PREFERENCE_SETTINGS_IMAGE}
          className={styles.previewImage}
          alt="preference-settings"
        />
      }
    >
      <PreferenceSettings />
    </ResumeLayout>
  );
};

export default JobPreferencePage;
