import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Download,
  Eye,
} from "lucide-react";

export const RoomReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ທັງໝົດ");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Sample data matching the image
  const roomData = [
    {
      id: 1,
      roomNumber: "A01",
      floor: 2,
      price: "2,000,000 ກີບ",
      status: "ວ່າງ",
      statusColor: "green",
      date: "01-10-2024",
      payment: "ຄ່າຫ້ອງ 1,000,000 ກີບ ຄ່າໄຟຟ້າ 500,000ກີບ...",
    },
    {
      id: 2,
      roomNumber: "B02",
      floor: 3,
      price: "2,500,000 ກີບ",
      status: "ວ່າງ",
      statusColor: "green",
      date: "02-10-2024",
      payment: "ຄ່າຫ້ອງ 1,200,000 ກີບ ຄ່າໄຟຟ້າ 600,000ກີບ...",
    },
    {
      id: 3,
      roomNumber: "C03",
      floor: 1,
      price: "1,800,000 ກີບ",
      status: "ເຕັມ",
      statusColor: "red",
      date: "03-10-2024",
      payment: "ຄ່າຫ້ອງ 900,000 ກີບ ຄ່າໄຟຟ້າ 400,000ກີບ...",
    },
    {
      id: 4,
      roomNumber: "D04",
      floor: 2,
      price: "2,200,000 ກີບ",
      status: "ເຕັມ",
      statusColor: "red",
      date: "04-10-2024",
      payment: "ຄ່າຫ້ອງ 1,100,000 ກີບ ຄ່າໄຟຟ້າ 550,000ກີບ...",
    },
    {
      id: 5,
      roomNumber: "E05",
      floor: 3,
      price: "3,000,000 ກີບ",
      status: "ວ່າງ",
      statusColor: "green",
      date: "05-10-2024",
      payment: "ຄ່າຫ້ອງ 1,500,000 ກີບ ຄ່າໄຟຟ້າ 700,000ກີບ...",
    },
  ];

  const filters = ["ທັງໝົດ", "ໃໝ່ສຸດ", "ເກົ່າສຸດ", "ວ່າງ", "ເຕັມ"];

  // Filter and search logic
  const filteredData = useMemo(() => {
    let result = [...roomData];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.roomNumber.toLowerCase().includes(query) ||
          item.payment.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (activeFilter === "ວ່າງ") {
      result = result.filter((item) => item.status === "ວ່າງ");
    } else if (activeFilter === "ເຕັມ") {
      result = result.filter((item) => item.status === "ເຕັມ");
    } else if (activeFilter === "ໃໝ່ສຸດ") {
      result = result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (activeFilter === "ເກົ່າສຸດ") {
      result = result.sort((a, b) => new Date(a.date) - new Date(b.date));
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

  const getStatusStyle = (status, color) => {
    const baseStyle = "px-3 py-1 rounded-full text-white text-sm font-medium";
    if (color === "green") {
      return `${baseStyle} bg-green-500`;
    } else if (color === "red") {
      return `${baseStyle} bg-red-500`;
    }
    return `${baseStyle} bg-gray-500`;
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-2)} // กลับไปหน้าก่อนหน้า
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
        <h2 className="text-xl font-semibold text-gray-600">
          ລາຍງານຫ້ອງທັງໝົດ
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-200 mb-6 bg-white rounded-lg shadow-sm overflow-hidden p-3">
        <div className="flex gap-3 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-full transition-all w-30 ${
                activeFilter === filter
                  ? "text-white"
                  : "bg-gray-300 text-gray-600 border border-gray-600 hover:bg-gray-50"
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

        {/* Table */}
        <div className="bg-white overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ລຳດັບ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ເລກຫ້ອງ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ຊັ້ນ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ຄ່າເຊົ່າ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ສະຖານະ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ວັນທີ່ສ້າງ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">
                  ລາຍລະອຽດ
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedData.length > 0 ? (
                paginatedData.map((room, index) => (
                  <tr key={room.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-center text-gray-900">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900 font-medium">
                      {room.roomNumber}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900">
                      {room.floor}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900">
                      {room.price}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={getStatusStyle(
                          room.status,
                          room.statusColor
                        )}
                      >
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-900">
                      {room.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600 max-w-xs truncate">
                      {room.payment}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-gray-400 hover:text-[#00B8D1] transition-colors">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-gray-500"
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
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        <span className="px-4 py-2 text-[#00B8D1] rounded-lg font-medium">
          {currentPage}
        </span>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
