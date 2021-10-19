import React, { FC } from "react";
import { GlobalStyle } from "../theme";

import { DefaultContextProvider } from "./DefaultContext";
import { DebugContextProvider } from "./CoolDebugStuff";
import { ContentfullContextProvider } from "./Contentfull";

export const ContextRender: FC = ({ children }) => {
  return (
    <DebugContextProvider>
      <ContentfullContextProvider>
        <DefaultContextProvider>
          <GlobalStyle />
          {children}
        </DefaultContextProvider>
      </ContentfullContextProvider>
    </DebugContextProvider>
  );
};
