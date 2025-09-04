import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdCloudUpload } from "react-icons/io";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { Success } from "./Success";
export const Add = ({
  isOpen,
  setIsOpen,
  handleSave,
  showSuccess,
  setShowSuccess,
}) => {
  if (!isOpen ) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50">
        <div className="bg-white w-[635px] h-[721px] rounded-2xl shadow-lg relative flex flex-col">
          {/* Header */}
          <div className="p-6 ">
            <h2 className="text-xl font-bold text-[#005E6B] text-center">
              ເພີ່ມຜູ້ເຊົ່າ
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>

          {/* Scrollable Body + Footer */}
          <div className="flex-1 overflow-auto scrollbar-hide p-6 space-y-6">
            {/* ຟອມຂໍ້ມູນ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ຊື່ ແລະ ນາມສະກຸນ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນຊື່"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ເບີໂທ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນເບີໂທຕີດຕໍ່"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ອີເມວ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນອີເມວ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ບ້ານ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນບ້ານ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ເມືອງ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນເມືອງ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ແຂວງ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນແຂວງ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ເລືອກປະເພດເອກະສານ</label>
                <select className="border text-[14px] border-[#D1D5DB] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3">
                  <option>ບັດປະຈຳຕົວ</option>
                  <option>ພາສປອດ</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ເລກບັດປະຈຳຕົວ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] border-[#D1D5DB] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນເລກບັດປະຈຳຕົວ"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">
                  ອັບໂຫຼດຮູບເອກະສານ (ຂະໝາດ1:2ຫຼື1270x740)
                </label>
                <div className="border  flex flex-row gap-2 justify-center items-center bg-white w-[128px] h-[34px] text-[#00B8D1] h-[34px] rounded-lg px-3 py-2">
                  <IoMdCloudUpload className="text-[#6B7280]" />
                  <span className="text-[#1F1D1D] text-[14px]">ອັບໂຫຼດ</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ວັນທີເຂົ້າພັກ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] text-[14px] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"
                  placeholder="ປ້ອນວັນທີເຂົ້າພັກ"
                />
              </div>
            </div>
            <div className="text-xl text[#1F2937] font-bold">
              <p>ຂໍ້ມູນຫ້ອງ</p>
            </div>
            {/* ຖັນມັດຈຳ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ຫ້ອງ</label>
                <select className="border border-[#D1D5DB] bg-white w-[264px] text-[#4F4645] h-[34px] rounded-lg px-3 py-2"></select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ຄ່າເຊົ່າ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2 w-[264px] h-[34px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#4B5563] text-[14px]">ຄ່າມັດຈໍາ</label>
                <input
                  type="text"
                  className="border border-[#D1D5DB] rounded-lg px-3 py-2 w-[264px] h-[34px]"
                />
              </div>
            </div>

            {/* ລາຍລະອຽດ */}
            <div className="flex flex-col text-[14px] gap-2">
              <label>ລາຍລະອຽດຫ້ອງ</label>
              <textarea className="border border-[#D1D5DB] w[546px] h-[130px] rounded-lg px-3 py-2 h-24" />
            </div>

            {/* ເອກະສານສັນຍາ */}
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-bold">ເອກະສານສັນຍາເຊົ່າ</label>
              <div className=" flex flex-col rounded-lg items-center justify-between h-[170px] bg-[#E2E8F0] p-6 text-center gap-3">
                <div>
                  <FontAwesomeIcon
                    className="text-4xl text-[#9CA3AF]"
                    icon={faFileContract}
                  />
                </div>
                <div className="text-[#9CA3AF] text-[14px]">
                  <p>ສ້າງສັນຍາການເຊົ່າທີ່ນີ້</p>
                </div>
                <div className="border text-[14px] text-white rounded-sm bg-[#00B8D1] w-[178px] h-[24px]">
                  <p>ສ້າງເອກະສານສັນຍາເຊົ່າ</p>
                </div>
              </div>
            </div>

            {/* Footer ໃສ່ໃນ scroll */}
            <div className="pt-6   flex justify-center gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 w-[128px] h-[44px] rounded-lg border border-[#00B8D1] text-[#1F2937] hover:bg-gray-100"
              >
                ຍົກເລີກ
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 w-[128px] h-[44px] rounded-lg bg-[#00B8D1] text-white "
              >
                ບັນທຶກ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Success
        
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
      />
    </div>
  );
};
