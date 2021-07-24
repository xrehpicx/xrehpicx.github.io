import { useCallback, useEffect, useMemo, useReducer } from "react";
import { DefaultTheme } from "styled-components";
import { IThemer } from "../components/types";
import { Global, defaultdarktheme, defaultlighttheme } from "../theme";

type actionprops = { type: "darkmode" | "toggle" | "lightmode"; payload?: any };

function reducer(state: DefaultTheme, action: actionprops): DefaultTheme {
  switch (action.type) {
    case "darkmode":
      return defaultdarktheme;
    case "lightmode":
      return defaultlighttheme;
    case "toggle":
      return state.colors.main.type === "dark"
        ? defaultlighttheme
        : defaultdarktheme;
    default:
      return defaultdarktheme;
  }
}

export function useThemer() {
  const [theme, dispatch] = useReducer(
    reducer,
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") || "")
      : defaultdarktheme
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggle = useCallback(() => {
    console.log(dispatch({ type: "toggle" }));
  }, []);

  const themer = useMemo<IThemer>(() => {
    return { theme, Global, toggle, dispatch };
  }, [theme, toggle]);

  return themer;
}
