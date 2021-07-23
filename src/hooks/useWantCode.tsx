import { useEffect } from "react";
import { DefaultTheme } from "styled-components";

export function useWantCode(theme: DefaultTheme) {
  useEffect(() => {
    if (theme) {
      console.clear();
      console.log(
        "%cHeyy\n%clooking for the code?\ncheck out the repo here: https://github.com/xrehpicx/xrehpicx.github.io",
        `color:${theme.colors.main.accent};font-size:2rem;`,
        `color:white;font-size:0.8rem;`
      );
    }
  }, [theme]);
}
