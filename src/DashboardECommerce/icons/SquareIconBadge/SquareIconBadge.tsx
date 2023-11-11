/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import { FiSrCreditCard42 } from "../FiSrCreditCard42";

interface Props {
  color: "white" | "yellow" | "black" | "primary" | "blue" | "orange" | "green" | "red" | "cyan";
  size: "large" | "medium" | "small";
  type: "opacity" | "solid" | "transparent";
  className: any;
}

export const SquareIconBadge = ({ color, size, type, className }: Props): JSX.Element => {
  return (
    <div
      className={`flex items-center gap-[8px] p-[8px] overflow-hidden rounded-[8px] justify-center relative ${
        color === "primary" && type === "opacity" && ["large", "medium"].includes(size) ? "border-0 border-none" : ""
      } ${
        color === "primary" && type === "opacity" && ["large", "medium"].includes(size)
          ? "border-primaryprimary-50"
          : ""
      } ${size === "small" ? "w-[36px]" : size === "large" ? "w-[44px]" : "w-[40px]"} ${
        size === "small" ? "h-[36px]" : size === "large" ? "h-[44px]" : "h-[40px]"
      } ${
        type === "solid" && color === "primary"
          ? "bg-primaryprimary-500"
          : type === "opacity" && color === "primary"
          ? "bg-primaryprimary-50"
          : type === "solid" && color === "green"
          ? "bg-secondarygreengreen-500"
          : color === "green" && type === "opacity"
          ? "bg-secondarygreengreen-50"
          : type === "solid" && color === "red"
          ? "bg-secondaryredred-500"
          : type === "opacity" && color === "red"
          ? "bg-secondaryredred-50"
          : type === "solid" && color === "orange"
          ? "bg-secondaryorangeorange-500"
          : color === "orange" && type === "opacity"
          ? "bg-secondaryorangeorange-50"
          : type === "solid" && color === "yellow"
          ? "bg-secondaryyellowyellow-500"
          : type === "opacity" && color === "yellow"
          ? "bg-secondaryyellowyellow-50"
          : type === "solid" && color === "cyan"
          ? "bg-secondarycyancyan-500"
          : type === "opacity" && color === "cyan"
          ? "bg-secondarycyancyan-50"
          : type === "solid" && color === "blue"
          ? "bg-secondaryblueblue-500"
          : color === "blue" && type === "opacity"
          ? "bg-secondaryblueblue-50"
          : type === "solid" && color === "black"
          ? "bg-neutralblackblack-400"
          : color === "black" && type === "opacity"
          ? "bg-neutralgraygray-50"
          : color === "white"
          ? "bg-[#ffffff33]"
          : ""
      } ${className}`}
    >
      <FiSrCreditCard42
        className="!relative !w-[18px] !h-[18px]"
        color={
          ["solid", "transparent"].includes(type)
            ? "white"
            : type === "opacity" && color === "primary"
            ? "#883DCF"
            : color === "green" && type === "opacity"
            ? "#22CAAD"
            : type === "opacity" && color === "red"
            ? "#EB3D4D"
            : color === "orange" && type === "opacity"
            ? "#F86624"
            : type === "opacity" && color === "yellow"
            ? "#F9C80E"
            : type === "opacity" && color === "cyan"
            ? "#2BB2FE"
            : color === "blue" && type === "opacity"
            ? "#3250FF"
            : color === "black" && type === "opacity"
            ? "#4A4C56"
            : ''
        }
      />
    </div>
  );
};
