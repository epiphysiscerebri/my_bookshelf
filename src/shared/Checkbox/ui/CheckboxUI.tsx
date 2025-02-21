import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";
import { CheckboxUIProps } from "../types";

export const CheckboxUI: FC<CheckboxUIProps> = ({ onChange }) => (
  <Checkbox
    onChange={onChange}
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
