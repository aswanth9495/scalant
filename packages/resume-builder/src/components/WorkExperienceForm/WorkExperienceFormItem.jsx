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
  Select,
  message,
  Button,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';

const { Text } = Typography;

const WorkExperienceFormItem = ({
  item,
  setWorkExperienceItems,
  workExperienceItems,
}) => {
  const [form] = Form.useForm();
  const workExperienceInfo = form.getFieldsValue([
    `work_experience_${item.id}_company`,
    `work_experience_${item.id}_position`,
    `work_experience_${item.id}_startDate`,
    `work_experience_${item.id}_endDate`,
  ]);

  const company = workExperienceInfo[`work_experience_${item.id}_company`];
  const position = workExperienceInfo[`work_experience_${item.id}_position`];
  const startDate =
    workExperienceInfo[`work_experience_${item.id}_startDate`]?.format('YYYY');
  const endDate =
    workExperienceInfo[`work_experience_${item.id}_endDate`]?.format('YYYY');

  useEffect(() => {
    if (item.formData) {
      form.setFieldsValue(item.formData);
    }
  }, [item.id, form, item.formData]);

  const validateAndSave = async (id) => {
    try {
      const fieldNames = [
        `work_experience_${id}_company`,
        `work_experience_${id}_position`,
        `work_experience_${id}_startDate`,
        `work_experience_${id}_endDate`,
        `work_experience_${id}_location`,
        `work_experience_${id}_toolstech`,
        `work_experience_${id}_keyPoints`,
        `work_experience_${id}_currentWorking`,
      ];

      await form.validateFields(fieldNames);

      const formData = form.getFieldsValue(fieldNames);

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
            <Text strong>{company}</Text>
            <Text>
              {position && `${position}, `}
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
          <Text>Work Experience {item.id}</Text>
          {item.saved && <Tag color="success">Saved</Tag>}
        </Flex>
        {workExperienceItems.length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form form={form} layout="vertical">
        <Form.Item
          name={`work_experience_${item.id}_company`}
          label="Company"
          rules={[{ required: true, message: 'Company is required' }]}
        >
          <Input placeholder="Enter Company" />
        </Form.Item>
        <Form.Item
          name={`work_experience_${item.id}_position`}
          label="Position"
          rules={[{ required: true, message: 'Position is required' }]}
        >
          <Input placeholder="Enter Position" />
        </Form.Item>
        <Form.Item
          name={`work_experience_${item.id}_currentWorking`}
          valuePropName="checked"
        >
          <Checkbox>I am currently working here</Checkbox>
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name={`work_experience_${item.id}_startDate`}
            label="Start Date"
            rules={[{ required: true, message: 'Start Date is required' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item
            name={`work_experience_${item.id}_endDate`}
            label="End Date"
            rules={[{ required: true, message: 'End Date is required' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Flex>
        <Form.Item
          name={`work_experience_${item.id}_location`}
          label="Location"
        >
          <Select
            placeholder="Select Location"
            options={[
              { label: 'Bangalore', value: 'Bangalore' },
              { label: 'Mumbai', value: 'Mumbai' },
              { label: 'New Delhi', value: 'New Delhi' },
              { label: 'Hyderabad', value: 'Hyderabad' },
              { label: 'Chennai', value: 'Chennai' },
              { label: 'Kolkata', value: 'Kolkata' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={`work_experience_${item.id}_toolstech`}
          label="Tools & Technologies Used"
          rules={[
            {
              required: true,
              message: 'Tools & Technologies Used is required',
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Select Tools & Technologies"
            options={[
              { label: 'React', value: 'React' },
              { label: 'Node.js', value: 'Node.js' },
              { label: 'MongoDB', value: 'MongoDB' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={`work_experience_${item.id}_keyPoints`}
          label="Key Points"
        >
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
