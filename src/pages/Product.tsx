import { FunctionComponent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar } from "./utities/Sidebar";
import CloseIcon from "@mui/icons-material/Close";
import Header from "./utities/Header";
import instance_auth from "./utities/instance_auth";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Pagination,
  TextField,
} from "@mui/material";

interface product_Type {
  id: number;
  name: string;
  price: number;
  categories: string;
  rating: number;
  imgURL: string;
  description: string;
  quantity: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
interface filter_Type {
  All_Stock: number | null;
  InStock: number | null;
  LowStock: number | null;
  OutStock: number | null;
}
const Product: FunctionComponent = () => {
  const [filters, setFilter] = useState<filter_Type>({} as filter_Type);
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<product_Type[]>([]);
  const [products, setProducts] = useState<product_Type[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<product_Type[]>([]);
  const [search_Data, setSearch_Data] = useState<product_Type[]>([]);
  const [inputSearch, setInputSearch] = useState<string | null>(null);

  const Search = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/products/get_products",
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
    const value: string = e.target.value.toLowerCase();
    setSearch(() =>
      search_Data.filter((item: product_Type) => {
        return (
          item.name.toLowerCase().search(value) !== -1 &&
          value.trim().length >= 1
        );
      })
    );
    setInputSearch(value);
  };
  const status_product = ["สินค้าหมด", "เหลือน้อย", "มีสินค้า"];
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
      url: "/products/get_products",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  const deleted = async (id: number) => {
    await instance_auth({
      method: "post",
      url: "/products/deleted",
      responseType: "json",
      data: { id: id },
    }).then((res) => {
      if (res.status === 200) {
        location.reload();
      }
    });
  };
  const filter_handle = async (value: number = 4) => {
    if (value === 3) {
      setFilter({
        All_Stock: null,
        InStock: value,
        LowStock: null,
        OutStock: null,
      });
    } else if (value === 2) {
      setFilter({
        All_Stock: null,
        InStock: null,
        LowStock: value,
        OutStock: null,
      });
    } else if (value === 1) {
      setFilter({
        All_Stock: null,
        InStock: null,
        LowStock: null,
        OutStock: value,
      });
    } else {
      setFilter({
        All_Stock: value,
        InStock: null,
        LowStock: null,
        OutStock: null,
      });
    }
  };
  useEffect(() => {
    const sortByLstest = data.sort(
      (a: product_Type, b: product_Type) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setProducts(
      sortByLstest
        .slice(itemOffset, endOffset)
        .filter((item: product_Type) =>
          filters.InStock
            ? item.status === 3
            : filters.LowStock
            ? item.status === 2
            : filters.OutStock
            ? item.status === 1
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
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-6 gap-[24px] text-neutral-gray-gray-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[2] text-5xl text-neutral-black-black-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              สินค้า
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
                รายการสินค้า
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-primary-primary-500">
            <NavLink
              to={"/Dashboad/Product/Add"}
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
                เพิ่มสินค้า
              </div>
            </NavLink>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between z-[1]">
          <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-1 border-[1px] border-solid border-neutral-gray-gray-100">
            <div
              onClick={() => filter_handle(4)}
              className={
                filters.All_Stock
                  ? "rounded-md bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500 cursor-pointer"
                  : "rounded-md overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                ทั้งหมด
              </div>
            </div>
            <div
              onClick={() => filter_handle(3)}
              className={
                filters.InStock
                  ? "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500 bg-primary-primary-50 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                มีสินค้า
              </div>
            </div>
            <div
              onClick={() => filter_handle(2)}
              className={
                filters.LowStock
                  ? "text-primary-primary-500 bg-primary-primary-50 rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                เหลือน้อย
              </div>
            </div>
            <div
              onClick={() => filter_handle(1)}
              className={
                filters.OutStock
                  ? "text-primary-primary-500 bg-primary-primary-50 rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
                  : "rounded-lg overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 cursor-pointer"
              }
            >
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                สินค้าหมด
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
              <DialogContent sx={{ 
                paddingTop: 0
              }}>
                <TextField
                  value={inputSearch}
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="search"
                  label="กรุณาพิมพ์ชื่อสินค้าที่ต้องการค้นหา"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={ChangeSearch}
                />
              </DialogContent>
              <DialogContent>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col items-start justify-start text-neutral-black-black-500">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            src={`${import.meta.env.VITE_BASE_API}/img/${
                              item.imgURL
                            }`}
                            alt=""
                            className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11"
                          />
                          <div className="flex flex-col items-start justify-start gap-[4px]">
                            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                              {item.name}
                            </div>
                            <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    {search.map((item, index) => (
                      <div
                        key={index}
                        className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                      >
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                            {item.rating}
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
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                              {item.categories}
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
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            {item.quantity}
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
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                            ฿{item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-start justify-start text-center text-secondary-green-green-600">
                    {search.map((item, index) => (
                      <div key={index}>
                        {item.status === 1 ? (
                          <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-secondary-orange-orange-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                                  {status_product[0]}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : item.status === 2 ? (
                          <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-secondary-yellow-yellow-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                            <div className="h-11 flex flex-row items-center justify-center">
                              <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                                  {status_product[1]}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          item.status === 3 && (
                            <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-green-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                              <div className="h-11 flex flex-row items-center justify-center">
                                <div className="rounded-lg bg-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                                    {status_product[2]}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
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
                          <div className="flex flex-col items-start justify-start">
                            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                              {`${new Date(item.createdAt).getDate()} ${
                                months[new Date(item.createdAt).getMonth()]
                              } ${new Date(item.createdAt).getFullYear()}`}
                            </div>
                          </div>
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
                        <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                          <Link to={"/Dashboad/Product/Edit"} state={item}>
                            <img
                              className="relative w-4 h-4 overflow-hidden shrink-0"
                              alt=""
                              src="/img/fisrpencil.svg"
                            />
                          </Link>
                          <div
                            className=" cursor-pointer"
                            onClick={() => deleted(item.id)}
                          >
                            <img
                              className="relative w-4 h-4 overflow-hidden shrink-0"
                              alt=""
                              src="/img/fisrtrash.svg"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div
              onClick={handleClickOpen}
              className=" cursor-pointer rounded-lg bg-neutral-white box-border w-[200px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-3 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-100"
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
                  ค้นหาสินค้า. . .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start z-[0]">
          <div className="w-full overflow-hidden flex flex-row items-start justify-start z-[1]">
            <div className="flex flex-col items-start justify-start text-neutral-black-black-500">
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
                  สินค้า
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <img
                      src={`${import.meta.env.VITE_BASE_API}/img/${
                        item.imgURL
                      }`}
                      alt=""
                      className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11"
                    />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.name}
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  รีวิว
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      {item.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  หมวดหมู่
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        {item.categories}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  คงเหลือ
                </div>
              </div>
              {products.map((item, index) => (
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
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  ราคา
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      ฿{item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start text-center text-secondary-green-green-600">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-left text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  สถานะ
                </div>
              </div>
              {products.map((item, index) => (
                <div key={index}>
                  {item.status === 1 ? (
                    <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-secondary-orange-orange-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="rounded-lg bg-secondary-red-red-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                            {status_product[0]}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : item.status === 2 ? (
                    <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-secondary-yellow-yellow-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                      <div className="h-11 flex flex-row items-center justify-center">
                        <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                          <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                            {status_product[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    item.status === 3 && (
                      <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] text-left text-green-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                        <div className="h-11 flex flex-row items-center justify-center">
                          <div className="rounded-lg bg-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                            <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                              {status_product[2]}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  วันที่เพิ่ม
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
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
            <div className="flex flex-col items-start justify-start text-right text-neutral-black-black-500">
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  เพิ่มเติม
                </div>
              </div>
              {products.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                    <Link to={"/Dashboad/Product/Edit"} state={item}>
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrpencil.svg"
                      />
                    </Link>
                    <div
                      className=" cursor-pointer"
                      onClick={() => deleted(item.id)}
                    >
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrtrash.svg"
                      />
                    </div>
                  </div>
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

export default Product;
