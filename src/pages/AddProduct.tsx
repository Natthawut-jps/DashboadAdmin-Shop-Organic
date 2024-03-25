import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Sidebar } from "./utities/Sidebar";
import instance_auth from "./utities/instance_auth";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Header from "./utities/Header";

const AddProduct: FunctionComponent = () => {
  interface product_Type {
    name: string;
    price: number;
    categories: string;
    product_image: File;
    description: string;
    quantity: number;
    status: number;
  }
  const [product, setProduct] = useState<product_Type>({} as product_Type);
  const [error_product, setErrorProduct] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // add products
  const handleSubmitAddProduct = async (e: FormEvent) => {
    e.preventDefault();
    if (product.categories && product.status) {
      const keys = Object.keys(product);
      const values = Object(product);
      const form = new FormData();
      const result = keys.map((item) => {
        form.append(item, values[item]);
      });
      for (let p of form) {
        console.log(p);
      }
      if (result) {
        await instance_auth({
          method: "post",
          url: "/products/add",
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
     setError('"Categories" and "Status" required')
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
  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-medium">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header/>
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Add Product
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
                Add Product
              </div>
            </div>
          </div>
          <span className=" text-secondary-red-red-500 relative right-[50px] text-[16px]">{error}</span>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-neutral-gray-gray-400">
            <a
              href={"/Dashboad/Product"}
              className="rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-400 no-underline text-neutral-gray-gray-400"
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
              id="product"
              onSubmit={handleSubmitAddProduct}
              encType="multipart/form-data"
            >
              <button
                type="submit"
                className="rounded-lg bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white cursor-pointer"
              >
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Add Product
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
                      <span className=" text-secondary-red-red-500">
                        {error_product}
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        <input
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setProduct({ ...product, name: e.target.value });
                          }}
                          form="product"
                          name="name"
                          type="text"
                          placeholder="Type product name here. . ."
                          className=" w-[800px] h-[30px] focus:outline-none bg-transparent"
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
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => {
                            setProduct({
                              ...product,
                              description: e.target.value,
                            });
                          }}
                          name="description"
                          form="product"
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
                  {product.product_image ? (
                    <div className="rounded-lg w-full h-full overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative overflow-hidden shrink-0"
                        alt=""
                        width={300}
                        height={300}
                        src={
                          product.product_image &&
                          URL.createObjectURL(new Blob([product.product_image]))
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
                  {product.product_image ? null : (
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
                            setProduct({ ...product, product_image: file });
                          }
                        }}
                        type="file"
                        name="product_image"
                        form="product"
                        accept="image/png, image/jpg, image/jpeg"
                        className="cursor-pointer file:hidden absolute w-full pt-[35px] file:border-none file:m-0 file:p-0 file:bg-transparent file:text-transparent text-transparent bg-transparent"
                        required
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
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setProduct({
                              ...product,
                              price: e.target.valueAsNumber,
                            });
                          }}
                          type="number"
                          name="price"
                          form="product"
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
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setProduct({
                              ...product,
                              quantity: e.target.valueAsNumber,
                            });
                          }}
                          type="number"
                          name="quatity"
                          form="product"
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
                          sx={{
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "rgba(228, 219, 233, 1)",
                            },
                          }}
                          name="categories"
                          labelId="categories"
                          label="Select a category"
                          onChange={(e: SelectChangeEvent) => {
                            setProduct({
                              ...product,
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
                        sx={{
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "rgba(228, 219, 233, 1)",
                          },
                        }}
                        name="status"
                        labelId="status"
                        label="Select a Darft"
                        onChange={(e: SelectChangeEvent) => {
                          setProduct({
                            ...product,
                            status: parseInt(e.target.value),
                          });
                        }}
                      >
                        <MenuItem value={0}>Darft</MenuItem>
                        <MenuItem value={1}>Out Stock</MenuItem>
                        <MenuItem value={2}>Processing</MenuItem>
                        <MenuItem value={3}>Published</MenuItem>
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

export default AddProduct;
