
const TransitionTable = () => {
  const tableData = [
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "1278.23",
      transactionFees: 22,
    },
  ];

  return (
    <>
      <div className="w-full relative overflow-x-auto">
        <table
          className="w-full text-sm text-left rtl:text-right"
          style={{
            fontFamily: "Inter",
          }}
        >
          <thead className="text-xs text-gray-700  bg-[#F2F2F2]">
            <tr>
              <th
                scope="col"
                className="px-3 py-[14px] text-[#4D4D4D] text-sm leading-5 font-medium"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-3 py-[14px] text-[#4D4D4D] text-sm leading-5 font-medium flex items-center gap-x-1"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Order date
                <svg
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
              </th>
              <th
                scope="col"
                className="text-right px-3 py-[14px] text-[#4D4D4D] text-sm leading-5 font-medium"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Order amount
              </th>
              <th
                scope="col"
                className="text-right px-3 py-[14px] text-[#4D4D4D] text-sm leading-5 font-medium flex items-center gap-x-1 justify-end"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Transaction fees
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_0_5817)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                      fill="#4D4D4D"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
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
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((eachData) => (
              <tr key={eachData.orderId} className="border-b border-[#F2F2F2]">
                <td className="py-[14px] px-3 text-left text-[#146EB4] text-sm loading-5 font-medium">
                  <a href="#">{eachData.orderId}</a>
                </td>
                <td className="py-[14px] px-3 text-left text-[#1A181E] text-sm loading-5 font-normal">
                  {eachData.orderDate}
                </td>
                <td className="py-[14px] px-3 text-right text-[#1A181E] text-sm loading-5 font-normal">
                  ₹{eachData.orderAmount}
                </td>
                <td className="py-[14px] px-3 text-right text-[#1A181E] text-sm loading-5 font-normal">
                  ₹{eachData.transactionFees}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransitionTable;
