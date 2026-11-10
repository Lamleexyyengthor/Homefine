import React from "react";
import { AiFillFile } from "react-icons/ai";
export const LeaseAgrement = () => {
  return (
    <div className="flex w-[360px] h-[465px] mt-7 ml-8 shadow-2xl">
      <div className="flex w-full flex-col items-center justify-center">
        <AiFillFile className="w-50 h-50 text-[#9BD2FF] transform scale-y-120"/>
        <div className="flex flex-col items-center">
          <p className="text-[19px]">ສັນຍາເຊົ່າ</p>
          <p className="text-[16px] text-[#9CA3AF]">ວັນທີ່ສ້າງ: 01-10-2024</p>
        </div>
      </div>
    </div>
  );
};
