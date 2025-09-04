import React from "react";

const data = [
  {
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
];
export const Historycheckout = () => {
  return (
    <div className="flex grid grid-cols-3 mt-5 w-auto">
      {data.map((data) => (
        <div className="flex flex-col w-[408px] shadow-2xl h-[550px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex mt-10 ml-5 text-[#414141]">
              <p className="text-[17px] font-bold ">
                ເລກຫ້ອງ: {data.clasNumber}
              </p>
            </div>
            <div className="flex mt-10 mr-5 text-[#414141] items-center justify-center font-bold rounded-full bg-[#D1D5DB] w-[102px] h-[35px]">
              <p>ເຕັມ</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex bg-[#00B8D1] text-white items-center justify-center rounded-lg mt-10 w-[366px] h-[32px]">
              <p>ຂໍ້ມູນຫ້ອງ</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex text-[14px] ml-6 mt-2 text-[#414141] flex-col gap-1">
              <p>ຄ່າເຊົ່າ:</p>
              <p>ຄ່າມັດຈໍາ:</p>
              <p>ຄ່າສ່ວນກາງ</p>
              <p className="flex mt-5">ລວມ:</p>
              <p>ລາຍລະອຽດ:</p>
              <p>ຊື່:</p>
              <p>ຊັ້ນ:</p>
            </div>
            <div className="flex flex-col items-end mr-6 mt-2 text-[14px] text-[#414141] gap-1">
              <p>{data.rent} ກີບ</p>
              <p>{data.deposit} ກີບ</p>
              <p>{data.avang} ກີບ</p>
              <p className="flex mt-5">2,000,000 ກີບ</p>
              <p>----</p>
              <p>{data.name}</p>
              <p>{data.floor}</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-15">
            <div className=" w-[110px] flex items-center justify-center text-white bg-[#00B8D1] rounded-full h-[40px]">
              <p>ແຈ້ງອອກ</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
