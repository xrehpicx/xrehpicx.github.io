import React, { createContext } from "react";
import { IThemer } from "../components/types";
import { useThemer } from "../hooks/useThemer";
import { useWantCode } from "../hooks/useWantCode";

interface IGlobalContextProps {
  children: any;
}

interface IGlobalContext {
  themer: IThemer;
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const themer = useThemer();
  useWantCode(themer.theme);

  return (
    <GlobalContext.Provider value={{ themer }}>
      {children}
    </GlobalContext.Provider>
  );
}
