import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Timeline, Spin } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import ResumeStepCard from '../ResumeStepCard';
import styles from './ResumeSteps.module.scss';
import { getAllIncompleteForms, getFormSteps } from '../../utils/resumeSteps';
import {
  setIncompleteForms,
  setCurrentIncompleteForm,
} from '../../store/resumeFormsSlice';
import { useBasicQuestionsForm } from '../../hooks/useBasicQuestionsForm';
import ResumeProfileCard from '../ResumeProfileCard';
import ResumeReviewOverallSummary from '../ResumeReviewOverallSummary';

const ResumeTimeline = () => {
  const dispatch = useDispatch();
  const program = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.program
  );
  const [expandedStep, setExpandedStep] = useState(null);
  const [steps, setSteps] = useState([]);
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const incompleteForms = useSelector(
    (state) => state.scalantResumeBuilder.resumeForms.incompleteForms
  );
  const currentIncompleteForm = useSelector(
    (state) => state.scalantResumeBuilder.resumeForms.currentIncompleteForm
  );
  const stepRefs = useRef([]);
  const [mounted, setMounted] = useState(false);
  const resumePersonaData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms.basicQuestions
  );
  const reviewData = useSelector(
    (state) => state.scalantResumeBuilder.resumeReview.reviewData
  );
  const isReviewLoading = useSelector(
    (state) => state.scalantResumeBuilder.resumeReview.isLoading
  );

  // Initialize form values when resumeData is loaded
  useBasicQuestionsForm(resumeData?.personal_details);

  // Force re-render when resumeData changes
  useEffect(() => {
    if (resumeData) {
      setSteps([]); // Clear steps to force re-render
      const newIncompleteForms = getAllIncompleteForms(resumeData);
      batch(() => {
        dispatch(setIncompleteForms(newIncompleteForms));
        if (newIncompleteForms.length > 0) {
          dispatch(setCurrentIncompleteForm(newIncompleteForms[0]));
          setExpandedStep(newIncompleteForms[0]);
        } else {
          setExpandedStep(null);
        }
      });
    }
  }, [resumeData, dispatch]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && expandedStep !== null && stepRefs.current[expandedStep]) {
      const element = stepRefs.current[expandedStep];
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedStep, mounted]);

  const handleStepClick = (key) => {
    setExpandedStep((prev) => (prev === key ? null : key));
    if (incompleteForms.includes(key)) {
      dispatch(setCurrentIncompleteForm(key));
    }
  };

  const handleFormCompletion = useCallback(
    (skipNextStep = false) => {
      let updatedIncompleteForms = [...incompleteForms];
      if (expandedStep === currentIncompleteForm) {
        updatedIncompleteForms = updatedIncompleteForms.filter(
          (form) => form !== currentIncompleteForm
        );

        dispatch(setIncompleteForms(updatedIncompleteForms));
      }

      if (!skipNextStep && updatedIncompleteForms.length > 0) {
        const nextForm = updatedIncompleteForms[0];
        dispatch(setCurrentIncompleteForm(nextForm));
        setExpandedStep(nextForm);
      } else if (!skipNextStep) {
        setExpandedStep(null);
      }
    },
    [incompleteForms, currentIncompleteForm, dispatch, expandedStep]
  );

  useEffect(() => {
    if (resumePersonaData) {
      const formSteps = getFormSteps(
        resumePersonaData,
        incompleteForms,
        handleFormCompletion,
        program,
        reviewData,
        isReviewLoading
      );
      setSteps(formSteps);
    }
  }, [
    resumePersonaData,
    incompleteForms,
    handleFormCompletion,
    program,
    reviewData,
    isReviewLoading,
  ]);

  return (
    <div className={styles.container}>
      <ResumeReviewOverallSummary
        reviewData={reviewData}
        isReviewLoading={isReviewLoading}
      />
      <ResumeProfileCard
        className={styles.profileCard}
        resumePersonaData={resumePersonaData}
      />
      {steps && steps.length > 0 ? (
        <Timeline
          mode="left"
          pending={false}
          items={[
            ...steps.map((step) => {
              let dotIcon;
              if (step.key === expandedStep) {
                dotIcon = <LoadingOutlined className={styles.activeIcon} />;
              } else if (
                step.status === 'complete' ||
                step.status === 'looks_good'
              ) {
                dotIcon = (
                  <CheckCircleOutlined className={styles.completeIcon} />
                );
              } else {
                dotIcon = (
                  <ClockCircleOutlined className={styles.incompleteIcon} />
                );
              }

              return {
                dot: dotIcon,
                children: (
                  <div ref={(el) => (stepRefs.current[step.key] = el)}>
                    <ResumeStepCard
                      key={step.key}
                      title={step.title}
                      subtitle={step.subtitle}
                      icon={step.icon}
                      status={step.status}
                      isActive={step.key === expandedStep}
                      expanded={step.key === expandedStep}
                      onClick={() => handleStepClick(step.key)}
                      required={step.required}
                    >
                      {step.component}
                    </ResumeStepCard>
                  </div>
                ),
              };
            }),
          ]}
        />
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ResumeTimeline;
