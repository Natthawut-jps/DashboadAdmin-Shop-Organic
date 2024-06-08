import { FunctionComponent } from "react";
import { Sidebar } from "./utities/Sidebar";
import Header from "./utities/Header";
import { useLocation } from "react-router-dom";

interface contact_Typee {
  id: number;
  name: string;
  email: string;
  subject: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactDetails: FunctionComponent = () => {
  const contacts: contact_Typee = useLocation().state;
  const customer_state: contact_Typee = useLocation().state;
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

  return (
    <div className="relative bg-neutral-gray-gray-25 w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-m-semibold">
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start py-8 px-6 gap-[24px] text-neutral-black-black-500">
        <Header />
        <div className="self-stretch flex flex-row items-end justify-start z-[1] text-5xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative tracking-[0.01em] leading-[32px] font-semibold">
              ข้อมูลผู้ติดต่อ
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
              <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                รายการผู้ติดต่อ
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/img/fisrcaretright.svg"
              />
              <div className="relative tracking-[0.01em] leading-[20px] font-medium text-neutral-gray-gray-500">
                ข้อมูลผู้ติดต่อ
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg flex flex-row items-start justify-start gap-[24px] z-[0] text-center text-base">
          <div className="flex flex-col items-start justify-start z-[1]">
            <div className="rounded-xl bg-neutral-white shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden flex flex-col items-center justify-start pt-5 px-6 pb-6 box-border relative gap-[24px]">
              <div className="flex flex-col items-start justify-start gap-[18px] z-[0] text-left text-sm text-neutral-gray-gray-500">
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisridbadge.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      ผู้ติดต่อ
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      {contacts.name}
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrenvelope1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      อีเมลล์
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      {customer_state.email}
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-start justify-start gap-[8px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/img/fisrcalendar1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      วันที่ส่ง
                    </div>
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium text-neutral-black-black-500">
                      {`${new Date(contacts.createdAt).getDate()} ${
                        months[new Date(contacts.createdAt).getMonth()]
                      } ${new Date(contacts.createdAt).getFullYear() + 543}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] z-[0] text-left text-neutral-black-black-300">
            <div className="rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[744px] overflow-hidden flex flex-col items-start justify-start text-sm text-neutral-gray-gray-500">
              <div className=" w-[700px] bg-neutral-white flex flex-col flex-wrap h-auto items-start justify-start py-[18px] px-6 gap-[12px] z-[2] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                <div className="flex-1 flex flex-row items-center justify-start text-xl">
                  <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                    {contacts.subject}
                  </div>
                </div>
                <div className=" flex flex-wrap">{contacts.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
