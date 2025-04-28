/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Optional global reset

const theme = {
  token: {
    fontFamily: 'Inter, sans-serif',
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
    layout: 'fullscreen',
  },
};

export default preview;
