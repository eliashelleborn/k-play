import React from 'react';

const Messenger = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <g filter="url(#filter0_d)">
      <path
        d="M25.9854 39.9708C33.7093 39.9708 39.9708 33.7093 39.9708 25.9854C39.9708 18.2615 33.7093 12 25.9854 12C18.2615 12 12 18.2615 12 25.9854C12 33.7093 18.2615 39.9708 25.9854 39.9708Z"
        fill="white"
      />
    </g>
    <path
      d="M20.6583 31.3706V34.3558L23.4496 32.7689C24.2277 32.9932 25.0548 33.1142 25.9117 33.1142C30.5054 33.1142 34.2287 29.6396 34.2287 25.3542C34.2287 21.0684 30.5054 17.5941 25.9117 17.5941C21.3184 17.5941 17.5947 21.0684 17.5947 25.3542C17.5947 27.7809 18.7887 29.9478 20.6583 31.3706Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M25.0234 23.2289L20.5381 27.9779L24.6201 25.7382L26.7529 27.9779L31.2129 23.2289L27.1762 25.4293L25.0234 23.2289Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="51.9708"
        height="51.9708"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="18.5229"
        y1="18.7272"
        x2="18.5229"
        y2="33.6183"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C6FF" />
        <stop offset="1" stopColor="#0068FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Messenger;
