import baseStyled, { ThemedStyledInterface } from 'styled-components';

type Colors = {
  black: string;
  dark: string;
  primary: string;
  darkPrimary: string;
  error: string;
  white: string;
  background: string;
  light: string;
  grey: string;
};

type FontSizes = number[];

type FontFamily = string;

const colors: Colors = {
  black: '#000000',
  dark: '#212121',
  primary: '#f70',
  darkPrimary: '#b96113',
  error: '#e45d5d',
  white: '#ffffff',
  light: '#E9EAEA',
  background: '#121212',
  grey: '#706F6F'
};

const fontSizes: FontSizes = [12, 14, 16, 18, 22, 24, 32, 48, 56];
const fontFamily: FontFamily = "'Nunito', sans-serif";

export const theme = {
  colors,
  fontSizes,
  fontFamily
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
