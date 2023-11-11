import { FunctionComponent } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Categories: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">

      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-gray-gray-400">
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[2]">
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-2 pr-3 pl-2 gap-[8px]">
            <div className="w-6 h-6 flex flex-row items-center justify-center">
              <img
                className="relative w-[18.02px] h-[18.02px]"
                alt=""
                src="/firrsearch.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              Search
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-3xs text-neutral-white font-inter">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcalendar.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/fisrbell.svg"
                  />
                  <div className="my-0 mx-[!important] absolute top-[-8px] left-[13px] rounded bg-secondary-cyan-cyan-500 flex flex-col items-center justify-center py-0.5 px-1.5 z-[1]">
                    <div className="relative tracking-[0.01em] leading-[136%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/fisrenvelope.svg"
                  />
                  <div className="my-0 mx-[!important] absolute top-[-8px] left-[13px] rounded bg-secondary-cyan-cyan-500 flex flex-col items-center justify-center py-0.5 px-1.5 z-[1]">
                    <div className="relative tracking-[0.01em] leading-[136%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
                <div className="relative rounded-81xl bg-gainsboro w-7 h-7" />
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/divider.svg" />
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-sm text-neutral-black-black-500 font-text-m-semibold">
              <div className="flex flex-col items-end justify-start relative">
                <div className="relative rounded-81xl bg-gainsboro w-8 h-8 z-[0]" />
                <div className="absolute my-0 mx-[!important] right-[-2px] bottom-[-2px] rounded-[50%] bg-secondary-green-green-500 box-border w-3.5 h-3.5 z-[1] border-[2px] border-solid border-neutral-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[2px]">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Jay Hargudson
                </div>
                <div className="relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-black-black-400">
                  Manager
                </div>
              </div>
              <div className="w-6 h-6 flex flex-row items-center justify-center">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/fisrcaretdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl text-neutral-black-black-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit">
              Categories
            </h2>
            <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Dashboard
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Categories
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-primary-primary-500">
            <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px]">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrdownload.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Export
              </div>
            </div>
            <NavLink to={'/Dashboad/Categories/Add'} className=" no-underline rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/firrplus.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Add Category
              </div>
            </NavLink>
          </div>
        </div>
        <a className="[text-decoration:none] self-stretch rounded-xl shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start z-[0] text-neutral-gray-gray-500">
          <div className="w-full overflow-hidden flex flex-row items-start justify-start z-[1]">
            <div className="flex flex-col items-start justify-start text-neutral-black-black-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/minus.svg"
                  />
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Category Name
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrcaretdown2.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/check.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">{`Bag & Pouch`}</div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Great fashion, great selections, great prices.
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
                    src="/check.svg"
                  />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Watch
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Our range of watches are perfect whether you’re looking to
                      upgrade.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Audio
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Our big range of audio devices makes it easy to upgrade
                      your device at a great price.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Smartphone
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Our smartphone include all the big brands.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Shoes
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Whatever your activity needs are, we’ve got you covered.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Mouse
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Our mouses include all the big brands.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Toys
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Get the perfect gift for the little ones.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Laptop
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Our laptop include all the big brands.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Games
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      We have the perfect gear for you
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
                </div>
                <div className="flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Camera
                    </div>
                    <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      You’ll find exactly what you’re looking for with our huge
                      range of cameras.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Sold
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrcaretdown3.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    12,100
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    59,0.00
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    12,500
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    34,800
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    60,700
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    23,400
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    76,000
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    400
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    812
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    123
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
                  src="/fisrcaretdown4.svg"
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
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Added
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrcaretdown4.svg"
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
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrpencil.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisreye.svg"
                  />
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrtrash.svg"
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
                    src="/firrcaretleft.svg"
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
                    src="/fisrcaretright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
