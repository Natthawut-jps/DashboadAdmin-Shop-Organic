import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import { useLocation } from "react-router-dom";
import instance_auth from "./utities/instance_auth";
import { Pagination } from "@mui/material";

interface customer_Type {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  imgURL: string;
  createdAt: Date;
  updatedAt: Date;
}
interface order_Type {
  id: number;
  referent: string;
  tracking_id: string;
  amount_total: number;
  status: number;
  quantity: number;
  sold: number;
  customer_name: string;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerDetails: FunctionComponent = () => {
  const customer_state: customer_Type = useLocation().state;
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<order_Type[]>([]);
  const [order, setOrder] = useState<order_Type[]>([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const status = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
    "พัสดุตีกลับ",
  ];
  const get_orderDetail = async () => {
    await instance_auth({
      method: "get",
      url: "/customers/order",
      responseType: "json",
      params: { user_id: customer_state.email },
    }).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  useEffect(() => {
    const sortByLstest = data.sort(
      (a: order_Type, b: order_Type) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 5) % sortByLstest.length;
    const endOffset = itemOffset + 5;
    setOrder(sortByLstest.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortByLstest.length / 5));
  }, [page, pageCount, data]);

  useEffect(() => {
    get_orderDetail();
  }, []);

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header />
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
                  <img
                    src={`${import.meta.env.VITE_BASE_API}/img/${
                      customer_state.imgURL
                    }`}
                    alt=""
                    className="relative rounded-81xl bg-neutral-gray-gray-100 w-[148px] h-[148px]"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-semibold">
                    {`${customer_state.first_name} ${customer_state.last_name}`}
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
                      ID-{customer_state.id}
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
                      {customer_state.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0] text-left text-neutral-black-black-300">
            <div className="rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[744px] overflow-hidden flex flex-col items-start justify-start text-sm text-neutral-gray-gray-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[2] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 flex flex-row items-center justify-start text-xl">
                  <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                    Order History
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
                  {order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          #{item.id}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Quantity
                    </div>
                  </div>
                  {order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          {item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Total
                    </div>
                  </div>
                  {order.map((item) => (
                    <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          ฿{item.amount_total}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start justify-start text-secondary-orange-orange-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Status
                    </div>
                  </div>
                  {order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-left border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        {item.status === 1 ? (
                          <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-orange-orange-500 text-[13px]">
                              {status[item.status - 1]}
                            </div>
                          </div>
                        ) : item.status === 2 ? (
                          <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-green-green-600 text-[13px]">
                              {status[item.status - 1]}
                            </div>
                          </div>
                        ) : item.status === 3 ? (
                          <div className="rounded-lg bg-secondary-yellow-yellow-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-yellow-yellow-500 text-[13px]">
                              {status[item.status - 1]}
                            </div>
                          </div>
                        ) : item.status === 4 ? (
                          <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-cyan-cyan-500 text-[13px]">
                              {status[item.status - 1]}
                            </div>
                          </div>
                        ) : item.status === 5 ? (
                          <div className="rounded-lg bg-secondary-blue-blue-500/10 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-blue-blue-500 text-[13px]">
                              {status[item.status - 1]}
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-red-red-500 text-[13px]">
                              ยกเลิกสินค้า
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end justify-center text-right">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-end py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      Date
                    </div>
                  </div>
                  {order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-end py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-end">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          {`${new Date(item.createdAt).getDate()} ${
                            months[new Date(item.createdAt).getMonth()]
                          } ${new Date(item.createdAt).getFullYear()}`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[0]">
                <Pagination
                  variant="outlined"
                  onChange={(
                    event: React.ChangeEvent<unknown>,
                    page: number
                  ) => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
