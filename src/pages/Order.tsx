import { FunctionComponent, useEffect, useState } from "react";
import {Excel} from "./utities/Excel";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Pagination,
  TextField,
} from "@mui/material";
import instance_auth from "./utities/instance_auth";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

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
interface filter_Type {
  allOrder: number | null;
  processing: number | null;
  orderReciv: number | null;
  delivery: number | null;
  shiped: number | null;
  return: number | null;
  canclled: number | null;
}

const Order: FunctionComponent = () => {
  const [filters, setFilter] = useState<filter_Type>({} as filter_Type);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<order_Type[]>([]);
  const [order, setOrder] = useState<order_Type[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<order_Type[]>([]);
  const [search_Data, setSearch_Data] = useState<order_Type[]>([]);
  const [inputSearch, setInputSearch] = useState<string | null>("");

  const Search = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/orders/get_orders",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setSearch_Data(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickOpen = () => {
    Search();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    setSearch(() =>
      search_Data.filter((item: order_Type) => {
        return item.id === parseInt(value);
      })
    );
    setInputSearch(String(value));
  };
  const status = [
    "กำลังดำเนินการ",
    "รับออเดอร์เรียบร้อย",
    "กำลังเตรียมพัสดุ",
    "บริษัทขนส่งเข้ารับพัสดุ",
    "พัสดุตีกลับ",
  ];
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
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
  const filter_handle = async (value: number = 6) => {
    if (value === 1) {
      setFilter({
        allOrder: null,
        processing: value,
        orderReciv: null,
        delivery: null,
        shiped: null,
        return: null,
        canclled: null,
      });
    } else if (value === 2) {
      setFilter({
        allOrder: null,
        processing: null,
        orderReciv: value,
        delivery: null,
        shiped: null,
        return: null,
        canclled: null,
      });
    } else if (value === 3) {
      setFilter({
        allOrder: null,
        processing: null,
        orderReciv: null,
        delivery: value,
        shiped: null,
        return: null,
        canclled: null,
      });
    } else if (value === 4) {
      setFilter({
        allOrder: null,
        processing: null,
        orderReciv: null,
        delivery: null,
        shiped: value,
        return: null,
        canclled: null,
      });
    } else if (value === 5) {
      setFilter({
        allOrder: null,
        processing: null,
        orderReciv: null,
        delivery: null,
        shiped: null,
        return: value,
        canclled: null,
      });
    } else if (value === 9) {
      setFilter({
        allOrder: null,
        processing: null,
        orderReciv: null,
        delivery: null,
        shiped: null,
        return: null,
        canclled: value,
      });
    } else {
      setFilter({
        allOrder: value,
        processing: null,
        orderReciv: null,
        delivery: null,
        shiped: null,
        return: null,
        canclled: null,
      });
    }
  };
  useEffect(() => {
    const sortByLstest = data.sort(
      (a: order_Type, b: order_Type) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setOrder(
      sortByLstest
        .slice(itemOffset, endOffset)
        .filter((item: order_Type) =>
          filters.processing
            ? item.status === 1
            : filters.orderReciv
            ? item.status === 2
            : filters.delivery
            ? item.status === 3
            : filters.shiped
            ? item.status === 4
            : filters.return
            ? item.status === 5
            : filters.canclled
            ? item.status === 9
            : item
        )
    );
    setPageCount(Math.ceil(sortByLstest.length / 10));
  }, [page, pageCount, data, filters]);

  useEffect(() => {
    get_order_admin();
    filter_handle();
  }, []);

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-gray-gray-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[2] text-5xl text-neutral-black-black-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              คำสั่งซื้อ
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-sm text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                หน้าหลัก
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                รายการคำสั่งซื้อ
              </div>
            </div>
          </div>
          <div
            onClick={Excel}
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
                ส่งออก
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between z-[1]">
          <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-1 border-[1px] border-solid border-neutral-gray-gray-100">
            <div
              onClick={() => filter_handle(6)}
              className={
                filters.allOrder
                  ? "rounded-md bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500 cursor-pointer"
                  : "rounded-md overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
              ทั้งหมด
              </div>
            </div>
            <div
              onClick={() => filter_handle(1)}
              className={
                filters.processing
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                {status[0]}
              </div>
            </div>
            <div
              onClick={() => filter_handle(2)}
              className={
                filters.orderReciv
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                {status[1]}
              </div>
            </div>
            <div
              onClick={() => filter_handle(3)}
              className={
                filters.delivery
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                {status[2]}
              </div>
            </div>
            <div
              onClick={() => filter_handle(4)}
              className={
                filters.shiped
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                {status[3]}
              </div>
            </div>
            <div
              onClick={() => filter_handle(5)}
              className={
                filters.return
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                {status[4]}
              </div>
            </div>
            <div
              onClick={() => filter_handle(9)}
              className={
                filters.canclled
                  ? "rounded-lg overflow-hidden flex flex-row items-center text-primary-primary-500  bg-primary-primary-50 justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                ยกเลิกสินค้า
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-neutral-gray-gray-400">
            <Dialog
              maxWidth={false}
              fullWidth
              open={open}
              onClose={handleClose}
              PaperProps={{
                component: "form",
              }}
            >
              <DialogTitle>ค้นหา</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent sx={{ paddingTop: 0 }}>
                <TextField
                  value={inputSearch}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="search"
                  label="กรุณาพิมพ์หมายเลขคำสั่งซื้อเพื่อค้นหา"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={ChangeSearch}
                />
              </DialogContent>
              <DialogContent>
                <div className="flex flex-row w-full">
                  <div className=" flex flex-col items-start justify-start text-primary-primary-500">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50"
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
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-start">
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                              {`${new Date(item.createdAt).getDate()} ${
                                months[new Date(item.createdAt).getMonth()]
                              } ${new Date(item.createdAt).getFullYear() + 543}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-start">
                          <div className="flex flex-col items-start justify-center">
                            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                              {item.customer_name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col items-start justify-start">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col items-start justify-start">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            ฿{item.amount_total}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col items-start justify-start">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.status === 9
                              ? "ยกเลิกสินค้าแล้ว"
                              : item.tracking_id
                              ? item.tracking_id
                              : "กำลังดำเนินการ"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start text-center">
                    {search.map((item, index) => (
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
                  <div className="flex flex-col items-start justify-start text-right text-neutral-black-black-500">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        {item.status === 9 ? (
                          <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                            <Link to={"/Dashboad/Order/Detail"}>
                              <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/fisreye.svg"
                              />
                            </Link>
                          </div>
                        ) : (
                          <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                            <Link to={"/Dashboad/Order/Detail"} state={item}>
                              <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/fisreye.svg"
                              />
                            </Link>
                            <Link to={"/Dashboad/Order/Edit"} state={item}>
                              <img
                                className="relative w-4 h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/img/fisrpencil.svg"
                              />
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div
              onClick={handleClickOpen}
              className=" hover:border-primary-primary-500/40 hover:opacity-70 cursor-pointer rounded-lg bg-neutral-white box-border w-[200px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-3 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-100"
            >
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/firrsearch1.svg"
                />
              </div>
              <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                <div className="relative tracking-[0.01em] leading-[20px]">
                  ค้นหาคำสั่งซื้อ. . .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start z-[0]">
          <div className="w-full overflow-hidden flex flex-row items-start justify-start z-[1]">
            <div className=" flex flex-col items-start justify-start text-primary-primary-500">
              <div className="bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="relative w-5 h-5">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-primary-500" />
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/img/minus.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  หมายเลขคำสั่งซื้อ
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50"
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
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  วันที่สั่งซื้อ
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {`${new Date(item.createdAt).getDate()} ${
                          months[new Date(item.createdAt).getMonth()]
                        } ${new Date(item.createdAt).getFullYear() + 543}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  ลูกค้า
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.customer_name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  รายการ
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      {item.quantity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                จำนวนเงินทั้งหมด
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      ฿{item.amount_total}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  หมายเลขพัสดุ
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      {item.status === 9
                        ? "ยกเลิกสินค้าแล้ว"
                        : item.tracking_id
                        ? item.tracking_id
                        : "กำลังดำเนินการ"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start text-center">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-left text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  สถานะ
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
            <div className="flex flex-col items-start justify-start text-right text-neutral-black-black-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  เพิ่มเติม
                </div>
              </div>
              {order.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  {item.status === 9 ? (
                    <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                      <Link to={"/Dashboad/Order/Detail"} state={item}>
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisreye.svg"
                        />
                      </Link>
                    </div>
                  ) : (
                    <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                      <Link to={"/Dashboad/Order/Detail"} state={item}>
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisreye.svg"
                        />
                      </Link>
                      <Link to={"/Dashboad/Order/Edit"} state={item}>
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/img/fisrpencil.svg"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
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
        </div>
      </div>
    </div>
  );
};

export default Order;
