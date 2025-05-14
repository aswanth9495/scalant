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
import { DownOutlined, DeleteOutlined, UpOutlined } from '@ant-design/icons';
import { updateFormData } from '../../store/formStoreSlice';
import { EDUCATION_FORM_REQUIRED_FIELDS } from '../../utils/constants';
import styles from './EducationForm.module.scss';

const { Text } = Typography;

const EducationFormItem = ({ item, formId, required = false }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    const currentItems = formData?.educationItems || [];
    const updatedItems = currentItems.map((educationItem) =>
      educationItem.id === item.id
        ? {
            ...educationItem,
            formData: allValues,
            completed: EDUCATION_FORM_REQUIRED_FIELDS.every(
              (field) => allValues[field]
            ),
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

  if (!item.expanded) {
    return (
      <Card key={item.id}>
        <Flex justify="space-between" align="center">
          <Flex vertical gap={4}>
            <Text strong>
              {item.formData?.university ? item.formData?.university : '---'}
            </Text>
            <Text>
              {item.formData?.degree ? `${item.formData.degree}, ` : '---'}
              <Divider type="vertical" />
              {item.formData?.graduation_date
                ? `${item.formData.graduation_date.format('YYYY')}`
                : '---'}
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
          {(formData?.educationItems || []).length > 1 && (
            <DeleteOutlined onClick={handleDelete} />
          )}
        </Flex>
        <UpOutlined onClick={handleExpand} />
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
          name="university"
          label="University Name"
          rules={[{ required }]}
        >
          <Input placeholder="Enter University Name" />
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
          <Form.Item
            name="field"
            label="Field of Study"
            className={styles.midWidth}
          >
            <Select
              placeholder="Select Field of Study"
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
            name="marks"
            label="Marks (Final/Current)"
            rules={[{ required }]}
            className={styles.midWidth}
          >
            <InputNumber placeholder="Enter Marks" addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
            name="graduation_date"
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
        <Form.Item name="short_description" label="Description">
          <Input.TextArea placeholder="Enter Description" />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EducationFormItem;
