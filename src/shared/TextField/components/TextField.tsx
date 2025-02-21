import { FC } from "react";
import { TextFieldUI } from "../ui";

export const TextField: FC<{
  inputRef?: any;
  label: string;
  defaultValue: string | undefined;
}> = ({ inputRef, label, defaultValue }) => (
  <TextFieldUI
    inputRef={inputRef}
    label={label}
    defaultValue={defaultValue}
  ></TextFieldUI>
);
