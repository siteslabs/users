import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[10px] bg-white px-[13px] py-2.5">
      <input className="w-full border-none outline-none" {...props} />s
    </div>
  );
};

export default Input;
