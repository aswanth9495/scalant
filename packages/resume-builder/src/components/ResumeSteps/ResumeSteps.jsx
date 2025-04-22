import React, { useState } from 'react';
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

import styles from './ResumeSteps.module.scss';

const ResumeTimeline = () => {
  const [expandedStep, setExpandedStep] = useState(0);
  
  const steps = [
    {
      title: 'Personal Info and Socials',
      subtitle: 'Lets get to know you! Fill in your personal details',
      icon: <UserOutlined />,
      status: 'complete',
    },
    {
      title: 'Skills and Toolset',
      subtitle: 'Select from these industry-standard skills and tools',
      icon: <ToolOutlined />,
      status: 'incomplete',
    },
    {
      title: 'Projects',
      subtitle: 'Add personal projects',
      icon: <FileTextOutlined />,
      status: 'incomplete',
    },
    {
      title: 'Education',
      subtitle: 'Add academic background and certifications',
      icon: <BookOutlined />,
      status: 'incomplete',
    },
    {
      title: 'Work Experience',
      subtitle: 'Add details about jobs and internships',
      icon: <RiseOutlined />,
      status: 'incomplete',
    },
  ];

  const handleStepClick = (index) => {
    setExpandedStep(index);
  };

  return (
    <div className={styles.container}>
    <Timeline
      mode="left"
      items={steps.map((step, index) => {
        // Determine the dot icon based on status and active state
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
            <ResumeStepCard
              key={step.title}
              title={step.title}
              subtitle={step.subtitle}
              icon={step.icon}
              status={step.status}
              isActive={index === expandedStep}
              expanded={index === expandedStep}
              onClick={() => handleStepClick(index)}
            >
              Dummy content for <strong>{step.title}</strong>. You can add a form or section content here.
            </ResumeStepCard>
          ),
        };
      })}
      />
    </div>
  );
};

export default ResumeTimeline;
