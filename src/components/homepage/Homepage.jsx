import React from "react";
import { HiUsers } from "react-icons/hi2";
import { IoBedSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronDown,
  DoorClosedLocked,
  BedDouble,
  Info,
  DoorOpen,
} from "lucide-react";

// Data cards top
const data = [
  {
    all: "ຜູ້ເຊົ່າທັງໝົດ",
    color: "#00B8D1",
    text: "#00B8D1",
    border: "#00B8D1",
    icons: <HiUsers className="w-6 h-6 text-[#00B8D1] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຄົນ",
  },
  {
    all: "ຫ້ອງເຊົ່າທັງໝົດ",
    color: "#DC95FD",
    text: "#DC95FD",
    border: "#DC95FD",
    icons: <IoBedSharp className="w-6 h-6 text-[#DC95FD] md:w-8 md:h-8 " />,
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຫ້ອງທີ່ຖືກຈອງ",
    color: "#64BEFF",
    text: "#64BEFF",
    border: "#64BEFF",
    icons: <FaBed className="w-6 h-6 text-[#64BEFF] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຫ້ອງທີ່ຈ່າຍເງີນແລ້ວ",
    color: "#FF3FC2",
    text: "#FF3FC2",
    border: "#FF3FC2",
    icons: <MdAttachMoney className="w-6 h-6 text-[#FF3FC2] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຫ້ອງເຕັມ",
    color: "#FFE058",
    text: "#FFE058",
    border: "#FFE058",
    icons: (
      <DoorClosedLocked className="w-6 h-6 text-[#FFE058] md:w-8 md:h-8" />
    ),
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຫ້ອງຫວ່າງ",
    color: "#55FF93",
    text: "#55FF93",
    border: "#55FF93",
    icons: <DoorOpen className="w-6 h-6 text-[#55FF93] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຫ້ອງທີ່ຄ້າງຊໍາລະ",
    color: "#FF5555",
    text: "#FF5555",
    border: "#FF5555",
    icons: <HiUsers className="w-6 h-6 text-[#FF5555] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຫ້ອງ",
  },
  {
    all: "ຄ່າມັດຈໍາ",
    color: "#F77500",
    text: "#F77500",
    border: "#F77500",
    icons: <HiUsers className="w-6 h-6 text-[#F77500] md:w-8 md:h-8" />,
    alls: "10",
    person: "ຫ້ອງ",
  },
];

// Bar Chart Data
const chartData = [
  { month: "01/2024", income: 60, expense: 40 },
  { month: "02/2024", income: 30, expense: 25 },
  { month: "03/2024", income: 90, expense: 0 },
  { month: "04/2024", income: 0, expense: 15 },
  { month: "05/2024", income: 40, expense: 0 },
  { month: "06/2024", income: 65, expense: 70 },
  { month: "07/2024", income: 55, expense: 50 },
  { month: "08/2024", income: 50, expense: 45 },
  { month: "09/2024", income: 65, expense: 0 },
  { month: "10/2024", income: 40, expense: 35 },
  { month: "11/2024", income: 35, expense: 0 },
  { month: "12/2024", income: 0, expense: 45 },
];

// Donut chart data
const dataInOut = [
  { name: "ການແຈ້ງເຂົ້າທັງໝົດ", value: 1, color: "#004D40" },
  { name: "ການແຈ້ງອອກທັງໝົດ", value: 1, color: "#00BCD4" },
];

const dataProblems = [
  { name: "ນ້ຳປະປາບໍ່ມາ", value: 1, color: "#004D40" },
  { name: "ໄຟຟ້າບໍ່ມາ", value: 1, color: "#00BCD4" },
  { name: "ຫ້ອງຊຸດໂຊມ", value: 1, color: "#4CAF50" },
  { name: "ຫຼັງຄາຮົ່ວ", value: 1, color: "#FFC107" },
  { name: "ໄຟຟ້າລັດວົງຈອນ", value: 1, color: "#F44336" },
];

