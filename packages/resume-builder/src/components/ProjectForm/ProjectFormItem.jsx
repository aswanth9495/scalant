import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Flex, Typography, Input, Button, Tag } from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateFormData } from '../../store/formStoreSlice';

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
            saved: true,
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

  // const validateAndSave = async (id) => {
  //   try {
  //     await form.validateFields();

  //     const formData = form.getFieldsValue();

  //     dispatch(
  //       updateFormData({
  //         formId,
  //         data: {
  //           projectItems: updatedItems,
  //         },
  //       })
  //     );

  //     message.success('Project saved successfully');
  //   } catch (error) {
  //     message.error(`Failed to save Project: ${error}`);
  //   }
  // };

  // const handleCancel = (id) => {
  //   setProjectItems(
  //     projectItems.map((item) =>
  //       item.id === id ? { ...item, expanded: false } : item
  //     )
  //   );
  // };

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

  if (item.saved && !item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Text strong>{item.formData?.projectName}</Text>
        </Flex>
        <DownOutlined onClick={handleExpand} />
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
        {(formData?.projectItems || []).length > 1 && (
          <DeleteOutlined onClick={() => handleDelete(item.id)} />
        )}
      </Flex>
      <Form
        form={form}
        layout="vertical"
        initialValues={item.formData}
        onValuesChange={handleValuesChange}
      >
        <Form.Item
          name={`projectName`}
          label="Project Name"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Project Name" />
        </Form.Item>
        <Form.Item
          name={`projectLink`}
          label="Project Link"
          rules={[{ required: required }]}
        >
          <Input placeholder="Enter Project Link" />
        </Form.Item>
        <Form.Item
          name={`projectDescription`}
          label="Key Points"
          rules={[{ required: required }]}
        >
          <Input.TextArea placeholder="Enter Key Points" />
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
