import React from 'react';
import { Flex, Typography, Button } from 'antd';

const { Text } = Typography;

import styles from './AiSuggestionBanner.module.scss';

const AiSuggestionBanner = () => {
  return (
    <Flex justify="space-between" align="center" className={styles.container}>
      <Text className={styles.title}>
        <span className={styles.bold}>Have a conversation with companion </span>
        to get pointers on how you write your work experience or projects.
      </Text>
      <Button className={styles.button}>
        Discuss with
        <span className={styles.bold}>AI</span>
      </Button>
    </Flex>
  );
};

export default AiSuggestionBanner;
