import React, { FC } from "react";
import { ButtonStyle } from "./Button.style";
export interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
}
const Button: FC<ButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <ButtonStyle disabled={disabled} onClick={onClick}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
