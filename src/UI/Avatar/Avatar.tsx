import { AvatarIcon } from "assets/icons";
import React from "react";

interface IAvatarProps {
  imgUrl?: string;
}

const Avatar: React.FC<IAvatarProps> = ({ imgUrl }) => {
  if (imgUrl) {
    return (
      <img
        src={imgUrl}
        alt="user"
        className="rounded-cover h-16 w-16 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-default-20 ">
      <AvatarIcon />
    </div>
  );
};

export default Avatar;
