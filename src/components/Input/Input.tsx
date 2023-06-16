import React, { FC } from "react";
import { InputStyle } from "./Input.style";

export interface InputProps {
  onChange: (value: string) => void;
}
const Input: FC<InputProps> = ({ onChange }) => {
  return (
    <InputStyle placeholder="Введи свое имя незнакомец" type="text" onChange={({ target }) => onChange(target.value)} />
  );
};

export default Input;
