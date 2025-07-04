import React, { useState } from 'react';
import { Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import styles from './SkillsAndToolkit.module.scss';
import DemoVideo from './DemoVideo';

const SkillDemoVideoModal = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVideoModalOpen(false);
  };

  return (
    <div
      className={styles.playHeader}
      onClick={() => setIsVideoModalOpen(true)}
    >
      <PlayCircleOutlined className={styles.playIcon} />

      <span className={styles.primaryText}>
        Why do we have limited number of skills here?
      </span>
      <Modal
        open={isVideoModalOpen}
        onCancel={handleClose}
        onOk={handleClose}
        closable={{ 'aria-label': 'Custom Close Button' }}
        footer={null}
        width={800}
        destroyOnHidden
        centered
      >
        <DemoVideo />
      </Modal>
    </div>
  );
};

export default SkillDemoVideoModal;
