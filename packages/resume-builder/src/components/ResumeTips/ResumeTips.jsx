import { useEffect, useState } from 'react';
import PageHeader from '../PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Timeline, Button, Typography } from 'antd';
import { getResumeTips } from '../../utils/resumeTips';
const { Paragraph, Text } = Typography;

import styles from './ResumeTips.module.scss';

const ResumeTips = () => {
  const dispatch = useDispatch();
  const resumePersonaData = useSelector(
    (state) => state.resumePersona.resumePersonaData
  );

  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (resumePersonaData) {
      setTips(getResumeTips(resumePersonaData));
    }
  }, [resumePersonaData]);

  const handleStartBuilding = () => {
    dispatch(nextStep());
  };

  return (
    <div>
      <PageHeader
        title="Based on your profile a beginner's resume fit well"
        subtitle="Follow these tips to build a great resume. 
        See the sample on the side for reference."
      />
      <Timeline
        items={tips.map((tip) => ({
          children: (
            <>
              <Paragraph className={styles.tipTitle}>
                <Text strong>
                  {tip.icon} {tip.title}
                </Text>
              </Paragraph>
              <Paragraph type="secondary" className={styles.tipDescription}>
                {tip.description}
              </Paragraph>
            </>
          ),
        }))}
      />

      <Button
        type="primary"
        size="large"
        block
        className={styles.button}
        onClick={handleStartBuilding}
      >
        Start Building
      </Button>
    </div>
  );
};

export default ResumeTips;
