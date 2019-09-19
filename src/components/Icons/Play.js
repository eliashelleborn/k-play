import React from 'react';

const Play = ({ color }) => {
  return (
    <svg
      width="19"
      height="24"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V14L11 7L0 0Z" fill={color || 'white'} />
    </svg>
  );
};

export default Play;
