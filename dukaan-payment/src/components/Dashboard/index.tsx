import Navbar from "../Navbar";
import PaginationComponent from "../Pagination";
import TransitionTable from "./TransitionTable";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="p-8 flex flex-col gap-5 items-start">
        <div className="w-full">
          <div className="w-full flex justify-between items-center self-stretch">
            <p
              className="text-[#1A181E] text-xl font-medium leading-7"
              style={{
                fontFamily: "Inter",
              }}
            >
              Overview
            </p>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="bg-[#FFF] rounded border border-[#D9D9D9] px-[14px] py-[6px] flex justify-center items-center gap-[7px]"
              type="button"
            >
              <p
                className="text-[#4D4D4D] text-base font-normal leading-6"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Last Month
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full flex self-stretch gap-5 items-start">
          <div className="w-full flex justify-center items-ceter gap-6">
            <div className="w-full flex p-5 flex-col items-start gap-4 rounded-lg bg-[#FFF] shadow-[px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center gap-2">
                  <p
                    className="text-[#4D4D4D] text-base font-normal leading-6"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    Online orders
                  </p>
                </div>
                <p
                  className="text-[#1A181E] text-[32px] font-medium leading-[38px]"
                  style={{
                    fontFamily: "Inter",
                  }}
                >
                  231
                </p>
              </div>
            </div>
            <div className="w-full flex p-5 flex-col items-start gap-4 rounded-lg bg-[#FFF] shadow-[px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center gap-2">
                  <p
                    className="text-[#4D4D4D] text-base font-normal leading-6"
                    style={{
                      fontFamily: "Inter",
                    }}
                  >
                    Amount received
                  </p>
                </div>
                <p
                  className="text-[#1A181E] text-[32px] font-medium leading-[38px]"
                  style={{
                    fontFamily: "Inter",
                  }}
                >
                  ₹23,92,312.19
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          className="text-[#1A181E] text-xl font-mediuem leading-7"
          style={{
            fontFamily: "Inter",
          }}
        >
          Transactions | This Month
        </p>
        <div className="w-full flex px-3 pt-3 pb-4 flex-col items-end rounded-lg bg-[#FFF] shadow-[0px 2px 6px 0px rgba(26, 24, 30, 0.04)]">
          <div className="w-full flex flex-col items-end gap-3">
            <div className="w-full flex justify-between items-center self-stretch">
              <form>
                <div className="w-full relative">
                  <div className="w-full absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_80404_3685)">
                        <path
                          d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                          fill="#999999"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_80404_3685">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="w-full border border-[#D9D9D9]  bg-[#FFF] block w-full py-[9px] px-4 ps-8 text-sm text-gray-900  rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search by order ID..."
                    required
                  />
                </div>
              </form>
              <div className="flex items-center justify-end gap-3">
                <button className="flex py-1.5 px-3 items-center gap-1.5 rounded border border-[#D9D9D9] bg-[#FFF]">
                  <p className="text-[#4D4D4D] text-base font-normal leading-6 ">
                    Sort
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.62301 9.93375C1.83129 9.72547 2.16897 9.72547 2.37725 9.93375L4.641 12.1975L6.90474 9.93375C7.11302 9.72547 7.45071 9.72547 7.65899 9.93375C7.86727 10.142 7.86727 10.4797 7.65899 10.688L5.01812 13.3289C4.80984 13.5371 4.47215 13.5371 4.26387 13.3289L1.62301 10.688C1.41473 10.4797 1.41473 10.142 1.62301 9.93375Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.64095 2.51515C4.9355 2.51515 5.17428 2.75393 5.17428 3.04849L5.17428 12.9517C5.17428 13.2463 4.9355 13.4851 4.64095 13.4851C4.3464 13.4851 4.10762 13.2463 4.10762 12.9517L4.10762 3.04849C4.10762 2.75393 4.3464 2.51515 4.64095 2.51515Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3772 6.06646C14.169 6.27474 13.8313 6.27474 13.623 6.06646L11.3592 3.80272L9.0955 6.06646C8.88722 6.27474 8.54953 6.27474 8.34126 6.06646C8.13298 5.85818 8.13298 5.52049 8.34126 5.31221L10.9821 2.67135C11.1904 2.46307 11.5281 2.46307 11.7364 2.67135L14.3772 5.31221C14.5855 5.52049 14.5855 5.85818 14.3772 6.06646Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.3593 13.4851C11.0647 13.4851 10.826 13.2463 10.826 12.9517L10.826 3.04847C10.826 2.75392 11.0647 2.51514 11.3593 2.51514C11.6538 2.51514 11.8926 2.75392 11.8926 3.04847L11.8926 12.9517C11.8926 13.2463 11.6538 13.4851 11.3593 13.4851Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </button>
                <button className="h-9 w-9 rounded border border-[#D9D9D9] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <TransitionTable/>
            <div className="w-full">

          <PaginationComponent/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
