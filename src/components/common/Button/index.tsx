import React from 'react';
import type {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { Box } from '@/components/common/Layout/Box';
import { colors } from '@/theme/colors';
import { Text } from '../Text/Text';
import Spinner from './Spinner';
import type { IconProps } from './buttonRenderUtils';
import { renderIconWithColor } from './buttonRenderUtils';
import type { ButtonVariant } from './types';
import useButtonBehavior from './useButtonBehavior';

export interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  subtext?: string;
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'default';
  rounded?: boolean;
  icon?: React.ReactElement<IconProps> | React.ComponentType<IconProps>;
  iconAfter?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  subtextStyle?: StyleProp<TextStyle>;
  children?:
    | React.ReactElement<unknown>
    | ((color: string) => React.ReactElement<unknown>);
}

function Button({
  text,
  variant = 'primary',
  subtext,
  disabled,
  loading,
  size = 'default',
  rounded,
  icon,
  iconAfter,
  onPress: onPressAction,
  onLongPress,
  style,
  textStyle,
  subtextStyle,
  children,
}: ButtonProps) {
  const { onPress, textColor, loadingColor } = useButtonBehavior({
    loading,
    disabled,
    variant,
    onPressAction,
  });
  const noIcon = !icon;
  const hasText = Boolean(text);
  const hasSubtext = Boolean(subtext);

  const baseStyle: Record<ButtonVariant, StyleProp<ViewStyle>> = {
    primary: {
      backgroundColor: disabled ? colors.primary[20] : colors.primary[20],
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary[20],
    },
    text: {},
    'text-inline': {},
    custom: {},
  };

  if (variant === 'text-inline') {
    return (
      <Text
        selectable={false}
        accessibilityRole={disabled ? 'text' : 'link'}
        suppressHighlighting
        underline
        fontWeight="bold"
        color={textColor}
        style={textStyle}
        onPress={onPress}
      >
        {text}
      </Text>
    );
  }

  return (
    <Content
      variant={variant}
      disabled={disabled}
      size={size}
      rounded={rounded}
      loading={loading}
      hasSubtext={hasSubtext}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[baseStyle[variant], style]}
    >
      {loading && <Spinner color={loadingColor} />}
      {variant === 'custom' && !loading && (
        <>
          {typeof children === 'object' && children}
          {typeof children === 'function' && children(textColor)}
        </>
      )}
      {variant !== 'custom' && !loading && (
        <>
          {icon && !iconAfter && renderIconWithColor(icon, textColor)}
          {(hasText || hasSubtext) && (
            <Box
              ml={icon && !iconAfter ? 4 : 0}
              mr={icon && !iconAfter ? 4 : 0}
            >
              <Text
                selectable={false}
                fontWeight={variant === 'text' ? 'semibold' : 'bold'}
                align={noIcon ? 'center' : 'left'}
                color={textColor}
                style={textStyle}
              >
                {text}
              </Text>
              {hasSubtext && (
                <Text
                  selectable={false}
                  align={noIcon ? 'center' : 'left'}
                  color={textColor}
                  style={subtextStyle}
                >
                  {subtext}
                </Text>
              )}
            </Box>
          )}
          {icon && iconAfter && renderIconWithColor(icon, textColor)}
        </>
      )}
    </Content>
  );
}

type ContentProps = Omit<PressableProps, 'style'> &
  Pick<ButtonProps, 'rounded' | 'disabled' | 'variant' | 'size'> & {
    loading?: boolean;
    hasSubtext?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
  };

const Content: React.FC<ContentProps> = ({
  rounded,
  disabled,
  variant,
  size = 'default',
  loading,
  hasSubtext,
  style,
  children,
  ...props
}) => {
  const paddingY = React.useMemo(() => {
    const borderWidth = variant === 'primary' ? 0 : 2;
    const paddingSize = size;
    let paddingY = {
      default: 16 - borderWidth,
      medium: 15 - borderWidth,
      small: 14 - borderWidth,
    }[paddingSize];

    if (hasSubtext && !loading) {
      paddingY -= 8 + 1;
    }
    return Math.max(paddingY, 0);
  }, [variant, size, hasSubtext, loading]);

  return (
    <Box
      flexDirection="row"
      py={paddingY}
      px={12}
      borderRadius={rounded ? 50 : 8}
      justifyContent="center"
      alignItems="center"
      opacity={
        disabled && variant && ['tertiary', 'custom'].includes(variant)
          ? 0.5
          : 1
      }
      style={style}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Button;
