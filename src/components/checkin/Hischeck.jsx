import React from "react";
import photo from "../../assets/phto.png";
import { IoMdDownload } from "react-icons/io";
const data = [
  {
    names: "ນາງ ມະໂນແສງເດືອນ",
    allppay: "1,500,000",
    number: "55555555",
    datein: "01 - 10 - 2025",
    bilNumber: "000001",
    dateOut: "30 / 09 / 2024",
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    names: "ນາງ ມະໂນແສງເດືອນ",
    allppay: "1,500,000",
    number: "55555555",
    datein: "01 - 10 - 2025",
    bilNumber: "000001",
    dateOut: "30 / 09 / 2024",
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    names: "ນາງ ມະໂນແສງເດືອນ",
    allppay: "1,500,000",
    number: "55555555",
    datein: "01 - 10 - 2025",
    bilNumber: "000001",
    dateOut: "30 / 09 / 2024",
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
  {
    names: "ນາງ ມະໂນແສງເດືອນ",
    allppay: "1,500,000",
    number: "55555555",
    datein: "01 - 10 - 2025",
    bilNumber: "000001",
    dateOut: "30 / 09 / 2024",
    clasNumber: "A01",
    rent: "1,000,000",
    deposit: "500,000",
    avang: "500,000",
    name: "coffee apartment",
    floor: "2",
  },
];
export const Hischeck = () => {
  return (
    <div className="flex grid grid-cols-3 gap-4 mt-5 w-auto">
      {data.map((data) => (
        <div className="flex flex-col w-[408px] shadow-2xl h-[550px]">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[32px] ml-5 flex flex-col items-center justify-center h-[39px]">
              <img src={photo} alt="" />
              <p className="text-[5px]">Home Find</p>
            </div>
            <div className="w-[30px] text-white mr-5 bg-[#00B8D1] rounded-full flex flex-col items-center justify-center h-[30px]">
              <IoMdDownload />
            </div>
          </div>
          <div className="flex text-[14px] flex-col mt-7 text-[#414141]">
            <div className="mr-5">
              <p className="flex justify-end">ເລກທີໃບບີນ: {data.bilNumber}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="ml-5">ຜູ້ສ້າງບີນ: Chanom</p>
              <p className="mr-5">ວັນທີ່ອອກໃບບີນ: {data.dateOut}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex bg-[#00B8D1] text-white items-center justify-center rounded-lg mt-2 w-[366px] h-[32px]">
              <p>ຂໍ້ມູນລູກຄ້າ</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-row justify-between">
              <div className="flex text-[14px] ml-6 mt-2 text-[#414141] flex-col gap-2">
                <p>ຊື່ ແລະ ນາມສະກຸນ</p>
                <p>ເບີໂທ</p>
                <p>ວັນທີ່ເຂົ້າພັກ</p>
                <p>ເລກຫ້ອງ</p>
                <p>ຄ່າເຊົ່າ</p>
                <p>ຄ່າສ່ວນກາງ</p>
              </div>
              <div className="flex flex-col items-end mr-6 mt-2 text-[14px] text-[#414141] gap-2">
                <p>{data.names}</p>
                <p>{data.number}</p>
                <p>{data.datein}</p>
                <p>{data.clasNumber}</p>
                <p>{data.rent} ກີບ</p>
                <p>{data.deposit} ກີບ</p>
              </div>
            </div>
            <p className="text-sm text-[#414141] text-center mt-2">
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - -
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row text-[14px] text-[#414141] mt-2 justify-between">
                <p className="ml-6">ຈໍານວນທີ່ຊໍາລະທັງໝົດ</p>
                <p className="mr-6">{data.allppay} ກີບ</p>
              </div>
              <div className="flex justify-end">
                <div className="flex justify-center items-center text-[#00B357] text-[13px] font-bold mr-6 mt-2 rounded-full w-[87px] h-[35px] border-2 border-[#00B357] bg-[#BBF7D0]">
                  <p>ຈ່າຍແລ້ວ</p>
                </div>
              </div>
              <p className="text-sm text-[#414141] text-center mt-2">
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-7">
            <div className=" w-[115px] flex items-center justify-center text-white bg-[#00B8D1] rounded-full h-[40px]">
              <p>ລາຍລະອຽດ</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
