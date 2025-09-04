import React from "react";
import photo from "../../assets/phto.png";
import { IoMdDownload } from "react-icons/io";

const pay = [
  {
    name: "ນາງ ມະໂນ ແສງເດືອນ",
    number: "55555555",
    data: "01 - 10 - 2024",
    rent: "1,000,000",
    avang: "500,000",
    all: "1,500,000",
    apdate: "01 - 10 - 2025",
  },
  {
    name: "ນາງ ມະໂນ ແສງເດືອນ",
    number: "55555555",
    data: "01 - 10 - 2024",
    rent: "1,000,000",
    avang: "500,000",
    all: "1,500,000",
    apdate: "01 - 10 - 2025",
  },
  {
    name: "ນາງ ມະໂນ ແສງເດືອນ",
    number: "55555555",
    data: "01 - 10 - 2024",
    rent: "1,000,000",
    avang: "500,000",
    all: "1,500,000",
    apdate: "01 - 10 - 2025",
  },
];
export const HistoryDebt = () => {
  return (
    /*photo*/
    <div className="w-full mt-5 h-full  grid grid-cols-3">
      {pay.map((data) => (
        <div className="shadow-2xl mx-auto my-auto w-[390px] flex flex flex-col h-[557px]">
          <div className="flex row justify-between">
            <div className="w-[32px]  flex flex-col items-center justify-center h-[39px]">
              <img src={photo} alt="" />
              <p className="text-[5px]">Home Find</p>
            </div>
            <div className="w-[30px] text-white bg-[#00B8D1] rounded-full flex flex-col items-center justify-center h-[30px]">
              <IoMdDownload/>
            </div>
           
          </div>
          <div className="flex items-center justify-center text-[22px] text-[#414141]">
            <p>ໜີ້ຄ້າງຈ່າຍປະຈຳເດືອນ 11</p>
          </div>
          <div className="flex flex-col mt-6 items-center gap-2">
            <div className="flex border  w-[360px] text-[16px] h-[26px] text-white items-center justify-center rounded-lg bg-[#00B8D1]">
              <p>ຂໍ້ມູນລູກຄ້າ</p>
            </div>
            <div className="flex w-[369px] mt-4 h-[88px] justify-between flex-row ">
              <div className="flex flex-col gap-2 text-[#414141]">
                <p>ຊື່ ແລະ ນາມສະກຸນ</p>
                <p>ເບີໂທ</p>
                <p>ວັນທີ່ເຂົ້າພັກ</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-[#414141]">
                <p>{data.name}</p>
                <p>{data.number}</p>
                <p>{data.data}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-[375px] h-[199px] mt-5 rounded-lg bg-gradient-to-b from-[#00B8D1] to-[#005E6B] border border-white items-center justify-center p-[2px]">
              <div className="w-full h-full justify-center rounded-md bg-white shadow-md">
                <div className="flex justify-center">
                  <div className=" flex mt-1 text-white justify-center rounded-lg bg-[#00B8D1] w-[366px] h-[25px]">
                    <p>A01</p>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2 ml-15 mt-5">
                    <p className="text-[13px] text-[#6B7280]">ຄ່າເຊົ່າ</p>
                    <p className="text-[13px] text-[#6B7280]">ຄ່າສ່ວນກາງ</p>
                    <p className="text-[13px] ml-4 text-[#6B7280]">----</p>
                    <p className="text-[13px] ml-4 text-[#6B7280]">----</p>
                    <p className="font-bold text-[#005E6B]">ໜີ້ຄ້າງລວມ:</p>
                  </div>
                  <div className="flex flex-col gap-2  mr-10 mt-5">
                    <p className="text-[13px] text-[#6B7280]">
                      {data.rent} ກີບ
                    </p>
                    <p className="flex justify-end text-[13px] text-[#6B7280]">
                      {data.avang} ກີບ
                    </p>
                    <p className="flex justify-end text-[13px] text-[#6B7280]">
                      0 ກີບ
                    </p>
                    <p className="flex justify-end text-[13px] text-[#6B7280]">
                      0 ກີບ
                    </p>
                    <p className="font-bold text-[13px] text-[#6B7280]">
                      {data.all} ກີບ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-7 flex-row justify-between">
            <div className="flex">
              <button className="w-[98px] ml-8  border-[#00B357] bg-[#BBF7D0] border-2 rounded-full h-[34px]">
                <p className="text-[#00B357] text-center font-bold text-[15px]">
                  ຈ່າຍແລ້ວ
                </p>
              </button>
            </div>
            <div className="flex flex-col">
              <p className="flex mr-6 text-[#6B7280] text-[13px]">
                ວັນທິ່ອະນຸມັດ: {data.apdate}
              </p>
              <p className="flex mr-6 justify-end text-[#6B7280] text-[13px]">
                ຜູ້ອະນຸມັດ: Chanom
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// import { useState } from "react";
// import { ArrowLeft } from "lucide-react";

// const FormCard = ({ data }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
//       {/* Header */}
//       <div className="bg-white px-4 py-3 flex items-center">
//         <div className="w-8 h-8 bg-teal-400 rounded mr-3 flex items-center justify-center">
//           <div className="w-4 h-4 bg-white rounded-sm"></div>
//         </div>
//         <span className="text-gray-800 text-lg font-medium">ພັດລາງວັນອາທິດ 11</span>
//       </div>

//       {/* Form Content */}
//       <div className="px-4 pb-4">
//         {/* Payment Method Header */}
//         <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-center py-2 rounded-lg mb-4">
//           <span className="font-medium">ຮັບບອກກັນ</span>
//         </div>

//         {/* Form Fields */}
//         <div className="space-y-3 mb-4 text-sm">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700">ຊື່ ແລະ ນາມສະກຸນ</span>
//             <span className="text-gray-500">ນາງ ນາງ ແລງເດືອນ</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700">ເບີໂທ</span>
//             <span className="text-gray-800 font-medium">{data.phone}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-700">ວັນທີດຳເນີນ</span>
//             <span className="text-gray-800 font-medium">{data.date}</span>
//           </div>
//         </div>

//         {/* A01 Section */}
//         <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-center py-2 rounded-t-lg">
//           <span className="font-medium">A01</span>
//         </div>

//         <div className="bg-gray-50 border border-gray-200 rounded-b-lg mb-4">
//           {data.items.map((item, index) => (
//             <div key={index} className="flex justify-between items-center px-4 py-2 border-b border-gray-200 last:border-b-0">
//               <span className="text-gray-600 text-sm">{item.label}</span>
//               <span className="text-gray-800 text-sm font-medium">{item.amount}</span>
//             </div>
//           ))}

//           {/* Total Section */}
//           <div className="px-4 py-3 bg-white border-t border-gray-300">
//             <div className="flex justify-between items-center">
//               <span className="text-teal-600 text-sm font-medium">ລວມລາຄາລວມ :</span>
//               <span className="text-gray-800 text-sm font-bold">{data.total}</span>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex space-x-3">
//           <button className="flex-1 bg-white border-2 border-red-400 text-red-400 py-3 rounded-full font-medium hover:bg-red-50 transition-colors text-sm">
//             ຍົກເລີກ
//           </button>
//           <button className="flex-1 bg-gradient-to-r from-cyan-400 to-teal-400 text-white py-3 rounded-full font-medium hover:from-cyan-500 hover:to-teal-500 transition-all text-sm">
//             ຢືນຢັນ
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function FormCards() {
//   const formsData = [
//     {
//       phone: "55555555",
//       date: "01 - 10 - 2025",
//       items: [
//         { label: "ຄາຄັງ", amount: "1,000,000 ກີບ" },
//         { label: "ຄາສະໜອງ", amount: "500,000 ກີບ" },
//         { label: "----", amount: "0 ກີບ" },
//         { label: "----", amount: "0 ກີບ" }
//       ],
//       total: "1,500,000 ກີບ"
//     },
//     {
//       phone: "55555555",
//       date: "01 - 10 - 2025",
//       items: [
//         { label: "ຄາຄັງ", amount: "1,000,000 ກີບ" },
//         { label: "ຄາສະໜອງ", amount: "500,000 ກີບ" },
//         { label: "----", amount: "0 ກີບ" },
//         { label: "----", amount: "0 ກີບ" }
//       ],
//       total: "1,500,000 ກີບ"
//     },
//     {
//       phone: "55555555",
//       date: "01 - 10 - 2025",
//       items: [
//         { label: "ຄາຄັງ", amount: "1,000,000 ກີບ" },
//         { label: "ຄາສະໜອງ", amount: "500,000 ກີບ" },
//         { label: "----", amount: "0 ກີບ" },
//         { label: "----", amount: "0 ກີບ" }
//       ],
//       total: "1,500,000 ກີບ"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
//         {formsData.map((data, index) => (
//           <FormCard key={index} data={data} />
//         ))}
//       </div>
//     </div>
//   );
// }
