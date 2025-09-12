import React, { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowDownToLine,
  Eye,
  User,
} from "lucide-react";
import { IoMdDownload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const DebtReport = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("ທັງໝົດ");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("ເລືອກເດືອນ");
  const navigate = useNavigate();

  // Sample tenant data based on the UI image
  const tenantData = [
    // October 2024 data
    {
      id: 1,
      sequence: 1,
      roomNumber: "A05",
      floor: 2,
      rent: "1,000,000 ກີບ",
      period: "ຕຸລາ (10) 2024",
      tenantName: "ນາງ ແສງ ພອງສິດ",
      phone: "020 55555555",
      dueDate: "30 - 09 - 2024",
      status: "paid",
      month: "ຕຸລາ",
      year: 2024,
    },
    {
      id: 2,
      sequence: 2,
      roomNumber: "A06",
      floor: 2,
      rent: "1,000,000 ກີບ",
      period: "ຕຸລາ (10) 2024",
      tenantName: "ນາງ ແສງ ພອງສິດ",
      phone: "020 55555555",
      dueDate: "30 - 10 - 2024",
      status: "paid",
      month: "ຕຸລາ",
      year: 2024,
    },
    {
      id: 3,
      sequence: 1,
      roomNumber: "A05",
      floor: 2,
      rent: "1,000,000 ກີບ",
      period: "ກັນຍາ (09) 2024",
      tenantName: "ນາງ ແສງ ພອງສິດ",
      phone: "020 55555555",
      dueDate: "30 - 10 - 2024",
      status: "paid",
      month: "ກັນຍາ",
      year: 2024,
    },
    {
      id: 4,
      sequence: 2,
      roomNumber: "A06",
      floor: 2,
      rent: "1,000,000 ກີບ",
      period: "ກັນຍາ (09) 2024",
      tenantName: "ນາງ ແສງ ພອງສິດ",
      phone: "020 55555555",
      dueDate: "30 - 10 - 2024",
      status: "paid",
      month: "ກັນຍາ",
      year: 2024,
    },
    {
      id: 5,
      sequence: 3,
      roomNumber: "B07",
      floor: 3,
      rent: "1,200,000 ກີບ",
      period: "ຕຸລາ (10) 2024",
      tenantName: "ນາຍ ທອງ ຈັນດາວົງ",
      phone: "020 77777777",
      dueDate: "30 - 10 - 2024",
      status: "unpaid",
      month: "ຕຸລາ",
      year: 2024,
    },
  ];

  const filters = ["ທັງໝົດ", "ໃໝ່ສຸດ", "ເກົ່າສຸດ"];
  const months = ["ເລືອກເດືອນ", "ຕຸລາ", "ກັນຍາ", "ສິງຫາ", "ກໍລະກົດ"];

  // Filter and search logic
  const filteredData = useMemo(() => {
    let result = [...tenantData];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.roomNumber.toLowerCase().includes(query) ||
          item.tenantName.toLowerCase().includes(query) ||
          item.phone.includes(query)
      );
    }

    // Apply month filter
    if (selectedMonth !== "ເລືອກເດືອນ") {
      result = result.filter((item) => item.month === selectedMonth);
    }

    // Apply sorting filter
    // Apply sorting filter
    if (activeFilter === "ໃໝ່ສຸດ") {
      result = result.sort((a, b) => {
        const dateA = a.dueDate.split(" - ").reverse().join("-"); // "30 - 10 - 2024" => "2024-10-30"
        const dateB = b.dueDate.split(" - ").reverse().join("-");
        return new Date(dateB) - new Date(dateA);
      });
    } else if (activeFilter === "ເກົ່າສຸດ") {
      result = result.sort((a, b) => {
        const dateA = a.dueDate.split(" - ").reverse().join("-");
        const dateB = b.dueDate.split(" - ").reverse().join("-");
        return new Date(dateA) - new Date(dateB);
      });
    }

    return result;
  }, [activeFilter, searchQuery, selectedMonth]);

  // Group data by month/year for display
  const groupedData = useMemo(() => {
    const groups = {};
    filteredData.forEach((item) => {
      const key = `${item.period}`;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    });
    return groups;
  }, [filteredData]);

  // Calculate total rent for each period
  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => {
      const amount = parseInt(item.rent.replace(/[^\d]/g, ""));
      return sum + amount;
    }, 0);
    return total.toLocaleString() + " ກີບ";
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
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
            placeholder="ຄົ້ນຫາຊື່, ຊັ້ນ, ຄ່າເຊົ່າ"
            className="w-80 px-4 py-2 bg-white border border-[#00B8D1] rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B8D1] focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-600">
          ລາຍງານການຊຳລະໜີ້ທັງໝົດ
        </h2>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 mb-6">
        {/* Filter Tabs */}
        <div className="flex gap-3 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "text-white w-28"
                  : "bg-gray-300 text-gray-600 border border-gray-600 hover:bg-gray-50 w-28"
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
          {/* Month Dropdown */}
          <div className="relative ml-auto inline-block">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring focus:border-transparent"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* Triangle arrow */}
            <div
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-0 h-0 
                  border-l-[5px] border-r-[5px] border-t-[5px] 
                  border-l-transparent border-r-transparent border-t-[#00B8D1]"
            ></div>
          </div>
        </div>

        {/* Data Display by Period */}
        <div className="space-y-8">
          {Object.entries(groupedData).map(([period, items]) => (
            <div key={period}>
              {/* Period Header */}
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                {period}
              </h3>

              {/* Table */}
              <div className="overflow-hidden">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 first:rounded-tl-lg last:rounded-tr-lg">
                        ລຳດັບ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ເລກຫ້ອງ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ຊັ້ນ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ຄ່າເຊົ່າ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ປະຈຳເດືອນ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ຜູ້ເຊົ່າ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ເບີໂທ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ວັນທີ່ຊຳລະ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ການຊຳລະເງິນ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                        ໃບບິນ
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 last:rounded-tr-lg">
                        ລາຍລະອຽດ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map((tenant, index) => (
                      <tr
                        key={`${tenant.id}-${period}`}
                        className={`hover:bg-gray-50 ${
                          index === items.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }`}
                      >
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.sequence}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900 font-medium">
                          {tenant.roomNumber}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.floor}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.rent}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.period}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.tenantName}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.phone}
                        </td>
                        <td className="px-4 py-3 text-sm text-center text-gray-900">
                          {tenant.dueDate}
                        </td>
                        <td className="px-4 py-2 text-center align-middle">
                          <div className="w-12 h-6 mx-auto bg-gray-300 rounded flex items-center justify-center">
                            {/* เนื้อหาอยู่กึ่งกลาง */}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex w-[25px] h-[25px] bg-[#00B8D1] rounded-full items-center justify-center">
                            <IoMdDownload className="w-4 h-4 text-white hover:text-blue-700 cursor-pointer" />
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#00B8D1] hover:text-white transition-colors">
                            <Eye size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="flex justify-end mt-4">
                <div className="text-lg font-semibold text-gray-700">
                  ລວມເປັນເງິນ : {calculateTotal(items)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {Object.keys(groupedData).length === 0 && (
          <div className="text-center py-8 text-gray-500">ບໍ່ພົບຂໍ້ມູນ</div>
        )}
      </div>
    </div>
  );
};
