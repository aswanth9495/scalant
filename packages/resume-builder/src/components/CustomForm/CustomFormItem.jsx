import React, { useEffect } from 'react';
import {
  Form,
  Card,
  Flex,
  Typography,
  message,
  Input,
  Button,
  Tag,
  Select,
  DatePicker,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const CustomFormItem = ({ item, setCustomFormItems, customFormItems }) => {
  const [form] = Form.useForm();
  const customFormInfo = form.getFieldsValue([
    `custom_${item.id}_customFormHeading`,
    `custom_${item.id}_customFormDescription`,
  ]);

  const customFormName = customFormInfo[`custom_${item.id}_customFormHeading`];
  const customFormDescription =
    customFormInfo[`custom_${item.id}_customFormDescription`];

  useEffect(() => {
    if (item.formData) {
      form.setFieldsValue(item.formData);
    }
  }, [item.id, form, item.formData]);

  const handleExpand = (id) => {
    setCustomFormItems(
      customFormItems.map((item) => {
        if (item.id === id) {
          return { ...item, expanded: !item.expanded };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setCustomFormItems(customFormItems.filter((item) => item.id !== id));
  };

  const handleSave = async (id) => {
    try {
      const fieldNames = [
        `custom_${id}_customFormHeading`,
        `custom_${id}_customFormDescription`,
        `custom_${id}_customFormDate`,
        `custom_${id}_customFormLocation`,
      ];

      await form.validateFields(fieldNames);

      const formData = form.getFieldsValue(fieldNames);

      setCustomFormItems(
        customFormItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              saved: true,
              expanded: false,
              formData: formData,
            };
          }
          return item;
        })
      );

      message.success('Custom form saved successfully');
    } catch (error) {
      message.error(`Failed to save Custom Form: ${error}`);
    }
  };

  const handleCancel = (id) => {
    setCustomFormItems(
      customFormItems.map((item) => {
        if (item.id === id) {
          return { ...item, expanded: false };
        }
        return item;
      })
    );
  };

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Text>
            Section {item.id} - {customFormName}
          </Text>
          <DownOutlined onClick={() => handleExpand(item.id)} />
        </Flex>
        <Text>{customFormDescription.slice(0, 50)}...</Text>
      </Card>
    );
  }

  return (
    <Card key={item.id}>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text>Section {item.id}</Text>
          {item.saved && <Tag color="success">Saved</Tag>}
        </Flex>
        {customFormItems.length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form form={form} layout="vertical">
        <Form.Item
          name={`custom_${item.id}_customFormHeading`}
          label="Section Heading"
        >
          <Input placeholder="Enter Section Heading" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item name={`custom_${item.id}_customFormDate`} label="Date">
            <DatePicker placeholder="Enter Date" format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name={`custom_${item.id}_customFormLocation`}
            label="Location"
          >
            <Select
              placeholder="Select Location"
              options={[
                { label: 'New York', value: 'New York' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'Chicago', value: 'Chicago' },
              ]}
            />
          </Form.Item>
        </Flex>
        <Form.Item
          name={`custom_${item.id}_customFormDescription`}
          label="Description"
          rules={[{ required: true, message: 'Description is required' }]}
        >
          <Input.TextArea placeholder="Enter Description" />
        </Form.Item>
        <Flex gap={16}>
          <Button type="primary" onClick={() => handleSave(item.id)}>
            Save
          </Button>
          <Button type="default" onClick={() => handleCancel(item.id)}>
            Cancel
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default CustomFormItem;
