import { FC } from "react";

import { Button } from "@mui/material";

export const ButtonUI: FC<{
  onClickBtn: () => void;
  children: React.ReactNode;
}> = ({ onClickBtn, children }) => (
  <>
    <Button
      onClick={onClickBtn}
      variant="outlined"
      sx={{
        outline: "1px solid white",
        color: "white",
      }}
    >
      {children}
    </Button>
  </>
);
