import React, { useState } from "react";
import photo from "../../assets/phto.png";
export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-b from-[#00B8D1] border-2 to-[#005E6B] flex items-center flex-col rounded-2xl shadow-lg p-8 h-[650px] w-[600px]">
        <div className="w-[80px] border-[#00B8D1] border-2 h-[80px] bg-white rounded-full">
          <img src={photo} alt="" />
        </div>
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          ລັອກອິນ
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="ອີເມວ"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 bg-white h-[43px] w-[300px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <input
            type="password"
            name="password"
            placeholder="ລະຫັດຜ່ານ"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg bg-white px-4 h-[43px] focus:outline-none focus:ring-2 focus:ring-[#00B8D1]"
          />
          <button
            type="submit"
            className="bg-[#00B8D1] text-white rounded-lg h-[40px] hover:bg-[#B3ABA8]"
          >
            ເຂົ້າລະບົບ
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          ຍັງບໍ່ມີບັນຊີ?{" "}
          <a href="/register" className="text-white">
            ລົງທະບຽນ
          </a>
        </p>
      </div>
    </div>
  );
};
