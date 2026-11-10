import { Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Addss } from "./Addss";

export const Contract = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/contracts"); // ค่า default
  const handleSave = () => {
    // setIsOpen(false); // ປິດ modal ຟອມ
    setShowSuccess(true); // ເປີດ success modal
  };

  const tabs = [
    { label: "ໃບສັນຍາເຊົ່າ", path: "/contracts" },
    { label: "ໃບພັກເຊົ່າ", path: "/contracts/rentalReceipt" },
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

      <div className=" flex flex-row justify-between p-4 border-b-2">
        <div className="flex flex-col ml-7">
          <p className="text-[23px]">ສ້າງສັນຍາການເຊົ່າ</p>
          <p className="text-[16px] mt-3">
            ທ່ານສາມາດສ້າງສັນຍາການເຊົ່າລະຫວ່າງຜູ້ເຊົ່າ ກັບ ເຈົ້າຂອງສະຖານທີ່{" "}
            <br />
            ໄດ້ງ່າຍດາຍບ່ອນນີ້
          </p>
        </div>
        <div
          
          className="border w-[138px] h-[48px] mt-20 text-white rounded-full items-center flex flex-row justify-center gap-2"
          style={{
            background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
          }}
        >
          <Plus />
          <p>ສ້າງສັນຍາເຊົ່າ</p>
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
