import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EducationFormItem from './EducationFormItem';
// eslint-disable-next-line max-len
import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';

const EducationForm = ({ onComplete, required = false }) => {
  const [educationItems, setEducationItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);
  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  useEffect(() => {
    if (resumeData?.education) {
      setEducationItems(
        resumeData.education.map((item, index) => ({
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
            graduation: item.graduation_date,
            description: item.short_description,
          },
        }))
      );
    }
  }, [resumeData.education]);

  const handleAddEducation = () => {
    const newId = educationItems.length + 1;

    setEducationItems([
      ...educationItems,
      { id: newId, completed: false, saved: false, expanded: true },
    ]);
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
        resume_custom_section: [],
        upgrade: false,
        scaler_performance_configs: {
          does_not_have_good_projects: true,
          leaderboard: {
            force_hide: true,
            percentile: 0,
            show: true,
          },
          mock_interview: {
            force_hide: true,
            rating: 'Not Attempted',
            show: true,
            skill_name: null,
          },
          problem_solving: {
            force_hide: true,
            problems_solved: 0,
            show: true,
          },
          resume_template_choice: 'nonTechTemplate',
          use_scaler_education: true,
          use_scaler_resume: true,
        },
      };

      await updateResumeDetails({
        formStage: 'education-details',
        payload,
      }).unwrap();
      message.success('Education details updated successfully');
      onComplete?.();
    } catch (error) {
      message.error(`Failed to update education details: ${error.message}`);
    }

    // eslint-disable-next-line no-console, no-undef
    console.log(educationItems);
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {educationItems.map((item) => (
            <EducationFormItem
              key={item.id}
              item={item}
              setEducationItems={setEducationItems}
              educationItems={educationItems}
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
          {educationItems.length === 1
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
