import { FC } from "react";
import { ButtonUI } from "../ui";

export const Button: FC<{
  onClickBtn: () => void;
  children: React.ReactNode;
}> = ({ onClickBtn, children }) => {
  return <ButtonUI onClickBtn={onClickBtn}>{children}</ButtonUI>;
};
