import React from 'react';

const EditList = ({ color }) => {
  return (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2 5.42857H0V8.14286H16.2V5.42857ZM16.2 0H0V2.71429H16.2V0ZM0 13.5714H10.8V10.8571H0V13.5714Z"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default EditList;
