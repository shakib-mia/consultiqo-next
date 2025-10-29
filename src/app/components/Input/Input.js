"use client";

import React, { useState } from "react";

const Input = (props) => {
  const { label, ...rest } = props;
  const [focused, setFocused] = useState(false);

  // data-* props আলাদা করা
  const {
    ["data-animate"]: dataAnimate,
    ["data-duration"]: dataDuration,
    ["data-delay"]: dataDelay,
    as,
    ...inputProps
  } = rest;

  //   console.log(as);

  return (
    <div
      className="relative w-full mt-2"
      data-animate={dataAnimate}
      data-duration={dataDuration}
      data-delay={dataDelay}
    >
      <label
        className={`inline-block font-bold capitalize absolute transition-all text-dark ${
          focused ? "-top-5 left-3 scale-95" : "top-6 left-5 scale-100"
        } bottom-0 pointer-events-none`}
        htmlFor={inputProps.id}
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...inputProps}
          placeholder=""
          className="mt-2"
        ></textarea>
      ) : (
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...inputProps}
          placeholder=""
          className="mt-2"
        />
      )}
    </div>
  );
};

export default Input;
