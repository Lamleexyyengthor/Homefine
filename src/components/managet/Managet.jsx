import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { FaPen, FaTrash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Add } from "./Add";
const data = [
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງເຊົ່າ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງເຊົ່າ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງເຊົ່າ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ແຈ້ງອອກ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງຢູ່",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ແຈ້ງອອກ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງເຊົ່າ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ແຈ້ງອອກ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ກຳລັງເຊົ່າ",
    date: "01-10-2024",
  },
  {
    id: 1,
    name: "ມານ ມະນິແມນເດຍນ",
    phone: "555555555",
    email: "mano@gmail.com",
    idCard: "000-111111111",
    room: "A01",
    status: "ແຈ້ງອອກ",
    date: "01-10-2024",
  },
  // … (ຂໍ້ມູນອື່ນ)
];

export function Managet() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/checkin");
  const handleSave = () => {
    // setIsOpen(false); // ປິດ modal ຟອມ
    setShowSuccess(true); // ເປີດ success modal
  };

  const handleAdd = () => {
    setIsOpen(true); // ປິດ modal ຟອມ
  };
  const tabs = [
    { label: "All", path: "/checkin" },
    { label: "ກໍາລັງເຊົ່າ", path: "/checkin/hischeckout" },
    { label: "ແຈ້ງອອກ", path: "/checkin/hischeckout" },
  ];
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
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
      <div className="flex flex-row justify-between">
        <div className="flex flex-row w-[400px] mb-4 gap-4 items-center">
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ເບີໂທ, ອີເມວ..."
            className="w-full pr-10 px-4 py-2 border rounded-full focus:outline-none"
          />
          <CgCalendarDates className="w-8 h-8" />
        </div>
        <div
          onClick={() => handleAdd()}
          className="border w-[138px] h-[48px] text-white rounded-full items-center flex flex-row justify-center gap-2 cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
          }}
        >
          <HiUserAdd className="w-7 h-7" />
          <p>ເພີ່ມຜູ້ເຊົ່າ</p>
        </div>
      </div>

      {/* Table */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#00B8D1] to-[#005E6B] p-[2px]">
        <div className="w-full h-full flex flex-col rounded-2xl bg-white p-4 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#00B8D1] text-white text-[18px] h-[53px]">
              <tr>
                <th className="px-3 py-2 ">ລຳດັບ</th>
                <th className="px-3 py-2 ">ໂປຣໄຟລ໌</th>
                <th className="px-3 py-2 text-center">ຊື່ ແລະ ນາມສະກຸນ</th>
                <th className="px-3 py-2 text-center">ເບີໂທ</th>
                <th className="px-3 py-2 text-center">ອີເມວ</th>
                <th className="px-3 py-2 text-center">ເລກບັດປະຈຳຕົວ</th>
                <th className="px-3 py-2 text-center">ເລກຫ້ອງ</th>
                <th className="px-3 py-2 text-center">ສະຖານະ</th>
                <th className="px-3 py-2 ">ວັນທີເຂົ້າພັກ</th>
                <th className="px-3 py-2 text-center">ຈັດການ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index.id} className=" hover:bg-gray-50 ">
                  <td className="px-6 py-6">{index + 1}</td>
                  <td className="px-6 py-6">
                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  </td>
                  <td className="px-4 py-2 text-center ">{row.name}</td>
                  <td className="px-4 py-2 text-center">{row.phone}</td>
                  <td className="px-4 py-2 text-center">{row.email}</td>
                  <td className="px-4 py-2 text-center">{row.idCard}</td>
                  <td className="px-4 py-2 text-center">{row.room}</td>
                  <td className="px-4 py-2 text-center">
                    {row.status === "ກຳລັງເຊົ່າ" ? (
                      <span className="flex font-bold items-center border-2 justify-center w-[81px] h-[40px] bg-green-100 text-green-700 rounded-full text-sm">
                        {row.status}
                      </span>
                    ) : (
                      <span className="flex font-bold items-center border-2 justify-center w-[81px] h-[40px] bg-[#FECACA] text-[#FF0000] rounded-full text-sm">
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2 flex gap-2 mt-5">
                    <button className="flex font-bold flex-row items-center gap-2 bg-cyan-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-cyan-600">
                      <FaPen />
                      <p>ແກ້ໄຂ</p>
                    </button>
                    <button className="flex font-bold flex-row items-center gap-2 bg-red-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-red-600">
                      <FaTrash />
                      <p>ລຶບ</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Add
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleSave={handleSave}
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
      {/* Success Modal */}
    </div>
  );
}
