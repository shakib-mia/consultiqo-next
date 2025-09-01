import Link from "next/link";
import React from "react";

const Button = (props) => {
  const { children, className, ...rest } = props;
  // console.log(props);
  return (
    <>
      {props.href ? (
        <Link
          className={`${className} inline-block bg-primary text-white px-4 py-2 rounded-md border border-primary hover:bg-white hover:text-primary transition cursor-pointer font-gilroy-medium`}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <>
          <button
            className={`${className} inline-block bg-primary text-white px-4 py-2 rounded-md border border-primary hover:bg-white hover:text-primary transition cursor-pointer font-gilroy-medium`}
            {...rest}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
