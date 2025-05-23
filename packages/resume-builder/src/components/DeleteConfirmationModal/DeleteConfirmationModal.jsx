import React from 'react';
import { Modal, Typography } from 'antd';

const { Text } = Typography;

const DeleteConfirmationModal = ({
  open,
  onCancel,
  onOk,
  title,
  style,
  description,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      style={style}
      title={title}
    >
      <Text>{description}</Text>
    </Modal>
  );
};

export default DeleteConfirmationModal;
