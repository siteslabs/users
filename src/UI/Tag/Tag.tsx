import React from "react";

interface ITagProps {
  text: string;
}

const Tag: React.FC<ITagProps> = ({ text }) => {
  return (
    <div className="cursor-pointer rounded-default border border-solid border-default-40 px-3 py-[0.313rem]  leading-5 text-default-50">
      {text}
    </div>
  );
};

export default Tag;
