import { colors } from '@/theme/colors';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const lightColors = {
  primary: colors.primary[60],
  secondary: colors.secondary[60],
  accent: colors.accent[60],
  grey: colors.grey[60],

  background: colors.neutral.background,
  backgroundWhite: colors.neutral.white,
  black: colors.neutral.black,
  white: colors.neutral.white,
  success: colors.action.success,
  error: colors.action.error,
  warning: colors.action.warning,

  palette: colors,
  text: colors.neutral.black,
  blackTransparent: colors.blackTransparent,
  pureWhite: colors.white,
  pureBlack: colors.black,
  placeholder: colors.placeholder,
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
  },
  components: {},
};

export const darkColors: ColorType = {
  primary: colors.primary[60],
  secondary: colors.secondary[60],
  accent: colors.accent[60],
  grey: colors.grey[60],

  background: colors.neutral.background,
  backgroundWhite: colors.neutral.white,
  black: colors.neutral.black,
  white: colors.neutral.white,
  success: colors.action.success,
  error: colors.action.error,
  warning: colors.action.warning,

  palette: colors,
  text: colors.neutral.black,
  blackTransparent: colors.blackTransparent,
  pureWhite: colors.white,
  pureBlack: colors.black,
  placeholder: colors.placeholder,
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...darkColors,
  },
  components: {},
};

export type ColorType = typeof lightColors;
export type ComponentThemeType = typeof lightTheme.components;
