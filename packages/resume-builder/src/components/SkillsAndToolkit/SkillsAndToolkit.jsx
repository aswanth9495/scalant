import React, { useState } from 'react';
import { Space } from 'antd';
import SkillSection from './SkillSection';
import {
  PROGRAMMING_LANGUAGES,
  LIBRARIES_FRAMEWORKS,
  TOOLS,
} from './constants';
import styles from './SkillsAndToolkit.module.scss';

const SkillsAndToolkit = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleTagClick = (skill) => {
    const skillKey = `${skill.name}-${skill.experience}`;
    if (selectedSkills.includes(skillKey)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skillKey));
    } else {
      setSelectedSkills([...selectedSkills, skillKey]);
    }
  };

  const handleMarkAsComplete = () => {
    const getSelectedFromSection = (section) => {
      return section
        .filter((skill) =>
          selectedSkills.includes(`${skill.name}-${skill.experience}`)
        )
        .map((skill) => ({
          name: skill.name,
          experience: skill.experience,
        }));
    };

    const selectedData = {
      programmingLanguages: getSelectedFromSection(PROGRAMMING_LANGUAGES),
      librariesFrameworks: getSelectedFromSection(LIBRARIES_FRAMEWORKS),
      tools: getSelectedFromSection(TOOLS),
    };

    console.log(
      'Selected Programming Languages:',
      selectedData.programmingLanguages
    );
    console.log(
      'Selected Libraries and Frameworks:',
      selectedData.librariesFrameworks
    );
    console.log('Selected Tools:', selectedData.tools);
  };

  return (
    <Space direction="vertical" size={24} className={styles.container}>
      <SkillSection
        title="Programming Languages"
        skills={PROGRAMMING_LANGUAGES}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
      />

      <SkillSection
        title="Libraries and Framework"
        skills={LIBRARIES_FRAMEWORKS}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
      />

      <SkillSection
        title="Tools, databases, version control and everything else:"
        skills={TOOLS}
        selectedSkills={selectedSkills}
        onSkillClick={handleTagClick}
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
