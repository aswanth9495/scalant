/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Optional global reset

const theme = {
  token: {
    colorPrimary: '#006aff',
    colorPrimaryHover: '#148eff',
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
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
    backgrounds: {
      default: 'light',
    },
    viewport: {
      defaultViewport: 'responsive',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen'
  },
};

export default preview;