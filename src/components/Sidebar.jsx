import {
  DoorClosed,
  LayoutGrid,
  BedDouble,
  Users,
  Banknote,
  Repeat1,
  ScrollText,
  StickyNote,
  NotepadText,
  Power,
} from "lucide-react";
import photo from "../assets/phto.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const menuItems = [
  { icon: LayoutGrid, label: "ໜ້າຫຼັກ", path: "/" },
  { icon: DoorClosed, label: "ຈັດການການຈອງ", path: "/bookings" },
  { icon: BedDouble, label: "ຈັດການຫ້ອງ", path: "/rooms" },
  { icon: Users, label: "ຈັດການຜູ້ເຊົ່າ", path: "/tenants" },
  { icon: Banknote, label: "ຊຳລະເງີນ", path: "/payments" },
  { icon: CiLogin, label: "ແຈ້ງເຂົ້າ", path: "/checkin" },
  { icon: IoIosLogOut, label: "ແຈ້ງອອກ", path: "/checkout" },
  { icon: Repeat1, label: "ແຈ້ງບັນຫາ", path: "/reportproblem" },
  { icon: ScrollText, label: "ຈັດການສັນຍາ", path: "/contracts" },
  { icon: NotepadText, label: "ລາຍງານ", path: "/reports" },
];

const SideBar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogout = () => {
    // localStorage.removeItem("token"); // ถ้ามี token
    navigate("/login"); // กลับไปหน้า login
  };
  return (
    <div
      onMouseEnter={() => setSidebarOpen(true)}
      onMouseLeave={() => setSidebarOpen(false)}
      className={`h-screen shadow-md z-50  
        transition-all duration-300 sticky left-0 top-0 ease-in-out
        ${sidebarOpen ? "w-[310px]" : "w-[190px]"}`}
      style={{
        background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
      }}
    >
      <div className="flex flex-col justify-between text-white items-center h-full py-6  ">
        {/* Top section: Profile + Menu */}
        <div className="flex flex-col items-center w-full">
          {/* Profile */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-[90px] h-[90px] bg-white rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={photo}
                alt="profile"
                className="object-cover  w-full h-full"
              />
            </div>
            {sidebarOpen && (
              <p className="text-white mt-4 text-lg font-semibold select-none transition-opacity duration-300">
                Home Find
              </p>
            )}
          </div>

          {/* Menu list */}
          <div>
            <div className="w-full overflow-y-auto max-h-[450px] scrollbar-hide gap-1 mt-8 px-4">
              {menuItems.map(({ icon: Icon, label, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 cursor-pointer w-full px-15 py-2 rounded-md transition-colors duration-200 select-none ${
                      isActive ? "bg-white/20" : "hover:bg-white/20"
                    }`
                  }
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <Icon size={24} />
                  </div>
                  {sidebarOpen && (
                    <span className="text-lg whitespace-nowrap">{label}</span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section: Logout Button */}
        <div>
          <div className="w-full px-8">
            <div
              onClick={handleLogout}
              className="flex items-center gap-5 cursor-pointer hover:bg-white/20 w-full px-4 py-2 rounded-md transition-colors duration-200 select-none"
            >
              <div className="flex items-center justify-center w-5 h-5">
                <Power size={24} />
              </div>
              {sidebarOpen && (
                <span className="text-lg whitespace-nowrap">ອອກຈາກລະບົບ</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

// import {
//   DoorClosed,
//   LayoutGrid,
//   BedDouble,
//   Users,
//   Banknote,
//   Repeat1,
//   ScrollText,
//   StickyNote,
//   NotepadText,
//   Power,
// } from "lucide-react";
// import photo from "../assets/phto.png";
// import { useState } from "react";

// const SideBar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setSidebarOpen(true)}
//       onMouseLeave={() => setSidebarOpen(false)}
//       className={`h-screen shadow-md z-50 overflow-y-auto border
//         transition-all duration-300 ease-in-out
//         ${sidebarOpen ? "w-[360px]" : "w-[190px]"}`}
//       style={{
//         background: "linear-gradient(180deg, #00B8D1 0%, #005E6B 100%)",
//       }}
//     >
//       <div className="flex flex-col justify-between text-white items-center h-full gap-6">
//         {/* Top section */}
//         <div className="flex flex-col items-center">
//           <div className="flex flex-col items-center mt-4">
//             <div className="border w-[90px] bg-white h-[90px] rounded-full">
//               <img src={photo} alt="" />
//             </div>
//             {sidebarOpen && (
//               <p className="mt-4 text-2xl font-semibold">Home Find</p>
//             )}
//           </div>

//           {/* Menu icons */}
//           <ul className="mt-8 flex flex-col gap-6">
//             <MenuItem
//               icon={<LayoutGrid />}
//               label="ໜ້າຫຼັກ"
//               open={sidebarOpen}
//             />
//             <MenuItem
//               icon={<DoorClosed />}
//               label="ຈັດການການຈອງ"
//               open={sidebarOpen}
//             />
//             <MenuItem
//               icon={<BedDouble />}
//               label="ຈັດການຫ້ອງ"
//               open={sidebarOpen}
//             />
//             <MenuItem
//               icon={<Users />}
//               label="ຈັດການຜູ້ເຊົ່າ"
//               open={sidebarOpen}
//             />
//             <MenuItem icon={<Banknote />} label="ຊຳລະເງີນ" open={sidebarOpen} />
//             <MenuItem icon={<Repeat1 />} label="ແຈ້ງບັນຫາ" open={sidebarOpen} />
//             <MenuItem
//               icon={<ScrollText />}
//               label="ອອກສັນຍາເຊົ່າ"
//               open={sidebarOpen}
//             />
//             <MenuItem
//               icon={<StickyNote />}
//               label="ອອກໃບພັກເຊົ່າ"
//               open={sidebarOpen}
//             />
//             <MenuItem
//               icon={<NotepadText />}
//               label="ລາຍງານ"
//               open={sidebarOpen}
//             />
//           </ul>
//         </div>

//         {/* Logout */}
//         <MenuItem icon={<Power />} label="ອອກຈາກລະບົບ" open={sidebarOpen} />
//       </div>
//     </div>
//   );
// };

// // Small helper for cleaner code
// const MenuItem = ({ icon, label, open }) => (
//   <li className="flex items-center gap-4 cursor-pointer hover:opacity-80">
//     {icon}
//     {open && <span className="text-2xl">{label}</span>}
//   </li>
// );

// export default SideBar;
