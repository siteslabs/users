import { Button } from "UI/Button";
import { Input } from "UI/Input";
import { BarsIcon, SearchIcon } from "assets/icons";
import { UserCard } from "components/UserCard";
import { TUser } from "entities/Users";
import React from "react";

interface IUserListProps {
  users: TUser[];
}

const UserList: React.FC<IUserListProps> = ({ users }) => {
  return (
    <div className="h-full w-full bg-default-5 pb-4 pt-8 lg:rounded-[0.938rem] lg:pt-0">
      <div className="mb-3.5 flex items-center space-x-3 px-4 lg:hidden">
        <div className="cursor-pointer">
          <BarsIcon />
        </div>
        <span className="text- text-[1.625rem] font-medium">Права доступа</span>
      </div>
      <div className="space-y-2 px-4 md:flex md:items-center md:justify-between md:gap-2.5 md:space-y-0 lg:my-5">
        <span className="hidden text-[1.625rem] font-medium lg:mr-24 lg:inline">
          Команда
        </span>
        <div className="w-full md:shrink">
          <Input placeholder="Поиск по Email" rightIcon={<SearchIcon />} />
        </div>
        <div className="md:min-w-[13.625rem]">
          <Button>Добавить пользователя</Button>
        </div>
      </div>
      <div className="mt-3 lg:[&>*:first-child]:border-t lg:[&>*:first-child]:border-t-default-10">
        {users.map((user) => (
          <UserCard className="px-4 py-2.5 lg:px-7 lg:py-6" user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
