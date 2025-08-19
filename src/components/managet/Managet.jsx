import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { FaPen, FaTrash } from "react-icons/fa6";

const data = [
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
    status: "ກຳລັງຢູ່",
    date: "01-10-2024",
  },
  // … (ຂໍ້ມູນອື່ນ)
];

export function Managet() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsOpen(false); // ປິດ modal ຟອມ
    setShowSuccess(true); // ເປີດ success modal
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
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
          onClick={() => setIsOpen(true)}
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
      <div className="p-4 border">
        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#00B8D1] text-white text-lg border h-[53px]">
              <tr>
                <th className="px-4 py-2 ">ລຳດັບ</th>
                <th className="px-4 py-2 ">ໂປຣໄຟລ໌</th>
                <th className="px-4 py-2 text-center">ຊື່ ແລະ ນາມສະກຸນ</th>
                <th className="px-4 py-2 text-center">ເບີໂທ</th>
                <th className="px-4 py-2 text-center">ອີເມວ</th>
                <th className="px-4 py-2 text-center">ເລກບັດປະຈຳຕົວ</th>
                <th className="px-4 py-2 text-center">ເລກຫ້ອງ</th>
                <th className="px-4 py-2 text-center">ສະຖານະ</th>
                <th className="px-4 py-2 ">ວັນທີເຂົ້າພັກ</th>
                <th className="px-4 py-2 text-center">ຈັດການ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id} className="border hover:bg-gray-50 ">
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
                    {row.status === "ກຳລັງຢູ່" ? (
                      <span className="px-3 py-1 bg-green-100 text-center text-green-700 rounded-full">
                        {row.status}
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-center rounded-full">
                        {row.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2 flex gap-2 mt-5">
                    <button className="flex flex-row items-center gap-2 bg-cyan-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-cyan-600">
                      <FaPen />
                      <p>ແກ້ໄຂ</p>
                    </button>
                    <button className="flex flex-row items-center gap-2 bg-red-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-red-600">
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
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[685px] h-[771px] border rounded-2xl shadow-lg relative flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-center">ເພີ່ມຜູ້ເຊົ່າ</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>

            {/* Scrollable Body + Footer */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* ຟອມຂໍ້ມູນ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label>ຊື່ ແລະ ນາມສະກຸນ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ເບື້ອງ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ຊື່ຫຼາຍ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ບ້ານ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ເມືອງ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ແຂວງ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ເລືອກປະເພດເອກະສານ</label>
                  <select className="border rounded-lg px-3 py-2">
                    <option>ບັດປະຈຳຕົວ</option>
                    <option>ພາສປອດ</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label>ເລກບັດປະຈຳຕົວ</label>
                  <input type="text" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ວັນທີເລີ່ມເຊົ່າ</label>
                  <input type="date" className="border rounded-lg px-3 py-2" />
                </div>
              </div>

              {/* ຖັນມັດຈຳ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label>ຖັນມັດຈຳ</label>
                  <input type="number" className="border rounded-lg px-3 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>ຄ່າເຊົ່າ</label>
                  <input type="number" className="border rounded-lg px-3 py-2" />
                </div>
              </div>

              {/* ລາຍລະອຽດ */}
              <div className="flex flex-col gap-2">
                <label>ລາຍລະອຽດອື່ນໆ</label>
                <textarea className="border rounded-lg px-3 py-2 h-24" />
              </div>

              {/* ເອກະສານສັນຍາ */}
              <div className="flex flex-col gap-2">
                <label>ເອກະສານສັນຍາເຊົ່າ</label>
                <div className="border rounded-xl p-6 text-center bg-gray-50">
                  <p className="text-gray-400">ລາກໄຟລ໌ມາວາງທີ່ນີ້</p>
                  <button className="mt-3 px-4 py-2 bg-sky-500 text-white rounded-lg">
                    ສັງເກັບເອກະສານ
                  </button>
                </div>
              </div>

              {/* Footer ໃສ່ໃນ scroll */}
              <div className="pt-6 border-t flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-lg border border-sky-500 text-sky-500 hover:bg-gray-100"
                >
                  ຍົກເລີກ
                </button>
                <button onClick={handleSave} className="px-6 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600">
                  ບັນທຶກ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] rounded-2xl shadow-lg relative p-8 flex flex-col items-center">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold">ບັນທຶກຂໍ້ມູນສຳເລັດ</p>
          </div>
        </div>
      )}
    </div>
  );
}
