import { createContext, FC } from "react";
import useContentfull from "../hooks/useContentfull";
// import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from "@emotion/react";
import { ContentfullContextProps } from "../types";
// import { useThemer } from "../hooks/useThemer";
// import { useWantCode } from "../hooks/useWantCode";

export const ContentfullContext = createContext<ContentfullContextProps>(
  {} as ContentfullContextProps
);

export const ContentfullContextProvider: FC = ({ children }) => {
  // custom hookss
  const content = useContentfull();
  return (
    <ContentfullContext.Provider value={content}>
      {children}
    </ContentfullContext.Provider>
  );
};
