import React, { useState, useEffect } from 'react';
import {
  Tag,
  Popover,
  Form,
  InputNumber,
  Button,
  Typography,
  Flex,
} from 'antd';
import { useDispatch } from 'react-redux';
import { updateFormData } from '../../store/formStoreSlice';
import { CloseOutlined } from '@ant-design/icons';
import { formatExperience } from '../../utils/resumeUtils';

import styles from './SkillsAndToolkit.module.scss';

const { Text } = Typography;

const SkillTag = ({
  skill,
  isSelected,
  onClick,
  onExperienceUpdate,
  experience,
  selectedSkills,
  formId,
}) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // Set initial form values if experience exists
  useEffect(() => {
    if (experience) {
      const years = experience.years;
      const months = experience.months;
      form.setFieldsValue({ years, months });
    }
  }, [experience, form]);

  const handleOpenChange = (newOpen) => {
    if (isSelected && newOpen) return;
    setOpen(newOpen);
  };

  const handleSubmit = (values) => {
    const { years, months } = values;
    onExperienceUpdate(years, months);
    setOpen(false);
    onClick();
  };

  const handleClose = () => {
    // Remove the skill from the form data
    const updatedFormData = selectedSkills.filter(
      (item) => item.skill_id !== skill.subtopic_id
    );
    dispatch(
      updateFormData({
        formId,
        data: {
          selectedSkills: updatedFormData,
        },
      })
    );
  };

  const PopoverContent = () => (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        years: 0,
        months: 0,
      }}
    >
      <Text>
        Enter your experience with {skill.subtopic} (years and months):
      </Text>
      <Flex gap={4}>
        <Form.Item
          name="years"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber placeholder="Years" min={0} />
        </Form.Item>
        <Form.Item
          name="months"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber placeholder="Months" min={0} max={11} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </Form>
  );

  return (
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
      content={<PopoverContent />}
      title="Experience Input"
      trigger="click"
    >
      <Tag
        className={`${styles.skillTag} ${isSelected ? styles.selected : ''}`}
        onClick={() => {
          if (!isSelected) {
            setOpen(true);
          }
        }}
      >
        <span>
          {skill.subtopic}
          {isSelected &&
            experience !== undefined &&
            ` ${formatExperience(experience.years, experience.months, true)}`}
        </span>
        {isSelected && (
          <CloseOutlined className={styles.closeIcon} onClick={handleClose} />
        )}
      </Tag>
    </Popover>
  );
};

export default SkillTag;
