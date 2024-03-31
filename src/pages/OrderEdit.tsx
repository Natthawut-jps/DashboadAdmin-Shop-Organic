import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import instance_auth from "./utities/instance_auth";
import { useLocation } from "react-router-dom";

interface data_Type {
  tracking_id: string | null;
  staus: number | null;
}

interface order_Type {
  id: number;
  referent: string;
  tracking_id: string;
  amount_total: number;
  status: number;
  quantity: number;
  customer_name: string;
  user_id: string;
  address_id: number;
  createdAt: Date;
  updatedAt: Date;
}

const OrderDetails: FunctionComponent = () => {
  const order: order_Type = useLocation().state;
  const status = ["Processing", "Order received", "On the way", "Shiped"];
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
  const [err, setError] = useState<string>("");
  const [data, setData] = useState<data_Type>({
    staus: null,
    tracking_id: null,
  });
  const handleSubmit = async () => {
    if (data.tracking_id && data.staus) {
      if (!err) {
        await instance_auth({
          method: "post",
          url: "/orders/change_status",
          data: {
            tracking_id: data.tracking_id,
            status: data.staus,
            order_id: order.id,
          },
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status === 200) {
            location.href = "/Dashboad/Order";
          } else {
            setError("aleady Tracking ID");
          }
        });
      }
    } else {
      setError('"Tracking and Status required"');
    }
  };
  useEffect(() => {
    setData({
      ...data,
      tracking_id: order.tracking_id ? order.tracking_id : "",
    });
  }, []);
  console.log(data);
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-s-medium">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-lg text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[2] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">{`Order Edit `}</div>
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
                Order Edit
              </div>
              <div className=" text-secondary-red-red-500 relative left-[380px] text-[16px]">
                {err}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-sm text-primary-primary-500 gap-5">
            <a
              href="/Dashboad/Order"
              className=" no-underline rounded-lg overflow-hidden flex flex-row items-center relative top-[1px] justify-center gap-[4px] py-[8.5px] px-[12px] border-[1px] border-solid border-neutral-gray-gray-400"
            >
              <div className="w-[15px] h-[15px] flex flex-row items-center justify-center box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcross.svg"
                />
              </div>
              <div className="text-neutral-gray-gray-400 relative tracking-[0.01em] leading-[20px] font-semibold">
                Cancel
              </div>
            </a>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <div
                onClick={handleSubmit}
                className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-[30px] gap-[4px] text-neutral-white cursor-pointer"
              >
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-2 items-start justify-start gap-[50px] z-[1]">
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <div className="relative tracking-[0.01em] leading-[28px] font-semibold">
                    Order #{order.id}
                  </div>
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    {order.status === 1 ? (
                      <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-orange-orange-500">
                          {status[order.status - 1]}
                        </div>
                      </div>
                    ) : order.status === 2 ? (
                      <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-green-green-600">
                          {status[order.status - 1]}
                        </div>
                      </div>
                    ) : order.status === 3 ? (
                      <div className="rounded-lg bg-secondary-yellow-yellow-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-yellow-yellow-500">
                          {status[order.status - 1]}
                        </div>
                      </div>
                    ) : order.status === 4 ? (
                      <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-cyan-cyan-500">
                          {status[order.status - 1]}
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                        <div className="relative tracking-[0.01em] leading-[20px] font-semibold text-secondary-red-red-500">
                          Cancelled
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden grid grid-cols-2 items-start justify-start gap-[40px] z-[0] text-sm">
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
                    {order.customer_name}
                  </div>
                </div>
              </div>
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
                    {`${new Date(order.createdAt).getDate()} ${
                      months[new Date(order.createdAt).getMonth()]
                    } ${new Date(order.createdAt).getFullYear()}`}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcreditcard.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    QR Code PrompPay
                  </div>
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
                    Fash Express
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[20px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Shipping
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[30px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrtimecheck.svg"
                    />
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Status
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  <FormControl
                    required
                    size="small"
                    sx={{
                      width: 200,
                      m: 1,
                      right: 13,
                    }}
                  >
                    <InputLabel id="status">Select a Status</InputLabel>
                    <Select
                      labelId="status"
                      label="Select a Status"
                      onChange={(e: SelectChangeEvent) => {
                        setData({ ...data, staus: parseInt(e.target.value) });
                      }}
                    >
                      <MenuItem value={1}>{status[0]}</MenuItem>
                      <MenuItem value={2}>{status[1]}</MenuItem>
                      <MenuItem value={3}>{status[2]}</MenuItem>
                      <MenuItem value={4}>{status[3]}</MenuItem>
                    </Select>
                  </FormControl>
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
                  <TextField
                    id="Tracking ID"
                    label="Tracking ID"
                    variant="outlined"
                    size="small"
                    value={order.tracking_id}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setData({ ...data, tracking_id: e.target.value });
                    }}
                    required
                  />
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
