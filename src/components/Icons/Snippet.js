import React from 'react';

const Snippet = ({ color, width }) => {
  return (
    <svg
      width={width || '24'}
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.45975 1.37388L5.8068 0L0 6.99821L5.8068 13.9964L7.45975 12.6225L2.7907 6.99821L7.45975 1.37388ZM6.63327 8.07156H8.77996V5.92487H6.63327V8.07156ZM17.3667 5.92487H15.22V8.07156H17.3667V5.92487ZM10.9267 8.07156H13.0733V5.92487H10.9267V8.07156ZM18.1932 0L16.5402 1.37388L21.2093 6.99821L16.5402 12.6225L18.1932 13.9964L24 6.99821L18.1932 0Z"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default Snippet;
