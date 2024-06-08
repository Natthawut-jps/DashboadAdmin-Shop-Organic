import { FunctionComponent, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar } from "./utities/Sidebar";
import instance_auth from "./utities/instance_auth";
import Header from "./utities/Header";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Pagination,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface category_Typee {
  id: number;
  category_name: string;
  description: string;
  sold: number;
  quantity: number;
  imgURL: string;
  createdAt: Date;
  updatedAt: Date;
}

const Categories: FunctionComponent = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<category_Typee[]>([]);
  const [categories, setCategories] = useState<category_Typee[]>([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<category_Typee[]>([]);
  const [search_Data, setSearch_Data] = useState<category_Typee[]>([]);
  const [inputSearch, setInputSearch] = useState<string | null>(null);

  const Search = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/categories/get_data",
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
      search_Data.filter((item: category_Typee) => {
        return (
          item.category_name.toLowerCase().search(value) !== -1 &&
          value.trim().length >= 1
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
  const get_category = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/categories/get_data",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleted = async (id: number) => {
    try {
      await instance_auth({
        method: "post",
        url: "/categories/deleted",
        responseType: "json",
        data: { id: id },
      }).then((res) => {
        if (res.status === 200) {
          location.reload();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_category();
  }, []);

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

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-gray-gray-400">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl text-neutral-black-black-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit">
              หมวดหมู่
            </h2>
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
                รายการหมวดมู่
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
                label="กรุณาพิมพ์ชื่อหมวดหมู่เพื่อค้นหา"
                type="text"
                fullWidth
                variant="standard"
                onChange={ChangeSearch}
              />
            </DialogContent>
            <DialogContent>
              <div className=" flex flex-row">
                <div className="flex-1 flex flex-col items-start justify-start text-neutral-black-black-500">
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
                          className="relative rounded-lg bg-gainsboro w-11 h-11"
                        />
                        <div className="flex flex-col items-start justify-start gap-[4px]">
                          <div className="relative tracking-[0.01em] leading-[20px] font-medium">{`${item.category_name}`}</div>
                          <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                            {item.description}
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
                          {item.sold}
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
                  {search.map((item, index) => (
                    <div
                      key={index}
                      className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                    >
                      <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                        <Link to={"/Dashboad/Categories/Edit"} state={item}>
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
            className="cursor-pointer rounded-lg bg-neutral-white box-border w-[200px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 px-3 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-100"
          >
            <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/firrsearch1.svg"
              />
            </div>
            <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start text-[14px] text-gray-500">
              <div className="relative tracking-[0.01em] leading-[20px]">
                ค้นหาหมวดหมู่. . .
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-primary-primary-500">
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
                เพิ่มหมวดหมู่
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
                  หมวดหมู่
                </div>
              </div>
              {categories.map((item, index) => (
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
                      className="relative rounded-lg bg-gainsboro w-11 h-11"
                    />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">{`${item.category_name}`}</div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  ขายแล้ว
                </div>
              </div>
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      {item.sold}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch bg-neutral-white flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  จำนวน
                </div>
              </div>
              {categories.map((item, index) => (
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
                  วันที่เพิ่ม
                </div>
              </div>
              {categories.map((item, index) => (
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
              <div className="self-stretch bg-neutral-white flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  เพิ่มเติม
                </div>
              </div>
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50"
                >
                  <div className="h-11 flex flex-row items-center justify-center gap-[20px]">
                    <Link to={"/Dashboad/Categories/Edit"} state={item}>
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
        </a>
      </div>
    </div>
  );
};

export default Categories;
