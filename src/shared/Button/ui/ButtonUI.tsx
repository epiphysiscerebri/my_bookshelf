import { FC, ReactNode } from "react";
import { Button } from "@mui/material";

export const ButtonUI: FC<{
  onClickBtn?: () => void;
  type_button: "button" | "submit" | "reset";
  children: ReactNode;
}> = ({ onClickBtn, type_button, children }) => {
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
