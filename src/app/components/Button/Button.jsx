import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <>
      <a
        className={`${className} bg-primary text-white px-4 py-2 rounded-md border border-primary hover:bg-white hover:text-primary transition cursor-pointer font-gilroy-medium`}
        {...rest}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
