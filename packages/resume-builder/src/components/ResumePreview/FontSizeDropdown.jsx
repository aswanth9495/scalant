import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { FontSizeOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import { useUpdateResumePreferencesMutation } from '../../services/resumeBuilderApi';

const DEFAULT_FONT_SIZE = 'medium';

const FontSizeDropdown = ({ onFontSizeChange }) => {
  const resumeData = useSelector(
    (state) => state.scalantResumeBuilder.resumeBuilder.resumeData
  );
  const selectedFontSize = resumeData?.resume_meta?.font_size;

  const [fontSize, setFontSize] = useState(
    selectedFontSize || DEFAULT_FONT_SIZE
  );

  const { mutate: updateResumePreferences } =
    useUpdateResumePreferencesMutation();

  const handleFontSizeChange = ({ key }) => {
    setFontSize(key);
    updateResumePreferences({
      resume_id: resumeData?.resume_details?.id,
      payload: {
        scaler_resume_template_font_choice: key,
      },
    });
    onFontSizeChange?.(key);
  };

  const menu = (
    <Menu onClick={handleFontSizeChange} selectedKeys={[fontSize]}>
      <Menu.Item key="small">Small</Menu.Item>
      <Menu.Item key="medium">Medium</Menu.Item>
      <Menu.Item key="large">Large</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <FloatButton
        icon={<FontSizeOutlined />}
        tooltip={`Font Size: ${fontSize.charAt(0).toUpperCase() + fontSize.slice(1)}`}
      />
    </Dropdown>
  );
};

export default FontSizeDropdown;
