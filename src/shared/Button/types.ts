import { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
  onClickBtn?: (data?: any) => void;
  type_button: ButtonType;
  children: ReactNode;
};

export type ButtonUIProps = {
  onClickBtn?: () => void;
  type_button: ButtonType;
  children: ReactNode;
};
