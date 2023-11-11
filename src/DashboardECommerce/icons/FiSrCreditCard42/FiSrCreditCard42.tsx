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

export const FiSrCreditCard42 = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_78_49324)">
        <path
          d="M14.25 2.25H3.74999C2.7558 2.25119 1.80266 2.64666 1.09966 3.34966C0.396656 4.05267 0.00118517 5.0058 -5.72205e-06 6H18C17.9988 5.0058 17.6033 4.05267 16.9003 3.34966C16.1973 2.64666 15.2442 2.25119 14.25 2.25Z"
          fill={color}
        />
        <path
          d="M-5.72205e-06 11.9999C0.00118517 12.9941 0.396656 13.9472 1.09966 14.6502C1.80266 15.3532 2.7558 15.7487 3.74999 15.7499H14.25C15.2442 15.7487 16.1973 15.3532 16.9003 14.6502C17.6033 13.9472 17.9988 12.9941 18 11.9999V7.49988H-5.72205e-06V11.9999ZM5.24999 11.6249C5.24999 11.8474 5.18401 12.0649 5.0604 12.2499C4.93678 12.4349 4.76108 12.5791 4.55551 12.6642C4.34995 12.7494 4.12375 12.7717 3.90552 12.7283C3.68729 12.6848 3.48683 12.5777 3.3295 12.4204C3.17216 12.263 3.06502 12.0626 3.02161 11.8443C2.9782 11.6261 3.00048 11.3999 3.08563 11.1944C3.17078 10.9888 3.31497 10.8131 3.49998 10.6895C3.68498 10.5659 3.90249 10.4999 4.12499 10.4999C4.42336 10.4999 4.70951 10.6184 4.92049 10.8294C5.13147 11.0404 5.24999 11.3265 5.24999 11.6249Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_78_49324">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
};

FiSrCreditCard42.propTypes = {
  color: PropTypes.string,
};
