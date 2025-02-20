import { FC } from "react";
import { TextFieldUI } from "../ui";

export const TextField: FC<{
  label: string;
  defaultValue: string | undefined;
}> = ({ label, defaultValue }) => (
  <TextFieldUI label={label} defaultValue={defaultValue}></TextFieldUI>
);
