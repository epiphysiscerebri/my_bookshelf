import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
  onClickBtn?: () => void;
  type_button: ButtonType;
  children: ReactNode;
};

export type ButtonUIProps = {
  onClickBtn?: () => void;
  type_button: ButtonType;
  children: ReactNode;
};
