import React, { useEffect, useMemo } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
  CloseOutlined,
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
import { FORM_KEYS } from '../../utils/constants';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import { ADDITIONAL_PROFILES } from '../../utils/constants';
import {
  getAdditionalProfileUrl,
  getExistingProfileTypes,
  getAvailableProfileTypes,
  createProfilePayload,
} from '../../utils/resumeUtils';

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

// URL validation regex pattern
const urlPattern =
  /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

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
  const { incompleteForms, currentIncompleteForm } = useSelector(
    (state) => state.scalantResumeBuilder.resumeForms
  );
  const markComplete =
    incompleteForms.length === 0 ||
    (incompleteForms.length <= 1 &&
      currentIncompleteForm === FORM_KEYS.personal_details);

  const [updateResumeDetails, { isLoading }] = useUpdateResumeDetailsMutation();

  const [form] = Form.useForm();

  const initialValues = useMemo(() => {
    if (!resumeData?.personal_details) {
      return initialFormData;
    }

    // Get additional profiles from user data
    const additionalProfiles = getAdditionalProfileUrl(
      resumeData.personal_details
    );

    // Create a flat object with all form values including profileType0, profileUrl0, etc.
    const formValues = {
      fullName: resumeData.personal_details.name,
      contactNumber: resumeData.personal_details.phone_number
        ? resumeData.personal_details.phone_number.replace('+91-', '')
        : '',
      emailAddress: resumeData.personal_details.email,
      gender: resumeData.personal_details.gender,
      currentCity: resumeData.personal_details.city,
      linkedIn: resumeData.personal_details.linkedin,
      github: resumeData.personal_details.github,
      personalWebsite: resumeData.personal_details.portfolio,
    };

    // Add the profileType and profileUrl keys directly to the formValues object
    additionalProfiles.forEach((profile) => {
      Object.keys(profile).forEach((key) => {
        formValues[key] = profile[key];
      });
    });

    return {
      personalInfoAndSocial: {
        ...formValues,
        additionalProfiles,
      },
    };
  }, [resumeData?.personal_details]);

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

  const handleFinish = async () => {
    const values = formData?.personalInfoAndSocial;
    updateFormData({
      formId: FORM_ID,
      data: {
        personalInfoAndSocial: values,
      },
    });

    try {
      // Create base payload with main personal details
      const basePayload = {
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
        mark_complete: markComplete,
      };

      // Add additional profiles to payload
      const payload = createProfilePayload(values, basePayload);

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
  const handleSaveAndCompile = () => {
    onComplete?.(true);
    handleFinish();
  };

  const handleSaveAndNext = () => {
    onComplete?.();
    handleFinish();
  };

  const handleValuesChange = (changedValues, allValues) => {
    // Check if a profile type was changed
    const changedProfileType = Object.keys(changedValues).find((key) =>
      key.startsWith('profileType')
    );

    if (changedProfileType) {
      const newProfileType = changedValues[changedProfileType];

      // Check if this profile type already exists in another profile
      const isDuplicate = Object.keys(allValues)
        .filter(
          (key) => key.startsWith('profileType') && key !== changedProfileType
        )
        .some((key) => allValues[key] === newProfileType);

      if (isDuplicate) {
        // Revert the change by setting back to previous value
        const previousValue =
          formData?.personalInfoAndSocial?.[changedProfileType];
        form.setFieldValue(changedProfileType, previousValue);
        message.warning(
          `${ADDITIONAL_PROFILES.find((p) => p.value === newProfileType)?.label} profile is already added`
        );
        return;
      }
    }

    // Get current additionalProfiles
    const currentProfiles =
      formData?.personalInfoAndSocial?.additionalProfiles || [];

    // Update the form state in the store
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          personalInfoAndSocial: {
            ...allValues,
            additionalProfiles: currentProfiles,
          },
        },
      })
    );
  };

  const handleAddProfile = () => {
    // Get current form values
    const currentFormValues = form.getFieldsValue();

    // Get existing profile types
    const existingTypes = getExistingProfileTypes(currentFormValues);

    // Check if all profile types are already used
    if (existingTypes.length >= ADDITIONAL_PROFILES.length) {
      message.warning('All profile types have already been added');
      return;
    }

    // Find an available profile type
    const availableProfileType = ADDITIONAL_PROFILES.find(
      (profile) => !existingTypes.includes(profile.value)
    );

    // Get current additionalProfiles array
    const currentProfiles =
      formData?.personalInfoAndSocial?.additionalProfiles || [];
    const newProfileIndex = currentProfiles.length;

    // Create a new profile with default values
    const newProfile = {
      [`profileType${newProfileIndex}`]: availableProfileType.value,
      [`profileUrl${newProfileIndex}`]: '',
    };

    // Create updated form data with the new profile
    const updatedProfiles = [...currentProfiles, newProfile];
    const updatedFormData = {
      ...formData?.personalInfoAndSocial,
      ...currentFormValues,
      additionalProfiles: updatedProfiles,
      ...newProfile,
    };

    // Update the form state and UI
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          personalInfoAndSocial: updatedFormData,
        },
      })
    );

    form.setFieldsValue(updatedFormData);
  };

  const handleRemoveProfile = (indexToRemove) => {
    // Get current form values
    const currentFormValues = form.getFieldsValue();

    // Get current additionalProfiles array
    const currentProfiles =
      formData?.personalInfoAndSocial?.additionalProfiles || [];

    // Remove the profile at the specified index
    const updatedProfiles = currentProfiles.map((item, idx) => {
      if (idx === indexToRemove) {
        return {
          [`profileType${idx}`]: currentProfiles[idx][`profileType${idx}`],
          [`profileUrl${idx}`]: '',
        };
      }
      return item;
    });

    // Create new form data without the removed profile
    const updatedFormData = {
      ...formData?.personalInfoAndSocial,
      ...currentFormValues,
      additionalProfiles: [...updatedProfiles],
    };

    // Remove all existing profileType and profileUrl fields
    Object.keys(updatedFormData).forEach((key) => {
      if (key.startsWith('profileType') || key.startsWith('profileUrl')) {
        delete updatedFormData[key];
      }
    });

    // Re-index the remaining profiles
    updatedProfiles.forEach((profile, newIndex) => {
      // Find the original index of this profile
      const originalIndex = currentProfiles.findIndex((p) => p === profile);
      if (originalIndex !== -1) {
        updatedFormData[`profileType${newIndex}`] =
          currentFormValues[`profileType${originalIndex}`];
        updatedFormData[`profileUrl${newIndex}`] =
          currentFormValues[`profileUrl${originalIndex}`];
      }
    });

    // Update the form state
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          personalInfoAndSocial: updatedFormData,
        },
      })
    );

    // Update form values
    form.setFieldsValue(updatedFormData);
  };

  const renderAdditionalProfiles = () => {
    const profiles = formData?.personalInfoAndSocial?.additionalProfiles || [];
    const currentFormValues = form.getFieldsValue();
    return profiles.map((_, idx) => {
      const profileTypeKey = `profileType${idx}`;
      const profileUrlKey = `profileUrl${idx}`;
      if (!profiles[idx][`profileUrl${idx}`]) {
        return null;
      }
      // Get available profile types for this dropdown
      const availableOptions = getAvailableProfileTypes(currentFormValues, idx);

      return (
        <Flex gap={16} key={idx} align="center">
          <Form.Item
            name={profileTypeKey}
            style={{ width: '45%' }}
            className={styles.formItem}
          >
            <Select
              options={availableOptions}
              placeholder="Select Profile Type"
            />
          </Form.Item>
          <Form.Item
            name={profileUrlKey}
            style={{ width: '45%' }}
            className={styles.formItem}
            rules={[
              {
                required: required,
                pattern: urlPattern,
                message: 'Please enter a valid URL',
              },
            ]}
          >
            <Input placeholder="Enter Profile URL" />
          </Form.Item>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => handleRemoveProfile(idx)}
            style={{ marginTop: 4 }}
          />
        </Flex>
      );
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
            rules={[
              { required: required },
              {
                pattern: urlPattern,
                message: 'Please enter a valid URL',
              },
            ]}
            className={styles.formItem}
          >
            <Input prefix={<LinkedinOutlined />} />
          </Form.Item>
          <Form.Item
            label="GitHub"
            name="github"
            className={styles.formItem}
            rules={[
              {
                pattern: urlPattern,
                message: 'Please enter a valid URL',
              },
            ]}
          >
            <Input prefix={<GithubOutlined />} />
          </Form.Item>
          <Form.Item
            label="Personal Website"
            name="personalWebsite"
            className={styles.formItem}
            rules={[
              {
                pattern: urlPattern,
                message: 'Please enter a valid URL',
              },
            ]}
          >
            <Input prefix={<CodeOutlined />} />
          </Form.Item>
        </Space>

        <Flex gap={16} vertical style={{ width: '100%', marginTop: 24 }}>
          {renderAdditionalProfiles()}

          <Button type="dashed" onClick={handleAddProfile}>
            Add Profile
          </Button>
        </Flex>

        <Flex gap={16} style={{ marginTop: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSaveAndCompile}
          >
            Save and compile
          </Button>
          <Button
            type="default"
            htmlType="submit"
            block
            loading={isLoading}
            disabled={isLoading}
            onClick={handleSaveAndNext}
          >
            Save and Next
          </Button>
        </Flex>
      </Form>
    </Space>
  );
};

export default PersonalInfoAndSocial;
