import { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

export const CheckboxUI: FC<{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => (
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
