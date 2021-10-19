import React, { FC } from "react";
import { GlobalStyle } from "../theme";

import { DefaultContextProvider } from "./DefaultContext";
import { DebugContextProvider } from "./CoolDebugStuff";

export const ContextRender: FC = ({ children }) => {
  return (
    <DebugContextProvider>
      <DefaultContextProvider>
        <GlobalStyle />
        {children}
      </DefaultContextProvider>
    </DebugContextProvider>
  );
};
