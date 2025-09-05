import React from "react";
import Switch from "../Switch/Switch";

const PlansSwitch = ({ setValue }) => {
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="flex justify-center">
      <Switch leftLabel="Yearly" rightLabel="Monthly" onChange={handleChange} />
    </div>
  );
};

export default PlansSwitch;
