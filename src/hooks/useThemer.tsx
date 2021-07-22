import { useCallback, useMemo, useReducer } from "react";
import { createGlobalStyle, DefaultTheme } from "styled-components";

type actionprops = { type: string; payload?: any };

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
      accent: "#4faaff",
      background: "#ffffff",
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
    background: ${(p) => p.theme.colors.main.background};
    transition: color 100ms ease-out, background 100ms ease-out;
  }
`;

export function useThemer() {
  const [theme, dispatch] = useReducer(reducer, defaultdarktheme);

  const toggle = useCallback(() => {
    console.log(dispatch({ type: "toggle" }));
  }, []);

  const themer = useMemo(() => {
    return { theme, Global, toggle };
  }, [theme, toggle]);
  return themer;
}
