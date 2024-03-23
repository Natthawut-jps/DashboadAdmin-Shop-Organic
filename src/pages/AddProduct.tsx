import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";

const AddProduct: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-medium">
      <Sidebar/>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[2] text-neutral-gray-gray-400">
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
                  src="/img/fisrcaretdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Add Product
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
                Product List
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Add Product
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-neutral-gray-gray-400">
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-400">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcross.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Cancel
              </div>
            </div>
            <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrplus.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Add Product
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Type product name here. . .
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-[140px] overflow-hidden flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Type product description here. . .
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
                  <div className="rounded-lg bg-primary-primary-500 w-11 h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrpicture.svg"
                    />
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 gap-[4px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrdollar.svg"
                      />
                    </div>
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Type base price here. . .
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Select a discount type
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/firrcaretdown.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Type discount precentage. . .
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Select a tax class
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/firrcaretdown.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Type VAT amount. . .
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Type product SKU here. . .
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Product barcode. . .
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        Type product quantity here. . .
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-6 gap-[14px] text-sm">
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Select a variation
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/firrcaretdown.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Variation. . .
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-red-red-50 overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrplus1.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        Select a variation
                      </div>
                      <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/firrcaretdown.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Variation. . .
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary-red-red-50 overflow-hidden flex flex-row items-center justify-center p-2.5">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrplus1.svg"
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
                    src="/img/fisrplus2.svg"
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
                      src="/img/check.svg"
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Product weight. . .
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Height (cm). . .
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Length (cm). . .
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
                    <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                      <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                        <div className="relative tracking-[0.01em] leading-[20px]">
                          Width (cm). . .
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                      Select a category
                    </div>
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/firrcaretdown1.svg"
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                      Select tags
                    </div>
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/firrcaretdown1.svg"
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
                <div className="rounded-lg bg-neutral-gray-gray-50 flex flex-col items-center justify-center py-1 px-2.5 text-sm text-neutral-gray-gray-500">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    Draft
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
                    Draft
                  </div>
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/img/firrcaretdown1.svg"
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

export default AddProduct;
