import { Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import { ToggleSwitch } from "./Toggle";
import house from "../../assets/house.jpg";

export const Rented = () => {
  // const [isRented, setIsRented] = useState(false); // false = ວ່າງ, true = ເຕັມ

  const initialData = [
    {
      number: 1,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    {
      number: 2,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    {
      number: 3,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    {
      number: 4,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    {
      number: 5,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    {
      number: 6,
      name: "ອາພາດເມັ້ນສີບຸນເຮືອງ",
      price: "1,000,000 ",
      average: "500,000 ",
      address: "ທີ່ຢູ່ : ສີບຸນເຮືອງ ຈັນທະບຸລີ ນະຄອນຫລວງວຽງຈັນ",
      priceNumber: "1000",
      date: "20/10/2024",
      image: house,
      isRented: false,
    },
    
    
    
    
  ];

  const [rooms, setRooms] = useState(initialData);

  // 👇 function to toggle only one room
  // const toggleRoomStatus = (roomNumber) => {
  //   setRooms((prev) =>
  //     prev.map((room) =>
  //       room.number === roomNumber
  //         ? { ...room, isRented: !room.isRented }
  //         : room
  //     )
  //   );
  // };
  const toggleRoomStatus = (roomNumber) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.number === roomNumber
          ? { ...room, isRented: !room.isRented }
          : room
      )
    );
  };
  return (
    <div className=" p-4 bg-gray-50 min-h-screen overflow-auto scrollbar-hide">
      
      {/* Room card */}
      <div className="flex flex-col gap-6">
        
        <div className=" w-full h-[734px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {rooms.map((item) => (
            <div
              key={item.number}
              className=" flex flex-col w-[386px] h-[453px] items-center shadow-2xl ml-4 mt-4 overflow-auto"
            >
              <div className="p-4  shadow-4xl flex flex-col gap-3">
                <div className="  w-[323px] h-[144px] rounded-lg  relative">
                  <img
                    src={item.image}
                    alt=""
                    className="absolute rounded-lg w-full h-full"
                  />
                </div>
                {/* ສະຖານະຫ້ອງ */}
                <div className="w-full justify-end flex ">
                  <div
                    className={`text-center font-bold h-[25px] rounded-full w-[81px] 
                      ${
                        item.isRented
                          ? "border-2 border-[#009436] bg-[#DCFCE7] text-[#009436]"
                          : "border-2 border-[#FF0000] bg-[#FEE2E2] text-[#FF0000]"
                      }`}
                  >
                    <p>{item.isRented ? "ວ່າງ" : "ເຕັມ"}</p>
                  </div>
                </div>

                <div className="flex text-sm text-[#6B7280] flex-col w-full h-[140px] gap-1">
                  <p>ເລກຫ້ອງ : {item.number}</p>
                  <p>ຊື່ທີ່ພັກ : {item.name}</p>
                  <p>ຄ່າເຊົ່າລາຍເດືອນ : {item.price} ກີບ/ເດືອນ</p>
                  <p>ຄ່າສ່ວນກາງ : {item.average} ກີບ/ເດືອນ</p>
                  <p>ທີ່ຢູ່ : {item.address}</p>
                  <p>ວັນທີ່ສ້າງ : {item.date}</p>
                </div>

                {/* ສະຖານະການເຊົ່າ */}
                <div className="w-full  justify-end flex ">
                  <div
                    className={`w-[81px] text-sm text-center justify-center font-bold h-[30px] rounded-full
                     ${
                       item.isRented
                         ? "border-2 flex justify-center items-center border-[#009436] bg-[#DCFCE7] text-[#009436]"
                         : "border-2 flex text-center justify-center items-center text-[#FBBF24] bg-[#FEF3C7] border-[#FBBF24]"
                     }`}
                  >
                    <p>{item.isRented ? "ຖືກປ່ອຍເຊົ່າ" : "ກຳລັງຖືກຈອງ"}</p>
                  </div>
                </div>

                {/* ປຸ່ມ + toggle */}
                <div className="w-full flex flex-row justify-between h-[27px] ">
                  <div className="flex flex-row gap-2">
                    <button className=" bg-[#00B8D1] flex items-center justify-center flex-row gap-1 w-[54px] h-[27px] rounded-full text-sm">
                      <FaPen className="w-2 h-2 text-white" />
                      <p className="text-xs text-white">ແກ້ໄຂ</p>
                    </button>
                    <button className=" bg-[#FF585B] flex items-center justify-center flex-row gap-1 w-[54px] h-[27px] rounded-full text-sm">
                      <FaTrash className="w-2 h-2 text-white" />
                      <p className="text-xs text-white">ລືບ</p>
                    </button>
                  </div>
                  <div className="flex text-sm items-center flex-row gap-2">
                    <p>ປ່ອຍເຊົ່າ</p>
                    <div>
                      <ToggleSwitch
                        onToggle={() => toggleRoomStatus(item.number)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
