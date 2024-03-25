import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";

const OrderDetails: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-s-medium">
      <Sidebar/>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-lg text-neutral-black-black-500">
        <Header/>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[2] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">{`Order Details `}</div>
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
                Order List
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Order Details
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-sm text-primary-primary-500">
            <div className="flex flex-row items-start justify-start gap-[16px]">
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
              <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrreceipt.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Invoice
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1]">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="relative tracking-[0.01em] leading-[28px] font-semibold">
                    Order #302011
                  </div>
                  <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5 text-sm text-secondary-orange-orange-500">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Processing
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrpencil.svg"
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcalendar1.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Added
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  12 Dec 2022
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcreditcard.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Payment Method
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Visa
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtruckside.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Shipping Method
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Flat Shipping
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Customer
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisruser.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Customer
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Josh Adam
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrenvelope1.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Email
                  </div>
                </div>
                <a
                  className="relative tracking-[0.01em] leading-[20px] font-medium text-[inherit] [text-decoration:none]"
                  href="mailto:josh_adam@mail.com"
                  target="_blank"
                >
                  joshadam@mail.com
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrsmartphone.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Phone
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  909 427 2910
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Document
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrreceipt1.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Invoice
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  INV-32011
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrbox.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Shipping
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  SHP-2011REG
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtrophy.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Rewards
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  480 point
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[0]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 z-[1] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[28px] font-semibold">
                    Order List
                  </div>
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5 text-center text-sm text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      +2 Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[0] text-sm">
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Logic+ Wireless Mouse
                        </div>
                        <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                          Black
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative rounded-lg bg-gainsboro w-11 h-11" />
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          Smartwatch E2
                        </div>
                        <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                          Black
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-primary-primary-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      SKU
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        302011
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        302011
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-neutral-gray-gray-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Total
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        1 pcs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        1 pcs
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Price
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $121.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $590.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Subtotal
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        VAT(0)%
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Shipping Rate
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Total
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start text-right">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Total
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $121.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $590.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $711.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $0.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $20.00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        $731.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[18px]">
              <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-semibold inline-block w-[312px] z-[1]">
                Address
              </div>
              <div className="flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-gray-gray-500">
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
                      Billing Address
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
                      src="/img/fisrmarker.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Shipping Address
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      1833 Bel Meadow Drive, Fontana, California 92335, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-col items-start justify-start">
              <div className="rounded-lg bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[18px]">
                <div className="self-stretch flex flex-row items-center justify-start z-[1]">
                  <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-semibold">
                    Order Status
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start z-[0] text-base">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="rounded-81xl bg-primary-primary-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[1]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisrshoppingcartcheck.svg"
                        />
                      </div>
                      <img
                        className="flex-1 relative max-h-full w-px z-[0]"
                        alt=""
                        src="/img/divider1.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[8px]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                        Order Placed
                      </div>
                      <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-400">
                        An order has been placed.
                      </div>
                      <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-gray-gray-400">
                        12/12/2022, 03:00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="rounded-81xl bg-primary-primary-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[1]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisrtimefast.svg"
                        />
                      </div>
                      <img
                        className="flex-1 relative max-h-full w-px z-[0]"
                        alt=""
                        src="/img/divider1.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[8px]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                        Processing
                      </div>
                      <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-400">
                        Seller has proccessed your order.
                      </div>
                      <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-gray-gray-400">
                        12/12/2022, 03:15
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="rounded-81xl bg-neutral-gray-gray-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[1]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisrboxalt.svg"
                        />
                      </div>
                      <img
                        className="flex-1 relative max-h-full w-px z-[0]"
                        alt=""
                        src="/img/divider2.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[8px]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                        Packed
                      </div>
                      <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-400 hidden">
                        Seller has proccessed your order.
                      </div>
                      <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-gray-gray-400">
                        DD/MM/YY, 00:00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="rounded-81xl bg-neutral-gray-gray-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[1]">
                        <img
                          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisrtruckside.svg"
                        />
                      </div>
                      <img
                        className="flex-1 relative max-h-full w-px z-[0]"
                        alt=""
                        src="/img/divider2.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-[8px]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                        Shipping
                      </div>
                      <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-400 hidden">
                        Desc lorem ipsum dolor sia amt
                      </div>
                      <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-gray-gray-400">
                        DD/MM/YY, 00:00
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                    <div className="rounded-81xl bg-neutral-gray-gray-50 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrdocumentsigned.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                        Delivered
                      </div>
                      <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-400 hidden">
                        Seller has proccessed your order.
                      </div>
                      <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-gray-gray-400">
                        DD/MM/YY, 00:00
                      </div>
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

export default OrderDetails;
