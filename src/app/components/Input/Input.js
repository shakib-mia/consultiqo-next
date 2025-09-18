import React from "react";

const Input = (props) => {
  const { label, ...rest } = props;

  // data-* props আলাদা করা
  const {
    ["data-animate"]: dataAnimate,
    ["data-duration"]: dataDuration,
    ["data-delay"]: dataDelay,
    ...inputProps
  } = rest;

  return (
    <div
      className="space-y-2"
      data-animate={dataAnimate}
      data-duration={dataDuration}
      data-delay={dataDelay}
    >
      <label
        className="inline-block font-bold capitalize"
        htmlFor={inputProps.id}
      >
        {label}
      </label>
      <input {...inputProps} />
    </div>
  );
};

export default Input;
