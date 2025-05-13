import React, { useState } from 'react';
import { Space, Button, Flex, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CustomFormItem from './CustomFormItem';

const CustomForm = ({ onComplete }) => {
  const [customFormItems, setCustomFormItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const handleAddCustomForm = () => {
    setCustomFormItems([
      ...customFormItems,
      {
        id: customFormItems.length + 1,
        completed: false,
        saved: false,
        expanded: true,
      },
    ]);
  };

  const handleMarkAsCompleted = () => {
    const hasUnsavedItems = customFormItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all custom form items before marking as complete'
      );
      return;
    }

    const customFormData = customFormItems
      .filter((item) => item.saved)
      .map((item) => {
        const formData = item.formData || {};

        return {
          id: item.id,
          saved: item.saved,
          customFormHeading: formData[`custom_${item.id}_customFormHeading`],
          customFormDescription:
            formData[`custom_${item.id}_customFormDescription`],
          customFormDate: formData[`custom_${item.id}_customFormDate`],
          customFormLocation: formData[`custom_${item.id}_customFormLocation`],
        };
      });

    message.success('Custom form updated successfully');
    onComplete?.();
  };

  return (
    <Flex vertical gap={16}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Flex vertical gap={16}>
          {customFormItems.map((item) => (
            <CustomFormItem
              key={item.id}
              item={item}
              setCustomFormItems={setCustomFormItems}
              customFormItems={customFormItems}
            />
          ))}
        </Flex>
        <Button
          type="dashed"
          block
          icon={<PlusOutlined />}
          onClick={handleAddCustomForm}
        >
          Add Custom Form
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

export default CustomForm;
