import React, { useState } from "react";
import homes from "../../assets/homes.jpg";
import ReservationDetailModal from "./ReservationDetailModal";
import { Eye } from "lucide-react";
import { IoMdDownload } from "react-icons/io";

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

export const History = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleOpen = (property) => {
    setSelectedProperty(property);
    setIsOpen(true);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start p-4 bg-gray-50">
      {/* Gradient Card */}
      <div className="w-full max-w-[1236px] h-full rounded-2xl bg-gradient-to-b from-[#00B8D1] to-[#005E6B] p-[2px]">
        <div className="w-full h-full flex flex-col rounded-2xl bg-white p-4 overflow-auto">
          {/* Table wrapper */}
          <div className="min-w-[800px]">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-cyan-500 h-[53px] text-[18px] text-white">
                <tr>
                  <th className="p-2">ຮູບ</th>
                  <th className="p-2">ຊື່ຫ້ອງພັກ</th>
                  <th className="p-2">ປະເພດຫ້ອງພັກ</th>
                  <th className="p-2">ລາຄາ</th>
                  <th className="p-2">ຜູ້ຈອງ</th>
                  <th className="p-2">ເບີໂທຜູ້ຈອງ</th>
                  <th className="p-2">ວັນທີຈອງ</th>
                  <th className="p-2">ຈັດການ</th>
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
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.name}
                    </td>
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.category}
                    </td>
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.price}
                    </td>
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.owner}
                    </td>
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.phone}
                    </td>
                    <td className="p-2 text-center align-middle text-[15px]">
                      {p.date}
                    </td>
                    <td className="p-5 flex flex-row gap-4 align-middle justify-center items-center mt-6">
                      <Eye className="flex mt-2"/>
                      <div className="flex flex-row items-center justify-center">
                        <div className="w-[30px] text-white mr-5 mt-1 bg-[#00B8D1] rounded-full flex flex-col items-center justify-center h-[30px]">
                          <IoMdDownload />
                        </div>
                        <p className="text-[15px] text-[#00B8D1]">ດາວໂຫຼດຟາຍລ໌</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <ReservationDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        property={selectedProperty}
      /> */}
    </div>
  );
};
