import { UserIcon } from "assets/icons";
import React from "react";

interface IAvagar {
  imgUrl?: string;
}

const Avatar: React.FC<IAvagar> = ({ imgUrl }) => {
  if (imgUrl) {
    return (
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        className="rounded-cover h-16 w-16 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBEBF0] ">
      <UserIcon />
    </div>
  );
};

export default Avatar;
