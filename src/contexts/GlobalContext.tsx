import React, { createContext } from "react";
import { IThemer } from "../components/types";
import { useThemer } from "../hooks/useThemer";
import { useWantCode } from "../hooks/useWantCode";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

interface IGlobalContextProps {
  children: any;
}

interface IGlobalContext {
  themer: IThemer;
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const themer = useThemer();
  useWantCode(themer.theme);
  const muitheme = createTheme({
    shape: {
      borderRadius: 0,
    },
    palette: {
      mode: themer.theme.colors.main.type,
      primary: {
        main: themer.theme.colors.main.accent,
      },
      secondary: {
        main: themer.theme.colors.main.text,
      },
      background: {
        default: themer.theme.colors.main.background,
        paper: themer.theme.colors.main.background,
      },
    },
  });

  return (
    <GlobalContext.Provider value={{ themer }}>
      <MuiThemeProvider theme={muitheme}>{children}</MuiThemeProvider>
    </GlobalContext.Provider>
  );
}
