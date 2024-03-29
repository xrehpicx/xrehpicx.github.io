import { css, Global } from "@emotion/react";
import { createTheme, PaletteOptions, useTheme } from "@mui/material";

export const defaultdarkpallete: PaletteOptions = {
  mode: "dark",
  text: {
    primary: "#fff",
  },
  primary: {
    main: "#00FFCA",
  },
  secondary: {
    main: "#ff6060",
  },
  background: {
    default: "#0e1118",
    paper: "#06080c",
  },
};

export const defaultlightpallete: PaletteOptions = {
  mode: "light",
  text: {
    primary: "#161616",
  },
  primary: {
    main: "#00FFCA",
  },
  secondary: {
    main: "#ff6060",
  },
  background: {
    default: "#ffffff",
    paper: "#f5ffff",
  },
};

var accent = "";
var background = "";
window.data = { accent, background };
export const GlobalStyle = () => {
  const theme = useTheme();
  // console.log(theme);
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: ${theme.palette.background.default};
          color: ${theme.palette.text.primary};
          font-family: "Product Sans", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        }
        a {
          color: ${theme.palette.primary.main};
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      `}
    />
  );
};

export const defaultTheme = createTheme({
  palette: defaultdarkpallete,
  typography: {
    fontFamily: `"Product Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif`,
  },
});
