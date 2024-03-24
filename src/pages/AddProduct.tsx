import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { Sidebar } from "./utities/Sidebar";
import instance_auth from "./utities/instance_auth";

const AddProduct: FunctionComponent = () => {
  const [preview_image, setPreview_Image] = useState<File | null>();
  const handleSubmitAddProduct = async (e: FormEvent) => {
    e.preventDefault();
    const data: HTMLFormElement = document.querySelector("#product")!;
    const form = new FormData(data);
    for (const item of form.entries()) {
      console.log(item);
    }
  };
  interface categories_Type {
    id: number;
    category_name	: string;
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
          console.log(res.data);
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
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[2] text-neutral-gray-gray-400">
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-2 pr-3 pl-2 gap-[8px]">
            <div className="w-6 h-6 flex flex-row items-center justify-center">
              <img
                className="relative w-[18.02px] h-[18.02px]"
                alt=""
                src="/img/firrsearch.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              Search
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-3xs text-neutral-white font-inter">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/img/fisrcalendar.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/img/fisrbell.svg"
                  />
                  <div className="my-0 mx-[!important] absolute top-[-8px] left-[13px] rounded bg-secondary-cyan-cyan-500 flex flex-col items-center justify-center py-0.5 px-1.5 z-[1]">
                    <div className="relative tracking-[0.01em] leading-[136%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/img/fisrenvelope.svg"
                  />
                  <div className="my-0 mx-[!important] absolute top-[-8px] left-[13px] rounded bg-secondary-cyan-cyan-500 flex flex-col items-center justify-center py-0.5 px-1.5 z-[1]">
                    <div className="relative tracking-[0.01em] leading-[136%] font-semibold">
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-7 h-7" />
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/img/divider.svg" />
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-sm text-neutral-black-black-500 font-text-m-medium">
              <div className="flex flex-col items-end justify-start relative">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-8 h-8 z-[0]" />
                <div className="absolute my-0 mx-[!important] right-[-2px] bottom-[-2px] rounded-[50%] bg-secondary-green-green-500 box-border w-3.5 h-3.5 z-[1] border-[2px] border-solid border-neutral-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-[2px]">
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Jay Hargudson
                </div>
                <div className="relative text-xs tracking-[0.01em] leading-[18px] font-medium text-neutral-black-black-400">
                  Manager
                </div>
              </div>
              <div className="w-6 h-6 flex flex-row items-center justify-center">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/img/fisrcaretdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
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
                      Product Name
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 h-6 flex flex-row items-center justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px]">
                        <input
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
                  {preview_image ? (
                    <div className="rounded-lg w-full h-full overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative overflow-hidden shrink-0"
                        alt=""
                        width={300}
                        height={300}
                        src={
                          preview_image &&
                          URL.createObjectURL(new Blob([preview_image]))
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
                  {preview_image ? null : (
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
                            setPreview_Image(file);
                          }
                        }}
                        type="file"
                        name="file"
                        form="product"
                        accept="image/png, image/jpg, image/jpeg"
                        className="cursor-pointer file:hidden absolute w-full pt-[35px] file:border-none file:m-0 file:p-0 file:bg-transparent file:text-transparent  "
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
                  <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                    <div className="flex-1 relative tracking-[0.01em] leading-[20px]">
                      <select
                        name="categories"
                        form="product"
                        className=" w-[200px] h-[30px] rounded-sm focus:outline-none cursor-pointer rounded-b-sm"
                        required
                      >
                        <option value="" hidden selected>
                          Select a category
                        </option>
                        {categories.map((item, index) => (
                          <option key={index} value={item.category_name}>{item.category_name}</option>
                        ))}
                      </select>
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
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 box-border h-10 shrink-0 flex flex-row items-center justify-center py-2.5 px-3 gap-[8px] text-neutral-black-black-500 border-[1px] border-solid border-neutral-gray-gray-100">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    <select
                      form="product"
                      name="status"
                      className=" w-[200px] h-[30px] rounded-sm focus:outline-none cursor-pointer rounded-b-sm"
                      required
                    >
                      <option value="" hidden selected>
                        Select a Draft
                      </option>
                      <option value="0">Darft</option>
                      <option value="1">Out Stock</option>
                      <option value="2">Processing</option>
                      <option value="3">Published</option>
                    </select>
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
