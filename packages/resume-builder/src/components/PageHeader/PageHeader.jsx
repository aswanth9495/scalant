import React from 'react';
import { Typography } from 'antd';
import styles from './PageHeader.module.scss';

const { Title } = Typography;

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <Title level={2} className={styles.title}>
        {title}
      </Title>
      {subtitle && (
        <Title level={5} className={styles.subtitle}>
          {subtitle}
        </Title>
      )}
    </>
  );
};

export default PageHeader;
