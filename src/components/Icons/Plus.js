import React from 'react';

const Plus = ({ color, width, height }) => (
  <svg
    width={width || '34'}
    height={height || '34'}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.3443 32.0742L18.7386 32.0501L18.8341 18.5933L32.2908 18.4979L32.3149 15.1036L18.8581 15.199L18.9536 1.74226L15.5593 1.76633L15.4638 15.2231L2.00708 15.3185L1.983 18.7128L15.4398 18.6174L15.3443 32.0742Z"
      fill={color || 'white'}
    />
  </svg>
);

export default Plus;
