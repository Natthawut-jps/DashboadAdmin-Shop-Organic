import { GrayIconButton } from "./icons/GrayIconButton/GrayIconButton";
import { SquareIconBadge } from "./icons/SquareIconBadge/SquareIconBadge";
import { FiRrArrowSmallDown } from "./icons/FiRrArrowSmallDown";
import { FiRrArrowSmallUp } from "./icons/FiRrArrowSmallUp";
import { FiRrCaretLeft } from "./icons/FiRrCaretLeft";
import { FiRrSearch } from "./icons/FiRrSearch";
import { FiSrBell } from "./icons/FiSrBell";
import { FiSrBox } from "./icons/FiSrBox";
import { FiSrCalendar } from "./icons/FiSrCalendar";
import { FiSrCalendar3 } from "./icons/FiSrCalendar3";
import { FiSrCamera } from "./icons/FiSrCamera";
import { FiSrCaretDown } from "./icons/FiSrCaretDown";
import { FiSrCaretRight } from "./icons/FiSrCaretRight";
import { FiSrEnvelope } from "./icons/FiSrEnvelope";
import { FiSrEye } from "./icons/FiSrEye";
import { FiSrHeadphones } from "./icons/FiSrHeadphones";
import { FiSrLaptop } from "./icons/FiSrLaptop";
import { FiSrMenuDotsVertical } from "./icons/FiSrMenuDotsVertical";
import { FiSrMoney } from "./icons/FiSrMoney";
import { FiSrMouse } from "./icons/FiSrMouse";
import { FiSrSettingsSliders } from "./icons/FiSrSettingsSliders";
import { FiSrSmartphone } from "./icons/FiSrSmartphone";
import { FiSrTablet } from "./icons/FiSrTablet";
import { FiSrTrash } from "./icons/FiSrTrash";
import { FiSrUsbPendrive } from "./icons/FiSrUsbPendrive";
import { FiSrUserAdd } from "./icons/FiSrUserAdd";
import { FiSrZoomIn } from "./icons/FiSrZoomIn";
import { FiSrZoomOut } from "./icons/FiSrZoomOut";
import { SideBarDashboad } from "./SideBarDashboad/SideBarDashboad";
import { Link } from "react-router-dom";

