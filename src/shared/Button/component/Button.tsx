import { FC } from "react";
import { ButtonUI } from "../ui";
import { ButtonProps } from "../types";

export const Button: FC<ButtonProps> = ({
  onClickBtn,
  type_button,
  children,
}) => {
  return (
    <ButtonUI type_button={type_button} onClickBtn={onClickBtn}>
      {children}
    </ButtonUI>
  );
};
