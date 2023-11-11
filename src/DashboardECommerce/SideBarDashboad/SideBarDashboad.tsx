import { FiSrApps } from "../icons/FiSrApps/FiSrApps"
import { FiSrCalendar3 } from "../icons/FiSrCalendar3"
import { FiSrCaretDown } from "../icons/FiSrCaretDown/FiSrCaretDown"
import { FiSrCommentAlt } from "../icons/FiSrCommentAlt"
import { FiSrCommentUser } from "../icons/FiSrCommentUser/FiSrCommentUser"
import { FiSrFileCheck } from "../icons/FiSrFileCheck/FiSrFileCheck"
import { FiSrFolder } from "../icons/FiSrFolder/FiSrFolder"
import { FiSrShoppingCart } from "../icons/FiSrShoppingCart/FiSrShoppingCart"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { NavLink } from "react-router-dom";

export const SideBarDashboad = () => {
  return (
    <>
      <div className="flex flex-col w-[264px] items-start relative self-stretch bg-neutralwhite border-r [border-right-style:solid] border-neutralgraygray-50 shadow-[4px_0px_30px_#8362ea0d]">
        <img
          className="relative left-5 top-2 shadow-soft-shadow shadow-black drop-shadow-xl"
          alt="Logo container"
          src="/dashboad/logo-container.svg"
          width={200}
        />
        <div className="flex flex-col items-start gap-[8px] px-0 py-[16px] relative flex-1 self-stretch w-full grow">
          <NavLink to="/DashboadAdmin" className={({ isActive }) => isActive ? "flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full bg-primaryprimary-50 border-l-4 border-primaryprimary-500 text-primaryprimary-500 [border-left-style:solid]" : "flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:border-l-4 hover:border-primaryprimary-500 hover:text-primaryprimary-500 [border-left-style:solid]"} end>
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative ">
              <FiSrApps className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className=" relative flex-1 mt-[-2.00px] font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)]">
              Dashboard
            </div>
          </NavLink>
          <Accordion
            defaultExpanded={true}
            sx={{
              width: '100%',
              "&.Mui-expanded": {
                margin: '0'
              },
              boxShadow: 'none',
              "&::before": {
                content: 'none'
              },
            }}
          >
            <div className="flex w-[264px] h-[48px] items-center gap-[8px] box-border py-[12px] relative cursor-pointer hover:bg-primaryprimary-50 hover:border-l-4 hover:border-primaryprimary-500 hover:text-primaryprimary-500">
              <AccordionSummary
                sx={{
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    position: 'relative',
                    right: '24px'
                  },
                  width: '100%',
                  padding: '0',
                  margin: '0',
                }}
                expandIcon={<FiSrCaretDown className=" w-[18px] h-[18px]" color="#858D9D" />}
              >
                <div className=" flex items-center gap-5 relative left-6">
                  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                    <FiSrShoppingCart className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="relative flex-1 mt-[-2.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                    E-Commerce
                  </div>
                  <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-secondarycyancyan-500 rounded-[4px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralwhite text-[10px] tracking-[0.05px] leading-[13.6px] whitespace-nowrap">
                      2
                    </div>
                  </div>
                </div>

              </AccordionSummary>
            </div>
            <AccordionDetails
              sx={{
                width: '100%',
                padding: '0',
                margin: '0',
              }}
            >
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <NavLink to="/DashboadAdmin/product" className={({ isActive }) => isActive ? "flex w-[264px] h-[48px] items-center gap-[8px] pl-[56px] pr-[24px] py-[12px] relative bg-primaryprimary-50 text-primaryprimary-500 border-l-4 border-primaryprimary-500 [border-left-style:solid]" : "flex w-[264px] h-[48px] items-center text-neutralblackblack-400 gap-[8px] pl-[56px] pr-[24px] py-[12px] relative hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500 [border-left-style:solid]"} end>
                    <div className="relative flex-1 mt-[-2.00px] font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)]">
                      Product
                    </div>
                </NavLink>
                <NavLink to="#">
                  <div className="flex w-[264px] h-[48px] items-center gap-[8px] pl-[56px] pr-[24px] py-[12px] relative hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
                    <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                      Categories
                    </div>
                  </div>
                </NavLink>
                <NavLink to="#">
                  <div className="flex w-[264px] h-[48px] items-center gap-[8px] pl-[56px] pr-[24px] py-[12px] relative hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
                    <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                      Orders
                    </div>
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-secondarycyancyan-500 rounded-[4px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralwhite text-[10px] tracking-[0.05px] leading-[13.6px] whitespace-nowrap">
                        2
                      </div>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="#">
                  <div className="flex w-[264px] h-[48px] items-center gap-[8px] pl-[56px] pr-[24px] py-[12px] relative hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
                    <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                      Customer
                    </div>
                  </div>
                </NavLink>
              </div>
            </AccordionDetails>

          </Accordion>
          <NavLink to="#" className="flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrFileCheck className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
              Project
            </div>
          </NavLink>
          <NavLink to="#" className="flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrCommentUser className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
              Contact
            </div>
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrCaretDown className="!relative !w-[18px] !h-[18px]" color="#858D9D" />
            </div>
          </NavLink>
          <NavLink to="#" className="flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrFolder className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
              File Manager
            </div>
          </NavLink>
          <NavLink to="#" className="flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrCommentAlt className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
              Chat
            </div>
          </NavLink>
          <NavLink to="#" className="flex h-[48px] items-center gap-[8px] px-[24px] py-[12px] relative self-stretch w-full hover:bg-primaryprimary-50 hover:text-primaryprimary-500 hover:border-l-4 hover:border-primaryprimary-500">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiSrCalendar3 className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="relative flex-1 font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
              Calendar
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}