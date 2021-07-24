import { useCallback, useEffect, useMemo, useReducer } from "react";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import { IThemer } from "../components/types";

type actionprops = { type: "darkmode" | "toggle" | "lightmode"; payload?: any };

var accent = "";
var background = "";
window.data = { accent, background };

const defaultdarktheme: DefaultTheme = {
  colors: {
    main: {
      type: "dark",
      accent: "#29ffa6",
      background: "#000",
      text: "#ffffff",
    },
  },
};
const defaultlighttheme: DefaultTheme = {
  colors: {
    main: {
      type: "light",
      accent: "#050f18",
      background: "#ececec",
      text: "#000",
    },
  },
};

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

const Global = createGlobalStyle` 
  body{
    color: ${(p) => p.theme.colors.main.text};
    background: ${(p) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      accent = p.theme.colors.main.accent;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      background = p.theme.colors.main.background;
      return p.theme.colors.main.background;
    }};
    transition: background 300ms ease-out;
  }
`;

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
