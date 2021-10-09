import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Theme } from "@emotion/react";
import { IThemer } from "../types";
import {
  GlobalStyle,
  defaultdarkpallete,
  defaultlightpallete,
  defaultTheme,
} from "../theme";
import { ThemeOptions } from "@mui/material";

type actionprops = {
  type: "updatehw" | "darkmode" | "toggle" | "lightmode";
  payload?: any;
};

function reducer(state: ThemeOptions, action: actionprops): Theme {
  switch (action.type) {
    case "darkmode":
      return {
        ...state,
        palette: defaultdarkpallete,
      };
    case "lightmode":
      return {
        ...state,
        palette: defaultlightpallete,
      };
    case "updatehw":
      console.log(action.type);
      return state;

    case "toggle":
      return state.palette?.mode === "dark"
        ? {
            ...state,
            palette: defaultlightpallete,
          }
        : {
            ...state,
            palette: defaultdarkpallete,
          };
    default:
      return {
        ...state,
        palette: defaultdarkpallete,
      };
  }
}

export function useThemer() {
  const [theme, dispatch] = useReducer(reducer, defaultTheme);

  /* useEffect(() => {
    const update = () => dispatch({ type: "updatehw" });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []); */

  const toggle = useCallback(() => {
    dispatch({ type: "toggle" });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return useMemo<IThemer>(() => {
    return { theme, Global: GlobalStyle, toggle, dispatch };
  }, [theme, toggle]);
}
