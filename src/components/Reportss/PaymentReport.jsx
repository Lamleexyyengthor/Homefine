import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  ArrowDownToLine,
  ChevronDown,
} from "lucide-react";
import { IoMdDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function PaymentReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ທັງໝົດ");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("ເລືອກລາຍເດືອນ");
  const navigate = useNavigate();

  // Chart data for monthly payment report
  const chartData = [
    { month: "01/2024", amount: 10 },
    { month: "02/2024", amount: 30 },
    { month: "03/2024", amount: 100 },
    { month: "04/2024", amount: 30 },
    { month: "05/2024", amount: 60 },
    { month: "06/2024", amount: 30 },
    { month: "07/2024", amount: 30 },
    { month: "08/2024", amount: 60 },
    { month: "09/2024", amount: 10 },
    { month: "10/2024", amount: 30 },
    { month: "11/2024", amount: 10 },
    { month: "12/2024", amount: 60 },
  ];

  // Sample payment data
  const paymentData = [
    {
      id: 1,
      name: "ນາງ ມະນີ ແສງຈັນ",
      roomNumber: "A05",
      floor: 2,
      month: "ຕຸລາ(10)2024",
      amount: "1,000,000 ກີບ",
      statusColor: "green",
      status: "ຈ່າຍແລ້ວ",
      paymentMethod: "ໂອນ ຜ່ານ ແອັບ",
      phone: "020 55555555",
      date: "30-10-2024",
      receipt: true,
    },
    {
      id: 2,
      name: "ນາງ ມະນີ ແສງຈັນ",
      roomNumber: "A06",
      floor: 2,
      month: "ຕຸລາ(10)2024",
      amount: "1,000,000 ກີບ",
      statusColor: "green",
      status: "ຈ່າຍແລ້ວ",
      paymentMethod: "ໂອນ ຜ່ານ ແອັບ",
      phone: "020 55555555",
      date: "30-10-2024",
      receipt: true,
    },
    {
      id: 3,
      name: "ນາງ ມະນີ ແສງຈັນ",
      roomNumber: "B03",
      floor: 3,
      month: "ຕຸລາ(10)2024",
      amount: "1,200,000 ກີບ",
      statusColor: "red",
      status: "ຄ້າງຈ່າຍ",
      paymentMethod: "ເງິນສົດ",
      phone: "020 55555666",
      date: "25-10-2024",
      receipt: false,
    },
    {
      id: 4,
      name: "ນາງ ມະນີ ແສງຈັນ",
      roomNumber: "C04",
      floor: 1,
      month: "ຕຸລາ(10)2024",
      amount: "900,000 ກີບ",
      statusColor: "green",
      status: "ຈ່າຍແລ້ວ",
      paymentMethod: "ໂອນ ຜ່ານ ແອັບ",
      phone: "020 55555777",
      date: "28-10-2024",
      receipt: true,
    },
    {
      id: 5,
      name: "ນາງ ມະນີ ແສງຈັນ",
      roomNumber: "D07",
      floor: 4,
      month: "ຕຸລາ(10)2024",
      amount: "1,500,000 ກີບ",
      statusColor: "red",
      status: "ຄ້າງຈ່າຍ",
      paymentMethod: "ເງິນສົດ",
      phone: "020 55555888",
      date: "20-10-2024",
      receipt: false,
    },
  ];

  const filters = ["ທັງໝົດ", "ຈ່າຍແລ້ວ", "ຄ້າງຈ່າຍ", "ໃໝ່ສຸດ", "ເກົ່າສຸດ"];

  // Filter and search logic
  const filteredData = useMemo(() => {
    let result = [...paymentData];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.roomNumber.toLowerCase().includes(query) ||
          item.paymentMethod.toLowerCase().includes(query) ||
          item.phone.includes(query)
      );
    }

    // Function แปลง date string เป็น Date object
    const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    // Apply status filter
    if (activeFilter === "ຈ່າຍແລ້ວ") {
      result = result.filter((item) => item.statusColor === "green");
    } else if (activeFilter === "ຄ້າງຈ່າຍ") {
      result = result.filter((item) => item.statusColor === "red");
    } else if (activeFilter === "ໃໝ່ສຸດ") {
      result = result.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    } else if (activeFilter === "ເກົ່າສຸດ") {
      result = result.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    }

    return result;
  }, [activeFilter, searchQuery]);

  // Pagination logic
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Calculate total amount
  const totalAmount = "10,000,000 ກີບ";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-2)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft size={20} />
            <span className="text-lg">ກັບຄືນ</span>
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-2 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00B8D1 0%, #005E6B 100%)",
            }}
          >
            Export to PDF
          </button>

          <button
            className="flex items-center gap-2 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00B8D1 0%, #005E6B 100%)",
            }}
          >
            Export to Excel
          </button>
        </div>
      </div>

      {/* Search and Title */}
      <div className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ຊັ້ນ, ຄ່າເຊົ່າ"
            className="w-80 px-4 py-2 bg-white border border-[#00B8D1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B8D1] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-600">ລາຍຮັບທັງໝົດ</h2>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex-1 text-center text-lg font-medium text-gray-700">
            ລາຍເດືອນ
          </h3>
          <div className="relative inline-block">
            <select
              className="px-3 py-2 pr-8 rounded-md text-sm bg-white appearance-none border border-gray-300"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="">ເລືອກລາຍການສະແດງ</option>
              <option value={2025}>2025</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-[#00B8D1]"></div>
          </div>
        </div>

        <div className="relative h-80 mb-4 bg-gray-50 rounded-lg px-4 -py-6">
          {(() => {
            const maxAmount = Math.max(...chartData.map((d) => d.amount));
            const displayMax = Math.max(maxAmount, 100);
            const containerHeight = 256;

            function getCumulativeScale(maxValue, step = 10) {
              const levels = [0];
              let add = step;
              let current = 0;

              while (current < maxValue) {
                current += add;
                levels.push(current);
                add += step;
              }

              return levels;
            }

            const levels = getCumulativeScale(displayMax, 10);

            return (
              <>
                {/* เส้นขีดแนวนอน */}
                {levels.map((val, i) => {
                  if (val === 0) return null;
                  const bottom = (val / displayMax) * containerHeight;
                  return (
                    <div
                      key={i}
                      className="absolute left-0 right-0 flex items-center"
                      style={{ bottom: `${bottom}px` }}
                    >
                      <span className="w-12 text-xs text-gray-600">
                        {val === 0 ? "" : val} ລ້ານ
                      </span>
                      <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                  );
                })}

                {/* เส้นแกนตั้ง */}
                <div className="absolute left-20 h-80 border-2 border-gray-300"></div>

                {/* เส้นฐาน (x-axis) */}
                <div className="absolute left-12 right-0 bottom-1.5 border-2 border-gray-300 z-1"></div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end justify-around gap-2 left-20 -bottom-4">
                  {chartData.map((data, index) => {
                    const barColor = index % 2 === 0 ? "#00B8D1" : "#005E6B";
                    const scaledHeight =
                      (data.amount / displayMax) * containerHeight;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2"
                      >
                        <div
                          className="transition-all hover:opacity-80"
                          style={{
                            backgroundColor: barColor,
                            width: "50px",
                            height: `${scaledHeight}px`,
                          }}
                        ></div>
                        <span className="text-xs text-gray-600 whitespace-nowrap">
                          {data.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </div>

        <div className="text-center">
          <span className="text-gray-600">ລວມ: </span>
          <span className="text-[#00B8D1] font-semibold text-lg">
            {totalAmount}
          </span>
        </div>
      </div>

      {/* Filter Tabs and Table Section - FIXED VERSION */}
      <h3 className="text-lg font-medium text-gray-700 mb-6">
        ລາຍງານການຊຳລະເງິນທັງໝົດ
      </h3>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "text-white shadow-md"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                  style={
                    activeFilter === filter
                      ? {
                          background:
                            "linear-gradient(90deg, #00B8D1 0%, #005E6B 100%)",
                        }
                      : {}
                  }
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative inline-block">
              <select className="px-3 py-2 pr-8 rounded-md text-sm bg-white appearance-none border border-gray-300">
                <option>ເລືອກວັນທີ</option>
                <option>ວັນນີ້</option>
                <option>7 ມື້ຜ່ານມາ</option>
                <option>30 ມື້ຜ່ານມາ</option>
              </select>
              {/* triangle arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-[#00B8D1]"></div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto px-6">
          <table className="w-full border-collapse">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle first:rounded-tl-lg last:rounded-tr-lg">
                  ລຳດັບ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ເລກຫ້ອງ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ຊັ້ນ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ຄ່າເຊົ່າ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ປະຈຳເດືອນ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ຜູ້ເຊົ່າ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ເບີໂທ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ວັນທີ່ຊຳລະ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ການຊຳລະເງິນ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle">
                  ໃບບິນ
                </th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-600 font-semibold align-middle last:rounded-tr-lg">
                  ລາຍລະອຽດ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {paginatedData.length > 0 ? (
                paginatedData.map((payment, index) => (
                  <tr
                    key={payment.id}
                    className={`hover:bg-gray-50 transition-colors ${
                      index === paginatedData.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 font-semibold align-middle">
                      {payment.roomNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {payment.floor}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 font-semibold align-middle">
                      {payment.amount}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {payment.month}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {payment.name}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {payment.phone}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-500 align-middle">
                      {payment.date}
                    </td>
                    <td className="px-4 py-2 text-center align-middle">
                      <div className="w-12 h-6 mx-auto bg-gray-300 rounded flex items-center justify-center">
                        {/* เนื้อหาอยู่กึ่งกลาง */}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center align-middle">
                      <div className="flex w-[25px] h-[25px] bg-[#00B8D1] rounded-full items-center justify-center">
                        <IoMdDownload className="w-4 h-4 text-white hover:text-blue-700 cursor-pointer" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center align-middle">
                      <div className="flex items-center justify-center">
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#00B8D1] hover:text-white transition-colors">
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="11"
                    className="px-6 py-8 text-center text-gray-500 align-middle"
                  >
                    ບໍ່ພົບຂໍ້ມູນ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        <span className="px-4 py-2 text-[#00B8D1] rounded-lg font-medium">
          {currentPage}
        </span>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50"
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
