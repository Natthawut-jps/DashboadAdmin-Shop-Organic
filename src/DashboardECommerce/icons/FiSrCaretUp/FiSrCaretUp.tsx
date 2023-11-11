/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FiSrCaretUp = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.81063 11.6895H13.1896C13.3379 11.6895 13.4829 11.6455 13.6062 11.5631C13.7295 11.4807 13.8256 11.3636 13.8824 11.2265C13.9391 11.0895 13.954 10.9387 13.9251 10.7933C13.8961 10.6478 13.8247 10.5142 13.7199 10.4093L9.53038 6.2198C9.38974 6.0792 9.199 6.00021 9.00013 6.00021C8.80126 6.00021 8.61053 6.0792 8.46988 6.2198L4.28038 10.4093C4.17552 10.5142 4.10412 10.6478 4.07519 10.7933C4.04627 10.9387 4.06112 11.0895 4.11787 11.2265C4.17463 11.3636 4.27073 11.4807 4.39404 11.5631C4.51734 11.6455 4.66232 11.6895 4.81063 11.6895Z"
        fill="#883DCF"
      />
    </svg>
  );
};
