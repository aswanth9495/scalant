import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Card, Flex, Typography } from 'antd';
import { DownOutlined, UpOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateFormData } from '../../store/formStoreSlice';
import RichTextEditor from '../RichTextEditor';
import DeleteConfirmationModal from '../DeleteConfirmationModal';
const { Text } = Typography;
const CustomEducationFormItem = ({ formId }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [form] = Form.useForm();

  const customEducation = formData?.customEducation;

  const handleValuesChange = (changedValues, allValues) => {
    dispatch(
      updateFormData({
        formId,
        data: {
          customEducation: {
            ...customEducation,
            formData: allValues,
          },
        },
      })
    );
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalOk = () => {
    dispatch(
      updateFormData({
        formId,
        data: {
          customEducation: null,
        },
      })
    );
    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleExpand = () => {
    const currentCustomEducation = formData?.customEducation;
    const updatedCustomEducation = {
      ...currentCustomEducation,
      expanded: !currentCustomEducation.expanded,
    };
    dispatch(
      updateFormData({
        formId,
        data: {
          customEducation: updatedCustomEducation,
        },
      })
    );
  };

  // customRducation can be empty hash

  // Return null if customEducation is empty hash
  if (Object.keys(customEducation).length === 0) {
    return null;
  } else if (!customEducation.expanded) {
    return (
      <Card>
        <Flex justify="space-between" align="center">
          <Text strong>{customEducation.formData.name || '---'}</Text>
          <DownOutlined onClick={handleExpand} />
        </Flex>
      </Card>
    );
  }

  return (
    <Card>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text strong>Custom Education</Text>
          <DeleteOutlined onClick={handleDelete} />
        </Flex>
        <UpOutlined onClick={handleExpand} />
      </Flex>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleValuesChange}
        initialValues={customEducation.formData}
      >
        <Form.Item name="name" label="Name">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <RichTextEditor
            form={form}
            fieldName="description"
            placeholder="Enter Description"
            onValuesChange={handleValuesChange}
          />
        </Form.Item>
      </Form>
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onOk={handleDeleteModalOk}
        onCancel={handleDeleteModalCancel}
        title="Delete Custom Education"
        description="Are you sure you want to delete this custom education item?"
        style={{ top: 20 }}
      />
    </Card>
  );
};

export default CustomEducationFormItem;
