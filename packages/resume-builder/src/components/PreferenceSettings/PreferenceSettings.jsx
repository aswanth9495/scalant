import PageHeader from '../PageHeader';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../store/resumeBuilderSlice';
import { Form, Input, Select, Radio, Button } from 'antd';

import styles from './PreferenceSettings.module.scss';

const PreferenceSettings = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    // Process the form data here
    // eslint-disable-next-line no-console, no-undef
    console.log('Submitted values:', values);
    dispatch(nextStep());
  };

  return (
    <div>
      <PageHeader
        title="Set Your Job Preferences"
        subtitle="Your preferences help us bring relevant job opportunities 
        for you in the future"
      />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          preferredLocations: 'All over India',
          preferredRoles: ['SDE', 'Backend Developer'],
          ctc: '3',
          notice: '3',
          internship: 'yes',
        }}
      >
        <Form.Item
          label="Preferred job locations?"
          name="preferredLocations"
          rules={[
            { required: true, message: 'Please select preferred location!' },
          ]}
        >
          <Select>
            <Select.Option value="All over India">All over India</Select.Option>
            <Select.Option value="Remote">Remote</Select.Option>
            <Select.Option value="Bangalore">Bangalore</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Preferred job roles?"
          name="preferredRoles"
          rules={[{ required: true, message: 'Please select job roles!' }]}
        >
          <Select mode="multiple" allowClear>
            <Select.Option value="SDE">SDE</Select.Option>
            <Select.Option value="Backend Developer">
              Backend Developer
            </Select.Option>
            <Select.Option value="Frontend Developer">
              Frontend Developer
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Current CTC (LPA)"
          name="ctc"
          rules={[
            { required: true, message: 'Please enter your current CTC!' },
          ]}
        >
          <Input placeholder="e.g., 3" />
        </Form.Item>

        <Form.Item
          label="Notice Period (in Months)"
          name="notice"
          rules={[{ required: true, message: 'Please enter notice period!' }]}
        >
          <Input placeholder="e.g., 3" />
        </Form.Item>

        <Form.Item
          label="Would you also consider internships?"
          name="internship"
          rules={[{ required: true, message: 'Please select an option!' }]}
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.submitBtn}
            type="primary"
            htmlType="submit"
            block
          >
            Save and Continue
          </Button>

          <Button color="primary" variant="outlined" block>
            I will do this later
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PreferenceSettings;
