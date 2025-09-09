"use client";

import { useState } from "react";

export default function Switch({
  checked = false,
  onChange,
  disabled = false,
  leftLabel = "Off",
  rightLabel = "On",
}) {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    if (disabled) return;
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState ? rightLabel : leftLabel);
    }
  };

  return (
    <div className="flex items-center gap-3" data-animate="fade-in">
      <span className={`text-xl transition-colors`}>{leftLabel}</span>

      <button
        type="button"
        role="switch"
        aria-checked={isOn}
        onClick={toggleSwitch}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300
          ${isOn ? "bg-violet-600" : "bg-gray-300"}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
            ${isOn ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>

      <span className={`text-xl transition-colors`}>{rightLabel}</span>
    </div>
  );
}
