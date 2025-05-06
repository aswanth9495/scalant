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
import dayjs from 'dayjs';
import styles from './EducationForm.module.scss';

const { Text } = Typography;

const EducationFormItem = ({ item, setEducationItems, educationItems }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (item.formData) {
      const formData = { ...item.formData };
      // Convert string date to dayjs object if it exists
      if (formData.graduation) {
        formData.graduation = dayjs(formData.graduation);
      }
      form.setFieldsValue(formData);
    }
  }, [item.formData, form]);

  const validateAndSave = async (id) => {
    try {
      await form.validateFields();

      const formData = form.getFieldsValue();
      // Convert dayjs object to YYYY-MM-DD string
      if (formData.graduation) {
        formData.graduation = formData.graduation.format('YYYY-MM-DD');
      }

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
    <Form.Item name="grade_type" noStyle>
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
            <Text strong>{item.formData?.institute}</Text>
            <Text>
              {item.formData?.degree && `${item.formData.degree}, `}
              <Divider />
              {item.formData?.graduation && `${item.formData.graduation}`}
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
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          grade_type: 'cgpa',
          ...item.formData,
        }}
      >
        <Form.Item
          name="institute"
          label="Institute Name"
          rules={[{ required: true, message: 'Institute Name is required' }]}
        >
          <Input placeholder="Enter Institute Name" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name="degree"
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
          <Form.Item name="branch" label="Branch" className={styles.midWidth}>
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
            name="grades"
            label="Grades (Final/Current)"
            rules={[{ required: true, message: 'Grades are required' }]}
            className={styles.midWidth}
          >
            <InputNumber placeholder="Enter Grades" addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
            name="graduation"
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
        <Form.Item name="description" label="Description">
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
