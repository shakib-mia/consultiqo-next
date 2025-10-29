import Link from "next/link";
import React from "react";
import SafeLink from "../SafeLink/SafeLink";

const Button = (props) => {
  const { children, className, ...rest } = props;
  // console.log(props);
  return (
    <>
      {props.href ? (
        <SafeLink
          className={`inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light hover:text-primary transition cursor-pointer font-gilroy-medium ${className}`}
          {...rest}
        >
          {children}
        </SafeLink>
      ) : (
        <>
          <button
            className={`inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light hover:text-primary transition cursor-pointer font-gilroy-medium ${className}`}
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
