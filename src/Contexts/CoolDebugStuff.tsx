import { createContext, FC, useEffect, useState } from "react";

import { DebugContextProps } from "../types";

export const DebugContext = createContext<DebugContextProps>(
  {} as DebugContextProps
);

export const DebugContextProvider: FC = ({ children }) => {
  // custom hookss

  const [debug, setDebug] = useState(false);
  useEffect(() => {
    const onkey = (e: KeyboardEvent) => {
      console.log(e);
      if ((e.shiftKey && e.key === "D") || (e.shiftKey && e.key === "d")) {
        setDebug((s) => !s);
      }
    };
    window.addEventListener("keypress", onkey);

    return () => {
      return window.removeEventListener("keypress", onkey);
    };
  }, []);

  useEffect(() => {
    if (debug) {
      console.log("Debug mode is on");
      document.designMode = "on";
      return;
    }
    console.log("Debug mode is off");
    document.designMode = "off";
  }, [debug]);

  return (
    <>
      <DebugContext.Provider value={{ debug, setDebug }}>
        {children}
      </DebugContext.Provider>
    </>
  );
};
