import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkExperienceFormItem from './WorkExperienceFormItem';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import AiSuggestionBanner from '../AiSuggestionBanner';
import dayjs from 'dayjs';

const FORM_ID = 'workExperienceForm';

const initialFormData = {
  workExperienceItems: [
    {
      id: 1,
      completed: false,
      expanded: true,
      formData: {
        company: '',
        position: '',
        from: '',
        to: '',
        short_description: '',
        location: '',
        is_current: false,
      },
    },
  ],
};

const WorkExperienceForm = ({ onComplete, required = false }) => {
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

  const initialValues = useMemo(
    () =>
      resumeData?.experience
        ? {
            workExperienceItems: resumeData.experience.map((item, index) => ({
              id: index,
              completed: true,
              expanded: false,
              formData: {
                company: item.company,
                position: item.position,
                from: item.from ? dayjs(item.from) : null,
                to: item.to ? dayjs(item.to) : null,
                location: item.location,
                short_description: item.short_description,
                is_current: item.is_current,
              },
            })),
          }
        : initialFormData,
    [resumeData?.experience]
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

  const handleAddWorkExperience = () => {
    const currentItems = formData?.workExperienceItems || [];
    const newId = currentItems.length + 1;

    // Close all already expanded items
    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          workExperienceItems: [
            ...currentItems.map((item) => ({ ...item, expanded: false })),
            {
              id: newId,
              completed: false,
              expanded: true,
              formData: {
                company: '',
                position: '',
                from: '',
                to: '',
                short_description: '',
                location: '',
                is_current: false,
              },
            },
          ],
        },
      })
    );
  };

  const createWorkExperiencePayload = (workExperienceItems) => {
    return workExperienceItems.map((item) => ({
      user_id: resumeData?.user_id,
      company: item.formData.company,
      position: item.formData.position,
      from: item.formData.from,
      to: item.formData.to,
      short_description: item.formData.short_description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_current: item.formData.is_current,
      creator: 'candidate',
      experience_type: null,
      projects: null,
      location: item.formData.location,
      freetext_position: null,
      base_ctc: 0,
      variable_ctc: 0,
      ctc_currency: 0,
      team_size: null,
      data_source: 'careers_hub',
      status: 'active',
      show_user_work_experience_location: false,
      industry: [],
    }));
  };

  const handleFinish = async () => {
    const workExperienceItems = formData?.workExperienceItems || [];
    const hasUncompletedItems = workExperienceItems.some(
      (item) => !item.completed
    );

    if (hasUncompletedItems) {
      message.error(
        'Please fill all work experience items before marking as complete'
      );
      return;
    }

    const workExperiencePayload =
      createWorkExperiencePayload(workExperienceItems);

    try {
      const payload = {
        form_stage: 'work_experience_details_form',
        isPopulated: true,
        previous_experiences: workExperiencePayload,
      };

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Work experience details updated successfully');
    } catch (error) {
      message.error(`Failed to update work experience details: ${error}`);
    }
  };

  const handleSaveAndNext = () => {
    handleFinish();
    onComplete?.();
  };

  return (
    <Flex vertical gap={16}>
      {/* <AiSuggestionBanner /> */}
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {(formData?.workExperienceItems || []).map((item, index) => (
            <WorkExperienceFormItem
              index={index}
              key={item.id}
              item={item}
              formId={FORM_ID}
              required={required}
            />
          ))}
        </Flex>
        <Button
          type="dashed"
          block
          icon={<PlusOutlined />}
          onClick={handleAddWorkExperience}
        >
          Add another experience
        </Button>
        <Flex gap={16}>
          <Button
            type="primary"
            block
            onClick={handleFinish}
            disabled={isLoading}
          >
            Save and Compile
          </Button>
          <Button
            type="default"
            onClick={handleSaveAndNext}
            block
            disabled={isLoading}
          >
            Save and Next
          </Button>
        </Flex>
      </Space>
    </Flex>
  );
};

export default WorkExperienceForm;
