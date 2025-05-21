import React from 'react';
import { Dropdown, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './ResumePreview.module.scss';

const MAX_RESUMES = 5;

const ResumeDropdown = ({
  onAddResumeClick,
  onManageResumesClick,
  onResumeClick,
  selectedResumeId,
  resumeList,
}) => {
  const hasReachedMaxResumes = resumeList.length >= MAX_RESUMES;

  const items = [
    ...resumeList.map((resume) => ({
      key: resume.id,
      label: resume.name,
      onClick: () => onResumeClick(resume.id),
    })),
    {
      type: 'divider',
    },
    {
      key: 'manage',
      label: 'Manage Resumes',
      onClick: onManageResumesClick,
    },
    {
      key: 'add',
      label: hasReachedMaxResumes ? (
        <Tooltip title="Maximum limit of 3 resumes reached">
          <span>Add New Resume</span>
        </Tooltip>
      ) : (
        'Add New Resume'
      ),
      onClick: onAddResumeClick,
      disabled: hasReachedMaxResumes,
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
        selectedKeys: [selectedResumeId?.toString()],
      }}
    >
      <div className={styles.dropdown}>
        {resumeList.find((resume) => resume.id === selectedResumeId)?.name}
        <DownOutlined className={styles.dropdownIcon} />
      </div>
    </Dropdown>
  );
};

export default ResumeDropdown;
