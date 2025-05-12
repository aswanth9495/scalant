import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EducationFormItem from './EducationFormItem';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import dayjs from 'dayjs';

const FORM_ID = 'educationForm';

const initialFormData = {
  educationItems: [
    {
      id: 1,
      completed: false,
      saved: false,
      expanded: true,
      formData: {
        institute: '',
        degree: '',
        branch: '',
        grades: '',
        gradeType: '',
        graduation: '',
        description: '',
      },
    },
  ],
};

const EducationForm = ({ onComplete, required = false }) => {
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
      resumeData?.education
        ? {
            educationItems: resumeData.education.map((item, index) => ({
              id: index,
              completed: true,
              saved: true,
              expanded: false,
              formData: {
                institute: item.university,
                degree: item.degree,
                branch: item.field,
                grades: item.marks,
                gradeType: item.marks_type,
                graduation: item.graduation_date
                  ? dayjs(item.graduation_date)
                  : null,
                description: item.short_description,
              },
            })),
          }
        : initialFormData,
    [resumeData?.education]
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

  const handleAddEducation = () => {
    const currentItems = formData?.educationItems || [];
    const newId = currentItems.length + 1;

    dispatch(
      updateFormData({
        formId: FORM_ID,
        data: {
          educationItems: [
            ...currentItems,
            {
              id: newId,
              completed: false,
              saved: false,
              expanded: true,
              formData: {
                institute: '',
                degree: '',
                branch: '',
                grades: '',
                gradeType: '',
                graduation: '',
                description: '',
              },
            },
          ],
        },
      })
    );
  };

  const createEducationPayload = (educationItems) => {
    return educationItems.map((item) => ({
      id: item.id,
      university: item.formData.institute,
      degree: item.formData.degree,
      field: item.formData.branch,
      marks: item.formData.grades,
      marks_type: item.formData.gradeType,
      graduation_date: item.formData.graduation,
      short_description: item.formData.description,
      data_source: 'careers_hub',
      university_city: null,
      math_score: null,
      math_score_type: null,
      show_marks_in_resume: false,
      show_branch_in_resume: false,
      user_id: resumeData?.user_id,
      creator: null,
      degree_free_text: null,
      field_free_text: null,
      projects: null,
      board: null,
      from: null,
      to: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  };

  const handleMarkAsCompleted = async () => {
    const educationItems = formData?.educationItems || [];
    const hasUnsavedItems = educationItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all education items before marking as complete'
      );
      return;
    }

    const educationPayload = createEducationPayload(educationItems);

    try {
      const payload = {
        form_stage: 'education_details_form',
        isPopulated: true,
        education: educationPayload,
      };

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Education details updated successfully');
      onComplete?.();
    } catch (error) {
      message.error(`Failed to update education details: ${error.message}`);
    }
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {(formData?.educationItems || []).map((item) => (
            <EducationFormItem
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
          onClick={handleAddEducation}
        >
          {(formData?.educationItems || []).length === 1
            ? 'Add secondary education'
            : 'Add another education'}
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

export default EducationForm;
