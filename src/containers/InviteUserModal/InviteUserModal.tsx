import { Input } from "UI/Input";
import { Button } from "UI/Button";
import { PopupModal } from "UI/PopupModal";
import React, { useState } from "react";
import ReactModal from "react-modal";

import Dropdown from "rc-dropdown";
import {
  PermissionCheckboxes,
  allPermissions,
} from "components/PermissionCheckboxes";
import { useAppDispatch, useAppSelector } from "store/index";
import { addUser, editUser, selectUser } from "store/users/slice";
import {
  changeModalText,
  changeModalType,
  closeModal,
  openModal,
} from "store/modal/slice";
import { validateEmail } from "utils/validateEmail";
import { areArraysEqual } from "utils/areArrayEqual";
import { generateId } from "utils/generateId";
import { selectSelectedUser } from "store/users/selector";

interface InviteUserModalProps extends ReactModal.Props {
  title: string;
  btnText: string;
  handleCloseBtn?: () => void;
  onBtnClick?: () => void;
  showEmail?: boolean;
}

const InviteUserModal: React.FC<InviteUserModalProps> = ({
  title,
  btnText,
  onBtnClick,
  showEmail = true,
  ...props
}) => {
  const dispatch = useAppDispatch();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const selectedUser = useAppSelector(selectSelectedUser);
  const [permissions, setPermissions] = useState<string[]>(
    selectedUser?.permissions || []
  );

  const handleCheckboxChange = (permission: string) => {
    const isChecked = permissions?.find(
      (selectedPermission) => selectedPermission === permission
    );

    if (isChecked) {
      const newPermissions = permissions?.filter(
        (selectedPermission) => selectedPermission !== permission
      );
      setPermissions(newPermissions);
    } else {
      const newPermissions = [...(permissions || []), permission];
      setPermissions(newPermissions);
    }
  };

  const onVisibleChange = (visible: boolean) => setIsDropdownVisible(visible);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(
        editUser({
          ...selectedUser,
          permissions,
        })
      );

      dispatch(selectUser(null));
      dispatch(closeModal());

      return;
    }

    dispatch(
      addUser({
        email: emailValue,
        name: "Пользователь",
        id: generateId(),
        isAuthorized: false,
        permissions,
      })
    );

    onBtnClick && onBtnClick();

    dispatch(changeModalType("info"));
    dispatch(changeModalText(`Приглашение отправлено на почту ${emailValue}`));
    dispatch(openModal());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const overlay = () => {
    const handleSelectAllChange = () => {
      if (areArraysEqual(allPermissions, permissions)) {
        setPermissions([]);
      } else {
        setPermissions(allPermissions);
      }
    };
    return (
      <div onClick={(e) => e.stopPropagation()}>
        <PermissionCheckboxes
          selectedPermissions={permissions}
          onCheckboxChange={handleCheckboxChange}
          handleSelectAllChange={handleSelectAllChange}
        />
      </div>
    );
  };

  const isBtnDisabled = showEmail && !(emailValue && validateEmail(emailValue));

  return (
    <PopupModal {...props}>
      <form className="m-14 flex max-w-[25.25rem] flex-col items-center justify-center space-y-2">
        <div className="text-[2rem] font-semibold text-blue-grey-regular">
          {title}
        </div>
        {showEmail && (
          <Input
            value={emailValue}
            onChange={handleEmailChange}
            placeholder="Email"
            type="email"
            containerClassName="p-5"
          />
        )}
        <Dropdown
          visible={isDropdownVisible}
          trigger={["click"]}
          overlay={overlay}
          animation="slide-up"
          onVisibleChange={onVisibleChange}
        >
          <div className="flex w-full items-center justify-between rounded-default border border-default-40 bg-default-5 p-5 text-default-50">
            Выберите права доступа
          </div>
        </Dropdown>
        <Button
          disabled={isBtnDisabled}
          type="submit"
          onClick={handleSubmit}
          className="p-5"
        >
          {btnText}
        </Button>
      </form>
    </PopupModal>
  );
};

export default InviteUserModal;
