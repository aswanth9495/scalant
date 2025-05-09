import React, { useEffect } from 'react';

import {
  Form,
  Input,
  Card,
  Flex,
  Divider,
  Tag,
  Typography,
  Checkbox,
  DatePicker,
  message,
  Button,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Text } = Typography;

const WorkExperienceFormItem = ({
  item,
  setWorkExperienceItems,
  workExperienceItems,
  required,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (item.formData) {
      const formData = {
        ...item.formData,
      };

      if (formData.workStartDate) {
        formData.workStartDate = dayjs(formData.workStartDate);
      }

      if (formData.workEndDate) {
        formData.workEndDate = dayjs(formData.workEndDate);
      }

      form.setFieldsValue(formData);
    }
  }, [item.id, form, item.formData]);

  const validateAndSave = async (id) => {
    try {
      await form.validateFields();

      const formData = form.getFieldsValue();

      if (formData.workStartDate) {
        formData.workStartDate = formData.workStartDate.format('YYYY-MM-DD');
      }

      if (formData.workEndDate) {
        formData.workEndDate = formData.workEndDate.format('YYYY-MM-DD');
      }

      setWorkExperienceItems(
        workExperienceItems.map((item) =>
          item.id === id
            ? { ...item, saved: true, expanded: false, formData: formData }
            : item
        )
      );

      message.success('Work Experience saved successfully');
    } catch (error) {
      message.error(`Failed to save Work Experience: ${error}`);
    }
  };

  const handleCancel = (id) => {
    setWorkExperienceItems(
      workExperienceItems.map((item) =>
        item.id === id ? { ...item, expanded: false } : item
      )
    );
  };

  const handleExpand = (id) => {
    setWorkExperienceItems(
      workExperienceItems.map((item) =>
        item.id === id ? { ...item, expanded: true } : item
      )
    );
  };

  const handleDelete = (id) => {
    setWorkExperienceItems(
      workExperienceItems.filter((item) => item.id !== id)
    );
  };

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Flex vertical gap={4}>
            <Text strong>{item.formData?.workCompany}</Text>
            <Text>
              {item.formData?.workPosition &&
                `${item.formData?.workPosition}, `}
              <Divider />
              {item.formData?.workStartDate &&
                `${item.formData?.workStartDate}`}
              -
              {item.formData?.workEndDate
                ? `${item.formData?.workEndDate}`
                : `Present`}
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
          <Text>Work Experience {item.id}</Text>
          {item.saved && <Tag color="success">Saved</Tag>}
        </Flex>
        {workExperienceItems.length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form form={form} layout="vertical">
        <Form.Item
          name={`workCompany`}
          label="Company"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Company" />
        </Form.Item>
        <Form.Item
          name={`workPosition`}
          label="Position"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Position" />
        </Form.Item>
        <Form.Item name={`workCurrentWorking`} valuePropName="checked">
          <Checkbox>I am currently working here</Checkbox>
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name={`workStartDate`}
            label="Start Date"
            rules={[{ required: required }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name={`workEndDate`}
            label="End Date"
            rules={[{ required: required }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Flex>
        <Form.Item name={`workLocation`} label="Location">
          <Input />
        </Form.Item>
        <Form.Item name={`workKeyPoints`} label="Key Points">
          <Input.TextArea placeholder="Enter Key Points" />
        </Form.Item>
        <Flex gap={16}>
          <Button type="primary" block onClick={() => validateAndSave(item.id)}>
            Save
          </Button>
          <Button type="default" block onClick={() => handleCancel(item.id)}>
            Cancel
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default WorkExperienceFormItem;
