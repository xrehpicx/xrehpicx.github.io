import { IStoryFields } from "./../@types/generated/contentful.d";
import React from "react";
// import { DefaultTheme, GlobalStyleComponent } from "styled-components";
import {
  IClubsFields,
  IWorkFields,
  IWallpaperCollectionFields,
} from "../@types/generated/contentful";
import { Theme, GlobalStyleComponent } from "@emotion/react";
export interface DefaultContextProps {
  themer: IThemer;
}
export interface ContentfullContextProps {
  status: {
    statusText: string;
    icon: string;
  };
  about: {
    name: string;
    role: string;
    brand: string;
    logo: string;
  };
  works: IWorkFields[];
  clubs: IClubsFields[];
  wallpapers: IWallpaperCollectionFields[];
  stories: IStoryFields[];
}
export interface DebugContextProps {
  debug: boolean;
  setDebug: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IThemer {
  theme: DefaultTheme;
  Global: GlobalStyleComponent<{}, Theme>;
  toggle: () => void;
  dispatch: React.Dispatch<actionprops>;
}
