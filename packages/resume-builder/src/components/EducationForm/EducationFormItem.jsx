import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  InputNumber,
} from 'antd';
import { DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateFormData } from '../../store/formStoreSlice';
import styles from './EducationForm.module.scss';

const { Text } = Typography;

const EducationFormItem = ({ item, formId, required = false }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formStore.forms[formId]);
  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    const currentItems = formData?.educationItems || [];
    const updatedItems = currentItems.map((educationItem) =>
      educationItem.id === item.id
        ? {
            ...educationItem,
            formData: allValues,
            saved: true,
          }
        : educationItem
    );

    dispatch(
      updateFormData({
        formId,
        data: {
          educationItems: updatedItems,
        },
      })
    );
  };

  const handleExpand = () => {
    const currentItems = formData?.educationItems || [];
    const updatedItems = currentItems.map((educationItem) =>
      educationItem.id === item.id
        ? {
            ...educationItem,
            expanded: !educationItem.expanded,
          }
        : educationItem
    );

    dispatch(
      updateFormData({
        formId,
        data: {
          educationItems: updatedItems,
        },
      })
    );
  };

  const handleDelete = () => {
    const currentItems = formData?.educationItems || [];
    const updatedItems = currentItems.filter(
      (educationItem) => educationItem.id !== item.id
    );

    dispatch(
      updateFormData({
        formId,
        data: {
          educationItems: updatedItems,
        },
      })
    );
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
          <DownOutlined onClick={handleExpand} />
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
        {(formData?.educationItems || []).length > 1 && (
          <DeleteOutlined onClick={handleDelete} />
        )}
      </Flex>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleValuesChange}
        initialValues={{
          grade_type: 'cgpa',
          ...item.formData,
        }}
      >
        <Form.Item
          name="institute"
          label="Institute Name"
          rules={[{ required }]}
        >
          <Input placeholder="Enter Institute Name" />
        </Form.Item>
        <Flex gap={16}>
          <Form.Item
            name="degree"
            label="Degree Type"
            rules={[{ required }]}
            className={styles.midWidth}
          >
            <Select
              placeholder="Select Degree Type"
              options={[
                { label: 'BE/B.Tech/Bs', value: 'bachelor' },
                { label: 'ME/M.Tech', value: 'master' },
                { label: 'Dual Degree - BE + ME', value: 'dual' },
                { label: 'Ms', value: 'ms' },
                { label: 'MBA', value: 'mba' },
                { label: 'MCA/BCA', value: 'mca_bca' },
                { label: 'BE + MBA', value: 'be_mba' },
                { label: 'Other', value: 'other' },
              ]}
            />
          </Form.Item>
          <Form.Item name="branch" label="Branch" className={styles.midWidth}>
            <Select
              placeholder="Select Branch"
              options={[
                { label: 'Computer Science', value: 'computer-science' },
                {
                  label: 'Information Technology',
                  value: 'information-technology',
                },
                {
                  label: 'Mathematics and Computing',
                  value: 'mathematics-and-computing',
                },
                {
                  label: 'Electronics',
                  value: 'electronics',
                },
                {
                  label: 'Mechanical',
                  value: 'mechanical',
                },
                {
                  label: 'Civil',
                  value: 'civil',
                },
                {
                  label: 'MBA',
                  value: 'mba',
                },
                {
                  label: 'Electical',
                  value: 'electrical',
                },
                {
                  label: 'Other',
                  value: 'other',
                },
              ]}
            />
          </Form.Item>
        </Flex>
        <Flex gap={16} className={styles.fullWidth}>
          <Form.Item
            name="grades"
            label="Grades (Final/Current)"
            rules={[{ required }]}
            className={styles.midWidth}
          >
            <InputNumber placeholder="Enter Grades" addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
            name="graduation"
            label="Graduation (Actual/Expected)"
            rules={[{ required }]}
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
        <Button type="primary" block onClick={handleExpand}>
          Save
        </Button>
        <Button type="default" block onClick={handleExpand}>
          Cancel
        </Button>
      </Flex>
    </Card>
  );
};

export default EducationFormItem;
