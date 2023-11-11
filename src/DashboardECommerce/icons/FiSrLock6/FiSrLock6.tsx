/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const FiSrLock6 = ({ color = "#858D9D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 5.616V4.66666C12.6667 2.08934 10.5774 0 8.00003 0C5.42269 0 3.33337 2.08934 3.33337 4.66666V5.616C2.12006 6.14553 1.33512 7.34284 1.33337 8.66666V12.6667C1.33556 14.5067 2.82666 15.9978 4.66669 16H11.3333C13.1734 15.9978 14.6645 14.5067 14.6667 12.6667V8.66666C14.665 7.34284 13.88 6.14553 12.6667 5.616ZM8.66669 11.3333C8.66669 11.7015 8.36822 12 8.00003 12C7.63184 12 7.33337 11.7015 7.33337 11.3333V10C7.33337 9.63181 7.63184 9.33334 8.00003 9.33334C8.36822 9.33334 8.66669 9.63181 8.66669 10V11.3333ZM11.3334 5.33334H4.66669V4.66669C4.66669 2.82575 6.15906 1.33334 8.00003 1.33334C9.841 1.33334 11.3334 2.82572 11.3334 4.66669V5.33334Z"
        fill={color}
      />
    </svg>
  );
};

FiSrLock6.propTypes = {
  color: PropTypes.string,
};
