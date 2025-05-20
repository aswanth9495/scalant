import React, { useEffect, useMemo } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import {
  Form,
  Input,
  Flex,
  InputNumber,
  Select,
  Typography,
  Button,
  Space,
  message,
  Spin,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';

import styles from './PersonalInfoAndSocial.module.scss';

const { Text } = Typography;

const FORM_ID = 'personalInfoAndSocialForm';

const initialFormData = {
  personalInfoAndSocial: {
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    gender: '',
    currentCity: '',
    linkedIn: '',
    github: '',
    personalWebsite: '',
  },
};

const PersonalInfoAndSocial = ({ onComplete, required = false }) => {
  const dispatch = useDispatch();
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[FORM_ID]
  );
  const isFormInitialized = useSelector(
    (state) => state.scalantResumeBuilder.formStore.initializedForms[FORM_ID]
  );
  const [updateResumeDetails, { isLoading }] = useUpdateResumeDetailsMutation();

  const [form] = Form.useForm();

  const initialValues = useMemo(
    () =>
      resumeData?.personal_details
        ? {
            personalInfoAndSocial: {
              fullName: resumeData.personal_details.name,
              contactNumber: resumeData.personal_details.phone_number.replace(
                '+91-',
                ''
              ),
              emailAddress: resumeData.personal_details.email,
              gender: resumeData.personal_details.gender,
              currentCity: resumeData.personal_details.city,
              linkedIn: resumeData.personal_details.linkedin,
              github: resumeData.personal_details.github,
              personalWebsite: resumeData.personal_details.portfolio,
            },
          }
        : initialFormData,
    [resumeData?.personal_details]
  );

  useEffect(() => {
    if (!isFormInitialized) {
      dispatch(
        initializeForm({
          formId: FORM_ID,
          initialData: initialValues,
        })
      );
    }
  }, [dispatch, isFormInitialized, initialValues]);

  const handleFinish = async (values) => {
    updateFormData({
      formId: FORM_ID,
      data: {
        personalInfoAndSocial: values,
      },
    });

    try {
      const payload = {
        form_stage: 'personal_details_v1_form',
        name: values.fullName,
        email: values.emailAddress,
        phone_number: values.contactNumber,
        city: values.currentCity,
        show_user_city: true,
        gender: values.gender,
        linkedin: values.linkedIn,
        github: values.github,
        portfolio: values.personalWebsite,
        isPopulated: true,
      };

      onComplete?.();

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Personal details updated successfully');
    } catch (error) {
      message.error('Failed to update personal details');
      // eslint-disable-next-line no-console, no-undef
      console.error('Error updating personal details:', error);
    }
  };

  const handleValuesChange = (changedValues, allValues) => {
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: { personalInfoAndSocial: allValues },
      })
    );
  };

  const selectBefore = (
    <Select
      defaultValue="+91"
      options={[
        { label: '+91', value: '+91' },
        { label: '+1', value: '+1' },
      ]}
      disabled
    />
  );

  if (!isFormInitialized) {
    return <Spin />;
  }

  return (
    <Space direction="vertical" size={24}>
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        initialValues={formData?.personalInfoAndSocial}
        onValuesChange={handleValuesChange}
      >
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: required }]}
            className={styles.formItem}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact Number"
            name="contactNumber"
            rules={[{ required: required }]}
            className={styles.formItem}
            tooltip="You can update this in the profile section"
          >
            <InputNumber addonBefore={selectBefore} disabled />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[{ required: required }]}
            className={styles.formItem}
            tooltip="You can update this in the profile section"
          >
            <Input disabled />
          </Form.Item>
          <Flex gap={16}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: required }]}
              style={{ flex: 1 }}
              className={styles.formItem}
            >
              <Select
                options={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  { label: 'Other', value: 'other' },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Current City"
              name="currentCity"
              style={{ flex: 1 }}
              className={styles.formItem}
            >
              <Input />
            </Form.Item>
          </Flex>
        </Space>

        <Space
          direction="vertical"
          size={16}
          style={{ width: '100%', marginTop: 24 }}
        >
          <Text strong>Social Links</Text>
          <Form.Item
            label="LinkedIn"
            name="linkedIn"
            rules={[{ required: required }]}
            className={styles.formItem}
          >
            <Input prefix={<LinkedinOutlined />} />
          </Form.Item>
          <Form.Item label="GitHub" name="github" className={styles.formItem}>
            <Input prefix={<GithubOutlined />} />
          </Form.Item>
          <Form.Item
            label="Personal Website"
            name="personalWebsite"
            className={styles.formItem}
          >
            <Input prefix={<CodeOutlined />} />
          </Form.Item>
        </Space>

        <Space
          direction="vertical"
          size={16}
          className={styles.buttonContainer}
        >
          <Flex gap={16}>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Save and compile
            </Button>
            <Button type="default" htmlType="submit" block loading={isLoading}>
              Save and Next
            </Button>
          </Flex>
        </Space>
      </Form>
    </Space>
  );
};

export default PersonalInfoAndSocial;
