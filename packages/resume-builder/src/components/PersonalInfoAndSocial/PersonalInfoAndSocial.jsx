import React, { useState } from 'react';
import {
  GithubOutlined,
  LinkedinOutlined,
  CodeOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Form,
  Input,
  Flex,
  InputNumber,
  Select,
  Typography,
  Button,
  Space,
} from 'antd';
import styles from './PersonalInfoAndSocial.module.scss';
const { Text } = Typography;

const PersonalInfoAndSocial = () => {
  const [form] = Form.useForm();
  const [additionalProfiles, setAdditionalProfiles] = useState([]);

  const handleFinish = (values) => {
    // eslint-disable-next-line no-console, no-undef
    console.log(values);
  };

  const handleAddProfile = () => {
    const newId = Date.now().toString();
    setAdditionalProfiles([...additionalProfiles, { id: newId }]);
  };

  const selectBefore = (
    <Select
      defaultValue="+91"
      options={[
        { label: '+91', value: '+91' },
        { label: '+1', value: '+1' },
      ]}
    />
  );

  return (
    <Space direction="vertical" size={24}>
      <Form
        form={form}
        onFinish={handleFinish}
        layout="vertical"
        size="large"
        initialValues={{
          fullName: 'John Doe',
          contactNumber: '+91 9876543210',
          emailAddress: 'john.doe@example.com',
          gender: 'male',
          currentCity: 'Mumbai',
          linkedIn: 'https://www.linkedin.com/in/john-doe',
          github: 'https://www.github.com/john-doe',
          personalWebsite: 'https://www.john-doe.com',
        }}
      >
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contact Number"
            name="contactNumber"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <InputNumber addonBefore={selectBefore} />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Input />
          </Form.Item>
          <Flex gap={16}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true }]}
              style={{ flex: 1 }}
              className={styles.formItem}
            >
              <Select
                options={[
                  { label: 'Male', value: 'male' },
                  { label: 'Female', value: 'female' },
                  { label: 'Other', value: 'other' },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Current City"
              name="currentCity"
              style={{ flex: 1 }}
              className={styles.formItem}
            >
              <Select
                options={[
                  { label: 'Mumbai', value: 'mumbai' },
                  { label: 'Delhi', value: 'delhi' },
                  { label: 'Bangalore', value: 'bangalore' },
                  { label: 'Chennai', value: 'chennai' },
                  { label: 'Hyderabad', value: 'hyderabad' },
                  { label: 'Kolkata', value: 'kolkata' },
                ]}
              />
            </Form.Item>
          </Flex>
        </Space>

        <Space
          direction="vertical"
          size={16}
          style={{ width: '100%', marginTop: 24 }}
        >
          <Text strong>Social Links</Text>
          <Form.Item
            label="LinkedIn"
            name="linkedIn"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Input prefix={<LinkedinOutlined />} />
          </Form.Item>
          <Form.Item
            label="GitHub"
            name="github"
            rules={[{ required: true }]}
            className={styles.formItem}
          >
            <Input prefix={<GithubOutlined />} />
          </Form.Item>
          <Form.Item
            label="Personal Website"
            name="personalWebsite"
            className={styles.formItem}
          >
            <Input prefix={<CodeOutlined />} />
          </Form.Item>

          {additionalProfiles.map((profile, index) => (
            <Flex key={profile.id} gap={16}>
              <Form.Item
                label="Profile Type"
                name={`additionalProfiles.${index}.type`}
                style={{ flex: 1 }}
                className={styles.formItem + ' ' + styles.customProfile}
              >
                <Select
                  options={[
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'GitHub', value: 'github' },
                    { label: 'Personal Website', value: 'personalWebsite' },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Link"
                name={`additionalProfiles.${index}.link`}
                className={styles.formItem + ' ' + styles.customProfile}
              >
                <Input />
              </Form.Item>
            </Flex>
          ))}
        </Space>

        <Space
          direction="vertical"
          size={16}
          className={styles.buttonContainer}
        >
          <Button
            type="dashed"
            block
            icon={<PlusOutlined />}
            onClick={handleAddProfile}
          >
            Add more Social Profiles
          </Button>
          <Flex gap={16}>
            <Button type="primary" htmlType="submit" block>
              Mark as complete
            </Button>
            <Button type="default" block>
              Cancel
            </Button>
          </Flex>
        </Space>
      </Form>
    </Space>
  );
};

export default PersonalInfoAndSocial;
