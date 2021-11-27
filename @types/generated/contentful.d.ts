// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAboutMeFields {
  /** name */
  name?: string | undefined;

  /** role */
  role?: string | undefined;

  /** brand */
  brand?: string | undefined;

  /** logo */
  logo?: Asset | undefined;
}

/** stuff about me */

export interface IAboutMe extends Entry<IAboutMeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "aboutMe";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IClubsFields {
  /** icon */
  icon?: Asset | undefined;
}

export interface IClubs extends Entry<IClubsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "clubs";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStatusFields {
  /** Status text */
  statusText?: string | undefined;

  /** icon */
  icon?: Asset | undefined;
}

/** status for my portfolio */

export interface IStatus extends Entry<IStatusFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "status";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IStoryFields {
  /** title */
  title?: string | undefined;

  /** body */
  body?: Document | undefined;
}

export interface IStory extends Entry<IStoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "story";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWallpaperCollectionFields {
  /** title */
  title?: string | undefined;

  /** wallpapers */
  wallpapers?: Asset[] | undefined;
}

export interface IWallpaperCollection
  extends Entry<IWallpaperCollectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "wallpaperCollection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWorkFields {
  /** title */
  title?: string | undefined;

  /** body */
  body?: string | undefined;

  /** type */
  type?: string | undefined;

  /** image */
  image?: Asset[] | undefined;

  /** Status */
  status?:
    | "discontinued"
    | "in development"
    | "forgotten"
    | "completed"
    | undefined;

  /** stack */
  stack?: string[] | undefined;

  /** links */
  links?: string[] | undefined;

  /** id */
  id: number;
}

/** all my works */

export interface IWork extends Entry<IWorkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "work";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "aboutMe"
  | "clubs"
  | "status"
  | "story"
  | "wallpaperCollection"
  | "work";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
