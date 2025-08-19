import React, { useState } from "react";
import homes from "../../assets/homes.jpg";
import ReservationDetailModal from "./ReservationDetailModal";
import { Eye, Search } from "lucide-react";

const properties = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "ຫ້ອງແຖວທົ່ງສ້າງນາ",
    category: "ຫ້ອງແຖວ",
    price: "1,000,000 ກີບ/ເດືອນ",
    owner: "ຕາຕຸ່ມ ມັນຕະໄລ",
    phone: "020 55555555",
    date: "20/10/2024",
  },
  {
    image: "https://via.placeholder.com/200x150",
    name: "ຫ້ອງແຖວທົ່ງສ້າງນາ",
    category: "ຫ້ອງແຖວ",
    price: "1,000,000 ກີບ/ເດືອນ",
    owner: "ຕາຕຸ່ມ ມັນຕະໄລ",
    phone: "020 55555555",
    date: "20/10/2024",
  },
];

export default function PropertyList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleOpen = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  return (
    <div className=" p-4 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">
        <button className="pb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] border-b-2 border-[#00B8D1]">
          ລາຍການຫ້ອງພັກ
        </button>
        <button className="pb-2 text-gray-500 text-xl hover:text-cyan-500">
          ປະຫວັດການຈອງ
        </button>
      </div>

      {/* Search */}
      <div className="relative w-[400px] mb-4">
      <input
        type="text"
        placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ສະຖານະ"
        className="w-full pr-10 px-4 py-2 border rounded-full focus:outline-none"
      />
      <Search className="absolute right-3 text-[#005E6B] top-1/2 -translate-y-1/2" />
    </div>

      {/* Table */}
      <div className="overflow-x-auto   flex flex-col gap-4">
        <table className="w-full bg-white  rounded-lg shadow-md overflow-hidden">
          <thead className="bg-cyan-500 h-[53px] text-white">
            <tr>
              <th className="p-2 text-xl">ຮູບ</th>
              <th className="p-2 text-xl">ຊື່ຫ້ອງພັກ</th>
              <th className="p-2 text-xl">ປະເພດຫ້ອງພັກ</th>
              <th className="p-2 text-xl">ລາຄາ</th>
              <th className="p-2 text-xl">ຜູ້ຈອງ</th>
              <th className="p-2 text-xl">ເບີໂທຜູ້ຈອງ</th>
              <th className="p-2 text-xl">ວັນທີຈອງ</th>
              <th className="p-2 text-xl">ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-5 text-center">
                  <img
                    src={homes}
                    alt=""
                    className="w-[141px] h-[94px] object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="p-2 text-center text-lg">{p.name}</td>
                <td className="p-2 text-center text-lg">{p.category}</td>
                <td className="p-2 text-center text-lg">{p.price}</td>
                <td className="p-2 text-center text-lg">{p.owner}</td>
                <td className="p-2 text-center text-lg">{p.phone}</td>
                <td className="p-2 text-center text-lg">{p.date}</td>
                <td className="p-5 flex flex-row gap-8 justify-center items-center mt-6">
                  <Eye/>
                  <button
                    onClick={() => handleOpen(p)}
                    className="bg-cyan-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-cyan-600"
                  >
                    ອະນຸມັດ
                  </button>
                  <button className="bg-red-500 w-[81px] h-[40px] text-white px-3 py-1 rounded-full hover:bg-red-600">
                    ປະຕິເສດ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <ReservationDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}
