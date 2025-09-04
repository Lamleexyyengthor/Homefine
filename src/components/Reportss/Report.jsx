import React from "react";

export const Report = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center gap-3">
        <div
          className="flex flex-col rounded-2xl w-[503px] h-[282px] gap-5"
          style={{
            background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)",
          }}
        >
          <div className="flex flex-row items-center ml-5 mt-5 gap-5">
            <div className="flex items-center">
              <div className="flex border-2 border-[#00B8D1] items-center justify-center bg-white rounded-full w-[70px] h-[70px]">
              
              </div>
            </div>
            <div className="text-[30px] font-bold text-white">
              <p>ລາຍງານຫ້ອງ</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                <p>ທັງໝົດ 20 (ຫ້ອງ)</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col rounded-2xl w-[503px] h-[282px] gap-5"
          style={{
            background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)",
          }}
        >
          <div className="flex flex-row items-center ml-5 mt-5 gap-5">
            <div className="flex items-center">
              <div className="flex border-2 border-[#00B8D1] bg-white rounded-full w-[70px] h-[70px]"></div>
            </div>
            <div className="text-[30px] font-bold text-white">
              <p>ລາຍງານການຊໍາລະເງີນ</p>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                <p>ທັງໝົດ 20 (ຫ້ອງ)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-3">
      <div
          className="flex flex-col rounded-2xl w-[503px] h-[282px] gap-5"
          style={{
            background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)",
          }}
        >
          <div className="flex flex-row items-center ml-5 mt-5 gap-5">
            <div className="flex items-center">
              <div className="flex border-2 border-[#00B8D1] bg-white rounded-full w-[70px] h-[70px]"></div>
            </div>
            <div className="text-[30px] font-bold text-white">
              <p>ລາຍງານຜູ້ເຊົ່າ</p>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                <p>ທັງໝົດ 10 (ຫ້ອງ)</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col rounded-2xl w-[503px] h-[282px] gap-5"
          style={{
            background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)",
          }}
        >
          <div className="flex flex-row items-center ml-5 mt-5 gap-5">
            <div className="flex items-center">
              <div className="flex border-2 border-[#00B8D1] bg-white rounded-full w-[70px] h-[70px]"></div>
            </div>
            <div className="text-[30px] font-bold text-white">
              <p>ລາຍງານຄ້າງຊໍາລະ</p>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                <p>ທັງໝົດ 3 (ຫ້ອງ)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
