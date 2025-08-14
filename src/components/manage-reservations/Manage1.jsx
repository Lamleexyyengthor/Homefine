import React from "react";

const properties = [
  {
    image: "https://via.placeholder.com/100x100",
    name: "ຫ້ອງແຖວຕຶກສີຂາວ",
    category: "ຫ້ອງແຖວ",
    price: "1,000,000 ກີບ/ເດືອນ",
    owner: "ຕາຕຸ່ມ ມັນຕະໄລ",
    phone: "020 55555555",
    date: "20/10/2024",
  },
  {
    image: "https://via.placeholder.com/100x100",
    name: "ຫ້ອງແຖວຕຶກສີຂາວ",
    category: "ຫ້ອງແຖວ",
    price: "1,000,000 ກີບ/ເດືອນ",
    owner: "ຕາຕຸ່ມ ມັນຕະໄລ",
    phone: "020 55555555",
    date: "20/10/2024",
  },
  {
    image: "https://via.placeholder.com/100x100",
    name: "ຫ້ອງແຖວຕຶກສີຂາວ",
    category: "ຫ້ອງແຖວ",
    price: "1,000,000 ກີບ/ເດືອນ",
    owner: "ຕາຕຸ່ມ ມັນຕະໄລ",
    phone: "020 55555555",
    date: "20/10/2024",
  },
];

export default function PropertyList() {
  return (
    <div className="border p-4 bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">
        <button className="pb-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] border-b-2 border-[#00B8D1]">
          ລາຍການຫ້ອງພັກ
        </button>
        <button className="pb-2 text-gray-500 text-xl hover:text-cyan-500">
          ປະເພດຫ້ອງພັກ
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="ຄົ້ນຫາເລກຫ້ອງ, ລາຄາ, ສະຖານທີ່"
        className="border rounded-full px-4 py-2 w-[300px] mb-4 focus:outline-none"
      />

      {/* Table */}
      <div className="overflow-x-auto border flex flex-col gap-4">
        <table className="w-full bg-white border rounded-lg shadow-md overflow-hidden ">
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th className="p-2">ຮູບ</th>
              <th className="p-2">ຊື່ຫ້ອງພັກ</th>
              <th className="p-2">ປະເພດຫ້ອງພັກ</th>
              <th className="p-2">ລາຄາ</th>
              <th className="p-2">ຜູ້ຈອງ</th>
              <th className="p-2">ເບີໂທ</th>
              <th className="p-2">ວັນທີຈອງ</th>
              <th className="p-2">ຈັດການ</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-5 text-center">
                  <img
                    src={p.image}
                    alt="property"
                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="p-2">{p.name}</td>
                <td className="p-2">{p.category}</td>
                <td className="p-2">{p.price}</td>
                <td className="p-2">{p.owner}</td>
                <td className="p-2">{p.phone}</td>
                <td className="p-2">{p.date}</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button className="bg-cyan-500 text-white px-3 py-1 rounded hover:bg-cyan-600">
                    ອັບເດດ
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    ປະຕິເສດ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
