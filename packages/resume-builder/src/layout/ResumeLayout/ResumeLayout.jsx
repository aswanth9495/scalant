import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Layout, Typography, Flex } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

const { Text } = Typography;

import styles from './ResumeLayout.module.scss';

const LOGO_URL =
  'https://assets.fp.scaler.com/seo/_next/static/media/scaler-light.6def257e.svg';

const ResumeLayout = ({ onBackButtonClick, children, preview }) => {
  const { currentStep } = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder
  );

  const incompleteForms = useSelector(
    (state) => state.scalantResumeBuilder.resumeForms.incompleteForms
  );

  return (
    <Row>
      <Col span={12} className={styles.left}>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <Flex
              justify="space-between"
              align="center"
              style={{ width: '55%' }}
            >
              <div>
                {onBackButtonClick && (
                  <CloseOutlined
                    className={styles.backButton}
                    onClick={onBackButtonClick}
                  />
                )}
                <img className={styles.logo} src={LOGO_URL} alt="logo" />
              </div>
              {currentStep >= 2 && <Text>Resume Builder</Text>}
            </Flex>
            {currentStep === 4 && (
              <Text>{6 - incompleteForms.length} of 6 sections completed</Text>
            )}
          </Header>
          <Content className={styles.content}>
            {' '}
            <div className={styles.contentInner}>{children}</div>
          </Content>
        </Layout>
      </Col>
      <Col className={styles.right} span={12}>
        {preview}
      </Col>
    </Row>
  );
};

export default ResumeLayout;
