import React from "react";
// import { DefaultTheme, GlobalStyleComponent } from "styled-components";
import { Theme, GlobalStyleComponent } from "@emotion/react";
export interface DefaultContextProps {
  themer: IThemer;
}
export interface DebugContextProps {
  debug: boolean;
  setDebug: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IThemer {
  theme: DefaultTheme;
  Global: GlobalStyleComponent<{}, Theme>;
  toggle: () => void;
  dispatch: React.Dispatch<actionprops>;
}
