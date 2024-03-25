import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";

const EditCategory: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-regular">
      <Sidebar/>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header/>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Edit Category
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
                Categories
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Edit Category
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
            <div className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] opacity-[0.65] text-neutral-white">
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrdisk.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Save Category
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[740px] flex flex-row items-start justify-start gap-[24px] z-[0] text-lg">
          <div className="rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[264px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[14px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Thumbnail
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Photo
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-col items-center justify-center py-6 px-3 gap-[16px] text-center text-neutral-gray-gray-400 border-[1px] border-dashed border-neutral-gray-gray-100">
                <div className="flex flex-row items-start justify-start">
                  <div className="flex flex-col items-end justify-start relative">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-[100px] h-[100px] z-[0]" />
                    <div className="my-0 mx-[!important] absolute top-[4px] right-[4px] rounded-81xl bg-secondary-green-green-100 w-6 h-6 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1 box-border z-[1]">
                      <img
                        className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                        alt=""
                        src="/img/firrcheck.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative tracking-[0.01em] leading-[20px]">
                  Drag and drop image here, or click change image
                </div>
                <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 text-left text-primary-primary-500">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    Change Image
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              General Information
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Category Name
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                  <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px]">
                      Watch
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
                      Our range of watches are perfect whether you’re looking to
                      upgrade.
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

export default EditCategory;
