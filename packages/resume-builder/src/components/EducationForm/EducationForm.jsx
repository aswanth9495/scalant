import React, { useEffect, useState } from 'react';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EducationFormItem from './EducationFormItem';
const EducationForm = ({ resumeData }) => {
  const [educationItems, setEducationItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

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

  const handleMarkAsCompleted = () => {
    const hasUnsavedItems = educationItems.some((item) => !item.saved);
    console.log(hasUnsavedItems, 'hasUnsavedItems');
    if (hasUnsavedItems) {
      message.error(
        'Please save all education items before marking as complete'
      );
      return;
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
