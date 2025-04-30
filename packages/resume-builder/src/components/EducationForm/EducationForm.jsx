import React, { useState } from 'react';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EducationFormItem from './EducationFormItem';
const EducationForm = () => {
  const [educationItems, setEducationItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const handleAddEducation = () => {
    const newId = educationItems.length + 1;
    setEducationItems([
      ...educationItems,
      { id: newId, completed: false, saved: false, expanded: true },
    ]);
  };

  const handleMarkAsCompleted = () => {
    const hasUnsavedItems = educationItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all education items before marking as complete'
      );
      return;
    }

    const educationData = educationItems
      .filter((item) => item.saved)
      .map((item) => {
        const formData = item.formData || {};

        return {
          id: item.id,
          saved: item.saved,
          institute: formData[`education_${item.id}_institute`],
          degree: formData[`education_${item.id}_degree`],
          branch: formData[`education_${item.id}_branch`],
          grades: formData[`education_${item.id}_grades`],
          gradeType: formData[`education_${item.id}_grade_type`],
          graduation: formData[`education_${item.id}_graduation`],
          description: formData[`education_${item.id}_description`],
        };
      });

    // eslint-disable-next-line no-console, no-undef
    console.log(educationData);
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
