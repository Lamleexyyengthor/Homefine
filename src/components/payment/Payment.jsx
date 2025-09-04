import { Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/payments"); // ค่า default
  const handleSave = () => {
    // setIsOpen(false); // ປິດ modal ຟອມ
    setShowSuccess(true); // ເປີດ success modal
  };

  const tabs = [
    { label: "ທັງໝົດ", path: "/payments" },
    { label: "ລໍຖ້າການຊໍາລະ", path: "/payments/waitPayment" },
    { label: "ປະຫວັດການຊໍາລະເງີນ", path: "/payments/historypay" },
    { label: "ຈັດການການຕີດໜີ້", path: "/payments/debt" },
    { label: "ປະຫວັດການຕີດໜີ້", path: "/payments/hisDebt" },
    { label: "ສ້າງລີ້ງຊໍາລະເງີນ", path: "/payments/emty" },
  ];
  const handleAddss = () => {
    setIsOpen(true); // ປິດ modal ຟອມ
  };
  return (
    <div className=" p-4 bg-gray-50 min-h-screen scrollbar-hide">
      {/* Tabs */}
      <div className=" flex gap-15 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => {
              navigate(tab.path);
              setActiveTab(tab.path); // อัพเดท tab ที่เลือก
            }}
            className={`${
              activeTab === tab.path
                ? "pb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] border-b-2 border-[#00B8D1]"
                : "pb-2 text-gray-500 text-xl hover:text-cyan-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search + Add button */}
      <div className=" flex flex-row justify-between">
        <div className="relative w-[400px] mb-4">
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ຊັ້ນ"
            className="w-full pr-10 px-4 py-2 border rounded-full focus:outline-none"
          />
          <Search className="absolute right-3 text-[#005E6B] top-1/2 -translate-y-1/2" />
        </div>
      </div>
      {/* oulet */}
      <Outlet />
      {/* Modal */}
      {/* <Addss
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSave={handleSave}
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      /> */}
      {/* Success Modal */}
    </div>
  );
};
