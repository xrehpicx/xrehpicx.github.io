import React, { FC } from "react";
import { GlobalStyle } from "../theme";

import { DefaultContextProvider } from "./DefaultContext";

export const ContextRender: FC = ({ children }) => {
  return (
    <DefaultContextProvider>
      <GlobalStyle />
      {children}
    </DefaultContextProvider>
  );
};
