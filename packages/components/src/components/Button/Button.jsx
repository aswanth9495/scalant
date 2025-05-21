import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({ children, onClick, ...props }) => {
  return (
    <AntButton type="primary" onClick={onClick} {...props}>
      {children}
    </AntButton>
  );
};

export default Button;
