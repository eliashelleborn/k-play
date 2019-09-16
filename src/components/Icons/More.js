import React from 'react';

const More = ({ color }) => {
  return (
    <svg
      width="24"
      height="6"
      viewBox="0 0 24 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0C1.35 0 0 1.35 0 3C0 4.65 1.35 6 3 6C4.65 6 6 4.65 6 3C6 1.35 4.65 0 3 0ZM21 0C19.35 0 18 1.35 18 3C18 4.65 19.35 6 21 6C22.65 6 24 4.65 24 3C24 1.35 22.65 0 21 0ZM12 0C10.35 0 9 1.35 9 3C9 4.65 10.35 6 12 6C13.65 6 15 4.65 15 3C15 1.35 13.65 0 12 0Z"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default More;
