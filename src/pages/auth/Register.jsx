import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#00B8D1] to-[#005E6B]">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-[#00B8D1] mb-6">
          ລົງທະບຽນ
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="ຊື່ ແລະ ນາມສະກຸນ"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg px-4 h-[40px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <input
            type="email"
            name="email"
            placeholder="ອີເມວ"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 h-[40px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <input
            type="password"
            name="password"
            placeholder="ລະຫັດຜ່ານ"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg px-4 h-[40px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <input
            type="number"
            name="phone"
            placeholder="ເບີໂທລະສັບ"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg px-4 h-[40px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <button
            type="submit"
            className="bg-[#00B8D1] text-white font-semibold rounded-lg h-[40px] hover:bg-[#0090a5]"
          >
            ສ້າງບັນຊີ
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          ມີບັນຊີແລ້ວ?{" "}
          <a href="/login" className="text-[#00B8D1] font-semibold">
            ລັອກອິນ
          </a>
        </p>
      </div>
    </div>
  );
};
