import React from 'react';
import { Card, Typography, Flex, Avatar, Tag, Tooltip } from 'antd';
import {
  PlusOutlined,
  MinusOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import styles from './ResumeStepCard.module.scss';

const { Title, Text } = Typography;

const STATUS_TAGS = {
  complete: (
    <Tag color="green" bordered={true} icon={<CheckCircleOutlined />}>
      Complete
    </Tag>
  ),
  incomplete: (
    <Tag color="red" bordered={true} icon={<CloseCircleOutlined />}>
      Incomplete
    </Tag>
  ),
  looks_good: (
    <Tag color="green" bordered={true} icon={<CheckCircleOutlined />}>
      Looks Good
    </Tag>
  ),
  needs_work: (
    <Tag color="gold" bordered={true} icon={<SyncOutlined />}>
      Needs Work
    </Tag>
  ),
  needs_review: (
    <Tag color="blue" bordered={true} icon={<SyncOutlined />}>
      Needs Review
    </Tag>
  ),
  under_review: (
    <Tag color="blue" bordered={true} icon={<SyncOutlined spin />}>
      Under Review
    </Tag>
  ),
};

const ResumeStepCard = ({
  title,
  subtitle,
  icon,
  children,
  expanded,
  onClick,
  status,
  required,
}) => {
  return (
    <Card className={styles.card}>
      <div onClick={onClick}>
        <Flex justify="space-between" align="start">
          <Flex align="center" gap={12}>
            <Avatar
              className={styles.icon}
              size={40}
              icon={React.createElement(icon)}
            />
            <div>
              <Flex align="center" gap={8}>
                <Title level={5} className={styles.title} style={{ margin: 0 }}>
                  {title}
                </Title>
                {required && status === 'incomplete' && (
                  <Tooltip title="This step is required to complete your profile">
                    <span className={styles.required}>*</span>
                  </Tooltip>
                )}
                {status && STATUS_TAGS[status]}
              </Flex>
              <Text type="secondary">{subtitle}</Text>
            </div>
          </Flex>
          <div className={styles.toggleIcon}>
            {expanded ? <MinusOutlined /> : <PlusOutlined />}
          </div>
        </Flex>
      </div>

      {expanded && <div className={styles.content}>{children}</div>}
    </Card>
  );
};

export default ResumeStepCard;
