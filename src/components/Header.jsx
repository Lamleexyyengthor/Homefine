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
import { CiLogin } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const bookingPath = currentPath.startsWith("/bookings");
  const roomPath = currentPath.startsWith("/rooms");
  const paymentPath = currentPath.startsWith("/payments");
  const checkinPath = currentPath.startsWith("/checkin");
  const checkoutPath = currentPath.startsWith("/checkout");
  const reportPath = currentPath.startsWith("/reportproblem");
  const contractPath = currentPath.startsWith("/contracts");

  const Items = [
    { icon: LayoutGrid, label: "ໜ້າຫຼັກ", path: "/" },
    { icon: DoorClosed, label: "ຈັດການການຈອງ", path: bookingPath || currentPath === "/bookings" ? currentPath : "/bookings" },
    // { icon: BedDouble, label: "ຈັດການຫ້ອງ", path: `${roomPath || currentPath === "/all-rooms" ||  currentPath === "/rentRoom" ? : "/rooms" }` },
    {
      icon: BedDouble,
      label: "ຈັດການຫ້ອງ",
      path:
        roomPath || currentPath === "/all-rooms" || currentPath === "/rentRoom"
          ? currentPath
          : "/rooms",
    },
    { icon: Users, label: "ຈັດການຜູ້ເຊົ່າ", path: "/tenants" },
    {
      icon: Banknote,
      label: "ຊຳລະເງີນ",
      path:
        paymentPath ||
        currentPath === "/payments" ||
        currentPath === "/waitRoom" ||
        currentPath === "/historypay"
          ? currentPath
          : "/payments",
    },
    {
      icon: CiLogin,
      label: "ແຈ້ງເຂົ້າ",
      path: checkinPath || currentPath === "/checkin" ? currentPath
      : "/checin",
    },
    { icon: IoIosLogOut, label: "ແຈ້ງອອກ", path: checkoutPath || currentPath === "checkout" ? currentPath : "/checkout" },
    { icon: Repeat1, label: "ຈັດການແຈ້ງບັນຫາ", path: reportPath || currentPath === "/reportproblem" ? currentPath : "/reportproblem" },
    { icon: ScrollText, label: "ຈັດການສັນຍາເຊົ່າ", path: contractPath || currentPath === "/contracts" ? currentPath : "/contracts" },
    { icon: NotepadText, label: "ລາຍງານ", path: "/reports" },
    { icon: NotepadText, label: "ລາຍງານຫ້ອງ", path: "/roomReport" },
    { icon: NotepadText, label: "ລາຍງານການຊຳລະເງິນ", path: "/paymentReport" },
    { icon: NotepadText, label: "ລາຍງານຄ້າງຊຳລະ", path: "/debtReport" },
    { icon: NotepadText, label: "ລາຍງານຜູ້ເຊົ່າ", path: "/tenantReport" },
  ];

  // Find the current active menu item
  const activeItem = Items.find((item) => item.path === location.pathname);

  return (
    <div className="flex flex-row justify-between shadow-xl items-center w-full h-[100px] sticky top-0 bg-white z-50 ">
      {/* Show only active path's icon and label */}
      {activeItem && (
        <div className="ml-15 flex text-[32px] items-center w-auto h-[85px] flex-row gap-3">
          <activeItem.icon className="w-9 h-9 text-[#00B8D1]" />
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
            {activeItem.label}
          </p>
        </div>
      )}

      {/* User Icon */}
      <div className=" w-[152px] h-[85px] mr-15 flex flex-row justify-center items-center gap-4">
        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-b from-[#00B8D1] to-[#005E6B] flex justify-center items-center">
          <BellDot className="text-white" />
        </div>

        <div className="text-[32px] text-[#3D3938]">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  );
};
