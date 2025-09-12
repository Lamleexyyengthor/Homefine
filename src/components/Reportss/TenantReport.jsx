import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TenantReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ທັງໝົດ");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  // Sample tenant data matching the UI image
  const tenantData = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "ນາງ ມະນີ ແສງວັນ",
      phone: "020 55555555",
      email: "many@gmail.com",
      idCard: "000-11111111",
      roomNumber: "A01",
      status: "ກຳລັງເຊົ່າ",
      statusColor: "green",
      date: "01-10-2024",
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "ນາງ ມະນີ ແສງວັນ",
      phone: "020 55555555",
      email: "many@gmail.com",
      idCard: "000-11111111",
      roomNumber: "A01",
      status: "ກຳລັງເຊົ່າ",
      statusColor: "green",
      date: "01-10-2024",
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "ນາງ ມະນີ ແສງວັນ",
      phone: "020 55555555",
      email: "many@gmail.com",
      idCard: "000-11111111",
      roomNumber: "A01",
      status: "ແຈ້ງອອກ",
      statusColor: "red",
      date: "01-10-2024",
    },
    {
      id: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      name: "ນາຍ ບຸນມີ ສີວິລາ",
      phone: "020 66666666",
      email: "bunmee@gmail.com",
      idCard: "000-22222222",
      roomNumber: "B02",
      status: "ກຳລັງເຊົ່າ",
      statusColor: "green",
      date: "05-10-2024",
    },
    {
      id: 6,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      name: "ນາງ ສາວ ວັນດີ ຄຳມາ",
      phone: "020 77777777",
      email: "wandee@gmail.com",
      idCard: "000-33333333",
      roomNumber: "C03",
      status: "ແຈ້ງອອກ",
      statusColor: "red",
      date: "03-10-2024",
    },
  ];

  const filters = ["ທັງໝົດ", "ໃໝ່ສຸດ", "ເກົ່າສຸດ", "ກຳລັງເຊົ່າ", "ແຈ້ງອອກ"];

  // Filter and search logic
  const filteredData = useMemo(() => {
    let result = [...tenantData];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.phone.includes(query) ||
          item.email.toLowerCase().includes(query) ||
          item.roomNumber.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (activeFilter === "ກຳລັງເຊົ່າ") {
      result = result.filter((item) => item.status === "ກຳລັງເຊົ່າ");
    } else if (activeFilter === "ແຈ້ງອອກ") {
      result = result.filter((item) => item.status === "ແຈ້ງອອກ");
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
    const baseStyle = "px-7 py-1 rounded-full text-sm font-medium border-2";
    if (color === "green") {
      return `${baseStyle} bg-green-100 text-green-800 border-green-700`;
    } else if (color === "red") {
      return `${baseStyle} bg-red-100 text-red-800 border-red-700`;
    }
    return `${baseStyle} bg-gray-100 text-gray-800 border-gray-700`;
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleGoBack = () => {
    // You can replace this with actual navigation logic
    console.log("Go back clicked");
  };

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
            placeholder="ຄົ້ນຫາເລກຫ້ອງ, ຊື່, ອີເມວ..."
            className="w-80 px-4 py-2 bg-white border border-[#00B8D1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B8D1] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-600">
          ລາຍງານຜູ້ເຊົ່າທັງໝົດ
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="border-gray-200 mb-6 bg-white rounded-lg shadow-sm overflow-hidden p-6 min-h-[300px]">
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
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-gray-200 font-semibold">
                <tr>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap first:rounded-tl-lg last:rounded-tr-lg">
                    ລຳດັບ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ໂປຣໄຟລ໌
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ຊື່ ແລະ ນາມສະກຸນ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ເບີໂທ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ອີເມວ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ເລກບັດປະຈໍາຕົວ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ເລກຫ້ອງ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ສະຖານະ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                    ວັນທີ່ເຂົ້າພັກ
                  </th>
                  <th className="px-2 py-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap last:rounded-tr-lg">
                    ລາຍລະອຽດ
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {paginatedData.length > 0 ? (
                  paginatedData.map((tenant, index) => (
                    <tr
                      key={tenant.id}
                      className={`hover:bg-gray-50 transition-colors border-b border-gray-200`}
                    >
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-2 py-2 text-center whitespace-nowrap">
                        <div className="flex justify-center">
                          <img
                            src={tenant.avatar}
                            alt={tenant.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 font-medium whitespace-nowrap">
                        {tenant.name}
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {tenant.phone}
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {tenant.email}
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {tenant.idCard}
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {tenant.roomNumber}
                      </td>
                      <td className="px-2 py-2 text-center whitespace-nowrap">
                        <span
                          className={getStatusStyle(
                            tenant.status,
                            tenant.statusColor
                          )}
                        >
                          {tenant.status}
                        </span>
                      </td>
                      <td className="px-2 py-2 text-sm text-center text-gray-900 whitespace-nowrap">
                        {tenant.date}
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
                      colSpan="10"
                      className="px-6 py-4 text-center text-gray-500 border-b border-gray-200"
                    >
                      ບໍ່ພົບຂໍ້ມູນ
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
