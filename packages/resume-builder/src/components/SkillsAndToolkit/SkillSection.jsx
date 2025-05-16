import React from 'react';
import { Typography } from 'antd';
import SkillTag from './SkillTag';
import styles from './SkillsAndToolkit.module.scss';

const { Title } = Typography;

const SkillSection = ({
  title,
  skills,
  selectedSkills,
  onSkillClick,
  onExperienceUpdate,
}) => {
  return (
    <div className={styles.skillSection}>
      <Title level={5} className={styles.sectionTitle}>
        {title}
      </Title>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => {
          const selectedSkill = selectedSkills.find(
            (s) => s.skill_id === skill.subtopic_id
          );
          return (
            <SkillTag
              key={index}
              skill={skill}
              isSelected={!!selectedSkill}
              onClick={() => onSkillClick(skill)}
              onExperienceUpdate={(years, months) =>
                onExperienceUpdate(skill, years, months)
              }
              experience={selectedSkill?.proficiency_period}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;
