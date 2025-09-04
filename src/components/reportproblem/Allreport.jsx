import { Eye } from "lucide-react";
import React from "react";

const data = [
  {
    number: 1,
    id: "A01",
    floor: "1",
    problemtype: "ນ້ຳຊຶມເພດານ",
    tenant: "ນາງ ມະໂນ ແສງເດືອນ",
    phone: "55555555",
    status: "ສ້ອມແປງສໍາເລັດ",
    date: "01-10-2024",
  },
  {
    number: 2,
    id: "A01",
    floor: "1",
    problemtype: "ໄຟບໍ່ມາ",
    tenant: "ນາງ ມະໂນ ແສງເດືອນ",
    phone: "55555555",
    status: "ກໍາລັງສ້ອມແປງ",
    date: "01-10-2024",
  },
  {
    number: 3,
    id: "A01",
    floor: "1",
    problemtype: "ນ້ຳບໍ່ມາ",
    tenant: "ນາງ ມະໂນ ແສງເດືອນ",
    phone: "55555555",
    status: "ລໍຖ້າສ້ອມແປງ",
    date: "01-10-2024",
  },
];

export const Allreport = () => {
  return (
    <div className="w-full h-full mt-5 rounded-2xl p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
      <div className="w-full h-full rounded-2xl bg-white">
        <div className="flex flex-row">
          <table className="w-full border-collapse-separate border-spacing-0 h-[53px] rounded-2xl mt-2 mr-2 ml-2 overflow-hidden border border-gray-300 bg-white">
            <thead>
              <tr className="bg-[#00B8D1] text-white text-lg">
                <th className="px-4 py-2">ລໍາດັບ</th>
                <th className="px-4 py-2">ເລກຫ້ອງ</th>
                <th className="px-4 py-2">ຊັ້ນ</th>
                <th className="px-4 py-2">ບັນຫາ</th>
                <th className="px-4 py-2">ຜູ້ເຊົ່າ</th>
                <th className="px-4 py-2">ເບີໂທ</th>
                <th className="px-4 py-2">ສະຖານະ</th>
                <th className="px-4 py-2">ວັນທີ່ເຂົ້າພັກ</th>
                <th className="px-4 py-2">ຈັດການ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className=" mt-3">
                  <td className="px-8 py-6 text-center">{row.number}</td>
                  <td className="px-8 py-6 text-center">{row.id}</td>
                  <td className="px-8 py-6 text-center">{row.floor}</td>
                  <td className="px-8 py-6 text-center">{row.problemtype}</td>
                  <td className="px-8 py-6 text-center">{row.tenant}</td>
                  <td className="px-8 py-6 text-center">{row.phone}</td>
                  <td className="px-8 py-6 flex justify-center">
                    {row.status === "ສ້ອມແປງສໍາເລັດ" ? (
                      <span className="flex items-center text-[15px] justify-center font-bold w-[101px] h-[40px] border-2 bg-[#DCFCE7] text-[#009436] rounded-full">
                        {row.status}
                      </span>
                    ) : row.status === "ກໍາລັງສ້ອມແປງ" ? (
                      <span className="flex items-center text-[15px] justify-center font-bold w-[101px] h-[40px] border-2 bg-[#FEF3C7] text-[#FBBF24] rounded-full">
                        {row.status}
                      </span>
                    ) : (
                      <span className="flex items-center text-[15px] justify-center font-bold w-[101px] h-[40px] border-2 bg-red-100 text-red-600 rounded-full">
                        {row.status}
                      </span>
                    )}
                  </td>

                  <td className="px-8 py-6 text-center">{row.date}</td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex items-center justify-center">
                      <Eye className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
