import React, { useState } from 'react';
import { Checkbox, Button, Typography } from 'antd';
import styles from './Acknowledgement.module.scss';

const { Title, Text, Paragraph } = Typography;

const Acknowledgement = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleContinue = () => {
    if (checked1 && checked2) {

    }
  };

  const handleLater = () => {
    console.log('Later');
  };

  return (
      <div className={styles.container}>
        <Title level={2} className={styles.title}>Scaler Resume Builder</Title>
        <Title level={5} className={styles.subtitle}>Build a Resume with ATS Compliance</Title>

        <Paragraph className={styles.description}>
          Please acknowledge the following pointers basis on which your profile will be shortlisted for Job Opportunities.
        </Paragraph>

        <Checkbox className={styles.checkbox} checked={checked1} onChange={(e) => setChecked1(e.target.checked)}>
          Your Job Preferences like CTC, Location, Notice Period are key points based on which Scaler will showcase relevant job opportunities
        </Checkbox>

        <Checkbox className={styles.checkbox} checked={checked2} onChange={(e) => setChecked2(e.target.checked)}>
          Your relevant tech work experience and technical skills entered in your Scaler Resume Builder will be used for matching you with relevant job opportunities
        </Checkbox>

        <div className={styles.buttonsContainer}>
          <Button
            type="primary"
            block
            className={styles.continueBtn}
            disabled={!(checked1 && checked2)}
            onClick={handleContinue}
          >
            I Understand, Continue
          </Button>
          <Button 
            type="link" 
            block
            className={styles.laterText}
            onClick={handleLater}
          >
            I will do this later
          </Button>
        </div>
      </div>
  );
};

export default Acknowledgement;
