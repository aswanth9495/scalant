import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Typography, Flex, Form, InputNumber, Select, Button } from 'antd';
import PageHeader from '../PageHeader';
import { setResumeQuestionsData } from '../../store/resumeQuestionsSlice';
import styles from './ResumeBasicQuestions.module.scss';
import { PROGRAM_JOB_ROLES } from '../../utils/constants';

const { Text } = Typography;

const getJobRoles = (program) => {
  return PROGRAM_JOB_ROLES[program] || [];
};

const ResumeBasicQuestions = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);

  const basicQuestionsData = resumeData?.personal_details;

  const jobRoles = getJobRoles('academy');

  const handleFinish = (values) => {
    const totalExperience =
      values?.totalWorkExperience?.yearsExperience * 12 +
      values?.totalWorkExperience?.monthsExperience;
    const techExperience =
      values?.totalWorkExperienceInTech?.yearsExperienceInTech * 12 +
      values?.totalWorkExperienceInTech?.monthsExperienceInTech;
    batch(() => {
      dispatch(
        setResumeQuestionsData({
          totalExperience,
          techExperience,
          currentJobRole: values?.currentJobRole,
          program: 'academy',
        })
      );
      dispatch(nextStep());
    });
    // eslint-disable-next-line no-console, no-undef
    console.log('Submitted values:', values);
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
                basicQuestionsData?.total_experience / 12
              ),
              monthsExperience: basicQuestionsData?.total_experience % 12,
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
              className={styles.formItem}
            >
              <Flex gap={16} align="center">
                <Flex gap={4} vertical>
                  <Form.Item
                    name={['totalWorkExperience', 'yearsExperience']}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter years of total work experience',
                      },
                    ]}
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
                    rules={[
                      {
                        required: true,
                        message: 'Please enter months of total work experience',
                      },
                    ]}
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
              className={styles.formItem}
            >
              <Flex gap={16} align="center">
                <Flex gap={4} vertical>
                  <Form.Item
                    name={[
                      'totalWorkExperienceInTech',
                      'yearsExperienceInTech',
                    ]}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter years of tech work experience',
                      },
                    ]}
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
                    rules={[
                      {
                        required: true,
                        message: 'Please enter months of tech work experience',
                      },
                    ]}
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
              <Select options={jobRoles} />
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
