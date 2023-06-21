import React from "react";

interface ITag {
  text: string;
}

const Tag: React.FC<ITag> = ({ text }) => {
  return (
    <div className="cursor-pointer rounded-[10px] border border-solid border-[#C1C1CB] px-[12px] py-[5px]  leading-[20px] text-[#9494A0]">
      {text}
    </div>
  );
};

export default Tag;
