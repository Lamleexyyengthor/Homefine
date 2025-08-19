import React from "react";
import { X, CheckCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white flex flex-col rounded-xl justify-center w-[479px] h-[464px] shadow-lg w-[350px] max-w-full p-6 relative text-center">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4  right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={22} className="text-[#005E6B]"/>
        </button>

        {/* Success icon */}
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500  text-[164px] mx-auto mb-4" />

        {/* Message */}
        <p className="text-xl font-medium">ບັນທຶກຂໍ້ມູນສຳເລັດ</p>
      </div>
    </div>
  );
};

export default SuccessModal;
