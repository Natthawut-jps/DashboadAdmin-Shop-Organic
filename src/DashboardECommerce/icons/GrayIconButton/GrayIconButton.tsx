/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
import { FiSrLock6 } from "../FiSrLock6";

interface Props {
  hierarchy: "primary" | "secondary" | "tertiary";
  state: "disable" | "hover" | "idle";
  size: "medium" | "small";
  className: any;
  icon: JSX.Element;
}

export const GrayIconButton = ({
  hierarchy,
  state,
  size,
  className,
  icon = (
    <FiSrLock6
      className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]"
      color="#858D9D"
    />
  ),
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-[4px] overflow-hidden rounded-[8px] justify-center relative ${
        hierarchy === "tertiary" ? "border border-solid" : ""
      } ${hierarchy === "tertiary" ? "border-neutralgraygray-400" : ""} ${
        state === "disable" ? "opacity-[0.65]" : ""
      } ${size === "small" ? "p-[6px]" : "p-[10px]"} ${
        hierarchy === "primary" && ["disable", "idle"].includes(state)
          ? "bg-neutralgraygray-400"
          : (hierarchy === "secondary" && state === "disable") ||
            (hierarchy === "secondary" && state === "idle") ||
            (hierarchy === "tertiary" && state === "hover")
          ? "bg-neutralgraygray-100"
          : hierarchy === "secondary" && state === "hover"
          ? "bg-neutralgraygray-200"
          : hierarchy === "primary" && state === "hover"
          ? "bg-neutralgraygray-500"
          : ""
      } ${className}`}
    >
      <div className="w-[20px] flex items-center gap-[8px] p-[8px] h-[20px] justify-center relative">{icon}</div>
    </div>
  );
};
