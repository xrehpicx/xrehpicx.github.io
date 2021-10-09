import { createContext, FC, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { DefaultContextProps } from "../types";
import { useThemer } from "../hooks/useThemer";
// import { useWantCode } from "../hooks/useWantCode";

export const DefaultContext = createContext<DefaultContextProps>(
  {} as DefaultContextProps
);

export const DefaultContextProvider: FC = ({ children }) => {
  // custom hookss

  const themer = useThemer();

  // useWantCode(themer.theme);
  // useLoaderCleanup();
  /* useEffect(() => {
    themer.dispatch({ type: "lightmode" });
  }, [themer]); */
  const [debug, setDebug] = useState(false);
  useEffect(() => {
    const onkey = (e: KeyboardEvent) => {
      console.log(e);
      if ((e.shiftKey && e.key === "D") || (e.shiftKey && e.key === "d")) {
        setDebug((s) => !s);
        themer.toggle();
      }
    };
    window.addEventListener("keypress", onkey);

    return () => {
      return window.removeEventListener("keypress", onkey);
    };
  }, [themer]);

  return (
    <DefaultContext.Provider value={{ themer, debug }}>
      {themer.theme && (
        <ThemeProvider theme={themer.theme}>
          <MuiThemeProvider theme={themer.theme}>{children}</MuiThemeProvider>
        </ThemeProvider>
      )}
    </DefaultContext.Provider>
  );
};
