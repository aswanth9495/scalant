import React, { useState, useEffect } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
  PlusOutlined,
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
} from 'antd';
import { useSelector } from 'react-redux';
// eslint-disable-next-line max-len
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import styles from './PersonalInfoAndSocial.module.scss';
const { Text } = Typography;

const PersonalInfoAndSocial = ({ onComplete, required = false }) => {
  const [form] = Form.useForm();
  const [additionalProfiles, setAdditionalProfiles] = useState([]);
  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const [updateResumeDetails, { isLoading }] = useUpdateResumeDetailsMutation();

  useEffect(() => {
    if (resumeData?.personal_details && !form.getFieldValue('fullName')) {
      const { personal_details } = resumeData;
      form.setFieldsValue({
        fullName: personal_details.name,
        contactNumber: personal_details.phone_number.replace('+91-', ''),
        emailAddress: personal_details.email,
        gender: personal_details.gender,
        currentCity: personal_details.city,
        linkedIn: personal_details.linkedin,
        github: personal_details.github,
        personalWebsite: personal_details.portfolio,
      });
    }
  }, [resumeData, form]);

  const handleFinish = async (values) => {
    try {
      const payload = {
        form_stage: 'personal_details_form',
        name: values.fullName,
        email: values.emailAddress,
        phone_number: values.contactNumber,
        city: values.currentCity,
        show_user_city: true,
        gender: values.gender,
        linkedin: values.linkedIn,
        github: values.github,
        portfolio: values.personalWebsite,
        skills: resumeData?.skills || [],
        scaler_resume_template_structure:
          resumeData?.scaler_resume_template_structure || {},
        isPopulated: true,
        bio: '',
        job_title: resumeData?.personal_details?.job_title || '',
        upgrade: false,
        ctc_currency: 0,
        socials: additionalProfiles.map((profile) => ({
          type: profile.type,
          link: profile.link,
        })),
      };
      onComplete?.();

      await updateResumeDetails({
        formStage: 'personal-details',
        payload,
      }).unwrap();
      message.success('Personal details updated successfully');
    } catch (error) {
      message.error('Failed to update personal details');
      // eslint-disable-next-line no-console, no-undef
      console.error('Error updating personal details:', error);
    }
  };

  const handleAddProfile = () => {
    const newId = Date.now().toString();
    setAdditionalProfiles([...additionalProfiles, { id: newId }]);
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

  return (
    <Space direction="vertical" size={24}>
      <Form form={form} onFinish={handleFinish} layout="vertical" size="large">
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

          {additionalProfiles.map((profile, index) => (
            <Flex key={profile.id} gap={16}>
              <Form.Item
                label="Profile Type"
                name={`additionalProfiles.${index}.type`}
                style={{ flex: 1 }}
                className={styles.formItem + ' ' + styles.customProfile}
              >
                <Select
                  options={[
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'GitHub', value: 'github' },
                    { label: 'Personal Website', value: 'personalWebsite' },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Link"
                name={`additionalProfiles.${index}.link`}
                className={styles.formItem + ' ' + styles.customProfile}
              >
                <Input />
              </Form.Item>
            </Flex>
          ))}
        </Space>

        <Space
          direction="vertical"
          size={16}
          className={styles.buttonContainer}
        >
          <Button
            type="dashed"
            block
            icon={<PlusOutlined />}
            onClick={handleAddProfile}
          >
            Add more Social Profiles
          </Button>
          <Flex gap={16}>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Mark as complete
            </Button>
            <Button type="default" block>
              Cancel
            </Button>
          </Flex>
        </Space>
      </Form>
    </Space>
  );
};

export default PersonalInfoAndSocial;
