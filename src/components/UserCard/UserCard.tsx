import React from "react";
import Dropdown from "rc-dropdown";

import { Avatar } from "UI/Avatar";
import { Tag } from "UI/Tag";
import { DotsIcon } from "assets/icons";
import { TUser } from "entities/Users";

import { useAppDispatch } from "store/index";
import { deleteUserByEmail, selectUser } from "store/users/slice";
import { changeModalText, changeModalType, openModal } from "store/modal/slice";

interface IUserCardProps {
  user: TUser;
  className?: string;
}

const UserCard: React.FC<IUserCardProps> = ({ user, className }) => {
  const dispatch = useAppDispatch();
  const { permissions, email, image, name, isAuthorized } = user;
  const optionClasses =
    "cursor-pointer px-6 py-2 text-blue-grey-regular hover:bg-default-10";

  const deleteUser = () => {
    dispatch(deleteUserByEmail(user.email));
    dispatch(changeModalType("info"));
    dispatch(changeModalText("Пользователь успешно удален "));
    dispatch(openModal());
  };

  const resendInvite = () => {
    dispatch(changeModalType("info"));
    dispatch(changeModalText(`Приглашение отправлено на почту ${user.email}`));
    dispatch(openModal());
  };

  const selectEditingUser = () => {
    dispatch(selectUser(user));
    dispatch(changeModalType("edit"));
    dispatch(changeModalText("Изменить права доступа"));
    dispatch(openModal());
  };

  const menuCallback = () => (
    <div className="overflow-hidden rounded-2xl bg-default-5 py-2 shadow-default">
      <div className={optionClasses} onClick={selectEditingUser}>
        Изменить права доступа
      </div>
      <div className={optionClasses} onClick={resendInvite}>
        Отправить код повторно
      </div>
      <div className={optionClasses} onClick={deleteUser}>
        Удалить
      </div>
    </div>
  );

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
            {!isAuthorized && (
              <div className="text-sm font-medium text-default-50">
                Не авторизирован
              </div>
            )}
            <div className="text-sm text-default-50">{email}</div>
          </div>
          <Dropdown
            trigger={["click"]}
            overlay={menuCallback}
            animation="slide-up"
            onVisibleChange={() => console.log("onVisibleChange")}
          >
            <div className="cursor-pointer pt-1.5">
              <DotsIcon />
            </div>
          </Dropdown>
        </div>
        <div className="flex flex-wrap items-center space-x-[0.188rem]">
          {permissions?.map((permission) => (
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
