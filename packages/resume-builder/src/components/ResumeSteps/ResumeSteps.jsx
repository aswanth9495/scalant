import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Timeline } from 'antd';
import {
  UserOutlined,
  ToolOutlined,
  FileTextOutlined,
  BookOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
  FormOutlined,
} from '@ant-design/icons';
import ResumeStepCard from '../ResumeStepCard';
import PersonalInfoAndSocial from '../PersonalInfoAndSocial';
import SkillsAndToolkit from '../SkillsAndToolkit';
import ProjectForm from '../ProjectForm';
import EducationForm from '../EducationForm';
import WorkExperienceForm from '../WorkExperienceForm';
import CustomForm from '../CustomForm';
import styles from './ResumeSteps.module.scss';
import { getAllIncompleteForms } from '../../utils/resumeSteps';
import {
  setIncompleteForms,
  setCurrentIncompleteForm,
} from '../../store/resumeFormsSlice';

const ResumeTimeline = () => {
  const dispatch = useDispatch();
  const [expandedStep, setExpandedStep] = useState(null);
  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const incompleteForms = useSelector(
    (state) => state.resumeForms.incompleteForms
  );
  const currentIncompleteForm = useSelector(
    (state) => state.resumeForms.currentIncompleteForm
  );
  const stepRefs = useRef([]);
  const [mounted, setMounted] = useState(false);

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

  const handleFormCompletion = () => {
    // Remove the completed form from incompleteForms
    const updatedIncompleteForms = incompleteForms.filter(
      (form) => form !== currentIncompleteForm
    );

    // Update the Redux store with the new incomplete forms list
    dispatch(setIncompleteForms(updatedIncompleteForms));

    // If there are more incomplete forms, open the next one
    if (updatedIncompleteForms.length > 0) {
      const nextForm = updatedIncompleteForms[0];
      dispatch(setCurrentIncompleteForm(nextForm));
      setExpandedStep(nextForm);
    } else {
      // If no more incomplete forms, close all forms
      setExpandedStep(null);
    }
  };

  const steps = [
    {
      key: 'personalDetails',
      title: 'Personal Info and Socials',
      subtitle: 'Lets get to know you! Fill in your personal details',
      icon: <UserOutlined />,
      status: incompleteForms.includes('personalDetails')
        ? 'incomplete'
        : 'complete',
      component: <PersonalInfoAndSocial onComplete={handleFormCompletion} />,
    },
    {
      key: 'skills',
      title: 'Skills and Toolset',
      subtitle: 'Select from these industry-standard skills and tools',
      icon: <ToolOutlined />,
      status: incompleteForms.includes('skills') ? 'incomplete' : 'complete',
      component: <SkillsAndToolkit onComplete={handleFormCompletion} />,
    },
    {
      key: 'projects',
      title: 'Projects',
      subtitle: 'Add personal projects',
      icon: <FileTextOutlined />,
      status: incompleteForms.includes('projects') ? 'incomplete' : 'complete',
      component: <ProjectForm onComplete={handleFormCompletion} />,
    },
    {
      key: 'education',
      title: 'Education',
      subtitle: 'Add academic background and certifications',
      icon: <BookOutlined />,
      status: incompleteForms.includes('education') ? 'incomplete' : 'complete',
      component: <EducationForm onComplete={handleFormCompletion} />,
    },
    {
      key: 'experience',
      title: 'Work Experience',
      subtitle: 'Add details about jobs and internships',
      icon: <RiseOutlined />,
      status: incompleteForms.includes('experience')
        ? 'incomplete'
        : 'complete',
      component: <WorkExperienceForm onComplete={handleFormCompletion} />,
    },
    {
      key: 'achievements',
      title: 'Custom Form',
      subtitle: 'Add custom form',
      icon: <FormOutlined />,
      status: incompleteForms.includes('achievements')
        ? 'incomplete'
        : 'complete',
      component: <CustomForm onComplete={handleFormCompletion} />,
    },
  ];

  return (
    <div className={styles.container}>
      <Timeline
        mode="left"
        items={steps.map((step) => {
          let dotIcon;
          if (step.key === expandedStep) {
            dotIcon = <LoadingOutlined className={styles.activeIcon} />;
          } else if (step.status === 'complete') {
            dotIcon = <CheckCircleOutlined className={styles.completeIcon} />;
          } else {
            dotIcon = <ClockCircleOutlined className={styles.incompleteIcon} />;
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
                >
                  {step.component}
                </ResumeStepCard>
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default ResumeTimeline;
