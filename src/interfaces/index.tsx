import React, { ReactNode } from "react";

export interface IThemeItem {
  background: string;
  color: string;
}

export interface ITheme {
  black: IThemeItem;
  white: IThemeItem;
}

export interface IChildren {
  children: ReactNode | null;
}

export interface IThemeContext {
  themes: ITheme | null;
  setThemes: React.Dispatch<React.SetStateAction<ITheme | null>>;
}
