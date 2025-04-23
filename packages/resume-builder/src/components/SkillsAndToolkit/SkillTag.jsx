import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './SkillsAndToolkit.module.scss';

const SkillTag = ({ skill, isSelected, onClick }) => (
  <Tag
    className={`${styles.skillTag} ${isSelected ? styles.selected : ''}`}
    onClick={onClick}
  >
    <span>
      {skill.name}
      {skill.experience && ` (${skill.experience})`}
    </span>
    {isSelected && <CloseOutlined className={styles.closeIcon} />}
  </Tag>
);

SkillTag.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    experience: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SkillTag;
