import baseStyled, { ThemedStyledInterface } from 'styled-components';

type Colors = {
  dark: string;
  primary: string;
  error: string;
  white: string;
  background: string;
};

type FontSizes = number[];

type FontFamily = string;

const colors: Colors = {
  dark: '#141414',
  primary: '#f70',
  error: '#da1212',
  white: '#ffffff',
  background: '#f7f7f7'
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