export const DashboardECommerce = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-start relative bg-neutralwhite">
      <SideBarDashboad />
      <div className="flex items-start gap-[24px] p-[24px] flex-1 self-stretch grow flex-col relative">
        <div className="gap-[32px] self-stretch w-full flex-[0_0_auto] z-[5] flex items-center relative">
          <div className="flex items-center gap-[8px] pl-[8px] pr-[12px] py-[8px] relative flex-1 grow rounded-[8px] overflow-hidden">
            <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
              <FiRrSearch className="!relative !w-[18.02px] !h-[18.02px]" />
            </div>
            <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
              Search
            </div>
          </div>
          <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[8px] p-[8px] relative self-stretch flex-[0_0_auto] rounded-[8px]">
                <div className="w-[24px] h-[24px] flex items-center justify-center gap-[8px] relative">
                  <FiSrCalendar3 className="!relative !w-[18px] !h-[18px]" />
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
                <div className="relative w-[28px] h-[28px] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] bg-[#e0e2e7] rounded-[100px]" />
              </div>
            </div>
            <img className="relative w-px h-[40px]" alt="Divider" src="/dashboad/divider.svg" />
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
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto] z-[4]">
          <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
            <div className="relative w-[469px] mt-[-1.00px] font-display-l-medium font-[number:var(--display-l-medium-font-weight)] text-neutralblackblack-700 text-[length:var(--display-l-medium-font-size)] tracking-[var(--display-l-medium-letter-spacing)] leading-[var(--display-l-medium-line-height)] [font-style:var(--display-l-medium-font-style)]">
              Welcome Back Jay
            </div>
            <p className="relative w-[469px] font-text-XL-regular font-[number:var(--text-XL-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-XL-regular-font-size)] tracking-[var(--text-XL-regular-letter-spacing)] leading-[var(--text-XL-regular-line-height)] [font-style:var(--text-XL-regular-font-style)]">
              Lorem ipsum dolor si amet welcome back jay
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-[8px] px-[14px] py-[10px] relative flex-[0_0_auto] bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100">
            <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
              <FiSrCalendar className="!mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px] !relative !w-[16px] !h-[16px]" />
            </div>
            <div className="relative w-fit mt-[-1.00px] font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
              Select Dates
            </div>
          </div>
        </div>
        <div className="gap-[24px] self-stretch w-full flex-[0_0_auto] z-[3] flex items-start relative">
          <Link to={''} className="flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow bg-neutralblackblack-500 rounded-[12px] overflow-hidden shadow-soft-shadow">
            <div className="flex w-[36px] h-[36px] items-center justify-center gap-[8px] p-[8px] relative z-[2] bg-[#ffffff33] rounded-[8px] overflow-hidden">
              <FiSrMoney className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="flex items-start gap-[8px] self-stretch w-full flex-[0_0_auto] z-[1] flex-col relative">
              <div className="relative self-stretch mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-[#ffffffbf] text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] [font-style:var(--text-l-medium-font-style)]">
                Total Revenue
              </div>
              <div className="inline-flex gap-[8px] relative flex-[0_0_auto] items-center justify-center">
                <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralwhite text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                  $75,500
                </div>
                <div className="items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ffffff26] rounded-[4px] inline-flex flex-col">
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    +10%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[264px] h-[157px] top-0 left-0 z-0">
              <div className="relative h-[157px]">
                <img
                  className="absolute w-[39px] h-[32px] top-0 left-[225px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-19.svg"
                />
                <img
                  className="absolute w-[264px] h-[157px] top-0 left-0 object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-18.svg"
                />
                <img
                  className="absolute w-[182px] h-[157px] top-0 left-[82px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-17.svg"
                />
                <img
                  className="absolute w-[76px] h-[69px] top-0 left-[188px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-16.svg"
                />
                <img
                  className="absolute w-[125px] h-[118px] top-0 left-[139px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-15.svg"
                />
                <img
                  className="absolute w-[105px] h-[87px] top-0 left-[159px]"
                  alt="Ornament"
                  src="/dashboad/ornament-5.svg"
                />
              </div>
            </div>
          </Link>
          <div className="bg-primaryprimary-500 flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow rounded-[12px] overflow-hidden shadow-soft-shadow">
            <SquareIconBadge className="!z-[2]" color="white" size="small" type="transparent" />
            <div className="flex items-start gap-[8px] self-stretch w-full flex-[0_0_auto] z-[1] flex-col relative">
              <div className="relative self-stretch mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-[#ffffffbf] text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] [font-style:var(--text-l-medium-font-style)]">
                Total Order
              </div>
              <div className="inline-flex gap-[8px] relative flex-[0_0_auto] items-center justify-center">
                <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralwhite text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                  31,500
                </div>
                <div className="items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ffffff26] rounded-[4px] inline-flex flex-col">
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    +15%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[264px] h-[157px] top-0 left-0 z-0">
              <div className="relative h-[157px]">
                <img
                  className="absolute w-[39px] h-[32px] top-0 left-[225px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-14.svg"
                />
                <img
                  className="absolute w-[264px] h-[157px] top-0 left-0 object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-13.svg"
                />
                <img
                  className="absolute w-[182px] h-[157px] top-0 left-[82px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-12.svg"
                />
                <img
                  className="absolute w-[76px] h-[69px] top-0 left-[188px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-11.svg"
                />
                <img
                  className="absolute w-[125px] h-[118px] top-0 left-[139px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-10.svg"
                />
                <img
                  className="absolute w-[67px] h-[77px] top-[80px] left-[197px]"
                  alt="Ornament"
                  src="/dashboad/ornament-4.svg"
                />
                <img
                  className="absolute w-[23px] h-[55px] top-[13px] left-[241px]"
                  alt="Ornament"
                  src="/dashboad/ornament-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="bg-secondaryblueblue-500 flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow rounded-[12px] overflow-hidden shadow-soft-shadow">
            <div className="flex w-[36px] h-[36px] items-center justify-center gap-[8px] p-[8px] relative z-[2] bg-[#ffffff33] rounded-[8px] overflow-hidden">
              <FiSrUserAdd className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="flex items-start gap-[8px] self-stretch w-full flex-[0_0_auto] z-[1] flex-col relative">
              <div className="relative self-stretch mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-[#ffffffbf] text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] [font-style:var(--text-l-medium-font-style)]">
                Total Customer
              </div>
              <div className="inline-flex gap-[8px] relative flex-[0_0_auto] items-center justify-center">
                <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralwhite text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                  $24,500
                </div>
                <div className="items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ffffff26] rounded-[4px] inline-flex flex-col">
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    -25%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[264px] h-[157px] top-0 left-0 z-0">
              <div className="relative h-[157px]">
                <img
                  className="absolute w-[39px] h-[32px] top-0 left-[225px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-9.svg"
                />
                <img
                  className="absolute w-[264px] h-[157px] top-0 left-0 object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-8.svg"
                />
                <img
                  className="absolute w-[182px] h-[157px] top-0 left-[82px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-7.svg"
                />
                <img
                  className="absolute w-[76px] h-[69px] top-0 left-[188px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-6.svg"
                />
                <img
                  className="absolute w-[125px] h-[118px] top-0 left-[139px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-5.svg"
                />
                <img
                  className="absolute w-[98px] h-[92px] top-0 left-[166px]"
                  alt="Ornament"
                  src="/dashboad/ornament-2.svg"
                />
              </div>
            </div>
          </div>
          <div className="bg-secondarycyancyan-500 flex flex-col items-start gap-[16px] p-[20px] relative flex-1 grow rounded-[12px] overflow-hidden shadow-soft-shadow">
            <div className="flex w-[36px] h-[36px] items-center justify-center gap-[8px] p-[8px] relative z-[2] bg-[#ffffff33] rounded-[8px] overflow-hidden">
              <FiSrBox className="!relative !w-[18px] !h-[18px]" />
            </div>
            <div className="flex items-start gap-[8px] self-stretch w-full flex-[0_0_auto] z-[1] flex-col relative">
              <div className="relative self-stretch mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-[#ffffffcc] text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] [font-style:var(--text-l-medium-font-style)]">
                Total Product
              </div>
              <div className="inline-flex gap-[8px] relative flex-[0_0_auto] items-center justify-center">
                <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralwhite text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                  247
                </div>
                <div className="items-center justify-center gap-[8px] px-[6px] py-[2px] relative flex-[0_0_auto] bg-[#ffffff26] rounded-[4px] inline-flex flex-col">
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    0%
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[264px] h-[157px] top-0 left-0 z-0">
              <div className="relative h-[157px]">
                <img
                  className="absolute w-[39px] h-[32px] top-0 left-[225px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-4.svg"
                />
                <img
                  className="absolute w-[264px] h-[157px] top-0 left-0 object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-3.svg"
                />
                <img
                  className="absolute w-[182px] h-[157px] top-0 left-[82px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-2.svg"
                />
                <img
                  className="absolute w-[76px] h-[69px] top-0 left-[188px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse-1.svg"
                />
                <img
                  className="absolute w-[125px] h-[118px] top-0 left-[139px] object-cover"
                  alt="Ellipse"
                  src="/dashboad/ellipse.svg"
                />
                <img
                  className="absolute w-[77px] h-[66px] top-0 left-[187px]"
                  alt="Ornament"
                  src="/dashboad/ornament-1.svg"
                />
                <img
                  className="absolute w-[39px] h-[53px] top-[104px] left-[225px]"
                  alt="Ornament"
                  src="/dashboad/ornament.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto] z-[2]">
          <div className="flex flex-col w-[360px] items-center gap-[24px] p-[24px] relative bg-neutralwhite rounded-[8px] overflow-hidden shadow-soft-shadow">
            <div className="items-start gap-[12px] z-[1] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[2px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                  Target
                </div>
                <div className="relative w-fit font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Revenue Target
                </div>
              </div>
              <FiSrMenuDotsVertical className="!relative !w-[16px] !h-[16px]" />
            </div>
            <div className="inline-flex items-center gap-[16px] flex-[0_0_auto] ml-[-6.00px] mr-[-6.00px] z-0 flex-col relative">
              <div className="relative w-[264px] h-[132px]">
                <div className="relative w-[276px] h-[144px] top-[-6px] left-[-6px] bg-[url(/dashboad/track.svg)] bg-[100%_100%]">
                  <img className="absolute w-[237px] h-[144px] top-0 left-0" alt="Progress" src="/dashboad/progress.svg" />
                  <div className="flex flex-col w-[186px] gap-[4px] absolute top-[57px] left-[45px] items-center justify-center">
                    <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                      75.55%
                    </div>
                    <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                      <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                        +10%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-center gap-[8px] relative flex-[0_0_auto]">
                <p className="relative w-[324px] mt-[-1.00px] font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-transparent text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
                  <span className="text-[#667085] font-text-m-regular [font-style:var(--text-m-regular-font-style)] font-[number:var(--text-m-regular-font-weight)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] text-[length:var(--text-m-regular-font-size)]">
                    You succeed earn{" "}
                  </span>
                  <span className="text-[#1d1f2c] font-text-m-regular [font-style:var(--text-m-regular-font-style)] font-[number:var(--text-m-regular-font-weight)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] text-[length:var(--text-m-regular-font-size)]">
                    $240{" "}
                  </span>
                  <span className="text-[#667085] font-text-m-regular [font-style:var(--text-m-regular-font-style)] font-[number:var(--text-m-regular-font-weight)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] text-[length:var(--text-m-regular-font-size)]">
                    today, its higher than yesterday
                  </span>
                </p>
                <div className="inline-flex items-start gap-[18px] relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-medium-font-size)] text-center tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                      Target
                    </div>
                    <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] whitespace-nowrap [font-style:var(--display-s-semibold-font-style)]">
                        $20k
                      </div>
                      <FiRrArrowSmallDown className="!relative !w-[20px] !h-[20px]" />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-medium-font-size)] text-center tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                      Revenue
                    </div>
                    <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] whitespace-nowrap [font-style:var(--display-s-semibold-font-style)]">
                        $16k
                      </div>
                      <FiRrArrowSmallUp className="!relative !w-[20px] !h-[20px]" />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-medium-font-size)] text-center tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                      Today
                    </div>
                    <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] whitespace-nowrap [font-style:var(--display-s-semibold-font-style)]">
                        $1.5k
                      </div>
                      <FiRrArrowSmallUp className="!relative !w-[20px] !h-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col gap-[20px] p-[24px] flex-1 grow bg-neutralwhite rounded-[12px] border border-solid border-neutralgraygray-50 shadow-soft-shadow flex items-start relative">
            <div className="items-end gap-[12px] z-[1] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[2px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                  Statistic
                </div>
                <div className="relative w-fit font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Revenue and Sales
                </div>
              </div>
              <div className="items-start gap-[16px] inline-flex relative flex-[0_0_auto]">
                <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                  <div className="relative w-[12px] h-[12px] bg-primaryprimary-500 rounded-[6px]" />
                  <div className="relative w-fit mt-[-1.00px] font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-medium-font-size)] tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                    Revenue
                  </div>
                </div>
                <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                  <div className="relative w-[12px] h-[12px] bg-secondaryorangeorange-500 rounded-[6px]" />
                  <div className="relative w-fit mt-[-1.00px] font-text-s-medium font-[number:var(--text-s-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-medium-font-size)] tracking-[var(--text-s-medium-letter-spacing)] leading-[var(--text-s-medium-line-height)] whitespace-nowrap [font-style:var(--text-s-medium-font-style)]">
                    Sales
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[696px] items-end relative flex-[0_0_auto] z-0">
              <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-[18px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $1.2k
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $1k
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $800
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $600
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $400
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      $200
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                  <div className="flex items-center gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[40px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-right tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      0
                    </div>
                    <img className="relative flex-1 grow h-px object-cover" alt="Line" src="/dashboad/line-2.svg" />
                  </div>
                </div>
                <div className="flex items-start gap-[4px] pl-[48px] pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Jan
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Feb
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Mar
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Apr
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    May
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-bold font-[number:var(--text-s-bold-font-weight)] text-primaryprimary-500 text-[length:var(--text-s-bold-font-size)] text-center tracking-[var(--text-s-bold-letter-spacing)] leading-[var(--text-s-bold-line-height)] [font-style:var(--text-s-bold-font-style)]">
                    Jun
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Jul
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Aug
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Sep
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Nov
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Oct
                  </div>
                  <div className="relative flex-1 mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] text-center tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    Dec
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[648px] h-[216px] top-[9px] left-[48px] object-cover"
                alt="Line"
                src="/dashboad/line-1.svg"
              />
              <div className="h-[225px] items-center gap-[4px] absolute top-0 left-[274px] inline-flex flex-col">
                <div className="items-start gap-[6px] px-[16px] py-[12px] relative flex-[0_0_auto] bg-neutralblackblack-500 rounded-[8px] overflow-hidden shadow-soft-shadow inline-flex flex-col">
                  <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-[10px] h-[10px] bg-primaryprimary-500 rounded-[5px]" />
                    <div className="relative w-[48px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralblackblack-100 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Revenue
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralwhite text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                      :
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      1,240
                    </div>
                  </div>
                  <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-[10px] h-[10px] bg-secondaryorangeorange-500 rounded-[5px]" />
                    <div className="relative w-[48px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralblackblack-100 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Sales
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralwhite text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                      :
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      30%
                    </div>
                  </div>
                </div>
                <div className="relative w-[12px] h-[12px] bg-primaryprimary-500 rounded-[6px] border-2 border-solid border-neutralwhite" />
                <img className="relative flex-1 w-px grow" alt="Line" src="/dashboad/line.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto] z-[1]">
          <div className="flex flex-col items-center justify-center gap-[16px] p-[24px] relative flex-1 grow bg-neutralwhite rounded-[12px] overflow-hidden shadow-soft-shadow">
            <div className="items-start gap-[12px] z-[1] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                Sales Source
              </div>
              <FiSrMenuDotsVertical className="!relative !w-[16px] !h-[16px]" />
            </div>
            <div className="flex items-center justify-center gap-[14px] self-stretch w-full flex-[0_0_auto] z-0 flex-col relative">
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <div className="relative w-[252px] h-[252px]">
                  <div className="relative h-[252px]">
                    <img
                      className="absolute w-[143px] h-[51px] top-[201px] left-[32px]"
                      alt="Ellipse"
                      src="/dashboad/ellipse-141-2.svg"
                    />
                    <img
                      className="absolute w-[50px] h-[83px] top-[137px] left-px"
                      alt="Ellipse"
                      src="/dashboad/ellipse-142.svg"
                    />
                    <img
                      className="w-[145px] h-[159px] left-0 absolute top-0"
                      alt="Ellipse"
                      src="/dashboad/ellipse-141-1.svg"
                    />
                    <img
                      className="w-[126px] h-[244px] left-[126px] absolute top-0"
                      alt="Ellipse"
                      src="/dashboad/ellipse-141.svg"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-center justify-center gap-[4px] absolute top-[96px] left-[77px]">
                  <div className="relative w-fit mt-[-1.00px] font-display-l-semibold font-[number:var(--display-l-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-l-semibold-font-size)] tracking-[var(--display-l-semibold-letter-spacing)] leading-[var(--display-l-semibold-line-height)] whitespace-nowrap [font-style:var(--display-l-semibold-font-style)]">
                    $75.5k
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      +10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
                <div className="flex w-[312px] items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="bg-primaryprimary-500 relative w-[12px] h-[12px] rounded-[10px]" />
                  <div className="relative flex-1 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Official Website
                  </div>
                  <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] whitespace-nowrap [font-style:var(--text-l-medium-font-style)]">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="flex w-[312px] items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="bg-secondarycyancyan-500 relative w-[12px] h-[12px] rounded-[10px]" />
                  <div className="relative flex-1 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Offline Store
                  </div>
                  <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] whitespace-nowrap [font-style:var(--text-l-medium-font-style)]">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="flex w-[312px] items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="bg-secondaryyellowyellow-500 relative w-[12px] h-[12px] rounded-[10px]" />
                  <div className="relative flex-1 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Amazon Store
                  </div>
                  <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] whitespace-nowrap [font-style:var(--text-l-medium-font-style)]">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="flex w-[312px] items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="bg-secondaryorangeorange-500 relative w-[12px] h-[12px] rounded-[10px]" />
                  <div className="relative flex-1 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-400 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Reseller
                  </div>
                  <div className="inline-flex items-center gap-[2px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-l-medium font-[number:var(--text-l-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-l-medium-font-size)] tracking-[var(--text-l-medium-letter-spacing)] leading-[var(--text-l-medium-line-height)] whitespace-nowrap [font-style:var(--text-l-medium-font-style)]">
                      $10,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col gap-[22px] p-[24px] flex-1 grow bg-neutralwhite rounded-[12px] overflow-hidden shadow-soft-shadow flex items-center relative">
            <div className="items-start gap-[12px] z-[1] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[2px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                  Top Product
                </div>
                <p className="relative w-fit font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Top Product in This Month
                </p>
              </div>
              <FiSrMenuDotsVertical className="!relative !w-[16px] !h-[16px]" />
            </div>
            <div className="flex-col items-start gap-[16px] self-stretch w-full flex-[0_0_auto] z-0 flex relative">
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Logic+ Wireless Mouse
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Mouse
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $1,240
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      PS Wireless Controller
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $1,189
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Ximi Mechanical Keyboard
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $1,100
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Audia Tech Earphone
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    $908
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Sams S14 Pro
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Tablet
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $900
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Sams A13 5G
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $870
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[8px]" />
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Jsound P01 TWS
                    </div>
                    <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  $870
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col gap-[22px] p-[24px] flex-1 grow bg-neutralwhite rounded-[12px] overflow-hidden shadow-soft-shadow flex items-center relative">
            <div className="items-start gap-[12px] z-[1] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[2px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                  Top Category
                </div>
                <p className="relative w-fit font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Top Category in This Month
                </p>
              </div>
              <FiSrMenuDotsVertical className="!relative !w-[16px] !h-[16px]" />
            </div>
            <div className="flex-col items-start gap-[16px] self-stretch w-full flex-[0_0_auto] z-0 flex relative">
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-primaryprimary-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrSmartphone className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    1,509
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      +12%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-secondaryorangeorange-50 flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrTablet className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Tablet
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    1,460
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondaryredred-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondaryredred-500 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      -5%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-secondarygreengreen-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrHeadphones className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    1,229
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-neutralgraygray-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralblackblack-400 text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      0%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-secondaryredred-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrLaptop className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Laptop &amp; PC
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    982
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      +19%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-secondarycyancyan-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrMouse className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Mouse
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    791
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondaryredred-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondaryredred-500 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-secondaryyellowyellow-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrUsbPendrive className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Hardisk &amp; USB Drive
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    679
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      +11%
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center gap-[12px] self-stretch w-full flex-[0_0_auto] flex relative">
                <div className="flex items-center justify-center gap-[12px] relative flex-1 grow">
                  <div className="bg-neutralgraygray-50 overflow-hidden flex w-[40px] h-[40px] items-center justify-center gap-[8px] p-[8px] relative rounded-[100px]">
                    <FiSrCamera className="!relative !w-[18px] !h-[18px]" />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                    <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                      Camera
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                    679
                  </div>
                  <div className="items-center justify-center gap-[8px] px-[8px] py-[2px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[6px] inline-flex flex-col">
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      +11%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto] z-0">
          <div className="flex flex-col items-start relative flex-1 grow rounded-[8px] overflow-hidden shadow-soft-shadow">
            <div className="items-center gap-[12px] px-[24px] py-[18px] z-[2] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50 flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-[8px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] whitespace-nowrap [font-style:var(--display-s-semibold-font-style)]">
                  Recent Orders
                </div>
                <div className="items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[8px] inline-flex flex-col">
                  <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                    +2 Orders
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[8px] px-[14px] py-[10px] relative flex-[0_0_auto] bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiSrCalendar className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralgraygray-400 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Select Date
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-[8px] px-[14px] py-[10px] relative flex-[0_0_auto] bg-neutralwhite rounded-[8px] overflow-hidden border border-solid border-neutralgraygray-100">
                <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                  <FiSrSettingsSliders className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                </div>
                <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                  Filters
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-[8px] px-[14px] py-[10px] relative flex-[0_0_auto] bg-primaryprimary-50 rounded-[8px] overflow-hidden all-[unset] box-border">
                <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-primaryprimary-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                  See All
                </div>
              </button>
            </div>
            <div className="flex self-stretch w-full z-[1] items-start relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="items-center gap-[8px] px-[22px] py-[18px] bg-neutralgraygray-25 border-b [border-bottom-style:solid] border-neutralgraygray-50 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Product
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-[44px] h-[44px] bg-[#e0e2e7] rounded-[8px]" />
                    <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Handmade Pouch
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        +3 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-[44px] h-[44px] bg-[#e0e2e7] rounded-[8px]" />
                    <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Smartwatch E2
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        +1 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-[44px] h-[44px] bg-[#e0e2e7] rounded-[8px]" />
                    <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Smartwatch E1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-[44px] h-[44px] bg-[#e0e2e7] rounded-[8px]" />
                    <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Headphone G1 Pro
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        +1 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-[44px] h-[44px] bg-[#e0e2e7] rounded-[8px]" />
                    <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Iphone X
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="flex self-stretch w-full items-start gap-[8px] px-[22px] py-[18px] relative flex-[0_0_auto] bg-neutralgraygray-25 border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Customer
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="justify-center inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        John Bushmill
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        Johnb@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="justify-center inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Ilham Budi Agung
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        ilahmbudi@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="justify-center inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Mohammad Karim
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        m_karim@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="justify-center inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Linda Blair
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        lindablair@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="justify-center inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                        Josh Adam
                      </div>
                      <div className="relative w-fit font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                        josh_adam@mail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start relative flex-1 grow">
                <div className="items-center gap-[8px] px-[22px] py-[18px] bg-neutralgraygray-25 border-b [border-bottom-style:solid] border-neutralgraygray-50 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Total
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                      $121.00
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                      $590.00
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                      $125.00
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                      $348.00
                    </div>
                  </div>
                </div>
                <div className="items-center flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[4px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="relative w-fit font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] whitespace-nowrap [font-style:var(--text-m-medium-font-style)]">
                      $607.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="items-center gap-[8px] px-[22px] py-[18px] bg-neutralgraygray-25 border-b [border-bottom-style:solid] border-neutralgraygray-50 flex relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Status
                  </div>
                  <FiSrCaretDown className="!relative !w-[16px] !h-[16px]" color="#A3A9B6" />
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondaryorangeorange-50 rounded-[8px]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondaryorangeorange-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                        Processing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondaryorangeorange-50 rounded-[8px]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondaryorangeorange-500 text-[length:var(--text-m-semibold-font-size)] tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                        Processing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondarycyancyan-50 rounded-[8px]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondarycyancyan-500 text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                        Shiped
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondarycyancyan-50 rounded-[8px]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondarycyancyan-500 text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                        Shiped
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[8px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] px-[10px] py-[4px] relative flex-[0_0_auto] bg-secondarygreengreen-50 rounded-[8px]">
                      <div className="relative w-fit mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-secondarygreengreen-600 text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] whitespace-nowrap [font-style:var(--text-m-semibold-font-style)]">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[8px] px-[22px] py-[18px] relative flex-[0_0_auto] bg-neutralgraygray-25 border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="relative w-[54px] mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] text-right tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Action
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                    <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                    <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                    <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                    <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                    <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                    <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                    <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                    <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                  </div>
                </div>
                <div className="items-start flex gap-[8px] px-[22px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-neutralwhite border-b [border-bottom-style:solid] border-neutralgraygray-50">
                  <div className="h-[44px] justify-center gap-[12px] inline-flex items-center relative flex-[0_0_auto]">
                    <FiSrEye className="!relative !w-[16px] !h-[16px]" />
                    <FiSrTrash className="!relative !w-[16px] !h-[16px]" />
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex items-center gap-[12px] px-[24px] py-[18px] relative self-stretch w-full flex-[0_0_auto] z-0 bg-neutralwhite">
              <div className="relative flex-1 font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralgraygray-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                Showing 1-5 from 100
              </div>
              <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-50 rounded-[8px] overflow-hidden">
                  <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                    <FiRrCaretLeft className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                  </div>
                </div>
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-500 rounded-[8px] overflow-hidden">
                  <div className="text-neutralwhite relative flex-1 mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                    1
                  </div>
                </div>
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-50 rounded-[8px] overflow-hidden">
                  <div className="text-primaryprimary-500 relative flex-1 mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                    2
                  </div>
                </div>
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-50 rounded-[8px] overflow-hidden">
                  <div className="text-primaryprimary-500 relative flex-1 mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                    3
                  </div>
                </div>
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-50 rounded-[8px] overflow-hidden">
                  <div className="relative flex-1 mt-[-1.00px] font-text-m-semibold font-[number:var(--text-m-semibold-font-weight)] text-primaryprimary-500 text-[length:var(--text-m-semibold-font-size)] text-center tracking-[var(--text-m-semibold-letter-spacing)] leading-[var(--text-m-semibold-line-height)] [font-style:var(--text-m-semibold-font-style)]">
                    ...
                  </div>
                </div>
                <div className="flex w-[32px] h-[32px] items-center justify-center gap-[4px] p-[6px] relative bg-primaryprimary-50 rounded-[8px] overflow-hidden">
                  <div className="w-[20px] h-[20px] p-[8px] flex items-center justify-center gap-[8px] relative">
                    <FiSrCaretRight className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <div className="flex flex-col w-[360px] items-start gap-[22px] p-[24px] relative self-stretch bg-neutralwhitebase-color rounded-[8px] overflow-hidden shadow-normal-shadow">
            <div className="items-start gap-[12px] flex relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[2px] relative flex-1 grow">
                <div className="relative self-stretch mt-[-1.00px] font-display-s-semibold font-[number:var(--display-s-semibold-font-weight)] text-neutralblackblack-500 text-[length:var(--display-s-semibold-font-size)] tracking-[var(--display-s-semibold-letter-spacing)] leading-[var(--display-s-semibold-line-height)] [font-style:var(--display-s-semibold-font-style)]">
                  Customer Growth
                </div>
                <div className="relative w-fit font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-neutralblackblack-300 text-[length:var(--text-m-regular-font-size)] tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] whitespace-nowrap [font-style:var(--text-m-regular-font-style)]">
                  Based on Country
                </div>
              </div>
              <FiSrMenuDotsVertical className="!relative !w-[16px] !h-[16px]" />
            </div>
            <div className="relative w-[312px] h-[180px] bg-neutralgraygray-25 rounded-[8px] overflow-hidden">
              <div className="relative h-[168px] top-[12px]">
                <img className="absolute w-[312px] h-[153px] top-[15px] left-0" alt="World" src="/dashboad/world.svg" />
                <div className="items-start gap-[4px] px-[16px] py-[12px] absolute top-0 left-[95px] bg-neutralblackblack-500 rounded-[8px] overflow-hidden shadow-soft-shadow inline-flex flex-col">
                  <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-[42px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralblackblack-100 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Cust
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralwhite text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                      :
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      1,240
                    </div>
                  </div>
                  <div className="items-center gap-[6px] inline-flex relative flex-[0_0_auto]">
                    <div className="relative w-[42px] mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralblackblack-100 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                      Growth
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralwhite text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] whitespace-nowrap [font-style:var(--text-s-regular-font-style)]">
                      :
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralwhite text-[length:var(--text-s-semibold-font-size)] tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                      30%
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-start gap-[8px] absolute top-[128px] left-[8px]">
                  <GrayIconButton
                    className="!flex-[0_0_auto]"
                    hierarchy="secondary"
                    icon={
                      <FiSrZoomIn className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                    }
                    size="small"
                    state="idle"
                  />
                  <GrayIconButton
                    className="!flex-[0_0_auto]"
                    hierarchy="secondary"
                    icon={
                      <FiSrZoomOut className="!relative !w-[16px] !h-[16px] !mt-[-6.00px] !mb-[-6.00px] !ml-[-6.00px] !mr-[-6.00px]" />
                    }
                    size="small"
                    state="idle"
                  />
                </div>
              </div>
            </div>
            <div className="flex-col w-[312px] items-start gap-[18px] flex-1 grow overflow-hidden flex relative">
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    USA
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240 Customers
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[8px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[54px] h-[8px] bg-secondarygreengreen-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    80%
                  </div>
                </div>
              </div>
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Japan
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240 Customers
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[8px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[45px] h-[8px] bg-secondaryorangeorange-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    60%
                  </div>
                </div>
              </div>
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    France
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240 Customers
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[8px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[36px] h-[8px] bg-secondaryyellowyellow-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    49%
                  </div>
                </div>
              </div>
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    Germany
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240 Customers
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[8px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[65px] h-[8px] bg-primaryprimary-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    100%
                  </div>
                </div>
              </div>
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-[#e0e2e7] rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    South Korea
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralblackblack-400 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[10px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[13px] h-[10px] bg-secondaryredred-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    50%
                  </div>
                </div>
              </div>
              <div className="flex w-[312px] items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-[40px] h-[40px] bg-neutralgraygray-100 rounded-[100px]" />
                <div className="flex flex-col items-start justify-center gap-[2px] relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-m-medium font-[number:var(--text-m-medium-font-weight)] text-neutralblackblack-500 text-[length:var(--text-m-medium-font-size)] tracking-[var(--text-m-medium-letter-spacing)] leading-[var(--text-m-medium-line-height)] [font-style:var(--text-m-medium-font-style)]">
                    China
                  </div>
                  <div className="relative self-stretch font-text-s-regular font-[number:var(--text-s-regular-font-weight)] text-neutralgraygray-500 text-[length:var(--text-s-regular-font-size)] tracking-[var(--text-s-regular-letter-spacing)] leading-[var(--text-s-regular-line-height)] [font-style:var(--text-s-regular-font-style)]">
                    1,240 Customers
                  </div>
                </div>
                <div className="flex w-[100px] items-center gap-[8px] relative">
                  <div className="relative flex-1 grow h-[8px] bg-neutralgraygray-100 rounded-[100px] overflow-hidden">
                    <div className="w-[17px] h-[8px] bg-secondaryredred-500 rounded-[10px]" />
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-text-s-semibold font-[number:var(--text-s-semibold-font-weight)] text-neutralgraygray-400 text-[length:var(--text-s-semibold-font-size)] text-center tracking-[var(--text-s-semibold-letter-spacing)] leading-[var(--text-s-semibold-line-height)] whitespace-nowrap [font-style:var(--text-s-semibold-font-style)]">
                    20%
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col h-[276px] items-start gap-[8px] absolute top-[300px] left-[356px] bg-neutralgraygray-50">
              <div className="relative w-[4px] h-[156px] bg-primaryprimary-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
