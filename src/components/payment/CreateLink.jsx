import React from "react";
import { Link2, Edit, Trash2 } from "lucide-react";

const data = [
  {
    title: "ທ້ວງຄ່າເຊົ່າ",
    detail: "ການຮຽກເກັບເງິນຄ່າເຊົ່າ",
    date: "01-01-2024",
    duration: "30 ວັນ",
    rent: "20 ເດືອນ",
    link: "https://claude.ai/chat/65da426d-7f6d-450f-805a-ceb7a7977854",
  },
  {
    title: "ທ້ວງຄ່າເຊົ່າ",
    detail: "ການຮຽກເກັບເງິນຄ່າໄຟຟ້າ",
    date: "01-01-2024",
    duration: "30 ວັນ",
    rent: "20 ເດືອນ",
    link: "https://claude.ai/chat/65da426d-7f6d-450f-805a-ceb7a7977854",
  },
];

export const CreateLink = () => {
  return (
    <div className="min-h-screen bg-gray">
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-end mb-6">
          <button
            className="text-white px-4 py-2 rounded-full flex items-center shadow hover:bg-[#138a9e] transition-colors"
            style={{
              background: "linear-gradient(to bottom, #00B8D1, #005E6B)",
            }}
          >
            <Link2
              className="w-6 h-5 mr-1 "
              style={{ transform: "rotate(-45deg)" }}
            />
            ສ້າງລິ້ງ
          </button>
        </div>

        <div
          className="space-y-4 p-2 bg-white shadow"
          style={{
            border: "2px solid #00B8D1",
            borderRadius: "20px",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-white p-4 bg-gray-100"
            >
              <div className="mb-4">
                <div
                  className="bg-white rounded px-3 py-2 text-sm text-gray-600 text-center"
                  style={{
                    border: "2px solid #00B8D1",
                    borderRadius: "20px",
                  }}
                >
                  {item.link}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-4">
                <div
                  className="bg-[#00B8D1] text-white p-3 text-center h-40 w-full"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div className="flex items-center justify-center h-8 mb-1">
                    <div className="text-xs opacity-90">ກ່ຽວກັບ</div>
                  </div>
                  <div className="bg-white -mx-3 h-0.5 mb-1"></div>
                  <div className="flex-1 flex items-center justify-center h-17">
                    <div className="font-medium text-sm line-clamp-2">
                      {item.detail}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#00B8D1] text-white p-3 text-center h-40 w-full"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div className="flex items-center justify-center h-8 mb-1">
                    <div className="text-xs opacity-90">ວັນທີສ້າງ</div>
                  </div>
                  <div className="bg-white -mx-3 h-0.5 mb-1"></div>
                  <div className="flex-1 flex items-center justify-center h-17">
                    <div className="font-medium text-sm line-clamp-2">
                      {item.date}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#00B8D1] text-white p-3 text-center h-40 w-full"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div className="flex items-center justify-center h-8 mb-1">
                    <div className="text-xs opacity-90">ກຳນົດສົ່ງພາຍໃນ</div>
                  </div>
                  <div className="bg-white -mx-3 h-0.5 mb-1"></div>
                  <div className="flex-1 flex items-center justify-center h-17">
                    <div className="font-medium text-sm line-clamp-2">
                      {item.duration}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-[#00B8D1] text-white p-3 text-center h-40 w-full"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div className="flex items-center justify-center h-8 mb-1">
                    <div className="text-xs opacity-90">ສົ່ງເຖິງທັງໝົດ</div>
                  </div>
                  <div className="bg-white -mx-3 h-0.5 mb-1"></div>
                  <div className="flex-1 flex items-center justify-center h-17">
                    <div className="font-medium text-sm line-clamp-2">
                      {item.rent}
                    </div>
                  </div>
                </div>
                <div
                  className="text-white p-3 text-center flex items-center justify-center"
                  style={{
                    borderRadius: "30px",
                  }}
                >
                  <div className="flex space-x-2">
                    <button className="bg-[#00B8D1] border border-white text-white rounded-full px-3 py-1 text-sm flex items-center hover:bg-[#138a9e] transition-colors">
                      <Edit className="w-3 h-3 mr-1" />
                      ແກ້ໄຂ
                    </button>
                    <button className="bg-[#d93545] border border-white text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-[#a82333] transition-colors">
                      <Trash2 className="w-3 h-3 mr-1" />
                      ລຶບ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-8 h-8 rounded text-sm"
              style={{
                color: "#00B8D1",
              }}
            >
              1
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
