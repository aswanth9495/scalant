import { Row, Col, Layout } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

import styles from './ResumeLayout.module.scss';

const LOGO_URL =
  'https://assets.fp.scaler.com/seo/_next/static/media/scaler-light.6def257e.svg';

const ResumeLayout = ({ onBackButtonClick, children, preview }) => {
  return (
    <Row>
      <Col span={12} className={styles.left}>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <ArrowLeftOutlined
              className={styles.backButton}
              onClick={onBackButtonClick}
            />
            <img className={styles.logo} src={LOGO_URL} alt="logo" />
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
