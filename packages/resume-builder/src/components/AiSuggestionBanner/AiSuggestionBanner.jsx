import React, { useCallback } from 'react';
import { Flex, Typography, Button, message } from 'antd';
import { useGetResumeReviewMutation } from '../../services/resumeBuilderApi';
import { useSelector } from 'react-redux';

const { Text } = Typography;

import styles from './AiSuggestionBanner.module.scss';

const MESSAGES = {
  SUCCESS: 'You will be redirected shortly...',
  ERROR: 'Failed to initiate review. Please try again.',
  BANNER_TITLE: 'Have a detailed conversation with companion',
  BANNER_SUBTITLE:
    'to get pointers on how you write your work experience or projects.',
  BUTTON_TEXT: 'Discuss with',
  AI_TEXT: 'AI',
};

const AiSuggestionBanner = () => {
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const [getResumeReview, { isLoading }] = useGetResumeReviewMutation();

  const handleClick = useCallback(async () => {
    try {
      const response = await getResumeReview({
        resumeId: resumeData?.resume_details?.id,
      });

      if (response?.data?.url) {
        message.success(MESSAGES.SUCCESS);
        // eslint-disable-next-line no-undef
        setTimeout(() => {
          // eslint-disable-next-line no-undef
          window.location.href = response.data.url;
        }, 2000);
      } else {
        message.error(MESSAGES.ERROR);
      }
    } catch {
      message.error(MESSAGES.ERROR);
    }
  }, [getResumeReview, resumeData]);

  // Handle successful data fetch

  return (
    <Flex justify="space-between" align="center" className={styles.container}>
      <Text className={styles.title}>
        <span className={styles.bold}>{MESSAGES.BANNER_TITLE} </span>
        {MESSAGES.BANNER_SUBTITLE}
      </Text>
      <Button
        className={styles.button}
        onClick={handleClick}
        loading={isLoading}
        disabled={isLoading}
      >
        {MESSAGES.BUTTON_TEXT}
        <span className={styles.bold}>{MESSAGES.AI_TEXT}</span>
      </Button>
    </Flex>
  );
};

export default AiSuggestionBanner;
