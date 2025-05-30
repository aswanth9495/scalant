import React from 'react';
import { Flex, Empty } from 'antd';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    // eslint-disable-next-line no-console, no-undef
    console.error('PDF Preview Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex
          vertical
          align="center"
          justify="center"
          className={this.props.className}
        >
          <Empty
            description="Failed to load PDF preview. Please try again."
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </Flex>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
