import React from "react";
import { ThemeProvider } from "styled-components";
import { useThemer } from "./hooks/useThemer";
import { useWantCode } from "./hooks/useWantCode";
import { Home } from "./components/Home";

// const StyledApp = styled.div``;

function App() {
  const { theme, Global } = useThemer();
  useWantCode(theme);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home />
      {/* <StyledApp onClick={toggle} className="App"></StyledApp> */}
    </ThemeProvider>
  );
}

export default App;
