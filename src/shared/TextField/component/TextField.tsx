import { FC } from "react";
import { TextFieldUI } from "../ui";
import { TextFieldProps } from "../types";

export const TextField: FC<TextFieldProps> = ({
  inputRef,
  label,
  defaultValue,
}) => (
  <TextFieldUI
    inputRef={inputRef}
    label={label}
    defaultValue={defaultValue}
  ></TextFieldUI>
);
