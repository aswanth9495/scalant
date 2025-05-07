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
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const ProjectFormItem = ({ item, setProjectItems, projectItems }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (item.formData) {
      const formData = { ...item.formData };
      form.setFieldsValue(formData);
    }
  }, [item.formData, form]);

  const validateAndSave = async (id) => {
    try {
      await form.validateFields();

      const formData = form.getFieldsValue();

      setProjectItems(
        projectItems.map((item) =>
          item.id === id
            ? { ...item, saved: true, expanded: false, formData: formData }
            : item
        )
      );

      message.success('Project saved successfully');
    } catch (error) {
      message.error(`Failed to save Project: ${error}`);
    }
  };

  const handleCancel = (id) => {
    setProjectItems(
      projectItems.map((item) =>
        item.id === id ? { ...item, expanded: false } : item
      )
    );
  };

  const handleExpand = (id) => {
    setProjectItems(
      projectItems.map((item) =>
        item.id === id ? { ...item, expanded: true } : item
      )
    );
  };

  const handleDelete = (id) => {
    setProjectItems(projectItems.filter((item) => item.id !== id));
  };

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Text strong>{item.formData?.projectName}</Text>
        </Flex>
        <DownOutlined onClick={() => handleExpand(item.id)} />
      </Card>
    );
  }

  return (
    <Card key={item.id}>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text>Project {item.id}</Text>
          {item.saved && <Tag color="success">Saved</Tag>}
        </Flex>
        {projectItems.length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form form={form} layout="vertical" initialValues={item.formData}>
        <Form.Item
          name={`projectName`}
          label="Project Name"
          rules={[{ required: true, message: 'Project Name is required' }]}
        >
          <Input placeholder="Enter Project Name" />
        </Form.Item>
        <Form.Item
          name={`projectLink`}
          label="Project Link"
          rules={[{ required: true, message: 'Project Link is required' }]}
        >
          <Input placeholder="Enter Project Link" />
        </Form.Item>
        <Form.Item
          name={`projectDescription`}
          label="Key Points"
          rules={[{ required: true, message: 'Key Points is required' }]}
        >
          <Input.TextArea placeholder="Enter Key Points" />
        </Form.Item>
        <Flex gap={16}>
          <Button type="primary" onClick={() => validateAndSave(item.id)}>
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

export default ProjectFormItem;
