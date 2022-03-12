import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ height, width, className }) => (
  <svg
    className={className || null}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    height={height || null}
    width={width || null}
    viewBox="0 0 407.6 522.7"
    x="0"
    y="0"
    role="img">
    <g>
      <g transform="translate(14.3)">
        <path
          d="M365.2 185.1c7.3 12.2 20.8 40.3 25.2 54.6 4.3 14.1 3.2 29 1.4 43.5-2 16.4-5.3 32.7-8.6 48.9l-12 64.7c-4 19.5-6.5 42.4-17.2 59.6-9.4 15-25.3 22.6-40.5 31.7l-58.2 34.6 29.1-164c2.8-15.7 5.4-31.5 8.5-47.1 2.9-15.1 5.4-32 1.3-47.1-5.4-20-16.1-36.7-26.6-54.2-11.8-19.8-23.5-39.5-35.2-59.4L217 127c10.2-41 20.3-69.4 41.8-105.8.1-.1.2-.3.2-.3 1.2-.8 9.9 11.5 9.9 11.5 14.4 18.3 59 88.1 61.8 93.1l34.5 59.6z"
          fill="#535365"
        />
        <path
          d="M156.5 350.2c9.7 16.5 19.5 33.5 29.2 50.4 7.9 13.7 15.7 27.4 23.5 40.8l-.4.3c-29.9 19.6-59.8 39.2-89.7 58.7 12.3-49.7 25-100.3 37.4-150.2z"
          fill="#535365"
        />
        <path
          d="M122.7 0l74.1 126.8c4.1 6.8 24.2 41.1 25.4 44.1-24.1 14-48.7 28.2-72.8 42.2l-.6-1-49-84.1L74.7 27.4l48-27.4z"
          fill="#535365"
        />
      </g>
      <g transform="translate(0 3.35)">
        <linearGradient
          id="LogoGradientSection"
          gradientUnits="userSpaceOnUse"
          x1="-569.075"
          y1="1019.321"
          x2="-567.565"
          y2="1009.617"
          gradientTransform="matrix(47.0319 0 0 -80.65 26877.219 82075.383)">
          <stop offset="0" stopColor="#4272cb" />
          <stop offset="1" stopColor="#e54f6d" />
        </linearGradient>
        <path
          d="M243.4 305l49.3 85.8-23.1 128.5-4.1-7.1-2.9-4.9-3.7-6.4-5.5-9.5-3.3-5.7-4.2-7.4-4.4-7.7-2.7-4.7-4.7-8.1-5.8-10.1-6-10.6-5.2-9.1-8.7-15.2-6.8-11.9-8.2-14.4-8.5-15L176 356l-5.2-9.1 72.6-41.9zM137-3.3l-22.9 127.9-8.2 51.2-6.2 35.2-.1.5-.1.6-.1.6-.1.7-.1.7-.1.7-.1.8-.2.8-.2.8-.2.9-.2.9-.2.9c-.1.3-.1.6-.2.9l-.2 1-.2 1c0 .2-.1.3-.1.5l-.2 1-.3 2.1-.2 1.1c0 .2-.1.4-.1.5l-.2 1.1c0 .2-.1.4-.1.5l-.2 1.1-.1 1.1c-1.3 9.7-2.1 20-1.1 26.3 2.9 17.9 34.3 64.2 54.2 92.4l1.6 2.3 1.6 2.2 1.5 2.1 2.1 3 5.7 8 .9 1.2c.1.2.3.4.4.5l.7 1c.4.6.8 1.1 1 1.5l-31.4 125-8.2-12.9-8.3-13.2-8.3-13.1-6.7-10.7-3.6-5.8-3.9-6.2-3.5-5.6-3.1-5-2.8-4.4-1.7-2.8-1.3-2-1.4-2.3-1-1.6-.8-1.4-.7-1.2-2.8-4.5-2.7-4.4c-.5-.7-.9-1.5-1.3-2.2l-2.7-4.3-2.6-4.2c-.9-1.4-1.7-2.8-2.6-4.2l-2.5-4.1-2.4-4-2.4-3.9c-1.2-1.9-2.4-3.9-3.5-5.8l-2.3-3.7-2.2-3.7c-1.5-2.4-2.9-4.8-4.3-7.1l-2.1-3.4C18 309.8 5 286.4 2.8 279.1c-4.8-16-2.6-41.6.7-57C20.3 127.8 31.8 75.4 38.2 64.6 48 47.9 57.8 41.5 71.7 33.7l1.1-.6 1.8-1 3-1.7 1.2-.7 1.3-.7c2.8-1.6 53.8-30.5 56.9-32.3zm137.5 20.8l-1.7 7.4-.9 4-.6 2.5-.4 1.8-.2 1-.1.6-.1.4-.1.3v.6l-.1.2-.1.4-.2.3-.3 1.1-.3 1.3-.5 2.2-.5 2.3-.8 3.6-1.5 6.6c-3.9 15.6-8 31.3-12.1 46.9l-4.2 15.7c-4.5 17-9 34-13.2 50.9l-52.7-90.4 42.5-27.9 28.4-18.7 8.4-5.5 6.4-4.2 3.2-2.1 1.2-.8.3-.2.2-.3z"
          fill="url(#LogoGradientSection)"
        />
      </g>
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Logo.defaultProps = {
  className: '',
  height: null,
  width: null,
};

export default Logo;
