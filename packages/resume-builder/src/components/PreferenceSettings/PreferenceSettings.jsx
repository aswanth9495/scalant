import React, { useEffect, useMemo } from 'react';
import PageHeader from '../PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Form, Input, Select, Radio, Button, Flex, Checkbox } from 'antd';
import { PREFERRED_JOB_LOCATIONS, PREFERRED_JOB_ROLES } from './constants';
import styles from './PreferenceSettings.module.scss';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';

const FORM_ID = 'preferenceSettings';

const initialFormData = {
  preferredLocations: [],
  preferredRoles: [],
  ctc: '',
  notice: '',
  negotiable: 'no',
  internship: true,
  acknowledge: true,
};

const PreferenceSettings = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const formData = useSelector((state) => state.formStore.forms[FORM_ID]);
  const isFormInitialized = useSelector(
    (state) => state.formStore.initializedForms[FORM_ID]
  );
  const preferenceData = resumeData?.user_company_profile;

  const initialValues = useMemo(
    () =>
      preferenceData
        ? {
            preferredLocations: preferenceData?.preferred_location,
            preferredRoles: [preferenceData?.preferred_role],
            ctc: preferenceData?.expected_ctc,
            notice: preferenceData?.notice_period,
            negotiable: preferenceData?.buyout_notice ? 'yes' : 'no',
            internship: true,
            acknowledge: true,
          }
        : initialFormData,
    [preferenceData]
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

  useEffect(() => {
    // Initialize form with Redux state
    form.setFieldsValue(formData);
  }, [form, formData]);

  const handleValuesChange = (changedValues, allValues) => {
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: allValues,
      })
    );
  };

  const handleFinish = (values) => {
    dispatch(nextStep());
  };

  return (
    <div>
      <PageHeader
        title="Set Your Job Preferences"
        subtitle="Your preferences help us bring relevant job opportunities 
        for you in the future"
      />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onValuesChange={handleValuesChange}
        initialValues={initialValues}
      >
        <Form.Item
          label="Preferred job locations?"
          name="preferredLocations"
          rules={[
            { required: true, message: 'Please select preferred location!' },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            options={PREFERRED_JOB_LOCATIONS}
          />
        </Form.Item>

        <Form.Item
          label="Preferred job roles?"
          name="preferredRoles"
          rules={[{ required: true, message: 'Please select job roles!' }]}
        >
          <Select mode="multiple" allowClear options={PREFERRED_JOB_ROLES} />
        </Form.Item>

        <Form.Item
          label="Current CTC (LPA)"
          name="ctc"
          rules={[
            { required: true, message: 'Please enter your current CTC!' },
          ]}
        >
          <Input placeholder="e.g., 3" />
        </Form.Item>

        <Flex gap={16}>
          <Form.Item
            label="Notice Period (in Days)"
            name="notice"
            rules={[{ required: true, message: 'Please enter notice period!' }]}
          >
            <Input placeholder="e.g., 3" />
          </Form.Item>
          <Form.Item
            label="Negotiable / Buyout available"
            name="negotiable"
            rules={[{ required: true, message: 'Please select an option!' }]}
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>
        </Flex>

        <Form.Item
          name="internship"
          valuePropName="checked"
          rules={[{ required: true, message: 'Please select an option!' }]}
        >
          <Checkbox>I am also open to Internships</Checkbox>
        </Form.Item>

        <Form.Item name="acknowledge" valuePropName="checked">
          <Checkbox>
            Notify me on email and Whatsapp if any relevant job is added to
            Careers Hub dashboard as per my given preference
          </Checkbox>
        </Form.Item>

        <div className={styles.buttonContainer}>
          <Button
            className={styles.submitBtn}
            type="primary"
            htmlType="submit"
            block
          >
            Save and Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PreferenceSettings;
