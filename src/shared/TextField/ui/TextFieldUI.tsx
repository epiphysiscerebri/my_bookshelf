import { FC } from "react";
import { TextField } from "@mui/material";
import { TextFieldUIProps } from "../types";

export const TextFieldUI: FC<TextFieldUIProps> = ({
  inputRef,
  label,
  defaultValue,
}) => (
  <>
    <TextField
      inputRef={inputRef}
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
