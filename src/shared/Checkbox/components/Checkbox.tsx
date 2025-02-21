import { FC } from "react";
import { CheckboxUI } from "../ui";
import { CheckboxProps } from "../types";

export const Checkbox: FC<CheckboxProps> = ({ onChange }) => {
  return <CheckboxUI onChange={onChange}></CheckboxUI>;
};
