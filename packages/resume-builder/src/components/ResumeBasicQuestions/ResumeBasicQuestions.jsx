import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Typography, Flex, Form, InputNumber, Select, Button } from 'antd';
import PageHeader from '../PageHeader';
import styles from './ResumeBasicQuestions.module.scss';

const { Text } = Typography;

const ResumeBasicQuestions = () => {
  const [form] = Form.useForm();

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);

  const basicQuestionsData = resumeData?.personal_details;

  const handleFinish = (values) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Submitted values:', values);
  };

  const handleChange = (value) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Selected value:', value);
  };

  return (
    <Flex vertical gap={32} align="flex-start">
      <Flex vertical>
        <PageHeader
          title="Create the resume that will get you ahead"
          subtitle={`Answer these three simple questions, 
            to get started on building your 
            industry standard resume`}
        />
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            totalWorkExperience: {
              yearsExperience: Math.floor(
                basicQuestionsData?.non_tech_experience / 12
              ),
              monthsExperience: basicQuestionsData?.non_tech_experience % 12,
            },
            totalWorkExperienceInTech: {
              yearsExperienceInTech: Math.floor(
                basicQuestionsData?.experience / 12
              ),
              monthsExperienceInTech: basicQuestionsData?.experience % 12,
            },
            currentJobRole: basicQuestionsData?.job_title,
          }}
        >
          <Flex gap={16} vertical>
            <Form.Item
              label="Total Work Experience"
              name="totalWorkExperience"
              rules={[{ required: true }]}
              className={styles.formItem}
            >
              <Flex gap={16} align="center">
                <Flex gap={4} vertical>
                  <Form.Item
                    name={['totalWorkExperience', 'yearsExperience']}
                    rules={[{ required: true }]}
                    noStyle
                    className={styles.formItem}
                  >
                    <InputNumber placeholder="00" />
                  </Form.Item>
                  <Text>Years</Text>
                </Flex>
                <Flex gap={4} vertical>
                  <Form.Item
                    name={['totalWorkExperience', 'monthsExperience']}
                    rules={[{ required: true }]}
                    noStyle
                    className={styles.formItem}
                  >
                    <InputNumber placeholder="00" />
                  </Form.Item>
                  <Text>Months</Text>
                </Flex>
              </Flex>
            </Form.Item>

            <Form.Item
              label="Total Work Experience in Tech"
              name="totalWorkExperienceInTech"
              rules={[{ required: true }]}
              className={styles.formItem}
            >
              <Flex gap={16} align="center">
                <Flex gap={4} vertical>
                  <Form.Item
                    name={[
                      'totalWorkExperienceInTech',
                      'yearsExperienceInTech',
                    ]}
                    rules={[{ required: true }]}
                    noStyle
                    className={styles.formItem}
                  >
                    <InputNumber placeholder="00" />
                  </Form.Item>
                  <Text>Years</Text>
                </Flex>
                <Flex gap={4} vertical>
                  <Form.Item
                    name={[
                      'totalWorkExperienceInTech',
                      'monthsExperienceInTech',
                    ]}
                    rules={[{ required: true }]}
                    noStyle
                    className={styles.formItem}
                  >
                    <InputNumber placeholder="00" />
                  </Form.Item>
                  <Text>Months</Text>
                </Flex>
              </Flex>
            </Form.Item>

            <Form.Item
              label="Current Job Role"
              name="currentJobRole"
              rules={[{ required: true }]}
              className={styles.formItem}
            >
              <Select
                onChange={handleChange}
                options={[
                  { value: 'Tech Adjancent', label: 'Tech Adjancent' },
                  { value: 'Product Manager', label: 'Product Manager' },
                  { value: 'Sales', label: 'Sales' },
                  { value: 'Marketing', label: 'Marketing' },
                  { value: 'Design', label: 'Design' },
                  { value: 'Backend Engineer', label: 'Backend Engineer' },
                  { value: 'Frontend Engineer', label: 'Frontend Engineer' },
                  {
                    value: 'Full Stack Engineer',
                    label: 'Full Stack Engineer',
                  },
                  { value: 'Other', label: 'Other' },
                ]}
              />
            </Form.Item>
          </Flex>

          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            className={styles.button}
          >
            Save & Continue
          </Button>
        </Form>
      </Flex>
    </Flex>
  );
};

export default ResumeBasicQuestions;
