import React from "react";

const ItemService = ({ num, title, desc }) => {
  return (
    <div className="group w-full grid grid-cols-12 gap-4 lg:gap-6 items-center lg:px-[20px] py-[20px]">
      <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
        <span className="text-[20px] text-[#6244C5] group-hover:text-white transition-colors duration-300">0{num}</span>
        <h3 className="text-[21px] lg:text-[22px] font-semibold">{title}</h3>
      </div>
      <div className="col-span-12 lg:col-span-6 flex">
        <p className="text-[16px] lg:text-[18px] line-clamp-1 lg:line-clamp-none">{desc}</p>
      </div>
      <div className="hidden lg:flex justify-end lg:col-span-2">
        <span>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="null"
            className="svg replaced-svg group-hover:fill-white transition-colors duration-300"
          >
            <path
              d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ItemService;
