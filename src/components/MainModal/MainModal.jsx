import css from "./MainModal.module.css";
import Modal from "react-modal";
import { Icon } from "../Icon/Icon";
import { useEffect } from "react";

export const MainModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add(css.modalOpen);
    } else {
      body.classList.remove(css.modalOpen);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      className={css.modalContent}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <div onClick={() => onClose()}>
        <Icon
          id={"icon-close"}
          width={32}
          height={32}
          fill="none"
          stroke="currentColor"
          isCloseStyled={true}
        />
      </div>
      {children}
    </Modal>
  );
};
