import React, { FC } from "react";
import { WrapperPageStyle } from "./WrapperPage.style";
import { HeaderPage } from "../HeaderPage/HeaderPage";
export interface WrapperPageProps {
  children: JSX.Element;
  showHeader?: boolean;
}

export const WrapperPage: FC<WrapperPageProps> = ({ children, showHeader }) => {
  return (
    <WrapperPageStyle>
      {/* {showHeader && <HeaderPage />} */}
      {children}
    </WrapperPageStyle>
  );
};
