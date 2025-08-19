import React, { useState } from "react";
import { X } from "lucide-react";
import SuccessModal from "./SuccessModal";
import homes from "../../assets/homes.jpg";

const ReservationDetailModal = ({ isOpen, onClose, property }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen || !property) return null;

  const handleApprove = () => {
    // ສາມາດເຮັດ API call ຢູ່ນີ້ໄດ້
    setShowSuccess(true);
  };

  return (
    <>
      <div className="border fixed flex flex-cols inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white  flex flex-col rounded-xl shadow-lg w-[1051px] h-[797px] max-w-full p-6 relative">
          <div>
            {/* Header */}
            <h2 className="text-center text-2xl font-semibold mb-6">
              ລະຫັດການຈອງ: 12345
            </h2>
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <X size={24} />
          </button>

          <div className="flex flex-row  h-[620px]  justify-between items-center gap-6">
            {/* Left info */}
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-2xl ml-15">ຂໍ້ມູການຈ້ອງ</h3>
                <p className="text-lg ml-20">
                  ຊື່ ແລະ ນາມສະກຸນ: ນາງ ຕາຕູ່ນ ນັນທະໄຊ
                </p>
                <p className="text-lg ml-20">
                  ເບີໂທ: <span className="ml-20">22222222</span>
                </p>
                <p className="text-lg ml-20">Email:
                    <span className="ml-19">AA@gmail.com</span>
                    </p>
                
              </div>

              <div className="flex flex-col gap-2 ">
                <h3 className="font-bold text-2xl ml-15">ຂໍ້ມູນຫ້ອງ</h3>
                <p className="text-lg ml-20">ຊື່: ອາພາດເມັ້ນສີບຸນເຮືອງ</p>
                <p className="text-lg ml-20">
                  ທີ່ຢຸ່: ບ້ານ ສີບຸນເຮືອງ, ເມືອງ ຈັນທະບູລີ
                </p>
                <p className="text-lg ml-20">ເບີໂທ: 020 55555555</p>
                <p className="text-lg ml-20">ປະເພດຄ່າເຊົ່າ: ລາຍປີ</p>
                <p className="text-lg ml-20">ລາຄາ: 20,000,000 ກີບ/ເດືອນ</p>
                <div className="text-lg flex flex-col gap-2 ml-20">ລາຍລະອຽດ: ຫ້ອງແຖວ 2 ຊັ້ນ, 3 ຫ້ອງນອນ,
                  
                  <p className="ml-21">2 ຫ້ອງນໍ້າ.</p>
                  <p className="ml-21">ເໝາະແກ່ການເຊົ່າເປັນຫ້ອງການ</p>
                  <p className="ml-21">ແລະ ໃກ້ແຄມທາງ</p>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="flex flex-col items-center">
              <div className=" w-[469px] h-[283px] items-end justify-end mr-end mr-5">
                <div className="flex  flex-col w-[469px] h-[283px] gap-4 ">
                  <div className="flex flex-row gap-3">
                    <img
                      src={homes}
                      alt={property.name}
                      className="rounded-lg object-cover w-[228px] h-[136px]"
                    />
                    <img
                      src={homes}
                      alt={property.name}
                      className="rounded-lg object-cover w-[228px] h-[136px]"
                    />
                  </div>
                  <div className="flex flex-row gap-3">
                    <img
                      src={homes}
                      alt={property.name}
                      className="rounded-lg object-cover w-[228px] h-[136px]"
                    />
                    <img
                      src={homes}
                      alt={property.name}
                      className="rounded-lg object-cover w-[228px] h-[136px]"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-center gap-6 mt-30">
                <button
                  onClick={handleApprove}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white w-[128px] h-[45px] px-6 py-2 rounded-full shadow"
                >
                  ອະນຸມັດ
                </button>
                <button className="bg-red-400 hover:bg-red-500 text-white w-[128px] h-[45px] px-6 py-2 rounded-full shadow">
                  ປະຕິເສດ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default ReservationDetailModal;
