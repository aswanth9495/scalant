import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkExperienceFormItem from './WorkExperienceFormItem';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import dayjs from 'dayjs';

const FORM_ID = 'workExperienceForm';

const initialFormData = {
  workExperienceItems: [
    {
      id: 1,
      completed: false,
      saved: false,
      expanded: true,
      formData: {
        workCompany: '',
        workPosition: '',
        workStartDate: '',
        workEndDate: '',
        workKeyPoints: '',
        workLocation: '',
        workCurrentWorking: false,
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
  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  const initialValues = useMemo(
    () =>
      resumeData?.experience
        ? {
            workExperienceItems: resumeData.experience.map((item, index) => ({
              id: index,
              completed: true,
              saved: true,
              expanded: false,
              formData: {
                workCompany: item.company,
                workPosition: item.position,
                workStartDate: item.from ? dayjs(item.from) : null,
                workEndDate: item.to ? dayjs(item.to) : null,
                workLocation: item.location,
                workKeyPoints: item.short_description,
                workCurrentWorking: item.is_current,
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

    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          workExperienceItems: [
            ...currentItems,
            {
              id: newId,
              completed: false,
              saved: false,
              expanded: true,
              formData: {
                workCompany: '',
                workPosition: '',
                workStartDate: '',
                workEndDate: '',
                workKeyPoints: '',
                workLocation: '',
                workCurrentWorking: false,
              },
            },
          ],
        },
      })
    );
  };

  const createWorkExperiencePayload = (workExperienceItems) => {
    return workExperienceItems.map((item) => ({
      id: item.id,
      user_id: resumeData?.user_id,
      company: item.formData.workCompany,
      position: item.formData.workPosition,
      from: item.formData.workStartDate,
      to: item.formData.workEndDate,
      short_description: item.formData.workKeyPoints,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_current: item.formData.workCurrentWorking,
      creator: 'candidate',
      experience_type: null,
      projects: null,
      location: '',
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

  const handleMarkAsCompleted = async () => {
    const workExperienceItems = formData?.workExperienceItems || [];
    const hasUnsavedItems = workExperienceItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all work experience items before marking as complete'
      );
      return;
    }

    const workExperiencePayload =
      createWorkExperiencePayload(workExperienceItems);

    try {
      const payload = {
        form_stage: 'professional_details_form',
        isPopulated: true,
        upgrade: false,
        previous_experience: workExperiencePayload,
        projects: [],
        achievements: [],
      };
      onComplete?.();

      await updateResumeDetails({
        resumeId: resumeData?.id,
        payload,
      }).unwrap();
      message.success('Work experience details updated successfully');
    } catch (error) {
      message.error(`Failed to update work experience details: ${error}`);
    }

    // eslint-disable-next-line no-console, no-undef
    console.log(workExperienceItems);
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {(formData?.workExperienceItems || []).map((item) => (
            <WorkExperienceFormItem
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
          <Button type="primary" block onClick={handleMarkAsCompleted}>
            Mark as completed
          </Button>
          <Button type="default" block>
            Cancel
          </Button>
        </Flex>
      </Space>
    </Flex>
  );
};

export default WorkExperienceForm;
