import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import SkillTag from './SkillTag';
import styles from './SkillsAndToolkit.module.scss';

const { Title } = Typography;

const SkillSection = ({ title, skills, selectedSkills, onSkillClick }) => (
  <div className={styles.skillSection}>
    <Title level={5} className={styles.sectionTitle}>
      {title}
    </Title>
    <div className={styles.skillsContainer}>
      {skills.map((skill, index) => {
        const skillKey = `${skill.name}-${skill.experience}`;
        return (
          <SkillTag
            key={index}
            skill={skill}
            isSelected={selectedSkills.includes(skillKey)}
            onClick={() => onSkillClick(skill)}
          />
        );
      })}
    </div>
  </div>
);

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      experience: PropTypes.string,
    })
  ).isRequired,
  selectedSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSkillClick: PropTypes.func.isRequired,
};

export default SkillSection;
