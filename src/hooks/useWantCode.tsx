import { useEffect } from "react";
import { DefaultTheme } from "styled-components";

export function useWantCode(theme: DefaultTheme) {
  useEffect(() => {
    if (theme) {
      process.env.NODE_ENV === "production" && console.clear();
      console.log(
        "%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/xrehpicx/xrehpicx.github.io",
        `color:${theme.colors.main.accent};font-size:2rem;background:${theme.colors.main.background}`,
        `color:${theme.colors.main.text};font-size:0.8rem;background:${theme.colors.main.background}`
      );
    }
  }, [theme]);
}
