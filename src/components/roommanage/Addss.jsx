import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdCloudUpload } from "react-icons/io";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { Success } from "./Successs";
import { ChevronLeft } from "lucide-react";

export const Addss = ({
  isOpen,
  setIsOpen,
  handleSave,
  showSuccess,
  setShowSuccess,
}) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black/40  flex items-center justify-center z-50">
        <div className="bg-white w-[1050px] h-[818px] items-center rounded-2xl shadow-lg flex flex-col gap-12">
          <div className="flex flex-row border mt-10">
            <div onClick={() => setIsOpen(false)}>
              <ChevronLeft className="border flex mt-2" />
            </div>
            <div className="border w-[900px] text-3xl justify-center font-bold text-[#005E6B] flex">
              <p className="text-center">ເພີ່ມຫ້ອງເຊົ່າ</p>
            </div>
          </div>
          <div className="flex-1 overflow-auto scrollbar-hide p-6 space-y-6">
            <div className="flex flex-col gap-2 w-[937px] h-full border">
              <div className="flex flex-row gap-12">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <label className="">ຄໍານໍາໜ້າເລກຫ້ອງ</label>
                    <label className="text-[#9CA3AF]">(ຖ້າມີ)</label>
                  </div>
                  <input
                    className="border text-sm pl-3 rounded-lg border-[#94908F] w-[279px] h-[35px]"
                    type="text"
                    placeholder="ຄວນເປັນຕົວເລກ ຫລື ອັກສອນພາສາອັງກິດ"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="">ເລກຫ້ອງເລີ່ມຕົ້ນ</label>
                  <input
                    className="border text-sm pl-3 rounded-lg border-[#94908F] w-[279px] h-[35px]"
                    type="text"
                    placeholder="ເພີ່ມເລກຫ້ອງ"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="">ເລກຫ້ອງສີ້ນສຸດ</label>

                  <input
                    className="border text-sm pl-3 rounded-lg border-[#94908F] w-[279px] h-[35px]"
                    type="text"
                    placeholder="ເພີ່ມເລກຫ້ອງ"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-6 justify-between">
                <div className="flex flex-col gap-1">
                  <label className="">ຄ່າເຊົ່າ</label>
                  <input
                    type="text"
                    className="border rounded-xl pl-3 border-[#94908F] w-[427px] h-[35px]"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="">ຄ່າມັດຈໍາ</label>
                  <input
                    type="text"
                    className="border pl-3 rounded-xl w-[427px] border-[#94908F] h-[35px]"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-6 justify-between">
                <div className="flex flex-col gap-1">
                  <label className="">ຂະໜາດຫ້ອງ</label>
                  <input
                    type="text"
                    className="border rounded-xl pl-3 border-[#94908F] w-[427px] h-[35px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="">ຄ່າມັດຈໍາ</label>
                  <select className="border pl-3 rounded-xl w-[427px] border-[#94908F] h-[35px]"></select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="">ລາຍລະອຽດ</label>
                <input
                  type="text"
                  className="border rounded-lg border-[#94908F] pl-3 text-sm w-[936px] h-[164px]"
                  placeholder="ຂໍ້ຄວາມ...."
                />
              </div>
              <div className="flex items-center justify-center mt-10">
                <div className=" w-[526px] flex items-center text-xl justify-center rounded-full bg-[#00B8D1] h-[47px]">
                  <p className="text-white">ເພີ່ມ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Success showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </div>
  );
};
