import React from 'react';

const Pause = ({ color }) => {
  return (
    <svg
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="5" height="24" rx="1" fill={color || 'white'} />
      <rect x="14" width="5" height="24" rx="1" fill={color || 'white'} />
    </svg>
  );
};

export default Pause;
