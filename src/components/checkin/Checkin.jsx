
import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Addss } from "./Addss";

export const Checkin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/checkin"); // ค่า default
  const handleSave = () => {
    // setIsOpen(false); // ປິດ modal ຟອມ
    setShowSuccess(true); // ເປີດ success modal
  };

  const tabs = [
    { label: "ຫ້ອງທັງໝົດ", path: "/checkin" },
    { label: "ປະຫວັດການແຈ້ງອອກ", path: "/checkin/hischeckout" },
  ];
  const handleAddss = () => {
    setIsOpen(true); // ປິດ modal ຟອມ
  };
  return (
    <div className=" p-4 bg-gray-50 min-h-screen scrollbar-hide overflow-hidden">
      {/* Tabs */}
      <div className=" flex gap-10 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => {
              navigate(tab.path);
              setActiveTab(tab.path);
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
      <div className=" flex flex-row items-center gap-4">
        <div className="relative w-[400px] mb-4">
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ຊັ້ນ"
            className="w-full pr-10 px-4 py-2 border rounded-full focus:outline-none"
          />
          {/* <Search className="absolute right-3 text-[#005E6B] top-1/2 -translate-y-1/2" /> */}
        </div>
        <CgCalendarDates className="mb-4 text-[#005E6B] w-8 h-8"/>
      </div>
      <p className="text-[17px] text-[#005E6B]">
        ຈໍານວນຫ້ອງ check-in ທັງໝົດ 9 ຫ້ອງ
      </p>
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
