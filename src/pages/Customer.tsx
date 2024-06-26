import { FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
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
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

interface customer_Type {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  imgURL: string;
  createdAt: Date;
  updatedAt: Date;
}

const Customer: FunctionComponent = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<customer_Type[]>([]);
  const [customers, setCustomer] = useState<customer_Type[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<customer_Type[]>([]);
  const [search_Data, setSearch_Data] = useState<customer_Type[]>([]);
  const [inputSearch, setInputSearch] = useState<string | null>(null);

  const Search = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/customers/get_customers",
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
      search_Data.filter((item: customer_Type) => {
        return (
          String(item.first_name)
            .concat(String(item.last_name))
            .toLowerCase()
            .search(value) !== -1 && value.trim().length >= 1
        );
      })
    );
    setInputSearch(value);
  };
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
  const get_customer_admin = async () => {
    await instance_auth({
      method: "get",
      url: "/customers/get_customers",
      responseType: "json",
    }).then((res) => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };
  useEffect(() => {
    const sortByLstest = data.sort(
      (a: customer_Type, b: customer_Type) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    const itemOffset = ((page - 1) * 10) % sortByLstest.length;
    const endOffset = itemOffset + 10;
    setCustomer(sortByLstest.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sortByLstest.length / 10));
  }, [page, pageCount, data]);

  useEffect(() => {
    get_customer_admin();
  }, []);

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch w-full flex flex-col items-start justify-start py-8 px-6 box-border gap-[24px] text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[5] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              ลูกค้า
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
                รายการลูกค้า
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between z-[4] text-neutral-gray-gray-500">
          <div className="rounded-lg bg-neutral-white overflow-hidden flex flex-row items-start justify-start p-1 border-[1px] border-solid border-neutral-gray-gray-100">
            <div className="rounded-md bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-1.5 px-3 text-primary-primary-500">
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                ทั้งหมด
              </div>
            </div>
          </div>
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
                label="กรุณาพิมพ์ชื่อลูกค้าเพื่อค้นหา"
                type="text"
                fullWidth
                variant="standard"
                onChange={ChangeSearch}
              />
            </DialogContent>
            <DialogContent>
              <div className="flex gap-y-[40px] gap-x-[40px] justify-start w-full flex-wrap">
                {search.map((item, index) => (
                  <Link
                    to={"/Dashboad/Customer/Detail-Customer"}
                    state={item}
                    key={index}
                    className="flex flex-col items-start justify-start gap-[24px] z-[3] text-center no-underline text-black"
                  >
                    <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start  relative gap-[16px] border-[1px] border-solid border-primary-primary-500 px-[50px] py-[20px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
                        <img
                          src={`${import.meta.env.VITE_BASE_API}/img/${
                            item.imgURL
                          }`}
                          alt=""
                          className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20"
                        />
                        <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                            {item.first_name}&nbsp;{item.last_name}
                          </div>
                          <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                            <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                              ปกติ
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
                        alt=""
                        src="/img/divider1.svg"
                      />
                      <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
                        <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                          <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                            เพิ่มเมื่อ
                          </div>
                          <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                            {`${new Date(item.createdAt).getDate()} ${
                              months[new Date(item.createdAt).getMonth()]
                            } ${new Date(item.createdAt).getFullYear() + 543}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          <div className="flex flex-row items-start justify-start gap-[16px] text-neutral-gray-gray-400">
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
                  ค้นหาลูกค้า. . .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-y-[40px] gap-x-[40px] justify-start w-full flex-wrap">
          {customers.map((item, index) => (
            <Link
              to={"/Dashboad/Customer/Detail-Customer"}
              state={item}
              key={index}
              className="flex flex-col items-start justify-start gap-[24px] z-[3] text-center no-underline text-black"
            >
              <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start  relative gap-[16px] border-[1px] border-solid border-primary-primary-500 px-[50px] py-[20px]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[16px] z-[0]">
                  <img
                    src={`${import.meta.env.VITE_BASE_API}/img/${item.imgURL}`}
                    alt=""
                    className="relative rounded-81xl bg-neutral-gray-gray-100 w-20 h-20"
                  />
                  <div className="self-stretch flex flex-col items-center justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-semibold">
                      {item.first_name}&nbsp;{item.last_name}
                    </div>
                    <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-secondary-green-green-600">
                      <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                        ปกติ
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
                  alt=""
                  src="/img/divider1.svg"
                />
                <div className="self-stretch flex flex-row items-center justify-center gap-[10px] z-[2] text-xs text-neutral-gray-gray-500">
                  <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[18px]">
                      เพิ่มเมื่อ
                    </div>
                    <div className="self-stretch relative text-sm tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      {`${new Date(item.createdAt).getDate()} ${
                        months[new Date(item.createdAt).getMonth()]
                      } ${new Date(item.createdAt).getFullYear() + 543}`}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[12px] z-[0] text-neutral-gray-gray-500">
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
  );
};

export default Customer;
