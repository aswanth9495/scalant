import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Typography, Flex, Form, InputNumber, Select, Button } from 'antd';
import PageHeader from '../PageHeader';
import styles from './ResumeBasicQuestions.module.scss';

const { Text } = Typography;

const ResumeBasicQuestions = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Submitted values:', values);
    dispatch(nextStep());
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
              yearsExperience: 10,
              monthsExperience: 0,
            },
            totalWorkExperienceInTech: {
              yearsExperienceInTech: 0,
              monthsExperienceInTech: 0,
            },
            currentJobRole: 'Tech Adjancent',
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
                options={[
                  { value: 'Tech Adjancent', label: 'Tech Adjancent' },
                  { value: 'Product Manager', label: 'Product Manager' },
                  { value: 'Sales', label: 'Sales' },
                  { value: 'Marketing', label: 'Marketing' },
                  { value: 'Design', label: 'Design' },
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
