import React from 'react';

const Video = ({ color }) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.12 0L13.635 3.07734H11.3625L9.8475 0H8.3325L9.8475 3.07734H7.575L6.06 0H4.545L6.06 3.07734H3.7875L2.2725 0H1.515C0.677962 0 0.00757499 0.688556 0.00757499 1.53867L0 10.7707C0 11.6208 0.677962 12.3094 1.515 12.3094H13.635C14.472 12.3094 15.15 11.6208 15.15 10.7707V0H12.12Z"
        fill={color || '#363636'}
      />
    </svg>
  );
};

export default Video;
