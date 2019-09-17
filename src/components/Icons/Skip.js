import React from 'react';

const Skip = ({ color, forward }) => {
  return forward ? (
    <svg
      width="39"
      height="32"
      viewBox="0 0 39 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8528 15.1848C25.4138 15.5835 25.4138 16.4165 24.8528 16.8152L8.07924 28.7342C7.41712 29.2047 6.5 28.7313 6.5 27.9191L6.5 4.08093C6.5 3.26868 7.41712 2.79529 8.07924 3.26578L24.8528 15.1848Z"
        fill={color || '#363636'}
      />
      <rect
        x="33"
        y="26"
        width="3"
        height="20"
        rx="1"
        transform="rotate(-180 33 26)"
        fill={color || '#363636'}
      />
    </svg>
  ) : (
    <svg
      width="39"
      height="32"
      viewBox="0 0 39 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1472 16.8152C13.5861 16.4165 13.5861 15.5835 14.1472 15.1848L30.9208 3.26578C31.5829 2.79529 32.5 3.26869 32.5 4.08094L32.5 27.9191C32.5 28.7313 31.5829 29.2047 30.9208 28.7342L14.1472 16.8152Z"
        fill={color || '#363636'}
      />
      <rect
        x="6"
        y="6"
        width="3"
        height="20"
        rx="1"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default Skip;
