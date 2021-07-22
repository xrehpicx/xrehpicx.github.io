import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemer } from "./hooks/useThemer";
import { Home } from "./components/Home";

const StyledApp = styled.div``;
function App() {
  const { theme, Global, toggle } = useThemer();

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home />
      {/* <StyledApp onClick={toggle} className="App"></StyledApp> */}
    </ThemeProvider>
  );
}

export default App;
