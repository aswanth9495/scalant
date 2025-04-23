import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Typography,
  Flex,
  Space,
  Card,
  Tag,
  message,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  CheckOutlined,
  UpOutlined,
  DownOutlined,
} from '@ant-design/icons';

import styles from './Education.module.scss';

const { Text } = Typography;

const Education = () => {
  const [form] = Form.useForm();
  const [educationItems, setEducationItems] = useState([
    { id: 1, completed: false, saved: false, expanded: true },
  ]);

  const handleAddEducation = () => {
    const newId = educationItems.length + 1;
    setEducationItems([
      ...educationItems,
      { id: newId, completed: false, saved: false, expanded: true },
    ]);
  };

  const handleRemoveEducation = (id) => {
    setEducationItems(educationItems.filter((item) => item.id !== id));
  };

  const handleMarkAllComplete = () => {
    // Check if all education items are saved
    const hasUnsavedItems = educationItems.some((item) => !item.saved);

    if (hasUnsavedItems) {
      message.error(
        'Please save all education items before marking as complete'
      );
      return;
    }

    // Get all saved education data
    const educationData = educationItems
      .filter((item) => item.saved)
      .map((item) => {
        const itemFields = form.getFieldsValue([
          `education_${item.id}_institute`,
          `education_${item.id}_degree`,
          `education_${item.id}_branch`,
          `education_${item.id}_gpa`,
          `education_${item.id}_startDate`,
          `education_${item.id}_endDate`,
        ]);

        return {
          id: item.id,
          saved: item.saved,
          institute: itemFields[`education_${item.id}_institute`],
          degree: itemFields[`education_${item.id}_degree`],
          branch: itemFields[`education_${item.id}_branch`],
          gpa: itemFields[`education_${item.id}_gpa`],
          startDate: itemFields[`education_${item.id}_startDate`],
          endDate: itemFields[`education_${item.id}_endDate`],
        };
      });

    // Check if there is at least one saved education item
    if (educationData.length === 0) {
      message.error('Please add and save at least one education item');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('All saved education data:', educationData);

    // Update all items to completed
    setEducationItems(
      educationItems.map((item) => ({ ...item, completed: true }))
    );

    message.success('Education section marked as complete');
  };

  const validateAndSave = async (id) => {
    try {
      // Get the field names for this education item
      const fieldNames = [
        `education_${id}_institute`,
        `education_${id}_degree`,
        `education_${id}_gpa`,
        `education_${id}_startDate`,
        `education_${id}_endDate`,
      ];

      // Validate only these fields
      await form.validateFields(fieldNames);

      // If validation passes, update state
      setEducationItems(
        educationItems.map((item) =>
          item.id === id ? { ...item, saved: true, expanded: false } : item
        )
      );

      message.success('Education details saved successfully');
    } catch (error) {
      message.error('Please fill in all required fields');
    }
  };

  const handleCancel = (id) => {
    setEducationItems(
      educationItems.map((item) =>
        item.id === id ? { ...item, expanded: false } : item
      )
    );
  };

  const toggleExpand = (id) => {
    setEducationItems(
      educationItems.map((item) =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const renderEducationItem = (item) => {
    const educationInfo = form.getFieldsValue([
      `education_${item.id}_institute`,
      `education_${item.id}_degree`,
      `education_${item.id}_startDate`,
      `education_${item.id}_endDate`,
    ]);

    const institute = educationInfo[`education_${item.id}_institute`];
    const degree = educationInfo[`education_${item.id}_degree`];
    const startYear =
      educationInfo[`education_${item.id}_startDate`]?.format('YYYY');
    const endYear =
      educationInfo[`education_${item.id}_endDate`]?.format('YYYY');

    // Collapsed view for saved items
    if (item.saved && !item.expanded) {
      return (
        <Card key={item.id} className={styles.educationCard}>
          <Flex justify="space-between" align="center">
            <div>
              <Text strong>{institute}</Text>
              <div className={styles.educationSummary}>
                {degree && `${degree} · `}
                {startYear}-{endYear}
              </div>
            </div>
            <DownOutlined
              className={styles.expandIcon}
              onClick={() => toggleExpand(item.id)}
            />
          </Flex>

          <div className={styles.educationHeader}>
            <Text>Education {item.id}</Text>
            {item.saved && (
              <Tag color="success" style={{ marginLeft: 8 }}>
                Saved
              </Tag>
            )}
          </div>
        </Card>
      );
    }

    // Expanded view (saved or not saved)
    return (
      <Card key={item.id} className={styles.educationCard}>
        {item.saved && (
          <Flex
            justify="space-between"
            align="center"
            style={{ marginBottom: 16 }}
          >
            <div>
              <Text strong>{institute}</Text>
              <div className={styles.educationSummary}>
                {degree && `${degree} · `}
                {startYear}-{endYear}
              </div>
            </div>
            <Flex gap={8}>
              <UpOutlined
                className={styles.expandIcon}
                onClick={() => toggleExpand(item.id)}
              />
              <DeleteOutlined
                className={styles.deleteIcon}
                onClick={() => handleRemoveEducation(item.id)}
              />
            </Flex>
          </Flex>
        )}

        <div className={styles.educationHeader}>
          <Text>Education {item.id}</Text>
          {item.saved && (
            <Tag color="success" style={{ marginLeft: 8 }}>
              Saved
            </Tag>
          )}
        </div>

        <Form.Item
          label="Institute Name"
          name={`education_${item.id}_institute`}
          rules={[{ required: true, message: 'Please enter institute name' }]}
          tooltip="Name of your school, college, or university"
          className={styles.formItem}
        >
          <Input
            placeholder="Enter institute name"
            suffix={<Text type="secondary">Autofilled</Text>}
          />
        </Form.Item>

        <Flex gap={16}>
          <Form.Item
            label="Degree Type"
            name={`education_${item.id}_degree`}
            style={{ flex: 1 }}
            rules={[{ required: true, message: 'Please select degree type' }]}
            tooltip="Type of degree received"
            className={styles.formItem}
          >
            <Select placeholder="Select degree">
              <Select.Option value="B.Tech">B.Tech</Select.Option>
              <Select.Option value="M.Tech">M.Tech</Select.Option>
              <Select.Option value="B.Arch">B.Arch</Select.Option>
              <Select.Option value="M.Des">M.Des</Select.Option>
              <Select.Option value="BCA">BCA</Select.Option>
              <Select.Option value="MCA">MCA</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Branch"
            name={`education_${item.id}_branch`}
            style={{ flex: 1 }}
            tooltip="Your specialization or branch"
            className={styles.formItem}
          >
            <Select placeholder="Select branch">
              <Select.Option value="Computer Science">
                Computer Science
              </Select.Option>
              <Select.Option value="Electronics">Electronics</Select.Option>
              <Select.Option value="Mechanical">Mechanical</Select.Option>
              <Select.Option value="Architecture">Architecture</Select.Option>
            </Select>
          </Form.Item>
        </Flex>

        <Form.Item
          label="GPA (Final/Current)"
          name={`education_${item.id}_gpa`}
          rules={[{ required: true, message: 'Please enter your GPA' }]}
          tooltip="Your GPA on a scale of 10"
          className={styles.formItem}
        >
          <Input placeholder="Enter GPA" />
        </Form.Item>

        <Flex gap={16}>
          <Form.Item
            label="Start Date"
            name={`education_${item.id}_startDate`}
            style={{ flex: 1 }}
            rules={[{ required: true, message: 'Please select start date' }]}
            tooltip="When you started this education"
            className={styles.formItem}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder="Select date"
              format="YYYY-MM-DD"
            />
          </Form.Item>

          <Form.Item
            label="Graduation (Actual/Expected)"
            name={`education_${item.id}_endDate`}
            style={{ flex: 1 }}
            rules={[
              { required: true, message: 'Please select graduation date' },
            ]}
            tooltip="When you graduated or expect to graduate"
            className={styles.formItem}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder="Select date"
              format="YYYY-MM-DD"
            />
          </Form.Item>
        </Flex>

        <div className={styles.buttonContainer}>
          {item.saved ? (
            <Button onClick={() => handleCancel(item.id)}>Cancel</Button>
          ) : (
            <Button type="primary" onClick={() => validateAndSave(item.id)}>
              Save
            </Button>
          )}
        </div>
      </Card>
    );
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        education_1_institute: 'DCRUST, Murthal',
        education_1_degree: 'B.Arch',
        education_1_gpa: '3',
        education_1_startDate: null,
        education_1_endDate: null,
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        {educationItems.map((item) => renderEducationItem(item))}

        <Button
          type="dashed"
          block
          onClick={handleAddEducation}
          className={styles.addButton}
          icon={<PlusOutlined />}
        >
          {educationItems.length === 1
            ? 'Add secondary education'
            : 'Add another education'}
        </Button>

        <Button
          type="primary"
          block
          onClick={handleMarkAllComplete}
          className={styles.completeButton}
        >
          Mark as Complete
        </Button>
      </Space>
    </Form>
  );
};

export default Education;
