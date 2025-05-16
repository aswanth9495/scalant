import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Flex, Typography, Input, Button } from 'antd';
import { DownOutlined, DeleteOutlined, UpOutlined } from '@ant-design/icons';
import { PROJECT_FORM_REQUIRED_FIELDS } from '../../utils/constants';
import { updateFormData } from '../../store/formStoreSlice';
import RichTextEditor from '../RichTextEditor';

const { Text } = Typography;

const ProjectFormItem = ({ item, formId, required = false }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [form] = Form.useForm();
  const handleValuesChange = (changedValues, allValues) => {
    const currentItems = formData?.projectItems || [];
    const updatedItems = currentItems.map((projectItem) =>
      projectItem.id === item.id
        ? {
            ...projectItem,
            formData: allValues,
            completed: PROJECT_FORM_REQUIRED_FIELDS.every(
              (field) => allValues[field]
            ),
          }
        : projectItem
    );

    dispatch(
      updateFormData({
        formId,
        data: {
          projectItems: updatedItems,
        },
      })
    );
  };

  const handleExpand = () => {
    const currentItems = formData?.projectItems || [];
    const updatedItems = currentItems.map((projectItem) =>
      projectItem.id === item.id
        ? { ...projectItem, expanded: !projectItem.expanded }
        : projectItem
    );

    dispatch(
      updateFormData({
        formId,
        data: { projectItems: updatedItems },
      })
    );
  };

  const handleDelete = () => {
    const currentItems = formData?.projectItems || [];
    const updatedItems = currentItems.filter(
      (projectItem) => projectItem.id !== item.id
    );

    dispatch(updateFormData({ formId, data: { projectItems: updatedItems } }));
  };

  if (!item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Text strong>
            {item.formData?.title ? item.formData?.title : '---'}
          </Text>
          <DownOutlined onClick={handleExpand} />
        </Flex>
      </Card>
    );
  }

  return (
    <Card key={item.id}>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text>Project {item.id}</Text>
          {(formData?.projectItems || []).length > 1 && (
            <DeleteOutlined onClick={handleDelete} />
          )}
        </Flex>
        <UpOutlined onClick={handleExpand} />
      </Flex>
      <Form
        form={form}
        layout="vertical"
        initialValues={item.formData}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          name={`title`}
          label="Project Name"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Project Name" />
        </Form.Item>
        <Form.Item
          name={`project_link`}
          label="Project Link"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Project Link" />
        </Form.Item>
        <Form.Item
          name={`description`}
          label="Key Points"
          rules={[{ required: required }]}
        >
          <RichTextEditor
            form={form}
            fieldName="description"
            placeholder="Enter Key Points"
          />
        </Form.Item>
        <Flex gap={16}>
          <Button type="primary" onClick={handleExpand}>
            Save
          </Button>
          <Button type="default" onClick={handleExpand}>
            Cancel
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default ProjectFormItem;
