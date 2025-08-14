import { HiUsers } from "react-icons/hi2";
import React from "react";
import { BedDouble } from "lucide-react";
import { IoBedSharp } from "react-icons/io5";

export const Homepage = () => {
  return (
    <div className="flex flex-row justify-center w-full h-[964px]">
      <div
        className=" flex w-[1596px] rounded-3xl h-[200px] items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
        }}
      >
        <div className=" flex flex-row items-center justify-center w-[1530px] h-[170px] gap-9">
          <div className=" flex flex-col bg-white w-[325.88px] h-[155.2px] rounded-3xl gap-2">
            <div className="boeder flex text-2xl flex-row w-full h-[68px] gap-3">
              <div className="ml-4 flex  items-center flex-row gap-3">
                <div className="flex justify-center items-center w-[51px] h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <HiUsers
                      className="w-8 h-8 "
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] ">
                  ຜູ້ເຊົ່າທັງໝົດ
                </p>
              </div>
            </div>
            <div className="flex  text-2xl justify-center w-full h-[68px]">
              <div className="flex items-center">
                <p className="font-bold">ທັງໝົດ 100 (ຄົນ)</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[325.88px] h-[155.2px] rounded-3xl">
            <div className=" flex flex-col bg-white w-[325.88px] h-[155.2px] rounded-3xl gap-2">
              <div className=" flex text-2xl flex-row w-full h-[68px] gap-3">
                <div className="ml-4 flex  items-center flex-row gap-3">
                  <div className="flex justify-center items-center w-[51px] h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                    <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                      <IoBedSharp
                        className="w-8 h-8 "
                        style={{ fill: "url(#grad)" }}
                      />
                    </div>
                  </div>
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                    ຫ້ອງເຊົ່າທັງໝົດ
                  </p>
                </div>
              </div>
              <div className="flex  text-2xl justify-center w-full h-[68px]">
                <div className="flex items-center">
                  <p className="font-bold">ທັງໝົດ 20 (ຫ້ອງ)</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[325.88px] h-[155.2px] rounded-3xl">
            <div className=" flex text-2xl flex-row w-full h-[68px] gap-3">
              <div className="ml-4 flex  items-center flex-row gap-3">
                <div className="flex justify-center items-center w-[51px] h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <IoBedSharp
                      className="w-8 h-8 "
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                  ຫ້ອງເຊົ່າທີ່ຈ່າຍແລ້ວ
                </p>
              </div>
            </div>
            <div className="flex  text-2xl justify-center w-full h-[68px]">
              <div className="flex items-center">
                <p className="font-bold">ທັງໝົດ 20 (ຫ້ອງ)</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[325.88px] h-[155.2px] rounded-3xl">
            <div className=" flex text-2xl flex-row w-full h-[68px] gap-3">
              <div className="ml-4 flex  items-center flex-row gap-3">
                <div className="flex justify-center items-center w-[51px] h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <IoBedSharp
                      className="w-8 h-8 "
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
                  ຫ້ອງເຊົ່າທີ່ຍັງບໍ່ໄດ້ຈ່າຍ
                </p>
              </div>
            </div>
            <div className="flex  text-2xl justify-center w-full h-[68px]">
              <div className="flex items-center">
                <p className="font-bold">ທັງໝົດ 0 (ຫ້ອງ)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
