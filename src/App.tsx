import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./components/Home";
import { GlobalContext, GlobalContextProvider } from "./contexts/GlobalContext";

// const StyledApp = styled.div``;

function App() {
  const {
    themer: { theme, Global },
  } = useContext(GlobalContext);
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home />
      {/* <StyledApp onClick={toggle} className="App"></StyledApp> */}
    </ThemeProvider>
  );
}

export default function A() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
}
