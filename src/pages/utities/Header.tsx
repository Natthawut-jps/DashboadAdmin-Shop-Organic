import { FunctionComponent } from "react";
import { Cookies } from "react-cookie";

const Header: FunctionComponent = () => {
  const Logout = () => {
    const cookie = new Cookies();
    if (cookie.get("_ura")) {
      cookie.remove("_ura");
      cookie.remove("_uta");
      return (location.href = "/admin/login");
    }
  };
  return (
    <div className="self-stretch flex flex-row items-center justify-end gap-[32px] z-[5] text-neutral-gray-gray-400">
      <div className="flex flex-row items-center justify-end gap-[16px] text-3xs text-neutral-white-base-color font-inter">
        <div className="flex flex-row items-center justify-end gap-[16px]">
          <div
            onClick={Logout}
            className="rounded-lg w-[110px] border-red-500/10 border-solid border-2 h-10 flex flex-row items-center justify-center p-2 box-border cursor-pointer"
          >
            <div className=" text-secondary-red-red-500 text-[16px]">
              ออกจากระบบ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
