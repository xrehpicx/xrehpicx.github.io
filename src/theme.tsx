import { createGlobalStyle, DefaultTheme } from "styled-components";
export const defaultdarktheme: DefaultTheme = {
  width: window.innerWidth,
  height: window.innerHeight,
  colors: {
    main: {
      type: "dark",
      accent: "#1cb6e4",
      background: "#000",
      text: "#ffffff",
    },
  },
};
export const defaultlighttheme: DefaultTheme = {
  width: window.innerWidth,
  height: window.innerHeight,
  colors: {
    main: {
      type: "light",
      accent: "#141825",
      background: "#ececec",
      text: "#000",
    },
  },
};

var accent = "";
var background = "";
window.data = { accent, background };
export const Global = createGlobalStyle` 
  body{
    color: ${(p) => p.theme.colors.main.text};
    background: ${(p) => {
      window.data.accent = p.theme.colors.main.accent;
      window.data.background = p.theme.colors.main.background;
      return p.theme.colors.main.background;
    }};
    transition: background 300ms ease-out;
  }
`;
