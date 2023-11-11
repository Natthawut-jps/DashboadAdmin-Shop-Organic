/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FiRrCaretLeft = ({ className }: Props): JSX.Element => {
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
        d="M8.86003 12.3933L5.14003 8.66667C5.01586 8.54176 4.94617 8.3728 4.94617 8.19667C4.94617 8.02055 5.01586 7.85158 5.14003 7.72667L8.86003 4.00001C8.95328 3.90599 9.07241 3.84187 9.20224 3.81582C9.33207 3.78977 9.46672 3.80298 9.58902 3.85376C9.71131 3.90454 9.81572 3.99058 9.88892 4.10093C9.96212 4.21128 10.0008 4.34092 10 4.47334V11.92C10.0008 12.0524 9.96212 12.1821 9.88892 12.2924C9.81572 12.4028 9.71131 12.4888 9.58902 12.5396C9.46672 12.5904 9.33207 12.6036 9.20224 12.5775C9.07241 12.5515 8.95328 12.4874 8.86003 12.3933Z"
        fill="#883DCF"
      />
    </svg>
  );
};
