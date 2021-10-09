import React from "react";
// import { DefaultTheme, GlobalStyleComponent } from "styled-components";
import { Theme, GlobalStyleComponent } from "@emotion/react";
export interface DefaultContextProps {
  themer: IThemer;
  debug: boolean;
}

export interface IThemer {
  theme: DefaultTheme;
  Global: GlobalStyleComponent<{}, Theme>;
  toggle: () => void;
  dispatch: React.Dispatch<actionprops>;
}
