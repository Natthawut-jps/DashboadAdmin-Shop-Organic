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

export const FiSrCaretRight1 = ({ color = "#883DCF", className }: Props): JSX.Element => {
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
        d="M6 11.9193V4.4713C6.00003 4.33947 6.03914 4.2106 6.1124 4.101C6.18565 3.99139 6.28976 3.90596 6.41156 3.85552C6.53336 3.80507 6.66738 3.79187 6.79669 3.81758C6.92599 3.84329 7.04476 3.90676 7.138 3.99997L10.862 7.72397C10.987 7.84899 11.0572 8.01853 11.0572 8.1953C11.0572 8.37208 10.987 8.54162 10.862 8.66664L7.138 12.3906C7.04476 12.4838 6.92599 12.5473 6.79669 12.573C6.66738 12.5987 6.53336 12.5855 6.41156 12.5351C6.28976 12.4846 6.18565 12.3992 6.1124 12.2896C6.03914 12.18 6.00003 12.0511 6 11.9193Z"
        fill={color}
      />
    </svg>
  );
};

FiSrCaretRight1.propTypes = {
  color: PropTypes.string,
};
