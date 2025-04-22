import React from 'react';
import { Card, Typography, Flex, Avatar, Tag } from 'antd';
import {
  PlusOutlined,
  MinusOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
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
    <Tag color="gold" bordered={true} icon={<ExclamationCircleOutlined />}>
      Incomplete
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
}) => {
  return (
    <Card className={styles.card} onClick={onClick}>
      <Flex justify="space-between" align="start">
        <Flex align="center" gap={12}>
          <Avatar className={styles.icon} size={40} icon={icon} />
          <div>
            <Flex align="center" gap={8}>
              <Title level={5} className={styles.title} style={{ margin: 0 }}>
                {title}
              </Title>
              {status && STATUS_TAGS[status]}
            </Flex>
            <Text type="secondary">{subtitle}</Text>
          </div>
        </Flex>
        <div className={styles.toggleIcon}>
          {expanded ? <MinusOutlined /> : <PlusOutlined />}
        </div>
      </Flex>

      {expanded && <div className={styles.content}>{children}</div>}
    </Card>
  );
};

export default ResumeStepCard;
