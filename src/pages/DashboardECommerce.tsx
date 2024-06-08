import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import { LineChart } from "@mui/x-charts/LineChart";
import instance_auth from "./utities/instance_auth";
import { axisClasses } from "@mui/x-charts";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

interface sale_Type {
  Jan: number;
  Feb: number;
  Mar: number;
  Apr: number;
  May: number;
  Jun: number;
  Jul: number;
  Aug: number;
  Sep: number;
  Oct: number;
  Nov: number;
  Dec: number;
}
interface order_Type {
  id: number;
  referent: string;
  payment_menthod: string;
  amount_total: number;
  status: number;
  quantity: number;
  customer_name: string;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
}

const DashboardECommerce: FunctionComponent = () => {
  const [data_sales, setSales] = useState<sale_Type>({} as sale_Type);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<order_Type[]>([]);
  const [order, setOrder] = useState<order_Type[]>([]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const status = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
    "พัสดุตีกลับ",
  ];
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

  const sale = async () => {
    await instance_auth({
      method: "get",
      params: { year: new Date().getFullYear() },
      url: "/dashboads/sales",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setSales(res.data);
      }
    });
  };
  interface product_top_Type {
    id: number;
    name: string;
    categories: string;
    product_id: number;
    imgURL: string;
    sold: number;
    quantity: number;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
  }
  interface categories_top_Type {
    id: number;
    category_name: string;
    description: string;
    sold: number;
    quantity: number;
    imgURL: string;
    createdAt: Date;
    updatedAt: Date;
  }

  const [categories_top, setCategories_top] = useState<categories_top_Type[]>(
    []
  );
  const [product_top, setProduct_top] = useState<product_top_Type[]>([]);

  const top_of_month = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/dashboads/top_of_month",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setCategories_top(res.data.categories_top);
          setProduct_top(res.data.product_top);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  interface total_Type {
    order_total: number;
    customer_total: number;
    product_total: number;
  }
  const [total, setTotal] = useState<total_Type>();
  const get_total = async () => {
    await instance_auth({
      method: "get",
      url: "/dashboads/total",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setTotal(res.data);
      }
    });
  };

  useEffect(() => {
    const sortByLstest = data.sort(
      (a: order_Type, b: order_Type) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setOrder(sortByLstest.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortByLstest.length / 10));
  }, [page, pageCount, data]);

  useEffect(() => {
    sale();
    get_order_admin();
    top_of_month();
    get_total();
  }, []);

  return (
    <div className="relative bg-neutral-white-base-color w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-s-regular">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-6 gap-[24px] text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-between z-[4] text-9xl text-neutral-black-black-700">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[0.01em] font-medium inline-block w-[469px]">
              ยินดีต้อนรับ Shop-Organic
            </div>
            <div className="relative text-lg tracking-[0.01em] leading-[28px] text-neutral-black-black-300 inline-block w-[469px]">
              shop-organic สินค้าการเกษตรในจังหวัดเลย
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[60px] z-[3] text-base text-gray-100 mx-[40px]">
          <div className="flex-1 rounded-xl bg-primary-primary-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px]">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcreditcard.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                คำสั่งซื้อทั้งหมด
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  {total && total.order_total}
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/img/ornament1.svg"
            />
          </div>
          <div className="flex-1 rounded-xl bg-secondary-blue-blue-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px]">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/img/fisruseradd.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                ลูกค้าทั้งหมด
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  {total && total.customer_total}
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/img/ornament2.svg"
            />
          </div>
          <div className="flex-1 rounded-xl bg-secondary-cyan-cyan-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px] text-gray-300">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/img/fisrbox.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                สินค้าทั้งหมด
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  {total && total.product_total}
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/img/ornament3.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[2] text-xl">
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] flex flex-col items-start justify-start p-6 gap-[20px] border-[1px] border-solid border-neutral-gray-gray-50">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] z-[1] w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  สรุปยอดขาย
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  ปี &nbsp;{new Date().getFullYear()}
                </div>
              </div>
              <div className=" flex justify-center w-full">
                <LineChart
                  xAxis={[
                    {
                      data: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      scaleType: "band",
                      valueFormatter: (month: string) =>
                        month ? month.toString() : "",
                    },
                  ]}
                  yAxis={[
                    {
                      valueFormatter: new Intl.NumberFormat("th", {
                        style: "currency",
                        currency: "THB",
                      }).format,
                    },
                  ]}
                  series={[
                    {
                      data: [
                        data_sales.Jan,
                        data_sales.Feb,
                        data_sales.Mar,
                        data_sales.Apr,
                        data_sales.May,
                        data_sales.Jun,
                        data_sales.Jul,
                        data_sales.Aug,
                        data_sales.Sep,
                        data_sales.Oct,
                        data_sales.Nov,
                        data_sales.Dec,
                      ],
                      color: "rgb(248 102 36)",
                      label: `ขาย`,
                      showMark: false,
                      valueFormatter: new Intl.NumberFormat("th", {
                        style: "currency",
                        currency: "THB",
                      }).format,
                    },
                  ]}
                  sx={{
                    [`& .${axisClasses.left} .${axisClasses.label}`]: {
                      transform: "translateX(-65px)",
                    },
                  }}
                  width={1000}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1] text-xl">
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  สินค้ายอดนิยม
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                สินค้าขายดีในเดือนนี้
                </div>
              </div>
            </div>
            {product_top &&
              product_top
                .sort((a, b) => b.sold - a.sold)
                .slice(0, 10)
                .map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[0] text-sm"
                  >
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                        <img
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                          alt=""
                          className=" relative w-10 h-10"
                        />
                        <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.name}
                          </div>
                          <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        ฿{item.price}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  หมวดหมู่ยอดนิยม
                </div>
                <div className=" flex">
                  <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                    หมวดหมู่ขายดีในเดือนนี้
                  </div>
                  <div className="relative left-[330px] text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                    ขาย
                  </div>
                </div>
              </div>
            </div>
            {categories_top &&
              categories_top
                .sort((a, b) => b.sold - a.sold)
                .slice(0, 10)
                .map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[0] text-sm"
                  >
                    <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                        <div className="rounded-81xl bg-primary-primary-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                          <img
                            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                            alt=""
                            src={`${import.meta.env.VITE_BASE_API}/img/${
                              item.imgURL
                            }`}
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-center">
                          <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.category_name}
                          </div>
                          <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[8px]">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          {item.sold}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[0]">
          <div className="flex-1 rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[2] border-b-[1px] border-solid border-neutral-gray-gray-50">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px] text-xl">
                <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                คำสั่งซื้อล่าสุด
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
              <div className="flex flex-col items-start justify-start text-purple-800">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Order ID
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        #{item.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Date
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {`${new Date(item.createdAt).getDate()} ${
                          months[new Date(item.createdAt).getMonth()]
                        } ${new Date(item.createdAt).getFullYear()}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Customer
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.customer_name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Quantity
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Total
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        ฿{item.amount_total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Payment
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.payment_menthod}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col items-start justify-start text-secondary-orange-orange-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Status
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center">
                      {item.status === 1 ? (
                        <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-orange-orange-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 2 ? (
                        <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-green-green-600">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 3 ? (
                        <div className="rounded-lg bg-secondary-yellow-yellow-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-yellow-yellow-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 4 ? (
                        <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-cyan-cyan-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : item.status === 5 ? (
                        <div className="rounded-lg bg-secondary-blue-blue-500/10 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-blue-blue-500">
                            {status[item.status - 1]}
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-red-red-500">
                            ยกเลิกสินค้า
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-start text-right">
                <div className="bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium inline-block w-[54px] shrink-0">
                    Action
                  </div>
                </div>
                {order.map((item, index) => (
                  <div
                    key={index}
                    className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-center py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                  >
                    <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                      <Link to={"/Dashboad/Order/Detail"} state={item}>
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisreye.svg"
                      />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-center py-[18px] px-6 gap-[12px] z-[0] text-neutral-gray-gray-500">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardECommerce;
