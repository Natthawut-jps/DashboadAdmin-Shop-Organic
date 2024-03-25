import { FunctionComponent } from "react";
import { Cookies } from "react-cookie";

const Header: FunctionComponent = () => {
  const Logout = () => {
    const cookie = new Cookies();
    if (cookie.get("_ur")) {
      cookie.remove("_ur");
      cookie.remove("_ut");
      return (location.href = "/admin/login");
    }
  };
  return (
    <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[5] text-neutral-gray-gray-400">
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
      <div className="flex flex-row items-center justify-start gap-[16px] text-3xs text-neutral-white-base-color font-inter">
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
          <div
            onClick={Logout}
            className="rounded-lg w-[100px] border-red-500/10 border-solid border-2 h-10 flex flex-row items-center justify-center p-2 box-border cursor-pointer"
          >
            <div className=" text-secondary-red-red-500 text-[16px]">
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
