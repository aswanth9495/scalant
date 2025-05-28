import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Card, Flex, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
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

  // Return null if customEducation is empty hash
  if (Object.keys(customEducation).length === 0) {
    return null;
  }

  return (
    <Card>
      <Flex gap={16} justify="space-between">
        <Flex gap={4}>
          <Text strong>Custom Education</Text>
          <DeleteOutlined onClick={handleDelete} />
        </Flex>
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
