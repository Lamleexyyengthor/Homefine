import React, { useState } from "react";
import { Link2, Edit, Trash2, X } from "lucide-react";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    detail: "",
    date: "",
    duration: "",
    rent: "",
    note: "",
  });

  const parseNumber = (value) =>
    Number((value ?? 0).toString().replace(/,/g, "").trim()) || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    setIsPopupOpen(true);
    setIsSuccessPopupOpen(true);
    // Reset form
    setFormData({
      title: "",
      detail: "",
      date: "",
      duration: "",
      rent: "",
      note: "",
    });
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
    // Reset form
    setFormData({
      title: "",
      detail: "",
      date: "",
      duration: "",
      rent: "",
      note: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray relative">
      {/* Main Content */}
      <div className="p-6">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsPopupOpen(true)}
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

      {/* Main Form Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div
            className="bg-white rounded-lg w-full max-w-lg max-h-[95vh] overflow-y-auto hide-scrollbar"
            style={{
              border: "3px solid #00B8D1",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 relative">
              <h2 className="text-lg font-medium text-[#138a9e] text-center">
                ການສ້າງລິ້ງຮຽກເກັບເງິນ
              </h2>
            </div>

            {/* Form Content */}
            <div className="p-4 space-y-4">
              {/* Link Display */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  ລິ້ງ :
                </label>
                <div className="bg-gray-100 p-2 rounded-lg text-sm text-gray-600">
                  https://claude.ai/chat/65da426d-7f6d-450f-805a-ceb7a7977854
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  ຫົວຂໍ້
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="ເພິ່ມຫົວຂໍ້"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                />
              </div>

              {/* Date and Location */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    ກຳນົດວັນສົ່ງ
                  </label>
                  <input
                    type={formData.date ? "date" : "text"}
                    name="date"
                    placeholder="ເລືອກວັນທີສົ່ງ"
                    value={formData.date}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!formData.date) e.target.type = "text";
                    }}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    ເລືອກຫ້ອງ
                  </label>
                  <select
                    name="location"
                    defaultValue=""
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                  >
                    <option value="" disabled hidden>
                      ກາລຸນາເລືອກຫ້ອງທີ່ຕ້ອງການສົ່ງລິ້ງນີ້ເຖິງ
                    </option>
                    <option value="room1">ຫ້ອງ 1</option>
                    <option value="room2">ຫ້ອງ 2</option>
                    <option value="room3">ຫ້ອງ 3</option>
                  </select>
                </div>
              </div>

              {/* Detail */}
              <div className="text-gray-600 mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  ຄ່າຫ້ອງ
                </label>
                <input
                  type="text"
                  name="room"
                  value={formData.room}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                />

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      ຄ່ານ້ຳ
                    </label>
                    <input
                      type="text"
                      name="water"
                      value={formData.water}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      ຄ່າໄຟ
                    </label>
                    <input
                      type="text"
                      name="electic"
                      value={formData.electic}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="text-gray-600 mb-4">
                <label className="block text-sm text-gray-600 mb-2">
                  ສະຫຼຸບຍອດທັງໝົດ
                </label>
                <div
                  className="space-y-2 text-sm"
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div className="flex justify-between">
                    <span>ຄ່າຫ້ອງ</span>
                    <span>
                      {parseNumber(formData.room).toLocaleString()} ກີບ
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ຄ່ານ້ຳ</span>
                    <span>
                      {parseNumber(formData.water).toLocaleString()} ກີບ
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ຄ່າໄຟ</span>
                    <span>
                      {parseNumber(formData.electic).toLocaleString()} ກີບ
                    </span>
                  </div>
                  <div className="border-t border-gray-400 border-dashed pt-2 flex justify-between font-medium">
                    <span>ລວມ</span>
                    <span>
                      {(
                        parseNumber(formData.room) +
                        parseNumber(formData.water) +
                        parseNumber(formData.electic)
                      ).toLocaleString()}{" "}
                      ກີບ
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  ໝາຍເຫດ
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00B8D1]"
                ></textarea>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t border-gray-200 flex space-x-3">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 border border-[#00B8D1] text-[#00B8D1] rounded-full hover:bg-gray-50 transition-colors"
              >
                ຍົກເລີກ
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2 bg-[#00B8D1] text-white rounded-full hover:bg-[#138a9e] transition-colors"
              >
                ບັນທຶກ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className="fixed inset-0  flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center relative">
            <button
              onClick={() => {
                setIsPopupOpen(false);
                setIsSuccessPopupOpen(false);
              }}
              className="text-gray-400 hover:text-gray-600 absolute top-4 right-4"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                ສ້າງລິ້ງສຳເລັດ
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
