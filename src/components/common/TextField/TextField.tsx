import EyeOffSvg from '@/assets/icons/EyeOffSvg';
import EyeSvg from '@/assets/icons/EyeSvg';
import { Box } from '@/components/common/Layout/Box';
import { getFontFamily, Text } from '@/components/common/Text/Text';
import type { TextFieldProps } from '@/components/common/TextField/types';
import { colors } from '@/theme/colors';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
import isEmpty from 'lodash/isEmpty';
import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { mask as rnmtMask, unMask as rnmtUnMask } from 'react-native-mask-text';
import StrengthBar from '../Bar/StrengthBar';

type TextFieldSize = 'small' | 'medium' | 'large';
type TextFieldStatus = 'active' | 'inactive' | 'success' | 'warning' | 'error';

const TextField = forwardRef<
  any,
  TextFieldProps & {
    size?: TextFieldSize;
    status?: TextFieldStatus;
    isPassword?: boolean;
    strengthLevel?: 'empty' | 'weak' | 'warn' | 'strong';
    isShowStrengthBar?: boolean;
  }
>(
  (
    {
      label,
      error,
      hint,
      left,
      right,
      onChange,
      inputStyle,
      editable = true,
      disabled = false,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      onLayout: onLayoutProp,
      isOptional,
      onPressIconRight,
      onPressIconLeft,
      innerInputWrapper,
      inputErrorStyle,
      containerStyle,
      value,
      mask,
      iconRightStyle,
      labelColor,
      useBottomSheetInput,
      size = 'large',
      status = 'inactive',
      isPassword = false,
      strengthLevel = 'empty',
      isShowStrengthBar = false,
      rightLabel,
      ...props
    },
    ref
  ) => {
    const { colors: themeColors } = useTheme();
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [placeholder, setPlaceholder] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const InputComponent = useBottomSheetInput
      ? BottomSheetTextInput
      : TextInput;

    const getSizeStyles = () => {
      switch (size) {
        case 'small':
          return { fontSize: 12, paddingVertical: 10 };
        case 'medium':
          return { fontSize: 14, paddingVertical: 12 };
        case 'large':
          return { fontSize: 14, paddingVertical: 15 };
        default:
          return { fontSize: 14, paddingVertical: 12 };
      }
    };

    const getStatusStyles = () => {
      switch (status) {
        case 'success':
          return {
            borderColor: colors.action.success,
            backgroundColor: colors.action.success + '0F', //opacity 6%
          };
        case 'warning':
          return {
            borderColor: colors.action.warning,
            backgroundColor: colors.action.warning + '0F',
          };
        case 'error':
          return {
            borderColor: colors.action.error,
            backgroundColor: colors.action.error + '0F',
          };
        case 'inactive': {
          if (isFocused) {
            return {
              borderColor: colors.grey[60],
              backgroundColor: themeColors.white,
            };
          }
          return {
            borderColor: colors.grey[60],
            backgroundColor: themeColors.white,
          };
        }
        default: // active | disable
          return {
            borderColor: colors.grey[60],
            backgroundColor: themeColors.white,
          };
      }
    };

    const handleOnChangeText = (text: string) => {
      if (typeof onChange === 'function') {
        onChange(text, mask ? rnmtUnMask(text, mask.type) : undefined);
      }
      if (typeof props.onChangeText === 'function') {
        props.onChangeText(text);
      }
    };

    const onFocus = () => {
      onFocusProp?.();
      setIsFocused(true);
    };

    const onBlur = () => {
      onBlurProp?.();
      setIsFocused(false);
    };

    const onLayout = (e: LayoutChangeEvent) => {
      onLayoutProp?.(e);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const placeholderTimer = useRef<number | null>(null);
    const displayedValue =
      mask && value
        ? rnmtMask(value, mask.pattern, mask.type, mask.options)
        : value?.toString();

    useEffect(() => {
      if (!isFocused) {
        const placeholderProp = props.placeholder;
        if (placeholderProp) {
          placeholderTimer.current = setTimeout(
            () => setPlaceholder(placeholderProp),
            50
          ) as unknown as number;
        }
      } else {
        setPlaceholder('');
      }

      return () => {
        if (placeholderTimer.current) {
          clearTimeout(placeholderTimer.current);
        }
      };
    }, [isFocused, label, props.placeholder]);

    return (
      <Box
        gap={6}
        style={[styles.inputContainerStyle, containerStyle]}
        opacity={disabled ? 0.35 : 1}
      >
        {label || isOptional || isPassword || isShowStrengthBar ? (
          <Box
            flexDirection={'row'}
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              color={
                labelColor
                  ? labelColor
                  : disabled
                    ? themeColors.placeholder
                    : themeColors.text
              }
              fontSize={size === 'small' ? 12 : 14}
            >
              {label}
              {isOptional && (
                <Text
                  color={disabled ? themeColors.placeholder : themeColors.text}
                  fontSize={size === 'small' ? 12 : 14}
                >
                  {' (optional)'}
                </Text>
              )}
            </Text>
            {rightLabel && (
              <Box onPress={onPressIconRight}>
                {React.isValidElement(rightLabel)
                  ? rightLabel
                  : React.createElement(rightLabel)}
              </Box>
            )}
            {isPassword && isShowStrengthBar && (
              <Box flexDirection="row" alignItems="center">
                <StrengthBar level={strengthLevel} />
              </Box>
            )}
          </Box>
        ) : null}

        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          w={'100%'}
          px={12}
          gap={10}
          style={[
            styles.containerInput,
            getStatusStyles(),
            !!error && { borderColor: themeColors.error },
            innerInputWrapper,
          ]}
        >
          {left && (
            <Box onPress={onPressIconLeft}>
              {React.isValidElement(left) ? left : React.createElement(left)}
            </Box>
          )}

          <InputComponent
            {...props}
            ref={ref}
            autoCorrect={false}
            selectionColor={props?.selectionColor}
            placeholderTextColor={
              props?.placeholderTextColor || themeColors.placeholder
            }
            value={displayedValue}
            placeholder={placeholder}
            onLayout={onLayout}
            onChangeText={handleOnChangeText}
            onChange={props.onChangeEvent}
            onFocus={onFocus}
            onBlur={onBlur}
            secureTextEntry={isPassword && !showPassword}
            style={[
              styles.inputText,
              { color: disabled ? themeColors.grey[60] : themeColors.text },
              getSizeStyles(),
              inputStyle,
              inputErrorStyle,
            ]}
            editable={!disabled && editable}
          />

          {isPassword ? (
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={iconRightStyle}
            >
              {showPassword ? <EyeOffSvg /> : <EyeSvg />}
            </TouchableOpacity>
          ) : right ? (
            <Box onPress={onPressIconRight} style={iconRightStyle}>
              {React.isValidElement(right) ? right : React.createElement(right)}
            </Box>
          ) : null}
        </Box>

        {(!isEmpty(hint) || !isEmpty(error)) && (
          <Text
            color={
              status === 'success'
                ? colors.action.success
                : status === 'warning'
                  ? colors.action.warning
                  : status === 'error'
                    ? colors.action.error
                    : themeColors.error
            }
            fontSize={12}
          >
            {error || hint}
          </Text>
        )}
      </Box>
    );
  }
);

TextField.displayName = 'TextField';

export default memo(TextField);

const styles = StyleSheet.create({
  inputContainerStyle: {},
  inputText: {
    flex: 1,
    textAlignVertical: 'center',
    fontFamily: getFontFamily('regular'),
    paddingHorizontal: 0,
  },
  inputStyleError: {
    lineHeight: 24,
  },
  containerInput: {
    borderWidth: 1,
    borderRadius: 2,
  },
});
