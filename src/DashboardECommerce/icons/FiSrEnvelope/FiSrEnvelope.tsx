/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const FiSrEnvelope = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_96_57191)">
        <path
          d="M17.9655 4.15637L11.652 10.4699C10.948 11.1721 9.99431 11.5664 9 11.5664C8.00569 11.5664 7.05197 11.1721 6.348 10.4699L0.0345 4.15637C0.024 4.27487 0 4.38212 0 4.49987V13.4999C0.00119089 14.4941 0.396661 15.4472 1.09966 16.1502C1.80267 16.8532 2.7558 17.2487 3.75 17.2499H14.25C15.2442 17.2487 16.1973 16.8532 16.9003 16.1502C17.6033 15.4472 17.9988 14.4941 18 13.4999V4.49987C18 4.38212 17.976 4.27487 17.9655 4.15637Z"
          fill="#858D9D"
        />
        <path
          d="M10.5915 9.40938L17.442 2.55813C17.1101 2.00787 16.6421 1.55241 16.083 1.23568C15.5239 0.918945 14.8926 0.751633 14.25 0.749878H3.74998C3.1074 0.751633 2.47611 0.918945 1.917 1.23568C1.3579 1.55241 0.889842 2.00787 0.557983 2.55813L7.40848 9.40938C7.83116 9.83036 8.40342 10.0667 8.99998 10.0667C9.59655 10.0667 10.1688 9.83036 10.5915 9.40938Z"
          fill="#858D9D"
        />
      </g>
      <defs>
        <clipPath id="clip0_96_57191">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
};
