import { Link, Outlet } from "react-router-dom";
import { SideBarDashboad } from "../SideBarDashboad/SideBarDashboad";
import { FiRrPlus } from "../icons/FiRrPlus";
import { FiRrSearch } from "../icons/FiRrSearch";
import { FiRrSearch1 } from "../icons/FiRrSearch1";
import { FiSrBell } from "../icons/FiSrBell";
import { FiSrCalendar } from "../icons/FiSrCalendar";
import { FiSrCalendar2 } from "../icons/FiSrCalendar2";
import { FiSrCaretDown } from "../icons/FiSrCaretDown";
import { FiSrCaretRight1 } from "../icons/FiSrCaretRight1";
import { FiSrDownload } from "../icons/FiSrDownload";
import { FiSrEnvelope } from "../icons/FiSrEnvelope";
import { FiSrEye } from "../icons/FiSrEye";
import { FiSrPencil5 } from "../icons/FiSrPencil5";
import { FiSrSettingsSliders } from "../icons/FiSrSettingsSliders";
import { FiSrTrash } from "../icons/FiSrTrash";
import { product, productType } from "../../data-developer";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";

export const Product = (): JSX.Element => {
  const [check, setCheck] = useState<number[]>([]);
  const handleCheck = ( e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const traget = e.target.checked;
    if(traget) {
        setCheck([id, ...check]);
    }
  }
  console.log(check);
  return (
    <>
      <div className="flex min-h-screen items-start relative bg-neutralgraygray-25">
        <SideBarDashboad />
        <div className="flex flex-col items-start gap-[24px] p-[24px] relative flex-1 self-stretch grow">
          <div className="flex items-center gap-[32px] relative self-stretch w-full flex-[0_0_auto] z-[3]">
            <div className="flex items-center gap-[8px] pl-[8px] pr-[12px] py-[8px] relative flex-1 grow rounded-[8px] overflow-hidden">
              <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                <FiRrSearch1 className="!relative !w-[18.02px] !h-[18.02px]" />
              </div>
              <input type="text" placeholder="Search" height={40} className="bg-neutralgraygray-25 focus:outline-none relative box-border w-full font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]" />
            </div>
            <div className="items-center inline-flex gap-[16px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[8px] p-[8px] relative self-stretch flex-[0_0_auto] rounded-[8px]">
                  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                    <FiSrCalendar2 className="!relative !w-[18px] !h-[18px]" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-[8px] p-[8px] relative self-stretch flex-[0_0_auto] rounded-[8px]">
                  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                    <FiSrBell className="!relative !w-[18px] !h-[18px]" />
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[6px] py-[2px] absolute top-[-8px] left-[13px] bg-secondarycyancyan-500 rounded-[4px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralwhite text-[10px] tracking-[0.05px] leading-[13.6px] whitespace-nowrap">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-[8px] p-[8px] relative self-stretch flex-[0_0_auto] rounded-[8px]">
                  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                    <FiSrEnvelope className="!relative !w-[18px] !h-[18px]" />
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[6px] py-[2px] absolute top-[-8px] left-[13px] bg-secondarycyancyan-500 rounded-[4px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-neutralwhite text-[10px] tracking-[0.05px] leading-[13.6px] whitespace-nowrap">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[8px]">
                  <div className="w-[28px] h-[28px] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] rounded-[100px] relative bg-[#e0e2e7]" />
                </div>
              </div>
              <img className="relative w-px h-[40px]" alt="Divider" src="/img/divider.svg" />
              <div className="inline-flex items-center gap-[12px] relative self-stretch flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="relative w-[32px] h-[32px] bg-[#e0e2e7] rounded-[100px]" />
                  <div className="absolute w-[14px] h-[14px] top-[20px] left-[20px] bg-secondarygreengreen-500 rounded-[7px] border-2 border-solid border-neutralwhite" />
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-[2px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    Jay Hargudson
                  </div>
                  <div className="relative w-fit font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralblackblack-400 text-[length:var(--text-s-medium-font-size)] tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                    Manager
                  </div>
                </div>
                <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                  <FiSrCaretDown className="!relative !w-[18px] !h-[18px]" color="#858D9D" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end gap-[24px] relative self-stretch w-full flex-[0_0_auto] z-[2]">
            <div className="flex flex-col items-start gap-[8px] relative flex-1 grow">
              <div className="relative self-stretch mt-[-1.00px] font-display-m-semibold font-[number:var(--display-m-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-m-semibold-font-size)] tracking-[var(--display-m-semibold-letter-spacing)] leading-[var(--display-m-semibold-line-height)] [font-style:var(--display-m-semibold-font-style)]">
                Product
              </div>
              <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                <div className="text-primaryprimary-500 relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Dashboard
                </div>
                <FiSrCaretRight1 className="!relative !w-[16px] !h-[16px]" color="#C2C6CE" />
                <div className="text-neutralgraygray-500 relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Product List
                </div>
              </div>
            </div>
            <div className="items-start inline-flex gap-[16px] relative flex-[0_0_auto]">
              <button className="bg-primaryprimary-50 inline-flex items-center justify-center gap-[4px] px-[14px] py-[10px] relative flex-[0_0_auto] rounded-[8px] overflow-hidden all-[unset] box-border">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiSrDownload className="!mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px] !relative !w-[16px] !h-[16px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-primaryprimary-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                  Export
                </div>
              </button>
              <Link to={'/DashboadAdmin'} className=" cursor-pointer bg-primaryprimary-500 inline-flex items-center justify-center gap-[4px] px-[14px] py-[10px] relative flex-[0_0_auto] rounded-[8px] overflow-hidden all-[unset] box-border">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiRrPlus className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-neutralwhite text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                  Add Product
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] z-[1]">
            <div className="items-start p-[4px] bg-neutralwhite border border-solid border-neutralgraygray-100 inline-flex relative flex-[0_0_auto] rounded-[8px] overflow-hidden">
              <div className="inline-flex items-center justify-center gap-[8px] px-[12px] py-[6px] relative flex-[0_0_auto] bg-primaryprimary-50 rounded-[6px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-primaryprimary-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                  All Product
                </div>
              </div>
              <div className="items-center justify-center gap-[8px] px-[12px] py-[6px] inline-flex relative flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Published
                </div>
              </div>
              <div className="items-center justify-center gap-[8px] px-[12px] py-[6px] inline-flex relative flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Low Stock
                </div>
              </div>
              <div className="items-center justify-center gap-[8px] px-[12px] py-[6px] inline-flex relative flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Draft
                </div>
              </div>
            </div>
            <div className="items-start gap-[16px] inline-flex relative flex-[0_0_auto]">
              <div className="flex w-[200px] items-center gap-[4px] px-[12px] py-[8px] relative bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiRrSearch className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div>
                <input
                  className=" focus:outline-none w-full relative grow border-[none] [background:none] font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralgraygray-400 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)] p-0"
                  placeholder="Search product. . ."
                  type="text"
                />
              </div>
              <div className="items-center justify-center gap-[8px] px-[14px] py-[10px] bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100 inline-flex relative flex-[0_0_auto]">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiSrCalendar className="!mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px] !relative !w-[16px] !h-[16px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralgraygray-400 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Select Date
                </div>
              </div>
              <div className="items-center justify-center gap-[8px] px-[14px] py-[10px] bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100 inline-flex relative flex-[0_0_auto]">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiSrSettingsSliders className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Filters
                </div>
              </div>
            </div>
          </div>
          <div className="w-full z-0 rounded-[12px] shadow-soft-shadow items-start relative">
            <div className=" grid grid-rows-2 w-full z-[1] items-start relative flex-[0_0_auto]">
              <div className="flex flex-row w-full h-full items-center justify-center relative bg-neutralwhite border-b">
                <div className=" basis-[23%] relative flex items-center px-[60px] py-[18px] flex-none [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className=" relative h-[20px] rounded-[6px]" />
                  <div className="relative flex-1 left-2 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Product
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className=" flex-none relative basis-[5%] w-full justify-start items-center bg-neutralwhite gap-[8px] px-[22px] py-[18px] pl-[150ph [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    SKU
                  </div>
                </div>
                <div className="  relative basis-[18%] pl-5 bg-neutralwhite flex justify-center items-center py-[18px [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Category
                  </div>
                </div>
                <div className="  relative basis-[10%] items-center bg-neutralwhite flex justify-center py-[18px] pr-[10px] [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative  mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Stock
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className="relative basis-[20%] items-center justify-center bg-neutralwhite flex gap-[10px] px-[22px] py-[18px] [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className=" relative mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Price
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className=" basis-1/6 relative items-center justify-center  bg-neutralwhite flex gap-[10px]  py-[18px] [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative  mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Status
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className=" basis-1/6 box-border relative items-center justify-center bg-neutralwhite flex gap-[10px] px-[15px] py-[18px] [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Added
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className=" basis-[20%] relative items-start justify-center bg-neutralwhite flex gap-[8px] px-[22px] py-[18px]  [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] text-right tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Action
                  </div>
                </div>
              </div>
              {product.map((item: productType) => (
                <div key={item.id} className=" grid grid-flow-col border-b">
                  <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                    <Checkbox onChange={(e) => handleCheck(e, item.id)} className="bg-neutralwhite border-2 border-solid border-neutralgraygray-400 relative w-[20px] h-[20px] rounded-[6px]"/>
                    <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                      <img src="/manga/image-3.png" alt="" className="h-[44px] w-[44px] rounded-[8px] relative bg-[#e0e2e7] object-cover" />
                      <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                        <div className="text-neutralblackblack-500 relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                          {item.title}
                        </div>
                        <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                          {item.valiants} Variants
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-primaryprimary-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                          {item.sku}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                          <div className="text-neutralgraygray-500 relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                            {item.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                          {item.stock}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">

                    <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">

                    <div className="items-start bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="bg-secondaryorangeorange-50 inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] rounded-[8px]">
                          <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondaryorangeorange-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                            {item.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="items-center bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                          <div className="text-neutralgraygray-500 relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                            {item.added}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="items-start bg-neutralgraygray-25 flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] [border-bottom-style:solid] border-neutralgraygray-50">
                      <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                        <FiSrPencil5 className="!relative !w-[16px] !h-[16px]" />
                        <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                        <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))

              }
            </div>
            <footer className=" flex justify-center items-center bg-neutralwhite py-10">
            </footer>
          </div>
        </div>
      </div>
      <Outlet />

    </>
  );
};

