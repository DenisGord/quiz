import React, { FC } from "react";
import { WrapperPageStyle } from "./WrapperPage.style";

export interface WrapperPageProps {
  children: JSX.Element;
  showHeader?: boolean;
}

export const WrapperPage: FC<WrapperPageProps> = ({ children }) => {
  return (
    <WrapperPageStyle>
      {children}
    </WrapperPageStyle>
  );
};
