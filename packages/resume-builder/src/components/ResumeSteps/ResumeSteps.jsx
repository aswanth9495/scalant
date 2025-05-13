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

const ResumeTimeline = () => {
  const dispatch = useDispatch();
  const [expandedStep, setExpandedStep] = useState(null);
  const [steps, setSteps] = useState([]);
  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const incompleteForms = useSelector(
    (state) => state.resumeForms.incompleteForms
  );
  const currentIncompleteForm = useSelector(
    (state) => state.resumeForms.currentIncompleteForm
  );
  const stepRefs = useRef([]);
  const [mounted, setMounted] = useState(false);
  const resumePersonaData = useSelector(
    (state) => state.resumePersona.resumePersonaData
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && expandedStep !== null && stepRefs.current[expandedStep]) {
      const element = stepRefs.current[expandedStep];
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [expandedStep, mounted]);

  useEffect(() => {
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
  }, [resumeData, dispatch]);

  const handleStepClick = (key) => {
    setExpandedStep((prev) => (prev === key ? null : key));
  };

  const handleFormCompletion = useCallback(() => {
    const updatedIncompleteForms = incompleteForms.filter(
      (form) => form !== currentIncompleteForm
    );

    dispatch(setIncompleteForms(updatedIncompleteForms));

    if (updatedIncompleteForms.length > 0) {
      const nextForm = updatedIncompleteForms[0];
      dispatch(setCurrentIncompleteForm(nextForm));
      setExpandedStep(nextForm);
    } else {
      setExpandedStep(null);
    }
  }, [incompleteForms, currentIncompleteForm, dispatch]);

  useEffect(() => {
    if (resumePersonaData && incompleteForms.length > 0) {
      const formSteps = getFormSteps(
        resumePersonaData,
        incompleteForms,
        handleFormCompletion
      );
      setSteps(formSteps);
    }
  }, [resumePersonaData, incompleteForms, handleFormCompletion]);

  return (
    <div className={styles.container}>
      {steps && steps.length > 0 ? (
        <Timeline
          mode="left"
          items={steps.map((step) => {
            let dotIcon;
            if (step.key === expandedStep) {
              dotIcon = <LoadingOutlined className={styles.activeIcon} />;
            } else if (step.status === 'complete') {
              dotIcon = <CheckCircleOutlined className={styles.completeIcon} />;
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
          })}
        />
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default ResumeTimeline;
