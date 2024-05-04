import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import { useLocation } from "react-router-dom";
import instance_auth from "./utities/instance_auth";
import { Excel_one } from "./utities/Excel";

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
interface addressType {
  first_name: string;
  last_name: string;
  street: string;
  county: string;
  tambon: string;
  states: string;
  zipCode: number;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
interface orderDetail_Type {
  id: number;
  name: string;
  price: number;
  categories: string;
  quantity: number;
  imgURL: string;
  product_id: number;
  user_id: number;
  order_id: number;
  createdAt: Date;
  updatedAt: Date;
}

const OrderDetails: FunctionComponent = () => {
  const order_state: order_Type = useLocation().state;
  const status = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
    "พัสดุตีกลับ",
  ];
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
  const [address, setAddress] = useState<addressType>();
  const get_address = async () => {
    await instance_auth({
      method: "get",
      url: "/orders/address",
      responseType: "json",
      params: { id: order_state.address_id },
    }).then((res) => {
      if (res.status === 200) {
        setAddress(res.data);
      }
    });
  };

  const [detail_order, setDetailOrder] = useState<orderDetail_Type[]>([]);
  const get_Detail = async () => {
    await instance_auth({
      method: "get",
      url: "/orders/order_detail",
      responseType: "json",
      params: { id: order_state.id },
    }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setDetailOrder(res.data);
      }
    });
  };
  useEffect(() => {
    get_address();
    get_Detail();
  }, []);

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-s-medium">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-lg text-neutral-black-black-500">
        <Header />
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
          <div
            onClick={() => Excel_one(order_state.id)}
            className=" cursor-pointer flex flex-row items-start justify-start gap-[16px] text-sm text-primary-primary-500"
          >
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
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1]">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="relative tracking-[0.01em] leading-[28px] font-semibold">
                    Order #{order_state.id}
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    {order_state.status === 1 ? (
                      <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-orange-orange-500">
                          {status[order_state.status - 1]}
                        </div>
                      </div>
                    ) : order_state.status === 2 ? (
                      <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-green-green-600">
                          {status[order_state.status - 1]}
                        </div>
                      </div>
                    ) : order_state.status === 3 ? (
                      <div className="rounded-lg bg-secondary-yellow-yellow-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-yellow-yellow-500">
                          {status[order_state.status - 1]}
                        </div>
                      </div>
                    ) : order_state.status === 4 ? (
                      <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-cyan-cyan-500">
                          {status[order_state.status - 1]}
                        </div>
                      </div>
                    ) : order_state.status === 5 ? (
                      <div className="rounded-lg bg-secondary-blue-blue-500/10 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-blue-blue-500">
                          {status[order_state.status - 1]}
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
              </div>
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
                  {`${new Date(order_state.createdAt).getDate()} ${
                    months[new Date(order_state.createdAt).getMonth()]
                  } ${new Date(order_state.createdAt).getFullYear()}`}
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
                  QR Code PrompPay
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
                  Kerry Express
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
                  {order_state.customer_name}
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
                  {order_state.user_id}
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
                  {address && address.phone}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Shipping
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtimefast.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Status
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  {status[order_state.status - 1]}
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
                    Tracking ID
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  {order_state.tracking_id
                    ? order_state.tracking_id
                    : "กำลังดำเนินการ"}
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
                  <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5 text-center text-sm text-secondary-green-green-600"></div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[0] text-sm">
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product
                    </div>
                  </div>
                  {detail_order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="flex flex-row items-center justify-start gap-[8px]">
                        <img
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                          alt=""
                          className="relative rounded-lg bg-gainsboro w-11 h-11"
                        />
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                  <div className="self-stretch bg-neutral-white border-b-[1px] border-solid border-neutral-gray-gray-50" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start text-primary-primary-500">
                  <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Categories
                    </div>
                  </div>
                  {detail_order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                          {item.categories}
                        </div>
                      </div>
                    </div>
                  ))}
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
                  {detail_order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          {item.quantity} pcs
                        </div>
                      </div>
                    </div>
                  ))}
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
                  {detail_order.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-gray-gray-500 border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                          ฿{item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
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
                      Shipping Address
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      {`${address && address.street} ${
                        address && address.county
                      }, ${address && address.states}, ${
                        address && address.tambon
                      } ${address && address.zipCode}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl flex flex-col items-start justify-start">
              <div className="rounded-lg bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[18px]">
                <div className="self-stretch flex flex-row items-center justify-start z-[1]">
                  <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-semibold">
                    Sumary Order
                  </div>
                </div>
                <div className="self-stretch grid grid-cols-2 items-start justify-start z-[0] text-base gap-[100px] w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <div className="self-stretch flex flex-col items-start justify-start font-medium">
                      Subtotal
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start font-medium">
                      Shipping Rate
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start font-medium">
                      Total
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] pl-[25px]">
                    <div className="self-stretch flex flex-col justify-start items-start tracking-[0.01em] ">
                      ฿{order_state.amount_total - 50}
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start relative tracking-[0.01em]">
                      ฿50
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start relative tracking-[0.01em]">
                      ฿{order_state.amount_total}
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
