import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";

const Customer: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar/>
      <div className="self-stretch w-full flex flex-col items-start justify-start py-8 px-6 box-border gap-[24px] text-neutral-black-black-500">
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[6] text-neutral-gray-gray-400">
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-2 pr-3 pl-2 gap-[8px]">
            <div className="w-6 h-6 flex flex-row items-center justify-center">
              <img
                className="relative w-[18.02px] h-[18.02px]"
                alt=""
                src="/img/firrsearch.svg"
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
                    src="/img/fisrcalendar.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/img/fisrbell.svg"
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
                    src="/img/fisrenvelope.svg"
                  />
                  <div className="my-0 mx-[!important] absolute top-[-8px] left-[13px] rounded bg-secondary-cyan-cyan-500 flex flex-col items-center justify-center py-0.5 px-1.5 z-[1]">
                    <div className="relative tracking-[0.01em] leading-[136%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-7 h-7" />
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/img/divider.svg" />
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-sm text-neutral-black-black-500 font-text-m-semibold">
              <div className="flex flex-col items-end justify-start relative">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-8 h-8 z-[0]" />
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
                  src="/img/fisrcaretdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[5] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Customer
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
                Customer List
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
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between z-[4] text-neutral-gray-gray-500">
          <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-1 border-[1px] border-solid border-neutral-gray-gray-100">
            <div className="rounded-md bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                All Status
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Active
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Blocked
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
                  Search customer. . .
                </div>
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
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[3] text-center">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px] border-[1px] border-solid border-primary-primary-500">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  John Bushmill
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider1.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/img/check.svg"
              />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Laura Prichet
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider2.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical1.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Mohammad Karim
                </div>
                <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-red-red-500">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider3.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical2.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.6px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Josh Bill
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider4.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical3.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16.2px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Luke Adam
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider5.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical4.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.8px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[2] text-center">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Sin Tae
                </div>
                <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-red-red-500">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider1.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16.4px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Rajesh Masvidal
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider2.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical1.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Fajar Surya
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider3.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical2.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.6px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Lisa Greg
                </div>
                <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-red-red-500">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider4.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical3.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16.2px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Linda Blair
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider5.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical4.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.8px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1] text-center">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Lucy Driver
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider1.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16.4px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Bryan Barker
                </div>
                <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-red-red-500">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider2.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical1.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Alex Holland
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider3.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical2.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.6px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Tracy Williams
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider4.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical3.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[16.2px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-4 relative gap-[16px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
              <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20" />
              <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                  Linda Barker
                </div>
                <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    Active
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
              alt=""
              src="/img/divider5.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Orders
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  12,091
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                  Balance
                </div>
                <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                  $12,091
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[16px] right-[16.4px] w-4 h-4 overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/img/fisrmenudotsvertical4.svg"
            />
            <div className="absolute my-0 mx-[!important] top-[16px] left-[15.8px] w-5 h-5 z-[4]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-neutral-white box-border border-[2px] border-solid border-neutral-gray-gray-400" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[0] text-neutral-gray-gray-500">
          <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
            Showing 1-15 from 100
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
  );
};

export default Customer;
