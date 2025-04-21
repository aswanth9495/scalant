/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Optional global reset
// Optional: your CSS token file

const theme = {
  token: {
    colorPrimary: '#148eff',
    colorPrimaryHover: '#006aff',
    colorPrimaryActive: '#40b3ff',
    colorPrimaryBorder: '#0052ff',
    fontFamily: 'Inter, sans-serif',
    borderRadius: 6,
  },
};

const withAntdConfig = (Story) => (
  <ConfigProvider theme={theme}>
    <Story />
  </ConfigProvider>
);

const preview = {
  decorators: [withAntdConfig],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;