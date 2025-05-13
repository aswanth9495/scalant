import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Button,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateFormData } from '../../store/formStoreSlice';

const { Text } = Typography;

const WorkExperienceFormItem = ({ item, formId, required = false }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    const currentItems = formData?.workExperienceItems || [];
    const updatedItems = currentItems.map((workExperienceItem) =>
      workExperienceItem.id === item.id
        ? { ...workExperienceItem, formData: allValues, saved: true }
        : workExperienceItem
    );

    dispatch(
      updateFormData({
        formId,
        data: {
          workExperienceItems: updatedItems,
        },
      })
    );
  };

  const handleExpand = () => {
    const currentItems = formData?.workExperienceItems || [];
    const updatedItems = currentItems.map((workExperienceItem) =>
      workExperienceItem.id === item.id
        ? { ...workExperienceItem, expanded: !workExperienceItem.expanded }
        : workExperienceItem
    );

    dispatch(
      updateFormData({
        formId,
        data: { workExperienceItems: updatedItems },
      })
    );
  };

  const handleDelete = () => {
    const currentItems = formData?.workExperienceItems || [];
    const updatedItems = currentItems.filter(
      (workExperienceItem) => workExperienceItem.id !== item.id
    );

    dispatch(
      updateFormData({
        formId,
        data: { workExperienceItems: updatedItems },
      })
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
                `${item.formData?.workStartDate.format('YYYY-MM-DD')}`}
              -
              {item.formData?.workEndDate
                ? `${item.formData?.workEndDate.format('YYYY-MM-DD')}`
                : `Present`}
            </Text>
          </Flex>
          <DownOutlined onClick={handleExpand} />
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
        {(formData?.workExperienceItems || []).length > 1 && (
          <DeleteOutlined onClick={handleDelete} />
        )}
      </Flex>
      <Form
        form={form}
        layout="vertical"
        initialValues={item.formData}
        onValuesChange={handleValuesChange}
      >
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
          <Button type="primary" block onClick={handleExpand}>
            Save
          </Button>
          <Button type="default" block onClick={handleExpand}>
            Cancel
          </Button>
        </Flex>
      </Form>
    </Card>
  );
};

export default WorkExperienceFormItem;
