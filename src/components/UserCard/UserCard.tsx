import React from "react";

import { Avatar } from "UI/Avatar";
import { Tag } from "UI/Tag";
import { DotsIcon } from "assets/icons";
import { TUser } from "entities/Users";

interface IUserCardProps {
  user: TUser;
  className?: string;
}

const UserCard: React.FC<IUserCardProps> = ({ user, className }) => {
  const { permissions, email, image, name } = user;

  return (
    <div
      className={`flex w-full cursor-pointer space-x-[0.938rem] hover:bg-default-10 ${className}`}
    >
      <div className="shrink-0">
        <Avatar imgUrl={image} />
      </div>

      <div className="w-full">
        <div className="flex justify-between">
          <div className="md:flex md:space-x-2.5">
            <div className="text-sm font-medium text-blue-grey-regular lg:font-semibold">
              {name}
            </div>
            <div className="text-sm text-default-50">{email}</div>
          </div>
          <div className="cursor-pointer py-1.5">
            <DotsIcon />
          </div>
        </div>
        <div className="flex flex-wrap items-center space-x-[0.188rem]">
          {permissions.map((permission) => (
            <div key={permission} className="mt-1">
              <Tag key={permission} text={permission} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
