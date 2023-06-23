import cn from "classnames";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

const Button: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, disabled, ...props }) => {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-center rounded-default bg-button-bg p-2 text-default-5 transition hover:bg-button-bg-hover",
        {
          "bg-slate-700 text-white hover:cursor-not-allowed hover:bg-slate-700":
            disabled,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
