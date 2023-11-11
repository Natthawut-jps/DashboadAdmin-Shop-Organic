import { FunctionComponent } from "react";

const EditProduct: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-medium">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[2] text-neutral-gray-gray-400">
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
                    src="/fisrcalendar1.svg"
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
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-7 h-7" />
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/divider.svg" />
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-sm text-neutral-black-black-500 font-text-m-medium">
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
                  src="/fisrcaretdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Edit Product
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Dashboard
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                Product List
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Edit Product
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-neutral-gray-gray-400">
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-400">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrcross.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Cancel
              </div>
            </div>
            <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] opacity-[0.65] text-neutral-white">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/fisrdisk.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Save Product
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[0] text-lg">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                General Information
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product Name
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Smartwatch E2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Description
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-[140px] overflow-hidden flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Smartwatch for men women notify you incoming calls, SMS
                        notifications. when you connect the smartphone with
                        fitness tracker. Connect fitness tracker with your
                        phone, you will never miss a call and a message. The
                        smart watches for android phones will vibrate to alert
                        you if your phone receives any notifications. You can
                        reject calls and view message directly from your watch.
                        A best gift for family and friends
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Media
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Photo
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-col items-center justify-center py-6 px-3 gap-[16px] text-neutral-gray-gray-400 border-[1px] border-dashed border-neutral-gray-gray-100">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-end justify-start relative">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-[100px] h-[100px] z-[0]" />
                      <div className="my-0 mx-[!important] absolute top-[4px] right-[4px] rounded-81xl bg-secondary-green-green-100 w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border z-[1]">
                        <img
                          className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcheck.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start relative">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-[100px] h-[100px] z-[0]" />
                      <div className="my-0 mx-[!important] absolute top-[4px] right-[4px] rounded-81xl bg-secondary-green-green-100 w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border z-[1]">
                        <img
                          className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcheck.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start relative">
                      <div className="relative rounded-lg bg-neutral-gray-gray-100 w-[100px] h-[100px] z-[0]" />
                      <div className="my-0 mx-[!important] absolute top-[4px] right-[4px] rounded-81xl bg-secondary-green-green-100 w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border z-[1]">
                        <img
                          className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcheck.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px]">
                    Drag and drop image here, or click add image
                  </div>
                  <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 text-primary-primary-500">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      Add Image
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Pricing
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Base Price
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 gap-[4px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/fisrdollar.svg"
                      />
                    </div>
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        400.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Discount Type
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        No Discount
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcaretdown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Discount Precentage (%)
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          0%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Tax Class
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Tax Free
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcaretdown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        VAT Amount (%)
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          0%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Inventory
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      SKU
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        302002
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Barcode
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        0984939101123
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Quantity
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        124
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-center p-6 gap-[14px] text-sm">
              <div className="self-stretch relative text-lg tracking-[0.01em] leading-[28px] font-semibold z-[2]">
                Variation
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[1] text-neutral-black-black-300">
                <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Variation Type
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Color
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcaretdown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Variation
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Black
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-red-red-50 overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/fisrplus.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Variation Type
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Color
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/firrcaretdown.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Variation
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Gray
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-red-red-50 overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/fisrplus.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] z-[0] text-primary-primary-500">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrplus1.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Add Variant
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Shiping
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-primary-primary-500">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-5 h-5">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/check.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    This is a physical product
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[14px] text-neutral-black-black-300">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Weight
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          0.25 kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Height
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          10 cm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Length
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          10 cm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                        Width
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          7 cm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Category
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product Category
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Watch
                    </div>
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/firrcaretdown.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product Tags
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-xs text-primary-primary-500 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <div className="rounded bg-primary-primary-50 flex flex-row items-center justify-start py-1 px-1.5 gap-[2px]">
                        <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                          Watch
                        </div>
                        <div className="w-4 h-4 flex flex-row items-center justify-center p-2 box-border">
                          <img
                            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                            alt=""
                            src="/fisrcrosssmall.svg"
                          />
                        </div>
                      </div>
                      <div className="rounded bg-primary-primary-50 flex flex-row items-center justify-start py-1 px-1.5 gap-[2px]">
                        <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                          Gadget
                        </div>
                        <div className="w-4 h-4 flex flex-row items-center justify-center p-2 box-border">
                          <img
                            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                            alt=""
                            src="/fisrcrosssmall.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/firrcaretdown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[1]">
                <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-semibold">
                  Status
                </div>
                <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5 text-center text-sm text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    Published
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Product Status
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Published
                  </div>
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/firrcaretdown.svg"
                    />
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

export default EditProduct;
