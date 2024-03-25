import { FunctionComponent } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";

const Product: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar/>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-6 gap-[24px] text-neutral-gray-gray-500">
       <Header/>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[2] text-5xl text-neutral-black-black-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Product
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Dashboard
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Product List
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-primary-primary-500">
            <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrdownload.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Export
              </div>
            </div>
            <NavLink to={'/Dashboad/Product/Add'} className=" no-underline rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/firrplus.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Add Product
              </div>
            </NavLink>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between z-[1]">
          <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-1 border-[1px] border-solid border-neutral-gray-gray-100">
            <div className="rounded-md bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                All Product
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Published
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Low Stock
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Draft
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-neutral-gray-gray-400">
            <div className="rounded-lg bg-neutral-white box-border w-[200px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-3 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-100">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/firrsearch1.svg"
                />
              </div>
              <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.01em] leading-[20px]">
                  Search product. . .
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] border-[1px] border-solid border-neutral-gray-gray-100">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcalendar1.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px]">
                Select Date
              </div>
            </div>
            <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-neutral-gray-gray-500 border-[1px] border-solid border-neutral-gray-gray-100">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrsettingssliders.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Filters
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start z-[0]">
          <div className="w-full overflow-hidden flex flex-row items-start justify-start z-[1]">
            <div className="flex flex-col items-start justify-start text-neutral-black-black-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/img/minus.svg"
                  />
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Product
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown2.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/img/check.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Handmade Pouch
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      3 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/img/check.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Smartwatch E2
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      2 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Smartwatch E1
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      3 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Headphone G1 Pro
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      1 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Iphone X
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      4 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Puma Shoes
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      3 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Logic+ Wireless Mouse
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      1 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Nike Shoes
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      3 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Lego Car
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      2 Variants
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      PS Wireless Controller
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      3 Variants
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-primary-primary-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  SKU
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    302012
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    302011
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    302002
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301901
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301900
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301881
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301643
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301600
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301555
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    301002
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Category
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">{`Bag & Pouch`}</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Watch
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Watch
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Audio
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Smartphone
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Shoes
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Mouse
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Shoes
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Toys
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Beauty
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Stock
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown3.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    10
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    204
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    48
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    401
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    120
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    432
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    0
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    347
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    299
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    38
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Price
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown2.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $121.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $590.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $125.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $348.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $607.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $234.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $760.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $400.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $812.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $123.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-center text-secondary-green-green-600">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-left text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Status
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown4.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-secondary-orange-orange-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Low Stock
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-neutral-gray-gray-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Draft
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-secondary-red-red-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Out of Stock
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Published
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="rounded-lg bg-neutral-gray-gray-50 flex flex-col items-center justify-center py-1 px-2.5">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Draft
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Added
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown4.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      29 Dec 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      24 Dec 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      12 Dec 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      21 Oct 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      21 Oct 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      21 Oct 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      19 Sep 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      19 Sep 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      19 Sep 2022
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      10 Aug 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-right text-neutral-black-black-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Action
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye1.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil3.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil3.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil3.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrpencil3.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisreye2.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrtrash.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[0]">
            <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
              Showing 1-10 from 100
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-center text-primary-primary-500">
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/firrcaretleft.svg"
                  />
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-500 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border text-neutral-white">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  1
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  2
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  3
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  4
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  5
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                  ...
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrcaretright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
