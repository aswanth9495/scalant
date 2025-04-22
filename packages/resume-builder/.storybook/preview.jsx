/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'; // Optional global reset

const theme = {
  token: {
    colorPrimary: '#006aff',        // From blue-6
    colorError: '#ff4d4f',          // From error colors
    colorWarning: '#faad14',        // From gold-6
    colorSuccess: '#20a164',        // From green-6
    colorInfo: '#006aff',           // Same as primary
    fontFamily: 'Inter, sans-serif',
    borderRadius: 6
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