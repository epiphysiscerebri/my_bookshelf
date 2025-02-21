import { FC } from "react";
import { ButtonUI } from "../ui";

export const Button: FC<{
  onClickBtn?: (data?: any) => void;
  type_button: "button" | "submit" | "reset";
  children: React.ReactNode;
}> = ({ onClickBtn, type_button, children }) => {
  return (
    <ButtonUI type_button={type_button} onClickBtn={onClickBtn}>
      {children}
    </ButtonUI>
  );
};
