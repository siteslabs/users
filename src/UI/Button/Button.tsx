import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = (props) => {
  const { children } = props;

  return (
    <button
      className={`flex w-full items-center justify-center rounded-default bg-button-bg py-2 text-default-5 transition hover:bg-button-bg-hover`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
