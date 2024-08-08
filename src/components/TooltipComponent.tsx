import React, { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

interface TooltipComponentProps {
    children: ReactNode;
    text: string;
  };
  

const TooltipComponent = ({ children, text } : TooltipComponentProps) => {
  return (
    <Tooltip>{text}</Tooltip>
  );
};

export default TooltipComponent;