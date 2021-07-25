import { useCallback, useEffect, useMemo, useReducer } from "react";
import { DefaultTheme } from "styled-components";
import { IThemer } from "../components/types";
import { Global, defaultdarktheme, defaultlighttheme } from "../theme";

type actionprops = {
  type: "updatehw" | "darkmode" | "toggle" | "lightmode";
  payload?: any;
};

function reducer(state: DefaultTheme, action: actionprops): DefaultTheme {
  switch (action.type) {
    case "darkmode":
      return defaultdarktheme;
    case "lightmode":
      return defaultlighttheme;
    case "updatehw":
      state.height = window.innerHeight;
      state.width = window.innerWidth;
      return state;
    case "toggle":
      return state.colors.main.type === "dark"
        ? defaultlighttheme
        : defaultdarktheme;
    default:
      return defaultdarktheme;
  }
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

export function useThemer() {
  const [theme, dispatch] = useReducer(
    reducer,
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme") || "")
      : darkModeQuery.matches
      ? defaultdarktheme
      : defaultlighttheme
  );

  useEffect(() => {
    const update = () => dispatch({ type: "updatehw" });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const toggle = useCallback(() => {
    dispatch({ type: "toggle" });
  }, []);
  useEffect(() => {
    let child: NodeJS.Timeout | null = null;
    const main = setTimeout(() => {
      toggle();
      child = setTimeout(() => toggle(), 800);
    }, 2000);

    return () => {
      clearTimeout(main);
      child && clearTimeout(child);
    };
  }, [toggle]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const themer = useMemo<IThemer>(() => {
    return { theme, Global, toggle, dispatch };
  }, [theme, toggle]);

  return themer;
}
