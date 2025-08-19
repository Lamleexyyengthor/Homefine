import React from "react";
import {
  LayoutGrid,
  DoorClosed,
  BedDouble,
  Users,
  Banknote,
  Repeat1,
  ScrollText,
  StickyNote,
  NotepadText,
  BellDot,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const location = useLocation();

  const Items = [
    { icon: LayoutGrid, label: "ໜ້າຫຼັກ", path: "/" },
    { icon: DoorClosed, label: "ຈັດການການຈອງ", path: "/bookings" },
    { icon: BedDouble, label: "ຈັດການຫ້ອງ", path: "/rooms" },
    { icon: Users, label: "ຈັດການຜູ້ເຊົ່າ", path: "/tenants" },
    { icon: Banknote, label: "ຊຳລະເງີນ", path: "/payments" },
    { icon: Repeat1, label: "ແຈ້ງບັນຫາ", path: "/issues" },
    { icon: ScrollText, label: "ອອກສັນຍາເຊົ່າ", path: "/contracts" },
    { icon: StickyNote, label: "ອອກໃບພັກເຊົ່າ", path: "/leave-requests" },
    { icon: NotepadText, label: "ລາຍງານ", path: "/reports" },
  ];

  // Find the current active menu item
  const activeItem = Items.find((item) => item.path === location.pathname);

  return (
    <div className="flex flex-row justify-between items-center w-full h-[100px]">
      {/* Show only active path's icon and label */}
      {activeItem && (
        <div className="ml-15 flex text-[32px] items-center  w-auto h-[85px] flex-row gap-3">
          <activeItem.icon
            className="w-9 h-9"
            style={{ stroke: "url(#gradientStroke)" , }}
          />
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
            {activeItem.label}
          </p>
        </div>
      )}

      {/* User Icon */}
      <div className=" w-[152px] h-[85px] mr-15 flex flex-row justify-center items-center gap-4">
        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex justify-center items-center">
          <BellDot className="text-white"/>
        </div>

        <div className="text-[32px] text-[#3D3938]">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};
