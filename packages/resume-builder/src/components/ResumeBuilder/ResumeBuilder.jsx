import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentStep,
  setResumeData,
  setProgram,
  resetSteps,
} from '../../store/resumeBuilderSlice';
import { resetAllForms } from '../../store/formStoreSlice';
import { getResumeProgram } from '../../utils/resumeUtils';
import { LoadingOutlined } from '@ant-design/icons';

import {
  RESUME_BUILDER_STEPS,
  PREFERENCE_SETTINGS_IMAGE,
} from '../../utils/constants';
import {
  shouldShowOnboarding,
  markOnboardingCompleted,
  isFinalOnboardingStep,
} from '../../utils/onboardingUtils';
import ResumeLayout from '../../layout/ResumeLayout';
import Acknowledgement from '../Acknowledgement';
import PreferenceSettings from '../PreferenceSettings';
import ResumeBasicQuestions from '../ResumeBasicQuestions';
import ResumeTips from '../ResumeTips';
import ResumeSteps from '../ResumeSteps';
import ResumePreview from '../ResumePreview';
import SampleResumePreview from '../SampleResumePreview';
import ResumeHighlightPreview from '../ResumeHighlightPreview';
import styles from './ResumeBuilder.module.scss';
import IntroVideo from '../IntroVideo';
const ResumeBuilderContent = ({
  isOnboarding = true,
  resumeData,
  onBackButtonClick,
  resumeList,
  onResumeClick,
  onAddResumeClick,
  onManageResumesClick,
  onEditClick,
  onDeleteClick,
  courseProduct,
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const { currentStep, steps } = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder
  );

  useEffect(() => {
    if (resumeData) {
      const resumeId = resumeData?.resume_details?.id;
      dispatch(setResumeData(resumeData));
      dispatch(setProgram(getResumeProgram(courseProduct)));
      dispatch(resetSteps());
      dispatch(resetAllForms());

      const shouldShow = isOnboarding ? shouldShowOnboarding(resumeId) : false;
      if (!shouldShow) {
        const resumeStepsIndex = steps.findIndex(
          (step) => step.key === RESUME_BUILDER_STEPS.RESUME_STEPS.key
        );
        dispatch(setCurrentStep(resumeStepsIndex));
      }
    }
  }, [resumeData, dispatch, steps, isOnboarding, courseProduct]);

  useEffect(() => {
    const currentStepData = steps[currentStep];
    if (isFinalOnboardingStep(currentStepData.key)) {
      const resumeId = resumeData?.resume_details?.id;
      if (resumeId) {
        markOnboardingCompleted(resumeId);
      }
    }
  }, [currentStep, steps, resumeData]);

  const renderComponent = () => {
    const currentStepData = steps[currentStep];
    switch (currentStepData.component) {
      case RESUME_BUILDER_STEPS.ACKNOWLEDGEMENT.component:
        return <Acknowledgement />;
      case RESUME_BUILDER_STEPS.PREFERENCE_SETTINGS.component:
        return <PreferenceSettings />;
      case RESUME_BUILDER_STEPS.RESUME_BASIC_QUESTIONS.component:
        return <ResumeBasicQuestions />;
      case RESUME_BUILDER_STEPS.RESUME_TIPS.component:
        return <ResumeTips />;
      case RESUME_BUILDER_STEPS.RESUME_STEPS.component:
        return <ResumeSteps />;
      default:
        return null;
    }
  };

  const previewUi = () => {
    const currentStepData = steps[currentStep];
    switch (currentStepData.component) {
      case RESUME_BUILDER_STEPS.ACKNOWLEDGEMENT.component:
        return <IntroVideo />;
      case RESUME_BUILDER_STEPS.PREFERENCE_SETTINGS.component:
        return (
          <img
            src={PREFERENCE_SETTINGS_IMAGE}
            className={styles.previewImage}
            alt="preference-settings"
          />
        );
      case RESUME_BUILDER_STEPS.RESUME_BASIC_QUESTIONS.component:
        return <ResumeHighlightPreview />;
      case RESUME_BUILDER_STEPS.RESUME_TIPS.component:
        return <SampleResumePreview />;

      case RESUME_BUILDER_STEPS.RESUME_STEPS.component:
        return (
          <ResumePreview
            resumeList={resumeList}
            onResumeClick={onResumeClick}
            onAddResumeClick={onAddResumeClick}
            onManageResumesClick={onManageResumesClick}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        );
      default:
        return null;
    }
  };

  if (!resumeData || isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingOutlined className={styles.loadingIcon} size="large" />
        <h1>Loading your resume data...</h1>
      </div>
    );
  }

  return (
    <ResumeLayout onBackButtonClick={onBackButtonClick} preview={previewUi()}>
      {renderComponent()}
      {/* Uncomment this when you want to debug
       <Space className={styles.navigationButtons}>
        <Button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button
          type="primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </Button>
      </Space> */}
    </ResumeLayout>
  );
};

const ResumeBuilder = ({
  isOnboarding = true,
  resumeData,
  courseProduct,
  onBackButtonClick,
  resumeManager,
  resumeList,
  onResumeClick,
  onAddResumeClick,
  onManageResumesClick,
  onEditClick,
  onDeleteClick,
  isLoading = false,
}) => {
  return (
    <ResumeBuilderContent
      isOnboarding={isOnboarding}
      resumeData={resumeData}
      onBackButtonClick={onBackButtonClick}
      resumeManager={resumeManager}
      resumeList={resumeList}
      courseProduct={courseProduct}
      onResumeClick={onResumeClick}
      onAddResumeClick={onAddResumeClick}
      onManageResumesClick={onManageResumesClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      isLoading={isLoading}
    />
  );
};

export default ResumeBuilder;
