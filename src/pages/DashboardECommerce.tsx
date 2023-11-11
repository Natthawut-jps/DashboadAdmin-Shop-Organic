import { FunctionComponent } from "react";

const DashboardECommerce: FunctionComponent = () => {
  return (
    <div className="relative bg-neutral-white-base-color w-full overflow-hidden flex flex-row items-start justify-start text-left text-sm text-neutral-black-black-400 font-text-s-regular">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-6 gap-[24px] text-neutral-black-black-500">
        <div className="self-stretch flex flex-row items-center justify-start gap-[32px] z-[5] text-neutral-gray-gray-400">
          <div className="flex-1 rounded-lg overflow-hidden flex flex-row items-center justify-start py-2 pr-3 pl-2 gap-[8px]">
            <div className="w-6 h-6 flex flex-row items-center justify-center">
              <img
                className="relative w-[18.02px] h-[18.02px]"
                alt=""
                src="/firrsearch.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px] font-medium">
              Search
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-3xs text-neutral-white-base-color font-inter">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcalendar.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start p-2">
                <div className="w-6 h-6 flex flex-row items-center justify-center relative gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0 z-[0]"
                    alt=""
                    src="/fisrbell.svg"
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
                    src="/fisrenvelope.svg"
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
            <img className="relative w-px h-10" alt="" src="/divider.svg" />
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-sm text-neutral-black-black-500 font-text-s-regular">
              <div className="flex flex-col items-end justify-start relative">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-8 h-8 z-[0]" />
                <div className="absolute my-0 mx-[!important] right-[-2px] bottom-[-2px] rounded-[50%] bg-secondary-green-green-500 box-border w-3.5 h-3.5 z-[1] border-[2px] border-solid border-neutral-white-base-color" />
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
                  src="/fisrcaretdown.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between z-[4] text-9xl text-neutral-black-black-700">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[0.01em] font-medium inline-block w-[469px]">
              Welcome Back Jay
            </div>
            <div className="relative text-lg tracking-[0.01em] leading-[28px] text-neutral-black-black-300 inline-block w-[469px]">
              Lorem ipsum dolor si amet welcome back jay
            </div>
          </div>
          <div className="rounded-lg bg-neutral-white-base-color overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-sm text-neutral-black-black-400 border-[1px] border-solid border-neutral-gray-gray-100">
            <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrcalendar1.svg"
              />
            </div>
            <div className="relative tracking-[0.01em] leading-[20px]">
              Select Dates
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[3] text-base text-gray-100">
          <div className="flex-1 rounded-xl bg-neutral-black-black-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px]">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/fisrmoney.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                Total Revenue
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  $75,500
                </div>
                <div className="rounded bg-gray-400 flex flex-col items-center justify-center py-0.5 px-1.5 text-center text-xs">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    +10%
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/ornament.svg"
            />
          </div>
          <div className="flex-1 rounded-xl bg-primary-primary-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px]">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/fisrcreditcard.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                Total Order
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  31,500
                </div>
                <div className="rounded bg-gray-400 flex flex-col items-center justify-center py-0.5 px-1.5 text-center text-xs">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    +15%
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/ornament1.svg"
            />
          </div>
          <div className="flex-1 rounded-xl bg-secondary-blue-blue-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px]">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/fisruseradd.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                Total Customer
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  $24,500
                </div>
                <div className="rounded bg-gray-400 flex flex-col items-center justify-center py-0.5 px-1.5 text-center text-xs">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    -25%
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/ornament2.svg"
            />
          </div>
          <div className="flex-1 rounded-xl bg-secondary-cyan-cyan-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start p-5 relative gap-[16px] text-gray-300">
            <div className="rounded-lg bg-gray-200 w-9 h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[2]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/fisrbox.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
              <div className="self-stretch relative tracking-[0.01em] leading-[24px] font-medium">
                Total Product
              </div>
              <div className="flex flex-row items-center justify-center gap-[8px] text-9xl text-neutral-white-base-color">
                <div className="relative tracking-[0.01em] font-semibold">
                  247
                </div>
                <div className="rounded bg-gray-400 flex flex-col items-center justify-center py-0.5 px-1.5 text-center text-xs">
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    0%
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/ornament3.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[2] text-xl">
          <div className="rounded-lg bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] w-[360px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[24px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  Target
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  Revenue Target
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrmenudotsvertical.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-start gap-[16px] z-[0] text-9xl">
              <div className="relative w-[264px] h-[132px]">
                <img
                  className="absolute h-[109.09%] w-[104.55%] top-[-4.55%] right-[-2.27%] bottom-[-4.55%] left-[-2.27%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/track.svg"
                />
                <img
                  className="absolute h-[109.09%] w-[89.76%] top-[-4.55%] right-[12.52%] bottom-[-4.55%] left-[-2.27%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/progress.svg"
                />
                <div className="absolute h-[44.7%] w-[70.59%] top-[38.68%] right-[14.71%] bottom-[16.62%] left-[14.71%] flex flex-col items-center justify-center gap-[4px]">
                  <div className="relative tracking-[0.01em] font-semibold">
                    75.55%
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[8px] text-center text-sm text-neutral-gray-gray-500">
                <div className="relative tracking-[0.01em] leading-[20px] inline-block w-[324px]">
                  <span>{`You succeed earn `}</span>
                  <span className="text-neutral-black-black-500">{`$240 `}</span>
                  <span>today, its higher than yesterday</span>
                </div>
                <div className="flex flex-row items-start justify-start gap-[18px] text-xs">
                  <div className="flex flex-col items-center justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[18px] font-medium">
                      Target
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px] text-left text-xl text-neutral-black-black-500">
                      <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                        $20k
                      </div>
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/firrarrowsmalldown.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[18px] font-medium">
                      Revenue
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px] text-left text-xl text-neutral-black-black-500">
                      <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                        $16k
                      </div>
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/firrarrowsmallup.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[4px]">
                    <div className="relative tracking-[0.01em] leading-[18px] font-medium">
                      Today
                    </div>
                    <div className="flex flex-row items-center justify-center gap-[4px] text-left text-xl text-neutral-black-black-500">
                      <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                        $1.5k
                      </div>
                      <img
                        className="relative w-5 h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/firrarrowsmallup.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] flex flex-col items-start justify-start p-6 gap-[20px] border-[1px] border-solid border-neutral-gray-gray-50">
            <div className="self-stretch flex flex-row items-end justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  Statistic
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  Revenue and Sales
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px] text-xs text-neutral-gray-gray-500">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-[50%] bg-primary-primary-500 w-3 h-3" />
                  <div className="relative tracking-[0.01em] leading-[18px] font-medium">
                    Revenue
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative rounded-[50%] bg-secondary-orange-orange-500 w-3 h-3" />
                  <div className="relative tracking-[0.01em] leading-[18px] font-medium">
                    Sales
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[696px] overflow-hidden flex flex-col items-end justify-start relative z-[0] text-right text-xs text-neutral-gray-gray-500">
              <div className="self-stretch flex flex-col items-end justify-start z-[0]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $1.2k
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $1k
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $800
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $600
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $400
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      $200
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative tracking-[0.01em] leading-[18px] flex items-center w-10 shrink-0">
                      0
                    </div>
                    <img
                      className="flex-1 relative max-w-full overflow-hidden h-px"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-12 gap-[4px] text-center">
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Jan
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Feb
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Mar
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Apr
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    May
                  </div>
                  <b className="flex-1 relative tracking-[0.01em] leading-[18px] text-primary-primary-500">
                    Jun
                  </b>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Jul
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Aug
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Sep
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Nov
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Oct
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[18px]">
                    Dec
                  </div>
                </div>
              </div>
              <img
                className="absolute my-0 mx-[!important] h-[calc(100%_-_36px)] w-[calc(100%_-_48px)] top-[9px] right-[0px] bottom-[27px] left-[48px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/line1.svg"
              />
              <div className="my-0 mx-[!important] absolute top-[0px] left-[calc(50%_-_74px)] h-[225px] flex flex-col items-center justify-start gap-[4px] z-[2] text-left text-neutral-white-base-color">
                <div className="rounded-lg bg-neutral-black-black-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start py-3 px-4 gap-[6px]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-primary-primary-500 w-2.5 h-2.5" />
                    <div className="relative tracking-[0.01em] leading-[18px] text-neutral-black-black-100 inline-block w-12 shrink-0">
                      Revenue
                    </div>
                    <div className="relative tracking-[0.01em] leading-[18px]">
                      :
                    </div>
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      1,240
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="relative rounded-[50%] bg-secondary-orange-orange-500 w-2.5 h-2.5" />
                    <div className="relative tracking-[0.01em] leading-[18px] text-neutral-black-black-100 inline-block w-12 shrink-0">
                      Sales
                    </div>
                    <div className="relative tracking-[0.01em] leading-[18px]">
                      :
                    </div>
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      30%
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[50%] bg-primary-primary-500 box-border w-3 h-3 border-[2px] border-solid border-neutral-white-base-color" />
                <img
                  className="flex-1 relative max-h-full w-px"
                  alt=""
                  src="/line2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[1] text-xl">
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-center p-6 gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 relative tracking-[0.01em] leading-[30px] font-semibold">
                Sales Source
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrmenudotsvertical.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[14px] z-[0] text-9xl">
              <div className="flex flex-col items-center justify-start relative">
                <img
                  className="relative w-[252px] h-[252px] z-[0]"
                  alt=""
                  src="/chart.svg"
                />
                <div className="my-0 mx-[!important] absolute top-[calc(50%_-_29.5px)] left-[calc(50%_-_49px)] flex flex-col items-center justify-center gap-[4px] z-[1]">
                  <div className="relative tracking-[0.01em] font-semibold">
                    $75.5k
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[14px] text-sm text-neutral-black-black-400">
                <div className="w-[312px] flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-3xs bg-primary-primary-500 w-3 h-3" />
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Official Website
                  </div>
                  <div className="flex flex-row items-center justify-start text-base text-neutral-black-black-500">
                    <div className="relative tracking-[0.01em] leading-[24px] font-medium">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-3xs bg-secondary-cyan-cyan-500 w-3 h-3" />
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Offline Store
                  </div>
                  <div className="flex flex-row items-center justify-start text-base text-neutral-black-black-500">
                    <div className="relative tracking-[0.01em] leading-[24px] font-medium">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-3xs bg-secondary-yellow-yellow-500 w-3 h-3" />
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Amazon Store
                  </div>
                  <div className="flex flex-row items-center justify-start text-base text-neutral-black-black-500">
                    <div className="relative tracking-[0.01em] leading-[24px] font-medium">
                      $10,000
                    </div>
                  </div>
                </div>
                <div className="w-[312px] flex flex-row items-center justify-start gap-[8px]">
                  <div className="relative rounded-3xs bg-secondary-orange-orange-500 w-3 h-3" />
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Reseller
                  </div>
                  <div className="flex flex-row items-center justify-start text-base text-neutral-black-black-500">
                    <div className="relative tracking-[0.01em] leading-[24px] font-medium">
                      $10,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  Top Product
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  Top Product in This Month
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrmenudotsvertical.svg"
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Logic+ Wireless Mouse
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Mouse
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $1,240
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      PS Wireless Controller
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $1,189
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Ximi Mechanical Keyboard
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $1,100
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Audia Tech Earphone
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    $908
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 hidden flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +10%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Sams S14 Pro
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Tablet
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $900
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Sams A13 5G
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $870
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="relative rounded-lg bg-neutral-gray-gray-100 w-10 h-10" />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Jsound P01 TWS
                    </div>
                    <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  $870
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-center justify-start p-6 gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[1]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  Top Category
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  Top Category in This Month
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrmenudotsvertical.svg"
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[16px] z-[0] text-sm">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-primary-primary-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrsmartphone.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Smartphone
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    1,509
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +12%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-secondary-orange-orange-50 w-10 h-10 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtablet.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Tablet
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    1,460
                  </div>
                  <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-red-red-500">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      -5%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-secondary-green-green-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrheadphones.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Earphone
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    1,229
                  </div>
                  <div className="rounded-md bg-neutral-gray-gray-50 flex flex-col items-center justify-center py-0.5 px-2 text-xs text-neutral-black-black-400">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      0%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-secondary-red-red-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrlaptop.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">{`Laptop & PC`}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    982
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +19%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-secondary-cyan-cyan-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrmouse.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Mouse
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    791
                  </div>
                  <div className="rounded-md bg-secondary-red-red-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-red-red-500">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-secondary-yellow-yellow-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrusbpendrive.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">{`Hardisk & USB Drive`}</div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    679
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +11%
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
                  <div className="rounded-81xl bg-neutral-gray-gray-50 w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/fisrcamera.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                      Camera
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                    679
                  </div>
                  <div className="rounded-md bg-secondary-green-green-50 flex flex-col items-center justify-center py-0.5 px-2 text-center text-xs text-secondary-green-green-600">
                    <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                      +11%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] z-[0]">
          <div className="flex-1 rounded-lg shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start">
            <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[2] border-b-[1px] border-solid border-neutral-gray-gray-50">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px] text-xl">
                <div className="relative tracking-[0.01em] leading-[30px] font-semibold">
                  Recent Orders
                </div>
                <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5 text-center text-sm text-secondary-green-green-600">
                  <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                    +2 Orders
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-white-base-color overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-neutral-gray-gray-400 border-[1px] border-solid border-neutral-gray-gray-100">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcalendar1.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px]">
                  Select Date
                </div>
              </div>
              <div className="rounded-lg bg-neutral-white-base-color overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[8px] text-neutral-gray-gray-500 border-[1px] border-solid border-neutral-gray-gray-100">
                <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrsettingssliders.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                  Filters
                </div>
              </div>
              <div className="rounded-lg bg-primary-primary-50 overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 text-primary-primary-500">
                <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                  See All
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start z-[1]">
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Product
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcaretdown1.svg"
                  />
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Handmade Pouch
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        +3 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Smartwatch E2
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        +1 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Smartwatch E1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Headphone G1 Pro
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        +1 other products
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative rounded-lg bg-neutral-gray-gray-100 w-11 h-11" />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Iphone X
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Customer
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        John Bushmill
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        Johnb@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Ilham Budi Agung
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        ilahmbudi@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Mohammad Karim
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        m_karim@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Linda Blair
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        lindablair@mail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-center gap-[4px]">
                      <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                        Josh Adam
                      </div>
                      <div className="relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                        josh_adam@mail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start text-neutral-gray-gray-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Total
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcaretdown1.svg"
                  />
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      $121.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      $590.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      $125.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      $348.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="relative tracking-[0.01em] leading-[20px] font-medium">
                      $607.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-secondary-orange-orange-500">
                <div className="self-stretch bg-neutral-gray-gray-25 flex flex-row items-center justify-start py-[18px] px-[22px] gap-[8px] text-neutral-black-black-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                    Status
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/fisrcaretdown1.svg"
                  />
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Processing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="rounded-lg bg-secondary-orange-orange-50 flex flex-col items-center justify-center py-1 px-2.5">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Processing
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-cyan-cyan-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Shiped
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-cyan-cyan-500 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="rounded-lg bg-secondary-cyan-cyan-50 flex flex-col items-center justify-center py-1 px-2.5">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Shiped
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] text-center text-secondary-green-green-600 border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center">
                    <div className="rounded-lg bg-secondary-green-green-50 flex flex-col items-center justify-center py-1 px-2.5">
                      <div className="relative tracking-[0.01em] leading-[20px] font-semibold">
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-right">
                <div className="bg-neutral-gray-gray-25 flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="relative tracking-[0.01em] leading-[20px] font-medium inline-block w-[54px] shrink-0">
                    Action
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisreye.svg"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtrash.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisreye.svg"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtrash.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisreye.svg"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtrash.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisreye.svg"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtrash.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch bg-neutral-white-base-color flex flex-row items-start justify-start py-[18px] px-[22px] border-b-[1px] border-solid border-neutral-gray-gray-50">
                  <div className="h-11 flex flex-row items-center justify-center gap-[12px]">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisreye.svg"
                    />
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrtrash.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-white-base-color flex flex-row items-center justify-start py-[18px] px-6 gap-[12px] z-[0] text-neutral-gray-gray-500">
              <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-medium">
                Showing 1-5 from 100
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-center text-primary-primary-500">
                <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/firrcaretleft.svg"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-primary-primary-500 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border text-neutral-white-base-color">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                    1
                  </div>
                </div>
                <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                    2
                  </div>
                </div>
                <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                    3
                  </div>
                </div>
                <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="flex-1 relative tracking-[0.01em] leading-[20px] font-semibold">
                    ...
                  </div>
                </div>
                <div className="rounded-lg bg-primary-primary-50 w-8 h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center p-1.5 box-border">
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrcaretright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-neutral-white-base-color shadow-[0px_4px_30px_rgba(131,_98,_234,_0.05)] w-[360px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-6 box-border relative gap-[22px] text-xl">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px] z-[0]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch relative tracking-[0.01em] leading-[30px] font-semibold">
                  Customer Growth
                </div>
                <div className="relative text-sm tracking-[0.01em] leading-[20px] text-neutral-black-black-300">
                  Based on Country
                </div>
              </div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fisrmenudotsvertical.svg"
              />
            </div>
            <div className="relative rounded-lg bg-neutral-gray-gray-25 w-[312px] h-[180px] overflow-hidden shrink-0 z-[1] text-xs text-neutral-white-base-color">
              <img
                className="absolute top-[calc(50%_-_63px)] left-[0px] w-[575px] h-[246px] overflow-hidden"
                alt=""
                src="/world.svg"
              />
              <div className="absolute top-[12px] left-[95px] rounded-lg bg-neutral-black-black-500 shadow-[0px_4px_30px_rgba(46,_45,_116,_0.05)] overflow-hidden flex flex-col items-start justify-start py-3 px-4 gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative tracking-[0.01em] leading-[18px] text-neutral-black-black-100 inline-block w-[42px] shrink-0">
                    Cust
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px]">
                    :
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    1,240
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <div className="relative tracking-[0.01em] leading-[18px] text-neutral-black-black-100 inline-block w-[42px] shrink-0">
                    Growth
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px]">
                    :
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    30%
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8px] left-[8px] flex flex-row items-start justify-start gap-[8px]">
                <div className="rounded-lg bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-center justify-center p-1.5">
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrzoomin.svg"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-neutral-gray-gray-100 overflow-hidden flex flex-row items-center justify-center p-1.5">
                  <div className="w-5 h-5 flex flex-row items-center justify-center p-2 box-border">
                    <img
                      className="relative w-4 h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/fisrzoomout.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-[312px] overflow-hidden flex flex-col items-start justify-start gap-[18px] z-[2] text-sm">
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    USA
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                    1,240 Customers
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-secondary-green-green-500 w-[54px]" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    80%
                  </div>
                </div>
              </div>
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    Japan
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                    1,240 Customers
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-secondary-orange-orange-500 w-[45px]" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    60%
                  </div>
                </div>
              </div>
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    France
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                    1,240 Customers
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-secondary-yellow-yellow-500 w-9" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    49%
                  </div>
                </div>
              </div>
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    Germany
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                    1,240 Customers
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-primary-primary-500 w-[65px]" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    100%
                  </div>
                </div>
              </div>
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    South Korea
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-black-black-400">
                    1,240
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2.5 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-secondary-red-red-500 w-[13px]" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    50%
                  </div>
                </div>
              </div>
              <div className="w-[312px] flex flex-row items-center justify-center gap-[12px]">
                <div className="relative rounded-81xl bg-neutral-gray-gray-100 w-10 h-10" />
                <div className="flex-1 flex flex-col items-start justify-center gap-[2px]">
                  <div className="self-stretch relative tracking-[0.01em] leading-[20px] font-medium">
                    China
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.01em] leading-[18px] text-neutral-gray-gray-500">
                    1,240 Customers
                  </div>
                </div>
                <div className="w-[100px] flex flex-row items-center justify-start gap-[8px] text-center text-xs text-neutral-gray-gray-400">
                  <div className="flex-1 relative rounded-81xl bg-neutral-gray-gray-100 h-2 overflow-hidden">
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-secondary-red-red-500 w-[17px]" />
                  </div>
                  <div className="relative tracking-[0.01em] leading-[18px] font-semibold">
                    20%
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute h-[calc(100%_-_324px)] top-[300px] right-[0px] bottom-[24px] bg-neutral-gray-gray-50 overflow-hidden flex flex-col items-start justify-start z-[3]">
              <div className="relative bg-primary-primary-500 w-1 h-[156px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardECommerce;
