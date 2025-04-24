import React, { useState } from 'react';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkExperienceFormItem from './WorkExperienceFormItem';

const WorkExperienceForm = () => {
  const [workExperienceItems, setWorkExperienceItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

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

  const handleMarkAsCompleted = () => {
    const hasUnsavedItems = workExperienceItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all work experience items before marking as complete'
      );
      return;
    }

    const workExperienceData = workExperienceItems
      .filter((item) => item.saved)
      .map((item) => {
        const formData = item.formData || {};

        return {
          id: item.id,
          saved: item.saved,
          company: formData[`work_experience_${item.id}_company`],
          position: formData[`work_experience_${item.id}_position`],
          startDate: formData[`work_experience_${item.id}_startDate`],
          endDate: formData[`work_experience_${item.id}_endDate`],
          location: formData[`work_experience_${item.id}_location`],
          toolstech: formData[`work_experience_${item.id}_toolstech`],
          keyPoints: formData[`work_experience_${item.id}_keyPoints`],
          currentWorking: formData[`work_experience_${item.id}_currentWorking`],
        };
      });

    // eslint-disable-next-line no-console, no-undef
    console.log(workExperienceData);
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
