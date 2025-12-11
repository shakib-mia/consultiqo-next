import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-primary !w-fit bg-primary-light! border-none!"
      />
      <p className="w-full">{label}</p>
    </label>
  );
};

export default Checkbox;
