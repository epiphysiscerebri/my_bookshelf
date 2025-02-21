import { FC } from "react";
import { CheckboxUI } from "../ui";

export const Checkbox: FC<{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => {
  return <CheckboxUI onChange={onChange}></CheckboxUI>;
};
