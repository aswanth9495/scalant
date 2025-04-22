import PageHeader from "../PageHeader";
import { Timeline, Button, Typography } from 'antd';

const { Paragraph, Text } = Typography;

import styles from './ResumeTips.module.scss';


const DEFAULT_TIPS = [
  {
    icon: '🔗',
    title: 'Add Social Links:',
    description: 'Share coding profiles like GitHub, LeetCode, or Codeforces to show your skills.',
  },
  {
    icon: '🏆',
    title: 'Highlight Key Skills:',
    description:
      'List at least 5 relevant technical skills that align with the role you’re targeting, like languages, tools, or frameworks.',
  },
  {
    icon: '📄',
    title: 'Showcase Projects:',
    description: 'Add 2–3 strong projects with bullet points, metrics, and links to demos.',
  },
  {
    icon: '🎓',
    title: 'Add Academic Details:',
    description:
      'Mention coding achievements, certifications, or competition ranks. CGPA if above 7.5 mention it.',
  },
];


const ResumeTips = () => {
  return <div>
    <PageHeader 
      title="Based on your profile a beginner’s resume fit well" 
      subtitle="Follow these tips to build a great resume. See the sample on the side for reference." />
      <Timeline
        items={DEFAULT_TIPS.map((tip) => ({
          children: (
            <>
              <Paragraph className={styles.tipTitle} >
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

      <Button type="primary" size="large" block  className={styles.button} >
        Start Building
      </Button>
  </div>
};

export default ResumeTips;
