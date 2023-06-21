import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = (props) => {
  const { children } = props;

  return (
    <button
      className="flex w-full items-center justify-center rounded-[10px] bg-[#32C076] py-[7px] text-white"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
