import { FunctionComponent } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Sidebar: FunctionComponent = () => {
  return (
    <>
      <div className="self-stretch bg-neutral-white shadow-[4px_0px_30px_rgba(131,_98,_234,_0.05)] box-border w-[264px] overflow-hidden shrink-0 flex flex-col items-start justify-start border-r-[1px] border-solid border-neutral-gray-gray-50">
        <div className="self-stretch flex flex-col items-start justify-center py-6 px-5">
          <img
            className="relative w-[205px] h-[58px] overflow-hidden shrink-0"
            alt=""
            src="/img/Logo.png"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start py-4 px-0 gap-[8px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "self-stretch h-12 flex flex-row items-center justify-start py-3 px-6 box-border gap-[8px] bg-primary-primary-50 text-primary-primary-500 border-solid border-l-[4px] border-primary-primary-500 no-underline"
                : "self-stretch h-12 flex flex-row items-center justify-start py-3 px-6 box-border gap-[8px] hover:bg-primary-primary-50 hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 text-black no-underline"
            }
            end
          >
            <div className="w-6 h-6 flex flex-row items-center justify-center">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/img/fisrapps.svg"
              />
            </div>
            <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
            หน้าหลัก
            </div>
          </NavLink>
          <Accordion
            defaultExpanded={true}
            sx={{
              width: "100%",
              "&.Mui-expanded": {
                margin: "0",
              },
              boxShadow: "none",
              "&::before": {
                content: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{
                "& .MuiAccordionSummary-expandIconWrapper": {
                  position: "relative",
                  right: "24px",
                },
                "& .MuiAccordionSummary-content.Mui-expanded": {
                  margin: "0",
                },
                "&.MuiAccordionSummary-root.Mui-expanded": {
                  minHeight: "0",
                },
                "& .MuiAccordionSummary-content": {
                  margin: "0",
                },
                width: "100%",
                padding: "0",
                margin: "0",
              }}
              expandIcon={
                <div className=" w-0 h-6 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrcaretdown.svg"
                  />
                </div>
              }
            >
              <div className="text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline hover:bg-primary-primary-50 w-[264px] h-12 flex flex-row items-center justify-start py-3 px-6 box-border gap-[8px]">
                <div className="w-6 h-6 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrshoppingcart.svg"
                  />
                </div>
                <b className="flex-1 relative tracking-[0.01em] leading-[20px]">
                  รายการ
                </b>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: "100%",
                padding: "0",
                margin: "0",
              }}
            >
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <NavLink
                  to={"/Dashboad/Product"}
                  className={({ isActive }) =>
                    isActive
                      ? "box-border w-[264px] h-12 flex flex-row items-center justify-start mt-2 py-3 pr-6 pl-14 bg-primary-primary-50 text-primary-primary-500 border-l-[4px] border-solid border-primary-primary-500 no-underline"
                      : "hover:bg-primary-primary-50 box-border w-[264px] h-12 flex flex-row items-center justify-start mt-2 py-3 pr-6 pl-14 text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline"
                  }
                >
                  <b className="flex-1 relative tracking-[0.01em] leading-[20px]">
                    สินค้า
                  </b>
                </NavLink>
                <NavLink
                  to={"/Dashboad/Categories"}
                  className={({ isActive }) =>
                    isActive
                      ? "box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 bg-primary-primary-50 text-primary-primary-500 border-l-[4px] border-solid border-primary-primary-500 no-underline"
                      : "hover:bg-primary-primary-50 box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline"
                  }
                >
                  <b className="flex-1 relative tracking-[0.01em] leading-[20px]">
                    หมวดหมู่
                  </b>
                </NavLink>
                <NavLink
                  to={"/Dashboad/Order"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary-primary-50 text-primary-primary-500 border-l-[4px] border-solid border-primary-primary-500 no-underline w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 box-border gap-[8px]"
                      : "hover:bg-primary-primary-50 text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 box-border gap-[8px]"
                  }
                >
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                    คำสั่งซื้อ
                  </div>
                </NavLink>
                <NavLink
                  to={"/Dashboad/Customer"}
                  className={({ isActive }) =>
                    isActive
                      ? "box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 bg-primary-primary-50 text-primary-primary-500 border-l-[4px] border-solid border-primary-primary-500 no-underline"
                      : "hover:bg-primary-primary-50 box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline"
                  }
                >
                  <b className="flex-1 relative tracking-[0.01em] leading-[20px]">
                    ลูกค้า
                  </b>
                </NavLink>
              </div>
            </AccordionDetails>
          </Accordion>
          <NavLink
            to={"/Dashboad/Contact"}
            className={({ isActive }) =>
              isActive
                ? "box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 bg-primary-primary-50 text-primary-primary-500 border-l-[4px] border-solid border-primary-primary-500 no-underline"
                : "hover:bg-primary-primary-50 box-border w-[264px] h-12 flex flex-row items-center justify-start py-3 pr-6 pl-14 text-black hover:text-primary-primary-500 hover:border-l-[4px] border-solid hover:border-primary-primary-500 no-underline"
            }
          >
            <div className="w-6 h-6 flex flex-row items-center justify-start">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcommentuser.svg"
              />
            </div>
            <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
              ติดต่อ
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
