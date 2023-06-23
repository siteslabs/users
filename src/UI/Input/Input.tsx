import cn from "classnames";
import React, { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactElement;
  containerClassName?: string;
}

const Input: React.FC<IInputProps> = ({
  rightIcon,
  containerClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        `flex w-full items-center justify-between rounded-default border border-default-40 bg-default-5`,
        containerClassName
      )}
    >
      <input
        className="w-full border-none bg-default-5 outline-none focus:outline-none focus-visible:outline-none"
        {...props}
      />
      {rightIcon}
    </div>
  );
};

export default Input;
