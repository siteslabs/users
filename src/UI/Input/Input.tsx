import React, { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactElement;
}

const Input: React.FC<IInputProps> = (props) => {
  const { rightIcon } = props;
  return (
    <div className="flex w-full items-center justify-between rounded-default border border-default-40 bg-default-5 px-[0.813rem] py-2">
      <input className="w-full border-none outline-none" {...props} />
      {rightIcon}
    </div>
  );
};

export default Input;
