import { useEffect } from "react";
import { DefaultTheme } from "styled-components";

export function useWantCode(theme: DefaultTheme) {
  useEffect(() => {
    if (theme) {
      console.clear();
      console.log(
        "%cHeyy",
        `color:${theme.colors.main.accent};font-size:2rem;`
      );
      console.log("%clooking for the code?", `color:white;`);
    }
  }, [theme]);
}
