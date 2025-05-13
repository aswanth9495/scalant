import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Tag,
  Popover,
  Form,
  InputNumber,
  Button,
  Typography,
  Flex,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './SkillsAndToolkit.module.scss';

const { Text } = Typography;

const SkillTag = ({
  skill,
  isSelected,
  onClick,
  onExperienceUpdate,
  experience,
}) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  // Format months into years and months for display
  const getFormattedExperience = () => {
    const years = experience.years;
    const months = experience.months;

    if (years === 0 && months === 0) {
      return '';
    } else if (years === 0 && months !== 0) {
      return `(${months}Mon)`;
    } else if (years !== 0 && months === 0) {
      return `(${years}Yrs)`;
    } else {
      return `(${years}Yrs ${months}M)`;
    }
  };

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

  const PopoverContent = () => (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        years: 0,
        months: 0,
      }}
    >
      <Text>Enter your experience with {skill.name} (years and months):</Text>
      <Flex gap={4}>
        <Form.Item name="years">
          <InputNumber placeholder="Years" min={0} />
        </Form.Item>
        <Form.Item name="months">
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
          {skill.name}
          {isSelected &&
            experience !== undefined &&
            ` ${getFormattedExperience()}`}
        </span>
        {isSelected && (
          <CloseOutlined
            className={styles.closeIcon}
            onClick={() => onClick()}
          />
        )}
      </Tag>
    </Popover>
  );
};

SkillTag.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    experience: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onExperienceUpdate: PropTypes.func.isRequired,
  experienceMonths: PropTypes.number,
};

export default SkillTag;
