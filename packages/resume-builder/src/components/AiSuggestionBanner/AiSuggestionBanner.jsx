import React from 'react';
import { Flex, Typography, Button } from 'antd';

const { Text } = Typography;

import styles from './AiSuggestionBanner.module.scss';

const AiSuggestionBanner = () => {
  return (
    <Flex justify="space-between" align="center" className={styles.container}>
      <Text className={styles.title}>
        <span className={styles.bold}>Let AI do the heavy lifting</span> —
        easily turn your work into powerful resume points!
      </Text>
      <Button className={styles.button}>
        Write with
        <span className={styles.bold}>AI</span>
      </Button>
    </Flex>
  );
};

export default AiSuggestionBanner;
