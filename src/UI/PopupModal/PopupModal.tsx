import { CloseIcon } from "assets/icons";
import React, { PropsWithChildren } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    border: "none",
    padding: "0",
    boxShadow: "-30px 30px 50px 0px rgba(28, 28, 30, 0.1)",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.15)",
    zIndex: "100",
  },
};

interface IPopupModalProps extends ReactModal.Props {
  handleCloseBtn?: () => void;
}

const PopupModal: React.FC<PropsWithChildren<IPopupModalProps>> = ({
  children,
  handleCloseBtn,
  ...props
}) => {
  return (
    <ReactModal style={customStyles} {...props}>
      {handleCloseBtn && (
        <div
          className="absolute right-5 top-[1.6rem] flex w-full justify-end"
          onClick={handleCloseBtn}
        >
          <div className="cursor-pointer rounded-2xl bg-default-20 p-3">
            <CloseIcon />
          </div>
        </div>
      )}
      {children}
    </ReactModal>
  );
};

export default PopupModal;
