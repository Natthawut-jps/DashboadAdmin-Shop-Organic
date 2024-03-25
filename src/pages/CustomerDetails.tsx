import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";

const CustomerDetails: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar/>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header/>
        <div className="self-stretch flex flex-row items-end justify-start z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Customer Details
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
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Customer List
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Customer Details
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg flex flex-row items-start justify-start gap-[24px] z-[0] text-center text-base">
          <div className="flex flex-col items-start justify-start z-[1]">
            <div className="rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden flex flex-col items-center justify-start pt-16 px-6 pb-6 box-border relative gap-[24px]">
              <div className="flex flex-col items-center justify-start gap-[12px] z-[3]">
                <div className="flex flex-row items-start justify-start">
                  <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-[148px] h-[148px]" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-semibold">
                    Linda Blair
                  </div>
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5 text-sm text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Active
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[2]"
                alt=""
                src="/img/divider1.svg"
              />
              <img
                className="absolute my-0 mx-[!important] top-[8px] left-[8px] rounded w-[344px] h-[148px] object-cover z-[1]"
                alt=""
                src="/img/background@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[18px] z-[0] text-left text-sm text-neutral-gray-gray-500">
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisridbadge.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Customer ID
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      ID-011221
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrenvelope1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      E-mail
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      lindablair@mail.com
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrmarker.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Address
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      1833 Bel Meadow Drive, Fontana, California 92335, USA
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrsmartphone.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Phone Number
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      050 414 8778
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrshoppingcartcheck.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Last Transaction
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      12 December 2022
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtimecheck.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Last Online
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      1 Day Ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0] text-left text-neutral-black-black-300">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
              <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[1]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                      Total Orders
                    </div>
                    <div className="relative text-5xl tracking-[0.01em] leading-[32px] font-semibold text-neutral-black-black-500">
                      2,400
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-orange-orange-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrshoppingcartcheck1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px] z-[0] text-sm text-secondary-green-green-600">
                  <div className="flex flex-row items-center justify-start gap-[2px]">
                    <b className="relative tracking-[0.01em] leading-[140%]">
                      1%
                    </b>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/firrcaretup.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-400">
                    +24 this month
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[1]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                      Total Balance
                    </div>
                    <div className="relative text-5xl tracking-[0.01em] leading-[32px] font-semibold text-neutral-black-black-500">
                      $100.00
                    </div>
                  </div>
                  <div className="rounded-lg bg-primary-primary-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrmoney.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px] z-[0] text-sm text-secondary-green-green-600">
                  <div className="flex flex-row items-center justify-start gap-[2px]">
                    <b className="relative tracking-[0.01em] leading-[140%]">
                      10%
                    </b>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/firrcaretup1.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-400">
                    +$10 today
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] z-[1]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                      Reward Points
                    </div>
                    <div className="relative text-5xl tracking-[0.01em] leading-[32px] font-semibold text-neutral-black-black-500">
                      1,200
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-green-green-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtrophy.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px] z-[0] text-sm text-secondary-green-green-600">
                  <div className="flex flex-row items-center justify-start gap-[2px]">
                    <b className="relative tracking-[0.01em] leading-[140%]">
                      10%
                    </b>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/firrcaretup2.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-400">
                    +120 today
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[744px] overflow-hidden flex flex-col items-start justify-start text-sm text-neutral-gray-gray-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[2] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 flex flex-row items-center justify-start text-xl">
                  <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                    Transaction History
                  </div>
                </div>
                <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
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
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex flex-col items-start justify-start text-primary-primary-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Order ID
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
                </div>
                <div className="flex flex-col items-start justify-start text-neutral-black-black-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Handmade Pouch
                        </div>
                        <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                          +3 other products
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Smartwatch E2
                        </div>
                        <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                          +1 other products
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Smartwatch E1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Headphone G1 Pro
                        </div>
                        <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                          +1 other products
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Iphone X
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Total
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcaretdown2.svg"
                    />
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $121.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
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
                </div>
                <div className="flex flex-col items-start justify-start text-secondary-orange-orange-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Status
                    </div>
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcaretdown2.svg"
                    />
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          Processing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          Processing
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-cyan-cyan-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          Shiped
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-cyan-cyan-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          Shiped
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-green-green-600 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          Delivered
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center text-right">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-end py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Date
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-end">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        12 Dec 2023
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-end">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        1 Dec 2023
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-end">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        10 Nov 2023
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-end">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        2 Nov 2023
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-end">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        7 Sep 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[0]">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Showing 1-5 from 2,400
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
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
