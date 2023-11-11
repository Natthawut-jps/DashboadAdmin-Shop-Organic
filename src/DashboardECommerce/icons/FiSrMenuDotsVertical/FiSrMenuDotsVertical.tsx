/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FiSrMenuDotsVertical = ({ className }: Props): JSX.Element => {
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
        d="M7.99997 2.66669C8.73636 2.66669 9.33332 2.06973 9.33332 1.33334C9.33332 0.596958 8.73636 0 7.99997 0C7.26359 0 6.66663 0.596958 6.66663 1.33334C6.66663 2.06973 7.26359 2.66669 7.99997 2.66669Z"
        fill="#858D9D"
      />
      <path
        d="M7.99997 9.33332C8.73636 9.33332 9.33332 8.73636 9.33332 7.99997C9.33332 7.26359 8.73636 6.66663 7.99997 6.66663C7.26359 6.66663 6.66663 7.26359 6.66663 7.99997C6.66663 8.73636 7.26359 9.33332 7.99997 9.33332Z"
        fill="#858D9D"
      />
      <path
        d="M7.99997 16C8.73636 16 9.33332 15.403 9.33332 14.6666C9.33332 13.9302 8.73636 13.3333 7.99997 13.3333C7.26359 13.3333 6.66663 13.9302 6.66663 14.6666C6.66663 15.403 7.26359 16 7.99997 16Z"
        fill="#858D9D"
      />
    </svg>
  );
};
