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
  InputNumber,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './EducationForm.module.scss';

const { Text } = Typography;

const EducationFormItem = ({ item, setEducationItems, educationItems }) => {
  const [form] = Form.useForm();
  const educationInfo = form.getFieldsValue([
    `education_${item.id}_institute`,
    `education_${item.id}_degree`,
    `education_${item.id}_branch`,
    `education_${item.id}_grades`,
    `education_${item.id}_grade_type`,
    `education_${item.id}_graduation`,
  ]);

  const institute = educationInfo[`education_${item.id}_institute`];
  const degree = educationInfo[`education_${item.id}_degree`];
  const graduation = educationInfo[`education_${item.id}_graduation`];

  useEffect(() => {
    // Initialize form with existing data if available
    if (item.formData) {
      form.setFieldsValue(item.formData);
    } else {
      // Set default value for grade type if not already set
      form.setFieldValue(`education_${item.id}_grade_type`, 'cgpa');
    }
  }, [item.id, form, item.formData]);

  const validateAndSave = async (id) => {
    try {
      const fieldNames = [
        `education_${id}_institute`,
        `education_${id}_degree`,
        `education_${id}_branch`,
        `education_${id}_grades`,
        `education_${id}_grade_type`,
        `education_${id}_graduation`,
        `education_${id}_description`,
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

  const selectAfter = (
    <Form.Item name={`education_${item.id}_grade_type`} noStyle>
      <Select
        options={[
          { label: 'CGPA', value: 'cgpa' },
          { label: 'Percentage', value: 'percentage' },
        ]}
      />
    </Form.Item>
  );

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Flex vertical gap={4}>
            <Text strong>{institute}</Text>
            <Text>
              {degree && `${degree}, `}
              <Divider />
              {graduation && `${graduation}`}
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
          <Text strong>Education {item.id}</Text>
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
            className={styles.midWidth}
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
          <Form.Item
            name={`education_${item.id}_branch`}
            label="Branch"
            className={styles.midWidth}
          >
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
        <Flex gap={16} className={styles.fullWidth}>
          <Form.Item
            name={`education_${item.id}_grades`}
            label="Grades (Final/Current)"
            rules={[{ required: true, message: 'Grades are required' }]}
            className={styles.midWidth}
          >
            <InputNumber placeholder="Enter Grades" addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
            name={`education_${item.id}_graduation`}
            label="Graduation (Actual/Expected)"
            rules={[{ required: true, message: 'Graduation is required' }]}
            className={styles.midWidth}
          >
            <DatePicker
              placeholder="Select Graduation Date"
              format="YYYY-MM-DD"
            />
          </Form.Item>
        </Flex>
        <Form.Item
          name={`education_${item.id}_description`}
          label="Description"
        >
          <Input.TextArea placeholder="Enter Description" />
        </Form.Item>
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
