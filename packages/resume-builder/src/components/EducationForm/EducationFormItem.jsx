import React, { useEffect } from 'react';
import {
  Card,
  Typography,
  Flex,
  Divider,
  Form,
  Tag,
  Input,
  Select,
  DatePicker,
  Button,
  message,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const EducationFormItem = ({ item, setEducationItems, educationItems }) => {
  const [form] = Form.useForm();
  const educationInfo = form.getFieldsValue([
    `education_${item.id}_institute`,
    `education_${item.id}_degree`,
    `education_${item.id}_branch`,
    `education_${item.id}_startDate`,
    `education_${item.id}_endDate`,
  ]);

  const institute = educationInfo[`education_${item.id}_institute`];
  const degree = educationInfo[`education_${item.id}_degree`];
  const startDate =
    educationInfo[`education_${item.id}_startDate`]?.format('YYYY');
  const endDate = educationInfo[`education_${item.id}_endDate`]?.format('YYYY');

  useEffect(() => {
    // Initialize form with existing data if available
    if (item.formData) {
      form.setFieldsValue(item.formData);
    }
  }, [item.id, form, item.formData]);

  const validateAndSave = async (id) => {
    try {
      const fieldNames = [
        `education_${id}_institute`,
        `education_${id}_degree`,
        `education_${id}_branch`,
        `education_${id}_startDate`,
        `education_${id}_endDate`,
        `education_${id}_gpa`,
      ];

      await form.validateFields(fieldNames);

      const formData = form.getFieldsValue(fieldNames);

      setEducationItems(
        educationItems.map((item) =>
          item.id === id
            ? { ...item, saved: true, expanded: false, formData }
            : item
        )
      );

      message.success('Education saved successfully');
    } catch (error) {
      message.error(`Failed to save education: ${error}`);
    }
  };

  const handleCancel = (id) => {
    setEducationItems(
      educationItems.map((item) =>
        item.id === id ? { ...item, expanded: false } : item
      )
    );
  };

  const handleExpand = (id) => {
    setEducationItems(
      educationItems.map((item) =>
        item.id === id ? { ...item, expanded: true } : item
      )
    );
  };

  const handleDelete = (id) => {
    setEducationItems(educationItems.filter((item) => item.id !== id));
  };

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Flex vertical gap={4}>
            <Text strong>{institute}</Text>
            <Text>
              {degree && `${degree}, `}
              <Divider />
              {startDate && `${startDate} - ${endDate}`}
            </Text>
          </Flex>
          <DownOutlined onClick={() => handleExpand(item.id)} />
        </Flex>
      </Card>
    );
  }

  return (
    <Card key={item.id}>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text>Education {item.id}</Text>
          {item.saved && <Tag color="success">Saved</Tag>}
        </Flex>
        {educationItems.length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form form={form} layout="vertical">
        <Form.Item
          name={`education_${item.id}_institute`}
          label="Institute Name"
          rules={[{ required: true, message: 'Institute Name is required' }]}
        >
          <Input placeholder="Enter Institute Name" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name={`education_${item.id}_degree`}
            label="Degree Type"
            rules={[{ required: true, message: 'Degree Type is required' }]}
          >
            <Select
              placeholder="Select Degree Type"
              options={[
                { label: 'Bachelor', value: 'bachelor' },
                { label: 'Master', value: 'master' },
                { label: 'PhD', value: 'phd' },
              ]}
            />
          </Form.Item>
          <Form.Item name={`education_${item.id}_branch`} label="Branch">
            <Select
              placeholder="Select Branch"
              options={[
                { label: 'Computer Science', value: 'computer-science' },
                {
                  label: 'Electrical Engineering',
                  value: 'electrical-engineering',
                },
              ]}
            />
          </Form.Item>
        </Flex>
        <Form.Item
          name={`education_${item.id}_gpa`}
          label="GPA (Final/Current)"
          rules={[{ required: true, message: 'GPA is required' }]}
        >
          <Input placeholder="Enter GPA" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name={`education_${item.id}_startDate`}
            label="Start Date"
            rules={[{ required: true, message: 'Start Date is required' }]}
          >
            <DatePicker placeholder="Select Start Date" format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name={`education_${item.id}_endDate`}
            label="End Date"
            rules={[{ required: true, message: 'End Date is required' }]}
          >
            <DatePicker placeholder="Select End Date" format="YYYY-MM-DD" />
          </Form.Item>
        </Flex>
      </Form>
      <Flex gap={16}>
        <Button type="primary" block onClick={() => validateAndSave(item.id)}>
          Save
        </Button>
        <Button type="default" block onClick={() => handleCancel(item.id)}>
          Cancel
        </Button>
      </Flex>
    </Card>
  );
};

export default EducationFormItem;
