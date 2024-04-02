import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import instance_auth from "./utities/instance_auth";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";

const AddCategory: FunctionComponent = () => {
  interface category_Typee {
    category_name: string;
    description: string;
    imgURL: File | null;
  }
  const [category, setCategory] = useState<category_Typee>(
    {} as category_Typee
  );
  const [err, setErr] = useState();
  const handlerSubmitCategories = async (e: FormEvent) => {
    e.preventDefault();
    const data: HTMLFormElement = document.querySelector("#categories")!;
    const form = new FormData(data);
    await instance_auth({
      method: "post",
      url: "/categories/add",
      responseType: "json",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: form,
    }).then((res) => {
      if (res.status === 200) {
        location.href = "/Dashboad/Categories";
      } else {
        setErr(res.data);
      }
    });
  };

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-regular">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start gap-[24px] z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              Add Category
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
                Categories
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                Add Category
              </div>
            </div>
          </div>
          <div className=" relative top-[0px] right-[50px] flex flex-row items-start justify-start gap-[16px] text-sm text-neutral-gray-gray-400">
            <a
              href="/Dashboad/Categories"
              className=" no-underline rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] border-[1px] border-solid border-neutral-gray-gray-400"
            >
              <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
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
            <form
              id="categories"
              onSubmit={handlerSubmitCategories}
              encType="multipart/form-data"
            >
              <button
                type="submit"
                className="rounded-lg cursor-pointer bg-primary-primary-500 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[4px] text-neutral-white"
              >
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  Add Category
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="self-stretch h-[740px] flex flex-row items-start justify-start gap-[24px] z-[0] text-lg">
          <div className="rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[264px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[14px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              Thumbnail
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[0] text-sm text-neutral-black-black-300">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                  Photo
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-col items-center justify-center pb-9 pt-5 px-3 gap-[16px] text-center text-neutral-gray-gray-400 border-[1px] border-dashed border-neutral-gray-gray-100">
                {category.imgURL ? (
                  <img
                    className="relative overflow-hidden shrink-0"
                    alt=""
                    width={200}
                    height={200}
                    src={
                      category.imgURL &&
                      URL.createObjectURL(new Blob([category.imgURL]))
                    }
                  />
                ) : (
                  <>
                    <div className="rounded-lg bg-primary-primary-500 w-11 h-11 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                        alt=""
                        src="/img/fisrpicture.svg"
                      />
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px]">
                      Drag and drop image here, or click add image size 600x600
                    </div>
                  </>
                )}
                <div className="rounded-lg bg-primary-primary-50  flex flex-row items-center p-2 w-[80px] justify-center text-primary-primary-500">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    <input
                      form="categories"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (!e.target.files?.item(0)) return;
                        const file = e.target.files.item(0);
                        if (file) {
                          setCategory({ ...category, imgURL: file });
                        }
                      }}
                      type="file"
                      name="category_image"
                      accept="image/png, image/jpg, image/jpeg"
                      className="cursor-pointer file:hidden absolute w-full pt-[35px] file:border-none file:m-0 file:p-0 file:bg-transparent file:text-transparent"
                      required
                    />
                    <span className="">Add Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[14px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[28px] font-semibold z-[1]">
              General Information
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[14px] z-[0] text-sm text-neutral-black-black-300">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Category Name{" "}
                    <span className=" text-secondary-red-red-500 relative left-[30px]">
                      {err}
                    </span>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-neutral-gray-gray-25 overflow-hidden flex flex-row items-center justify-start py-2 px-3 text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                  <div className="flex-1 h-6 flex flex-row items-center justify-start">
                    <div className="relative tracking-[0.01em] leading-[20px]">
                      <input
                        form="categories"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setCategory({
                            ...category,
                            category_name: e.target.value,
                          })
                        }
                        type="text"
                        name="category_name"
                        placeholder="Type category name here. . ."
                        className=" focus:outline-none w-[800px] h-[34px] bg-transparent"
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
                        form="categories"
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setCategory({
                            ...category,
                            description: e.target.value,
                          })
                        }
                        name="description"
                        className=" w-[800px] h-[130px] resize-none focus:outline-none bg-transparent"
                        placeholder="Type category description here. . ."
                      />
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

export default AddCategory;
