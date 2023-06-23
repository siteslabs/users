import { Button } from "UI/Button";
import { PopupModal } from "UI/PopupModal";
import React from "react";

interface IInfoModalProps extends ReactModal.Props {
  info: string;
  btnText: string;
  onBtnClick: () => void;
}

const InfoModal: React.FC<IInfoModalProps> = ({
  info,
  btnText,
  onBtnClick,
  ...props
}) => {
  return (
    <PopupModal {...props}>
      <div className="mx-14 my-10 flex max-w-[25.25rem] flex-col items-center justify-center space-y-4">
        <span className="text-center text-[1.375rem] text-blue-grey-regular">
          {info}
        </span>
        <Button onClick={onBtnClick} className="p-5">
          {btnText}
        </Button>
      </div>
    </PopupModal>
  );
};

export default InfoModal;
