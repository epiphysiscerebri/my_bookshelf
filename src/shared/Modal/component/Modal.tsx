import { FC } from "react";
import { ModalUI } from "../ui";
import { ModalProps } from "../types";

export const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>
  );
};
