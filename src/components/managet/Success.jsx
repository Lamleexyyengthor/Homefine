import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Success = ({ showSuccess, setShowSuccess }) => {
  if (!showSuccess) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[479px] h-[464px] rounded-2xl shadow-lg relative p-8 flex flex-col items-center">
        <button
          onClick={() => setShowSuccess(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <div className=" absolute my-auto top-1/4 text-center">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-500  text-[164px] mx-auto mb-4"
          />

          <p className="text-lg font-semibold">ບັນທຶກຂໍ້ມູນສຳເລັດ</p>
        </div>
      </div>
    </div>
  );
};
