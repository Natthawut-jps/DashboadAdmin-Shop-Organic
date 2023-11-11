/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FiSrFolder = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_128_40098)">
        <path
          d="M0 6.74295V13.4997C0.00249609 15.5697 1.67998 17.2472 3.75001 17.2497H14.25C16.32 17.2472 17.9975 15.5697 18 13.4997V6.6597L0 6.74295Z"
          fill="#858D9D"
        />
        <path
          d="M14.25 2.25001H9.35399C9.23801 2.25078 9.12336 2.22512 9.01874 2.17502L6.65174 0.987019C6.33927 0.831417 5.99505 0.750312 5.64599 0.750031H3.74998C1.67998 0.752491 0.00249609 2.42997 0 4.50001V5.24325L17.8972 5.16C17.5064 3.45966 15.9947 2.25349 14.25 2.25001Z"
          fill="#858D9D"
        />
      </g>
      <defs>
        <clipPath id="clip0_128_40098">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
};