export const Homepage = () => {
  return (
    <div className="space-y-8">
      {/* Top cards */}
      <div className="flex items-center justify-center rounded-2xl shadow-2xl flex-col w-full p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl w-[261px] h-[125px] to-[#005E6B] p-[2px]"
              style={{
                backgroundColor: item.color,
              }}
            >
              <div className="w-full h-full rounded-2xl bg-white">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row mt-4 ml-4 gap-2">
                    <div
                      className="border flex w-[42px] h-[42px] items-center justify-center rounded-full"
                      style={{ borderColor: item.border, color: item.border }}
                    >
                      {item.icons}
                    </div>

                    <div className="flex items-center">
                      <p
                        className="flex text-[16px] md:text-[20px] font-bold"
                        style={{ color: item.text }}
                      >
                        {item.all}
                      </p>
                    </div>
                  </div>
                  <div className="flex font-bold text-[16px] md:text-[20px]  justify-center">
                    <p>
                      ທັງໝົດ {item.alls} ({item.person})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-bold">ລາຍຮັບທັງໝົດ</h2>
          <button className="flex items-center gap-1 text-gray-500 text-sm">
            ເລືອກລາຍການສະແດງ
            <ChevronDown size={16} />
          </button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} barSize={25}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis
              ticks={[10, 30, 60, 100]}
              tickFormatter={(value) => `${value} ລ້ານ`}
            />
            <Tooltip />
            <Bar dataKey="income" fill="#00B8D1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="expense" fill="#005E6B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="text-center mt-4">
          <p className="text-[#00B8D1] font-bold text-lg">10,000,000 ກີບ</p>
        </div>
      </div>

      {/* Donut Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* In/Out */}
        <div className="w-[620px] h-[424px]  rounded-2xl p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
          <div className="w-full h-full flex flex-col rounded-2xl items-center bg-white">
            <div className="font-semibold border mt-5 w-[540px] h-[49px] rounded-full bg-[#00B8D1] flex items-center justify-center text-white text-[20px] mb-3">
              <p>ການແຈ້ງເຂົ້າ/ການແຈ້ງອອກ </p>
            </div>
            <div className="flex w-[540px] flex-col">
              <p className="flex justify-end text-[14px] font-bold text-[#4B5563]">
                ເລືອກວັນທີ
              </p>
              <p className="flex justify-end text-[12px] text-[#005E6B]">
                ຕັ້ງແຕ່: 01-10-2024 ຫາ 01-10-2024
              </p>
            </div>
            <div className="mt-3 w-[540px] justify-between flex flex-col sm:flex-row gap-4 items-center rounded-lg">
              <div className="border border-[#00B8D1] w-45 h-60 rounded-2xl">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={dataInOut}
                      innerRadius={50}
                      outerRadius={70}
                      dataKey="value"
                    >
                      {dataInOut.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="border border-[#00B8D1] w-45 h-60 rounded-2xl flex-1">
                <div className="flex items-center border-b-2 border-gray-300 mt-3 gap-4 mb-2 text-gray-700">
                  <BedDouble className="w-10 ml-4 mb-4 h-10 text-[#00B8D1]"/>
                  <span className="text-[18px]">ຈຳນວນການແຈ້ງ ເຂົ້າ/ອອກທັງໝົດ  <br />(2 ຫ້ອງ)</span>
                </div>
                {dataInOut.map((item, idx) => (
                  <div key={idx} className="flex mt-5 ml-6 items-center gap-2 mb-1">
                    <span
                      className="w-5 h-5 rounded"
                      style={{ background: item.color }}
                    />
                    <span className="text-[#4B5563] text-[16px]">
                      {item.name} ({item.value} ຫ້ອງ)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Problems */}
        <div className="w-[620px] h-[424px]  rounded-2xl p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
          <div className="w-full h-full flex flex-col rounded-2xl items-center bg-white">
            <div className="font-semibold mt-5 text-[20px] flex justify-center items-center text-white w-[540px] h-[49px] rounded-full bg-[#00B8D1] text-gray-800 mb-3">
              ແຈ້ງບັນຫາທັງໝົດ
            </div>
            <div className="flex w-[540px] flex-col">
              <p className="flex justify-end text-[14px] font-bold text-[#4B5563]">
                ເລືອກວັນທີ
              </p>
              <p className="flex justify-end text-[12px] text-[#005E6B]">
                ຕັ້ງແຕ່: 01-10-2024 ຫາ 01-10-2024
              </p>
            </div>
            <div className=" w-[540px] flex flex-col sm:flex-row gap-4 mt-3 items-center rounded-lg">
              <div className="border rounded-2xl border-[#00B8D1] w-45 h-60">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={dataProblems}
                      innerRadius={50}
                      outerRadius={70}
                      dataKey="value"
                    >
                      {dataProblems.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="border border-[#00B8D1] w-45 h-60 rounded-2xl flex-1">
                <div className="flex border-b-2 border-gray-300 h-[50px] items-center mt-2 gap-2 mb-2 text-gray-700">
                  <Info className="w-7 h-7 ml-4 text-[#00B8D1]" />
                  <span className="text-[18px]">ປັນຫາເລີ່ມຕົ້ນ 5 ອັນດັບ</span>
                </div>
                {dataProblems.map((item, idx) => (
                  <div key={idx} className="flex items-center ml-6 mt-2 gap-2 mb-1">
                    <span
                      className="w-5 h-5 rounded"
                      style={{ background: item.color }}
                    />
                    <span className="text-gray-700 text-[16px]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
