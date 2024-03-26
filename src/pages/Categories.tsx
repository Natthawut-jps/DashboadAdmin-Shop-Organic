import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "./utities/Sidebar";
import instance_auth from "./utities/instance_auth";
import Header from "./utities/Header";
import { Pagination } from "@mui/material";

interface category_Typee {
  id: number;
  category_name: string;
  description: string;
  imgURL: File | null;
  createdAt: Date;
  updatedAt: Date;
}
const Categories: FunctionComponent = () => {
  const get_category = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/categories/get_data",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<category_Typee[]>([]);
  const [categories, setCategories] = useState<category_Typee[]>([]);

  const get_order_admin = async () => {
    await instance_auth({
      method: "get",
      url: "/orders/get_orders",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };

  useEffect(() => {
    const sortByLstest = data.sort(
      (a: category_Typee, b: category_Typee) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setCategories(sortByLstest.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortByLstest.length / 10));
  }, [page, pageCount, data]);

  useEffect(() => {
    get_order_admin();
    get_category();
  }, []);

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-gray-gray-400">
        <Header />
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
                src="/img/fisrcaretright.svg"
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
                  src="/img/fisrdownload.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Export
              </div>
            </div>
            <NavLink
              to={"/Dashboad/Categories/Add"}
              className=" no-underline rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white"
            >
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/firrplus.svg"
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
            <div className="flex-1 flex flex-col items-start justify-start text-neutral-black-black-500">
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
                  Category Name
                </div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown2.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
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
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Sold
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
                    12,100
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
                  src="/img/fisrcaretdown4.svg"
                />
              </div>
              <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="h-11 flex flex-row items-center justify-center">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
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
            </div>
          </div>
          <div className="self-stretch bg-neutral-white flex flex-row items-center justify-center py-[18px] px-6 gap-[12px] z-[0]">
            <Pagination
              variant="outlined"
              onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                setPage(page);
                {
                  event;
                }
              }}
              count={pageCount}
              page={page}
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  bgcolor: "rgb(0 178 7/1)",
                },
              }}
            />
          </div>
        </a>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
