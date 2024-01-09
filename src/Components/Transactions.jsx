import Search from "./Search";
import { useState } from "react";

const Transactions = () => {
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(false)

  return (
    <div className="bg-[white] rounded-lg p-3 pb-6 mt-5 w-full sm:w-max">
      {/* Searching, Sorting and The option to download all the transactions-------------------------------------------------------------- */}
      <div className="flex justify-between">
        <Search
          placeholder={"Search by Order ID..."}
          inputClassName={"bg-transparent outline-none"}
          spanClassName={
            "flex items-center w-[25%] sm:w-min gap-3 py-[.5625rem] rounded bg-transparent outline outline-[#D9D9D9] px-4 text-gray-500 text-sm font-normal"
          }
        />
        <span className="gap-3 flex">
          <select
            className="py-[.5rem] appearance-none relative rounded pl-3 pr-0 bg-transparent outline outline-[#D9D9D9]"
            name="Last Month"
            id=""
          >
            <option value="This Month" defaultChecked>Sort</option>
            <option value="This Year">Last Year</option>
          </select>
          <i className="rounded p-2 outline outline-[#D9D9D9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.3995 9.55313C14.6968 9.55313 14.9448 9.7682 14.9948 10.0774L15 10.16L14.9996 12.9857C14.9996 14.0468 14.1731 14.924 13.105 14.9958L12.9722 15L3.02236 14.9999C1.95692 14.9999 1.07623 14.1767 1.0042 13.1128L1 12.9806V10.149C1 9.81991 1.26877 9.55313 1.60022 9.55313C1.89756 9.55313 2.14558 9.7682 2.19554 10.0774L2.20074 10.16L2.20035 12.9857C2.20035 13.4044 2.51677 13.7611 2.92198 13.8027L3.01356 13.8079L12.9773 13.8082C13.3959 13.8082 13.7522 13.4914 13.7939 13.0861L13.7991 12.9943L13.7993 10.149C13.7993 9.81991 14.068 9.55313 14.3995 9.55313ZM8.00965 1C8.29719 1.0003 8.54521 1.21537 8.59517 1.52461L8.60037 1.60714L8.60099 8.66376L11.1299 6.13995C11.3146 5.95575 11.5938 5.91474 11.8369 6.03809L11.9266 6.09196L11.9876 6.14637C12.1867 6.34381 12.2117 6.66446 12.0327 6.92039L11.9722 6.98977L8.41139 10.5396L8.34617 10.5927L8.2617 10.6428L8.18941 10.6719L8.12401 10.6894L8.06032 10.6992L8.01065 10.7012L7.91206 10.6957L7.82839 10.6777L7.76233 10.6533L7.68056 10.6114L7.63393 10.5779L7.56552 10.5183L4.01919 6.9808C3.78535 6.74758 3.7862 6.37029 4.02108 6.13811C4.22918 5.93241 4.55224 5.90906 4.80919 6.08789L4.87878 6.14827L7.40051 8.66365L7.39971 1.59616C7.39971 1.29494 7.62618 1.04201 7.92437 1.00495L8.00965 1Z"
                fill="#4D4D4D"
              />
            </svg>
          </i>
        </span>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------ */}

      <table className="w-[100%] my-4">
        <thead className="overflow-hidden">
          <tr className="justify-between rounded bg-[#F2F2F2]">
            <th className="text-left">Order ID</th>
            <th className="text-right">
              <button onClick={()=>{
                setClick((prev)=> !prev)
              }} className="flex justify-center items-center w-full flex-row gap-3">
                Order date
                <svg
                className={`${!click ? "" : "rotate-180"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <path
                    d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </th>
            <th className="text-right">Order amount</th>
            <th className="text-right">
              <span className="flex justify-end items-center w-full flex-row gap-2">
                Transaction fees
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_0_5817)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                      fill="#4D4D4D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_5817">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 18 }, (_, index) => (
            <tr key={index} className="py-[.125rem] border-b border-[#ddd]">
              <td className="text-[#146EB4]">#281209</td>
              <td className="text-center">7 July, 2023</td>
              <td className="text-right">₹1,278.23</td>
              <td className="text-right">₹22</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <span className="flex gap-6 items-center justify-center">
        <button onClick={()=>{
          setPage(page==1 ? page : page - 1)
        }} className="outline rounded flex items-center gap-[.375rem] p-1.5 pr-3 outline-[#D9D9D9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>
          Previous
        </button>

        {/* Numbers */}

        <div className="flex gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <button
            onClick={()=>{
              setPage(index)
            }}
              key={index}
              className={` ${
                page == index
                  ?"bg-[#146EB4] text-white"
                  : "bg-transparent text-[#4D4D4D]"
              } flex w-7 h-7 text-center items-center justify-center rounded`}
            >
              {index}
            </button>
          ))}
        </div>

        {/* -------------- */}

        <button onClick={()=>{
          setPage(page +1)
        }} className="outline rounded flex items-center gap-[.375rem] p-1.5 pl-3 outline-[#D9D9D9]">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
              fill="#4D4D4D"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Transactions;
