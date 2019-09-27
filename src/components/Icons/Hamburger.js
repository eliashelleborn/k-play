import React from 'react';

const Hamburger = ({ color, transform1, transform2, transform3, opacity, ...props }) => (
  <svg width="24" height="27" viewBox="0 0 24 17" fill="none" {...props}>
    <rect style={{transition: "0.25s", opacity:opacity, transform:transform3}} y="14" width="19" height="2.5" fill={color}/>
    <rect style={{transition: "0.25s", transformOrigin: "top left", transform:transform1}} y="7" width="24" height="2.5" fill={color}/>
    <rect style={{transition: "0.25s", transformOrigin: "top right", transform:transform2}} width="24" height="2.5" fill={color}/>
  </svg>
);

export default Hamburger;
