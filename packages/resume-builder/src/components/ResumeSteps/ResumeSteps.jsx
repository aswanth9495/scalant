import React, { useState, useRef, useEffect } from 'react';
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
} from '@ant-design/icons';
import ResumeStepCard from '../ResumeStepCard';
import PersonalInfoAndSocial from '../PersonalInfoAndSocial';
import SkillsAndToolkit from '../SkillsAndToolkit';
import ProjectForm from '../ProjectForm';
import EducationForm from '../EducationForm';
import WorkExperienceForm from '../WorkExperienceForm';

import styles from './ResumeSteps.module.scss';

const ResumeTimeline = () => {
  const [expandedStep, setExpandedStep] = useState(null);
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

  const steps = [
    {
      key: 'personalInfo',
      title: 'Personal Info and Socials',
      subtitle: 'Lets get to know you! Fill in your personal details',
      icon: <UserOutlined />,
      status: 'complete',
      component: <PersonalInfoAndSocial />,
    },
    {
      key: 'skills',
      title: 'Skills and Toolset',
      subtitle: 'Select from these industry-standard skills and tools',
      icon: <ToolOutlined />,
      status: 'incomplete',
      component: <SkillsAndToolkit />,
    },
    {
      key: 'projects',
      title: 'Projects',
      subtitle: 'Add personal projects',
      icon: <FileTextOutlined />,
      status: 'incomplete',
      component: <ProjectForm />,
    },
    {
      key: 'education',
      title: 'Education',
      subtitle: 'Add academic background and certifications',
      icon: <BookOutlined />,
      status: 'incomplete',
      component: <EducationForm />,
    },
    {
      key: 'workExperience',
      title: 'Work Experience',
      subtitle: 'Add details about jobs and internships',
      icon: <RiseOutlined />,
      status: 'incomplete',
      component: <WorkExperienceForm />,
    },
  ];

  const handleStepClick = (index) => {
    setExpandedStep((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <Timeline
        mode="left"
        items={steps.map((step, index) => {
          let dotIcon;
          if (index === expandedStep) {
            dotIcon = <LoadingOutlined className={styles.activeIcon} />;
          } else if (step.status === 'complete') {
            dotIcon = <CheckCircleOutlined className={styles.completeIcon} />;
          } else {
            dotIcon = <ClockCircleOutlined className={styles.incompleteIcon} />;
          }

          return {
            dot: dotIcon,
            children: (
              <div ref={(el) => (stepRefs.current[index] = el)}>
                <ResumeStepCard
                  key={step.key}
                  title={step.title}
                  subtitle={step.subtitle}
                  icon={step.icon}
                  status={step.status}
                  isActive={index === expandedStep}
                  expanded={index === expandedStep}
                  onClick={() => handleStepClick(index)}
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
