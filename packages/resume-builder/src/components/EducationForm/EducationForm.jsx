import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EducationFormItem from './EducationFormItem';
import CustomEducationFormItem from './CustomEducationFormItem';
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';
import { initializeForm, updateFormData } from '../../store/formStoreSlice';
import dayjs from 'dayjs';

const FORM_ID = 'educationForm';

const initialFormData = {
  educationItems: [
    {
      id: 1,
      completed: false,
      expanded: true,
      formData: {
        university: '',
        degree: '',
        field: '',
        marks: '',
        marks_type: '',
        graduation_date: '',
        short_description: '',
        custom_section_name: null,
        custom_section_description: null,
      },
    },
  ],
  customEducation: null,
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
  const [updateResumeDetails, { isLoading }] = useUpdateResumeDetailsMutation();

  const initialValues = useMemo(
    () =>
      resumeData?.education
        ? {
            educationItems: resumeData.education.map((item, index) => ({
              id: index,
              completed: true,
              expanded: false,
              formData: {
                university: item.university,
                degree: item.degree,
                field: item.field,
                marks: item.marks,
                marks_type: item.marks_type,
                graduation_date: item.graduation_date
                  ? dayjs(item.graduation_date)
                  : null,
                short_description: item.short_description,
              },
            })),
            customEducation:
              resumeData?.resume_custom_section &&
              Object.keys(resumeData?.resume_custom_section).length
                ? {
                    id: resumeData?.resume_custom_section?.id,
                    completed: true,
                    expanded: false,
                    formData: {
                      name: resumeData?.resume_custom_section?.name,
                      description:
                        resumeData?.resume_custom_section?.description,
                    },
                  }
                : null,
          }
        : initialFormData,
    [resumeData?.education, resumeData?.resume_custom_section]
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
              expanded: true,
              formData: {
                university: '',
                degree: '',
                field: '',
                marks: '',
                marks_type: '',
                graduation_date: '',
                short_description: '',
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
      university: item.formData.university,
      degree: item.formData.degree,
      field: item.formData.field,
      marks: item.formData.marks,
      marks_type: item.formData.grade_type,
      graduation_date: item.formData.graduation_date,
      short_description: item.formData.short_description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  };

  const handleFinish = async () => {
    const educationItems = formData?.educationItems || [];
    const customEducation = formData?.customEducation;
    const hasUncompletedItems = educationItems.some((item) => !item.completed);

    if (hasUncompletedItems) {
      message.error(
        'Please fill all education items before marking as complete'
      );
      return;
    }

    const educationPayload = createEducationPayload(educationItems);

    try {
      const payload = {
        form_stage: 'education_details_form',
        isPopulated: true,
        educations: educationPayload,
        resume_custom_section: customEducation,
      };

      await updateResumeDetails({
        resumeId: resumeData?.resume_details?.id,
        payload,
      }).unwrap();
      message.success('Education details updated successfully');
    } catch (error) {
      message.error(`Failed to update education details: ${error.message}`);
    }
  };

  const handleSaveAndNext = () => {
    handleFinish();
    onComplete?.();
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {(formData?.educationItems || []).map((item, index) => (
            <EducationFormItem
              index={index}
              key={item.id}
              item={item}
              formId={FORM_ID}
              required={required}
            />
          ))}

          {formData?.customEducation && (
            <CustomEducationFormItem formId={FORM_ID} />
          )}
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

export default EducationForm;
