import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

export const CheckboxUI: FC = () => (
  <Checkbox
    sx={{
      color: "white",
      "&.Mui-checked": {
        color: "white",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
      "& .MuiSvgIcon-root": {
        fontSize: 30,
      },
    }}
  />
);
