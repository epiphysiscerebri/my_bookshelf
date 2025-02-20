import { FC } from "react";

import { TextField } from "@mui/material";

export const TextFieldUI: FC<{
  label: string;
  defaultValue: string | undefined;
}> = ({ label, defaultValue }) => (
  <>
    <TextField
      label={label}
      variant="filled"
      defaultValue={defaultValue}
      InputLabelProps={{
        sx: {
          color: "lightgrey",
          "&.MuiInputLabel-shrink": { color: "white" },
        },
      }}
      sx={{
        color: "white",
        "& .MuiInputBase-root": {
          color: "white",
        },
        "& .MuiFilledInput-underline:before": {
          borderBottomColor: "lightgrey",
        },
        "& .MuiFilledInput-underline:after": { borderBottomColor: "white" },
      }}
    ></TextField>
  </>
);
