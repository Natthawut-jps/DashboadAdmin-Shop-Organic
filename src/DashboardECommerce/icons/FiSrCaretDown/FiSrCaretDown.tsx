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

export const FiSrCaretDown = ({ color = "#A3A9B6", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.77614 6H12.2241C12.356 6.00003 12.4848 6.03914 12.5944 6.1124C12.7041 6.18565 12.7895 6.28976 12.8399 6.41156C12.8904 6.53336 12.9036 6.66738 12.8779 6.79669C12.8522 6.92599 12.7887 7.04476 12.6955 7.138L8.97148 10.862C8.84646 10.987 8.67692 11.0572 8.50014 11.0572C8.32337 11.0572 8.15383 10.987 8.02881 10.862L4.30481 7.138C4.2116 7.04476 4.14813 6.92599 4.12242 6.79669C4.09671 6.66738 4.10991 6.53336 4.16036 6.41156C4.21081 6.28976 4.29623 6.18565 4.40584 6.1124C4.51544 6.03914 4.64431 6.00003 4.77614 6Z"
        fill={color}
      />
    </svg>
  );
};

FiSrCaretDown.propTypes = {
  color: PropTypes.string,
};
