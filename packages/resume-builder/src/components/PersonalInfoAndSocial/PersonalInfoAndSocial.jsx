import React, { useEffect, useMemo } from 'react';
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
  Spin,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import { SOCIAL_LINKS } from '../../utils/constants';

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
    additionalProfiles: [],
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

  const getAdditionalProfiles = useMemo(() => {
    const additionalProfiles = [];
    SOCIAL_LINKS.forEach((link) => {
      if (resumeData.personal_details[link]) {
        additionalProfiles.push({
          type: link,
          link: resumeData.personal_details[link],
          id: additionalProfiles.length + 1,
        });
      }
    });
    return additionalProfiles;
  }, [resumeData]);

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
              additionalProfiles: getAdditionalProfiles,
            },
          }
        : initialFormData,
    [resumeData?.personal_details, getAdditionalProfiles]
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
      };

      (values.additionalProfiles || []).forEach((profile) => {
        payload[profile.type] = profile.link;
      });

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

  const handleAddProfile = () => {
    const profileItems =
      formData?.personalInfoAndSocial?.additionalProfiles || [];
    const newId = profileItems.length + 1;

    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          personalInfoAndSocial: {
            ...formData?.personalInfoAndSocial,
            additionalProfiles: [...profileItems, { id: newId }],
          },
        },
      })
    );
  };

  const handleValuesChange = (changedValues, allValues) => {
    updateFormData({
      formId: FORM_ID,
      data: { personalInfoAndSocial: allValues },
    });
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

          <Form.Item name="additionalProfiles">
            {(formData?.personalInfoAndSocial?.additionalProfiles || []).map(
              (profile, index) => (
                <Flex key={profile.id} gap={16}>
                  <Form.Item
                    label="Profile Type"
                    name={['additionalProfiles', index, 'type']}
                    style={{ flex: 1 }}
                    className={styles.formItem + ' ' + styles.customProfile}
                  >
                    <Select
                      options={[
                        { label: 'Codeforces', value: 'codeforces' },
                        { label: 'HackerRank', value: 'hackerrank' },
                        { label: 'Codechef', value: 'codechef' },
                        { label: 'HackerEarth', value: 'hackerearth' },
                        { label: 'Geeksforgeeks', value: 'geeksforgeeks' },
                        { label: 'Leetcode', value: 'leetcode' },
                        { label: 'Scaler', value: 'scaler' },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Link"
                    name={['additionalProfiles', index, 'link']}
                    className={styles.formItem + ' ' + styles.customProfile}
                  >
                    <Input />
                  </Form.Item>
                </Flex>
              )
            )}
          </Form.Item>
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
