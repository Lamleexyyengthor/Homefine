import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { House, CircleDollarSign, Users, CalendarX2 } from 'lucide-react';

export const Report = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/reports");

  const tabs = [
    { label: "ລາຍງານຫ້ອງ", path: "/roomReport", count: "20 (ຫ້ອງ)", icon: House },
    { label: "ລາຍງານການຊຳລະເງິນ", path: "/paymentReport", count: "20 (ຫ້ອງ)", icon: CircleDollarSign },
    { label: "ລາຍງານຜູ້ເຊົ່າ", path: "/tenantReport", count: "10 (ຫ້ອງ)", icon: Users },
    { label: "ລາຍງານຄ້າງຊໍາລະ", path: "/debtReport", count: "3 (ຫ້ອງ)", icon: CalendarX2 },
  ];

  // auto navigate ไป default path ตอน mount
  useEffect(() => {
    navigate(activeTab);
  }, [navigate, activeTab]);

  const handleCardClick = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-center gap-3">
        {tabs.slice(0, 2).map((tab) => {
          const Icon = tab.icon;
          return (
            <div
              key={tab.path}
              onClick={() => handleCardClick(tab.path)}
              className={`flex flex-col rounded-2xl w-[503px] h-[282px] gap-5 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                activeTab === tab.path ? "ring-4 ring-[#00B8D1]" : ""
              }`}
              style={{ background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)" }}
            >
              <div className="flex flex-row items-center ml-5 mt-5 gap-5">
                <div className="flex border-2 border-[#00B8D1] items-center justify-center bg-white rounded-full w-[70px] h-[70px]">
                  <Icon size={50} color="#00B8D1" strokeWidth={1.4}/>
                </div>
                <div className="text-[30px] font-bold text-white">{tab.label}</div>
              </div>
              <div className="flex justify-center">
                <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                  <p>{`ທັງໝົດ ${tab.count}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-center gap-3">
        {tabs.slice(2, 4).map((tab) => {
          const Icon = tab.icon;
          return (
            <div
              key={tab.path}
              onClick={() => handleCardClick(tab.path)}
              className={`flex flex-col rounded-2xl w-[503px] h-[282px] gap-5 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                activeTab === tab.path ? "ring-4 ring-[#00B8D1]" : ""
              }`}
              style={{ background: "linear-gradient(180deg, #005E6B 0%, #00B8D1 100%)" }}
            >
              <div className="flex flex-row items-center ml-5 mt-5 gap-5">
                <div className="flex border-2 border-[#00B8D1] items-center justify-center bg-white rounded-full w-[70px] h-[70px]">
                  <Icon size={50} color="#00B8D1" strokeWidth={1.4}/>
                </div>
                <div className="text-[30px] font-bold text-white">{tab.label}</div>
              </div>
              <div className="flex justify-center">
                <div className="flex border-2 border-[#00B8D1] text-[30px] text-[#005E6B] items-center justify-center w-[450px] bg-white h-[151px] rounded-2xl">
                  <p>{`ທັງໝົດ ${tab.count}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
