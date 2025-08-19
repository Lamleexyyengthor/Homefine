import { HiUsers } from "react-icons/hi2";
import React from "react";
import { IoBedSharp } from "react-icons/io5";

export const Homepage = () => {
  return (
    <div className="flex justify-center w-full min-h-screen p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <div
          className="flex items-center justify-center w-full rounded-3xl p-4 md:p-8"
          style={{
            background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
          }}
        >
          {/* SVG gradient definition for icons */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00B8D1" />
                <stop offset="100%" stopColor="#005E6B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl">
            {/* Card 1 - Total Tenants */}
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 min-h-[140px] md:min-h-[155px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center w-12 h-12 md:w-[51px] md:h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex-shrink-0">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <HiUsers
                      className="w-6 h-6 md:w-8 md:h-8"
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] text-lg md:text-2xl leading-tight">
                  ຜູ້ເຊົ່າທັງໝົດ
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow">
                <p className="font-bold text-xl md:text-2xl text-center">ທັງໝົດ 100 (ຄົນ)</p>
              </div>
            </div>

            {/* Card 2 - Total Rooms */}
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 min-h-[140px] md:min-h-[155px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center w-12 h-12 md:w-[51px] md:h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex-shrink-0">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <IoBedSharp
                      className="w-6 h-6 md:w-8 md:h-8"
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold c text-lg md:text-2xl leading-tight">
                  ຫ້ອງເຊົ່າທັງໝົດ
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow">
                <p className="font-bold text-xl md:text-2xl text-center">ທັງໝົດ 20 (ຫ້ອງ)</p>
              </div>
            </div>

            {/* Card 3 - Paid Rooms */}
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 min-h-[140px] md:min-h-[155px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center w-12 h-12 md:w-[51px] md:h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex-shrink-0">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <IoBedSharp
                      className="w-6 h-6 md:w-8 md:h-8"
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] text-lg md:text-2xl leading-tight">
                  ຫ້ອງເຊົ່າທີ່ຈ່າຍແລ້ວ
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow">
                <p className="font-bold text-xl md:text-2xl text-center">ທັງໝົດ 20 (ຫ້ອງ)</p>
              </div>
            </div>

            {/* Card 4 - Unpaid Rooms */}
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 min-h-[140px] md:min-h-[155px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center w-12 h-12 md:w-[51px] md:h-[51px] rounded-full p-[3px] bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex-shrink-0">
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-white">
                    <IoBedSharp
                      className="w-6 h-6 md:w-8 md:h-8"
                      style={{ fill: "url(#grad)" }}
                    />
                  </div>
                </div>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B] text-lg md:text-2xl leading-tight">
                  ຫ້ອງເຊົ່າທີ່ຍັງບໍ່ໄດ້ຈ່າຍ
                </p>
              </div>
              <div className="flex justify-center items-center flex-grow">
                <p className="font-bold text-xl md:text-2xl text-center">ທັງໝົດ 0 (ຫ້ອງ)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;