import { ReactNode } from "react";

export type ModalProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export type ModalUIProps = ModalProps;
