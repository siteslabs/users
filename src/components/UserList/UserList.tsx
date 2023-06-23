import { Button } from "UI/Button";
import { Input } from "UI/Input";
import { BarsIcon, SearchIcon } from "assets/icons";
import { UserCard } from "components/UserCard";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "store/index";
import { selectUsers } from "store/users/selector";
import { useAppSelector } from "store/index";
import { openSidebar } from "store/sidebar/slice";
import { changeModalText, changeModalType, openModal } from "store/modal/slice";

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [inputValue, setInputValue] = useState("");
  const [usersList, setUsersList] = useState(users);

  const showSidebar = () => dispatch(openSidebar());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const newUsersList = users.filter(({ email }) =>
      email.includes(e.target.value)
    );
    setUsersList(newUsersList);
  };

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const invite = () => {
    dispatch(changeModalType("invite"));
    dispatch(changeModalText("Отправьте приглашение"));
    dispatch(openModal());
  };

  return (
    <div className="h-full w-full bg-default-5 pb-4 pt-8 lg:rounded-[0.938rem] lg:pt-0">
      <div className="mb-3.5 flex items-center space-x-3 px-4 lg:hidden">
        <div className="cursor-pointer" onClick={showSidebar}>
          <BarsIcon />
        </div>
        <span className="text- text-[1.625rem] font-medium">Права доступа</span>
      </div>
      <div className="space-y-2 px-4 md:flex md:items-center md:justify-between md:gap-2.5 md:space-y-0 lg:my-5">
        <span className="hidden text-[1.625rem] font-medium lg:mr-10 lg:inline xl:mr-24">
          Команда
        </span>
        <div className="w-full md:shrink">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            containerClassName="px-[0.813rem] py-2"
            placeholder="Поиск по Email"
            rightIcon={<SearchIcon />}
          />
        </div>
        <div className="md:min-w-[13.625rem]">
          <Button onClick={invite}>Добавить пользователя</Button>
        </div>
      </div>
      <div className="mt-3 lg:[&>*:first-child]:border-t lg:[&>*:first-child]:border-t-default-10">
        {usersList.map((user) => (
          <UserCard
            key={user.email}
            className="px-4 py-2.5 lg:px-7 lg:py-6"
            user={user}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
