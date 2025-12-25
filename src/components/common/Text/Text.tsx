import { fonts } from '@/theme/fonts';
import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react';
import type { ColorValue, TextProps as RNTextProps } from 'react-native';
import { Text as RNText } from 'react-native';

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'black';

export interface TextProps extends RNTextProps {
  fontSize?: number;
  fontWeight?: FontWeight;
  italic?: boolean;
  underline?: boolean;
  align?: 'auto' | 'left' | 'right' | 'center' | undefined;
  color?: ColorValue;
}

export const getFontFamily = (
  fontWeight: FontWeight = 'regular',
  italic = false
): string => {
  switch (fontWeight) {
    case 'regular':
      return fonts.Mulish.Regular;
    case 'medium':
      return fonts.Mulish.Medium;
    case 'semibold':
      return fonts.Mulish.SemiBold;
    case 'bold':
      return fonts.Mulish.Bold;
    case 'black':
      return fonts.Mulish.Black;
    default:
      return fonts.Mulish.Regular;
  }
};

export const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  fontWeight,
  italic,
  underline,
  align = 'auto',
  color,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const fontFamily = useMemo(
    () => getFontFamily(fontWeight, italic),
    [fontWeight, italic]
  );

  return (
    <RNText
      style={[
        { fontFamily },
        { color: color ?? colors.text },
        { textAlign: align ?? align },
        { textDecorationLine: underline ? 'underline' : 'none' },
        fontSize
          ? {
              fontSize,
              lineHeight: fontSize * 1.25,
            }
          : undefined,
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
