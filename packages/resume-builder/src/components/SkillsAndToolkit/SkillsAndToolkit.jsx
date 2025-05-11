import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Space, message } from 'antd';
import SkillSection from './SkillSection';
import {
  PROGRAMMING_LANGUAGES,
  LIBRARIES_FRAMEWORKS,
  TOOLS,
} from './constants';
import styles from './SkillsAndToolkit.module.scss';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';

const SkillsAndToolkit = ({ onComplete }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillExperience, setSkillExperience] = useState({});
  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);

  useEffect(() => {
    if (resumeData?.skills) {
      const skills = [];
      const skillExp = {};
      resumeData.skills.forEach((skill) => {
        skills.push(skill.name);
        skillExp[skill.name] = skill.proficiency_period;
      });
      setSelectedSkills(skills);
      setSkillExperience(skillExp);
    }
  }, [resumeData?.skills]);

  const handleTagClick = (skill) => {
    const skillKey = skill.name;
    if (selectedSkills.includes(skillKey)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skillKey));
      // Remove experience data when unselecting a skill
      const updatedExperience = { ...skillExperience };
      delete updatedExperience[skillKey];
      setSkillExperience(updatedExperience);
    } else {
      setSelectedSkills([...selectedSkills, skillKey]);
    }
  };

  const handleExperienceUpdate = (skillName, years, months) => {
    setSkillExperience({
      ...skillExperience,
      [skillName]: {
        years: years,
        months: months,
      },
    });
  };

  const handleMarkAsComplete = async () => {
    const allSelectedSkills = selectedSkills.map((skill) => {
      return {
        name: skill,
        experience: skillExperience[skill] || {
          years: 0,
          months: 0,
        },
      };
    });

    try {
      const payload = {
        form_stage: 'skills_and_toolkit_form',
        skills: allSelectedSkills,
      };

      await updateResumeDetails({
        formStage: 'skills-and-toolkit',
        payload,
      }).unwrap();
      message.success('Skills and toolkit updated successfully');
      onComplete?.();
    } catch (error) {
      message.error('Failed to update skills and toolkit');
      // eslint-disable-next-line no-console, no-undef
      console.error('Error updating skills and toolkit:', error);
    }
  };

  return (
    <Space direction="vertical" size={24} className={styles.container}>
      <SkillSection
        title="Programming Languages"
        skills={PROGRAMMING_LANGUAGES}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={skillExperience}
      />

      <SkillSection
        title="Libraries and Framework"
        skills={LIBRARIES_FRAMEWORKS}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={skillExperience}
      />

      <SkillSection
        title="Tools, databases, version control and everything else:"
        skills={TOOLS}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
        onExperienceUpdate={handleExperienceUpdate}
        skillExperience={skillExperience}
      />

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${styles.primary}`}
          onClick={handleMarkAsComplete}
        >
          Mark as Complete
        </button>
        <button className={`${styles.button} ${styles.secondary}`}>
          Cancel
        </button>
      </div>
    </Space>
  );
};

export default SkillsAndToolkit;
