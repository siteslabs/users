import { Outlet } from "react-router-dom";

import { Sidebar } from "layouts/Sidebar";
import "rc-dropdown/assets/index.css";
import { useAppDispatch, useAppSelector } from "store/index";
import {
  selectIsModalVisible,
  selectModalText,
  selectModalType,
} from "store/modal/selector";
import { closeModal } from "store/modal/slice";
import { InfoModal } from "components/InfoModal";
import React from "react";
import { InviteUserModal } from "containers/InviteUserModal";

const App = () => {
  const dispatch = useAppDispatch();
  const isModalShown = useAppSelector(selectIsModalVisible);
  const modalType = useAppSelector(selectModalType);
  const modalText = useAppSelector(selectModalText);
  const closeInfoModal = () => dispatch(closeModal());

  const modalMap: Record<typeof modalType, React.ReactElement> = {
    info: (
      <InfoModal
        isOpen={isModalShown}
        btnText="Закрыть"
        info={modalText}
        onBtnClick={closeInfoModal}
      />
    ),
    invite: (
      <InviteUserModal
        isOpen={isModalShown}
        btnText="Отправить приглашение"
        title={modalText}
        handleCloseBtn={closeInfoModal}
        onBtnClick={closeInfoModal}
      />
    ),
    edit: (
      <InviteUserModal
        showEmail={false}
        isOpen={isModalShown}
        btnText="Отправить приглашение"
        title={modalText}
        handleCloseBtn={closeInfoModal}
        onBtnClick={closeInfoModal}
      />
    ),
  };

  return (
    <>
      <Sidebar>
        <Outlet />
      </Sidebar>
      {modalMap[modalType]}
    </>
  );
};

export default App;
