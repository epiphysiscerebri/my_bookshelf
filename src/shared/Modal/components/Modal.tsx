import { FC } from "react";
import { ModalUI } from "../ui";

export const Modal: FC<{
  title: string;
  onClose: () => void;

  children: React.ReactNode;
}> = ({ title, onClose, children }) => {
  return (
    <ModalUI title={title} onClose={onClose}>
      {children}
    </ModalUI>
  );
};
