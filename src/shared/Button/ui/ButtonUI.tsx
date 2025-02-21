import { FC } from "react";
import { Button } from "@mui/material";
import { ButtonUIProps } from "../types";

export const ButtonUI: FC<ButtonUIProps> = ({
  onClickBtn,
  type_button,
  children,
}) => {
  return (
    <Button
      {...(onClickBtn && { onClick: onClickBtn })}
      type={type_button}
      variant="outlined"
      sx={{
        outline: "1px solid white",
        color: "white",
      }}
    >
      {children}
    </Button>
  );
};
