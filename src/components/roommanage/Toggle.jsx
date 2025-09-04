import React, { useState } from "react";

export const ToggleSwitch = ({ onToggle, defaultOn = false }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <div
      role="switch"
      aria-checked={isOn}
      onClick={handleClick}
      className={`w-[65px] h-[28px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
        isOn ? "bg-green-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-[24px] h-[24px] rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-[37px]" : "translate-x-0"
        }`}
      />
    </div>
  );
};
