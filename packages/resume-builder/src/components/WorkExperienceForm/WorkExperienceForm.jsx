import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkExperienceFormItem from './WorkExperienceFormItem';

import { useUpdateResumeDetailsMutation } from '../../services/resumeBuilderApi';

const WorkExperienceForm = ({ onComplete, required = false }) => {
  const [workExperienceItems, setWorkExperienceItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const [updateResumeDetails] = useUpdateResumeDetailsMutation();

  const resumeData = useSelector((state) => state.resumeBuilder.resumeData);

  useEffect(() => {
    if (resumeData?.experience) {
      setWorkExperienceItems(
        resumeData.experience.map((item, index) => ({
          id: index,
          completed: true,
          saved: true,
          expanded: false,
          formData: {
            workCompany: item.company,
            workPosition: item.position,
            workStartDate: item.from,
            workEndDate: item.to,
            workLocation: item.location,
            workKeyPoints: item.short_description,
            workCurrentWorking: item.is_current,
          },
        }))
      );
    }
  }, [resumeData.experience]);

  const handleAddWorkExperience = () => {
    setWorkExperienceItems([
      ...workExperienceItems,
      {
        id: workExperienceItems.length + 1,
        completed: false,
        saved: false,
        expanded: true,
      },
    ]);
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
        formStage: 'professional-details',
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
          {workExperienceItems.map((item) => (
            <WorkExperienceFormItem
              key={item.id}
              item={item}
              setWorkExperienceItems={setWorkExperienceItems}
              workExperienceItems={workExperienceItems}
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
