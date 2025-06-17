import React from 'react';
import { Flex } from 'antd';
import styles from './SectionFeedback.module.scss';

const SectionFeedback = ({ icon, feedbackData = [] }) => {
  return (
    <>
      {feedbackData.length > 0 ? (
        <Flex
          align="flex-start"
          justify="flex-start"
          gap={8}
          className={styles.sectionFeedback}
        >
          {icon}
          <Flex vertical>
            {feedbackData.map((feedback) => (
              <div key={feedback.id}>
                <div className={styles.feedbackText}>{feedback.title}</div>
                <ul className={styles.feedbackDescription}>
                  {feedback.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Flex>
        </Flex>
      ) : null}
    </>
  );
};

export default SectionFeedback;
