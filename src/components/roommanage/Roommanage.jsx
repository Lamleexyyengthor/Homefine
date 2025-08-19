import { Plus, Search } from "lucide-react";
import React from "react";

export const Roommanage = () => {
  return (
    <div className=" p-4 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-10 border-b mb-4">
        <button className="pb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] border-b-2 border-[#00B8D1]">
          ຫ້ອງທັງໝົດ
        </button>
        <button className="pb-2 text-gray-500 text-xl hover:text-cyan-500">
          ຫ້ອງທີ່ເຕັມແລ້ວ
        </button>
        <button className="pb-2 text-gray-500 text-xl hover:text-cyan-500">
          ຫ້ອງທີ່ຫວ່າງ
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <div className="relative w-[400px] mb-4">
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ຊັ້ນ"
            className="w-full pr-10 px-4 py-2 border rounded-full focus:outline-none"
          />
          <Search className="absolute right-3 text-[#005E6B] top-1/2 -translate-y-1/2" />
        </div>
        <div
          className="border w-[138px] h-[48px] text-white rounded-full items-center flex flex-row justify-center gap-2"
          style={{
            background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
          }}
        >
          <Plus />
          <p>ເພີ່ມຫ້ອງ</p>
        </div>
      </div>
      <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
        ຈໍານວນຫ້ອງທັງໝົດ 200 ຫ້ອງ
      </p>
    </div>
  );
};
