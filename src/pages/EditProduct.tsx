import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import { useLocation } from "react-router-dom";
import instance_auth from "./utities/instance_auth";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface product_Type {
  id: number;
  name: string;
  price: number;
  categories: string;
  imgURL: File | null | string;
  description: string;
  quantity: number;
  status: number;
}

const EditProduct: FunctionComponent = () => {
  const state_product: product_Type = useLocation().state;
  const [edit_product, setEditProduct] = useState<product_Type>({
    id: state_product.id,
    name: state_product.name,
    price: state_product.price,
    categories: state_product.categories,
    imgURL: null,
    description: state_product.description,
    quantity: state_product.quantity,
    status: state_product.status,
  });
  const [error_product, setErrorProduct] = useState<string | null>(null);
  const status_product = ["Out of Stock", "Low Stock", "Published"];

  // add products
  const handleSubmitEditProduct = async (e: FormEvent) => {
    e.preventDefault();
    if (edit_product) {
      const keys = Object.keys(edit_product);
      const values = Object(edit_product);
      const form = new FormData();
      const result = keys.map((item) => {
        form.append(item, values[item]);
      });
      form.append("image_old", state_product.imgURL as string);
      if (result && form) {
        await instance_auth({
          method: "post",
          url: "/products/edit",
          responseType: "json",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: form,
        }).then((res) => {
          if (res.status === 200) {
            location.href = "/Dashboad/Product";
          } else {
            setErrorProduct(res.data);
          }
        });
      }
    } else {
      console.log("not found data");
    }
  };
  // categories
  interface categories_Type {
    id: number;
    category_name: string;
    description: string;
    imgURL: string;
  }
  const [categories, setCategories] = useState<categories_Type[]>([]);
  const get_category = async () => {
    try {
      await instance_auth({
        method: "get",
        url: "/categories/get_data",
        responseType: "json",
      }).then((res) => {
        if (res.status === 200) {
          setCategories(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_category();
  }, []);

  console.log(edit_product);
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-medium">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Edit Product
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
                Product List
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Edit Product
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-neutral-gray-gray-400">
            <a
              href="/Dashboad/Product"
              className="rounded-lg text-neutral-gray-gray-400 no-underline overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-400"
            >
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcross.svg"
                />
              </div>
              <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                Cancel
              </div>
            </a>
            <form
              id="edit_product"
              onSubmit={handleSubmitEditProduct}
              encType="multipart/form-data"
            >
              <button
                type="submit"
                className="rounded-lg bg-primary-primary-500 cursor-pointer overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] opacity-[0.65] text-neutral-white"
              >
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrdisk.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Save Product
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[0] text-lg">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                General Information
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product Name{" "}
                      <span className=" text-secondary-red-red-500 relative left-[15px]">
                        {error_product}
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        <input
                          disabled
                          value={edit_product.name}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setEditProduct({
                              ...edit_product,
                              name: e.target.value,
                            });
                          }}
                          form="edit_product"
                          name="name"
                          type="text"
                          placeholder="Type product name here. . ."
                          className=" w-[800px] h-[30px] focus:outline-none bg-transparent cursor-not-allowed"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Description (optional)
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-[140px] overflow-hidden flex flex-row items-start justify-start">
                      <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                        <textarea
                          value={edit_product.description}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => {
                            setEditProduct({
                              ...edit_product,
                              description: e.target.value,
                            });
                          }}
                          name="description"
                          form="edit_product"
                          placeholder="Type product description here. . ."
                          className=" w-[800px] h-[135px] focus:outline-none resize-none bg-transparent"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Media
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Photo
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-col items-center justify-center py-6 px-3 gap-[16px] text-neutral-gray-gray-400 border-[1px] border-dashed border-neutral-gray-gray-100">
                  {edit_product.imgURL || state_product.imgURL ? (
                    <div className="rounded-lg w-full h-full overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative overflow-hidden shrink-0"
                        alt=""
                        width={300}
                        height={300}
                        src={
                          edit_product.imgURL
                            ? URL.createObjectURL(
                                new Blob([edit_product.imgURL])
                              )
                            : `${import.meta.env.VITE_BASE_API}/img/${String(
                                state_product.imgURL
                              )}`
                        }
                      />
                    </div>
                  ) : (
                    <div className="rounded-lg bg-primary-primary-500 w-11 h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrpicture.svg"
                      />
                    </div>
                  )}
                  {edit_product.imgURL ? null : (
                    <div className="relative tracking-[0.01em] leading-[20px]">
                      Drag and drop image here, or click add image size 600x600
                    </div>
                  )}
                  <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 text-primary-primary-500">
                    <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (!e.target.files?.item(0)) return;
                          const file: File | null = e.target.files.item(0);
                          if (file) {
                            setEditProduct({
                              ...edit_product,
                              imgURL: file,
                            });
                          }
                        }}
                        type="file"
                        name="product_image"
                        form="edit_product"
                        accept="image/png, image/jpg, image/jpeg"
                        className="cursor-pointer file:hidden absolute w-full pt-[35px] file:border-none file:m-0 file:p-0 file:bg-transparent file:text-transparent text-transparent bg-transparent"
                      />
                      <span>Add Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Pricing
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Base Price
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 gap-[4px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                      ฿
                    </div>
                    <div className="flex-1 h-6 flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        <input
                          value={edit_product.price}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setEditProduct({
                              ...edit_product,
                              price: e.target.valueAsNumber,
                            });
                          }}
                          type="number"
                          name="price"
                          form="edit_product"
                          className=" w-[800px] h-[30px] focus:outline-none bg-transparent"
                          placeholder="Type base price here. . ."
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Inventory
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Quantity
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 overflow-hidden flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        <input
                          value={edit_product.quantity}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setEditProduct({
                              ...edit_product,
                              quantity: e.target.valueAsNumber,
                            });
                          }}
                          type="number"
                          name="quatity"
                          form="edit_product"
                          className=" w-[820px] h-[30px] focus:outline-none bg-transparent"
                          placeholder="Type product quantity here. . ."
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[264px] flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
                Category
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                      Product Category
                    </div>
                  </div>
                  <div className="">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                      <FormControl
                        required
                        size="small"
                        sx={{
                          width: 200,
                          m: 1,
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "black",
                          },
                        }}
                      >
                        <InputLabel id="categories">
                          Select a category
                        </InputLabel>
                        <Select
                          required
                          value={edit_product.categories}
                          sx={{
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "rgba(228, 219, 233, 1)",
                            },
                          }}
                          name="categories"
                          labelId="categories"
                          label="Select a category"
                          onChange={(e: SelectChangeEvent) => {
                            setEditProduct({
                              ...edit_product,
                              categories: e.target.value,
                            });
                          }}
                        >
                          {categories.map((item, index) => (
                            <MenuItem key={index} value={item.category_name}>
                              {item.category_name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] z-[1]">
                <div className="flex-1 relative tracking-[0.01em] leading-[28px] font-semibold">
                  Status
                </div>
                <div className="rounded-lg bg-neutral-gray-gray-50 flex flex-col items-center justify-center py-1 px-2.5 text-sm text-neutral-gray-gray-500">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    Draft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Product Status
                  </div>
                </div>
                <div className="">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    <FormControl
                      required
                      size="small"
                      sx={{
                        width: 200,
                        m: 1,
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "black",
                        },
                      }}
                    >
                      <InputLabel id="status">Select a Draft</InputLabel>
                      <Select
                        value={String(edit_product.status)}
                        sx={{
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(228, 219, 233, 1)",
                          },
                        }}
                        name="status"
                        labelId="status"
                        label="Select a Darft"
                        onChange={(e: SelectChangeEvent) => {
                          setEditProduct({
                            ...edit_product,
                            status: parseInt(e.target.value),
                          });
                        }}
                      >
                        <MenuItem value={1}>{status_product[0]}</MenuItem>
                        <MenuItem value={2}>{status_product[1]}</MenuItem>
                        <MenuItem value={3}>{status_product[2]}</MenuItem>
                      </Select>
                    </FormControl>
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

export default EditProduct;
