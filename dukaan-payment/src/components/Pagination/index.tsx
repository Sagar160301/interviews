import ReactPaginate from "react-paginate";

const PaginationComponent = () => {
  const pageNumbers = [];
  for (let i = 1; i < 18; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <ReactPaginate
          breakLabel={"..."}
          nextLabel={
            <button className="flex py-1.5 pr-1.5 pl-3 justify-center items-center gap-[6px] rounded border border-[#D9D9D9] bg-[#FFF]">
              <p
                className="text-[#4D4D4D] text-center text-sm font-medium leading-5"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Next
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
                  fill="#4D4D4D"
                />
              </svg>
            </button>
          }
          pageRangeDisplayed={10}
          pageCount={18}
          previousLabel={
            <button className="flex py-1.5 pl-1.5 pr-3 justify-center items-center gap-[6px] rounded border border-[#D9D9D9] bg-[#FFF]">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
                  fill="#4D4D4D"
                />
              </svg>
              <p
                className="text-[#4D4D4D] text-center text-sm font-medium leading-5"
                style={{
                  fontFamily: "Inter",
                }}
              >
                Previous
              </p>
            </button>
          }
          renderOnZeroPageCount={null}
          className="flex flex-row gap-6 items-center text-[#4D4D4D]"
          activeClassName="flex py-[6px] px-3 flex-col justify-center items-center gap-1.5 rounded bg-[#146EB4] text-[#FFF] text-sm leading-5 font-medium"
        />
      </div>
    </>
  );
};

export default PaginationComponent;
