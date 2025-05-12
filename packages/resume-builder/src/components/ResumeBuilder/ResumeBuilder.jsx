import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOnboarding,
  setCurrentStep,
  setResumeData,
} from '../../store/resumeBuilderSlice';

import {
  RESUME_BUILDER_STEPS,
  PREFERENCE_SETTINGS_IMAGE,
} from '../../utils/constants';
import ResumeLayout from '../../layout/ResumeLayout';
import Acknowledgement from '../Acknowledgement';
import PreferenceSettings from '../PreferenceSettings';
import ResumeBasicQuestions from '../ResumeBasicQuestions';
import ResumeTips from '../ResumeTips';
import ResumeSteps from '../ResumeSteps';
import ResumePreview from '../ResumePreview';
import SampleResumePreview from '../SampleResumePreview';
import styles from './ResumeBuilder.module.scss';

const ResumeBuilderContent = ({
  isOnboarding = true,
  resumeData,
  onBackButtonClick,
  resumeManager,
}) => {
  const dispatch = useDispatch();
  const { currentStep, steps } = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder
  );
  useEffect(() => {
    dispatch(setOnboarding(isOnboarding));
    if (!isOnboarding) {
      // If not onboarding, directly show ResumeSteps
      const resumeStepsIndex = steps.findIndex(
        (step) => step.key === RESUME_BUILDER_STEPS.RESUME_STEPS.key
      );
      dispatch(setCurrentStep(resumeStepsIndex));
    }
  }, [isOnboarding, dispatch, steps]);

  useEffect(() => {
    if (resumeData) {
      dispatch(setResumeData(resumeData));
    }
  }, [resumeData, dispatch]);

  // const handleNext = () => {
  //   dispatch(nextStep());
  // };

  // const handlePrevious = () => {
  //   dispatch(previousStep());
  // };

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
        return (
          <img
            src={PREFERENCE_SETTINGS_IMAGE}
            className={styles.previewImage}
            alt="preference-settings"
          />
        );
      case RESUME_BUILDER_STEPS.PREFERENCE_SETTINGS.component:
        return (
          <img
            src={PREFERENCE_SETTINGS_IMAGE}
            className={styles.previewImage}
            alt="preference-settings"
          />
        );
      case RESUME_BUILDER_STEPS.RESUME_BASIC_QUESTIONS.component:
        return (
          <img
            src={PREFERENCE_SETTINGS_IMAGE}
            className={styles.previewImage}
            alt="preference-settings"
          />
        );
      case RESUME_BUILDER_STEPS.RESUME_TIPS.component:
        return <SampleResumePreview />;

      case RESUME_BUILDER_STEPS.RESUME_STEPS.component:
        return (
          <ResumePreview
            resumeSelected={resumeManager}
            resumeData={resumeData}
          />
        );
      default:
        return null;
    }
  };
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
  onBackButtonClick,
  resumeManager,
}) => {
  const storeState = useSelector((state) => state);
  console.log('storeState', storeState);
  return (
    <ResumeBuilderContent
      isOnboarding={isOnboarding}
      resumeData={resumeData}
      onBackButtonClick={onBackButtonClick}
      resumeManager={resumeManager}
    />
  );
};

export default ResumeBuilder;
