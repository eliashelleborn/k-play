import React from 'react';

const Hamburger = props => (
  <svg width={24} height={17} viewBox="0 0 24 17" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 16.25H24V13.5417H0V16.25ZM0 9.47917H24V6.77083H0V9.47917ZM0 0V2.70833H24V0H0Z"
      fill={props.color}
    />
  </svg>
);

export default Hamburger;
