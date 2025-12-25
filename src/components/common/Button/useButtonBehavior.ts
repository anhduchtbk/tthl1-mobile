import { useCallback, useEffect, useState } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Platform } from 'react-native';
import {
  cancelAnimation,
  Extrapolation,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import useLatest from '@/hooks/useLatest';
import { colors } from '@/theme/colors';
import type { ButtonVariant } from './types';

const iOSShadowOutputRange = {
  shadowOpacity: [0, 0.18, 0.2, 0.22, 0.23],
  height: [0, 1, 1, 1, 2],
  shadowRadius: [0, 1, 1.41, 2.22, 2.62],
};
const shadowColor = '#000';
const elevationLevel = [0, 1, 2, 3, 4];

const useButtonBehavior = ({
  loading,
  disabled,
  variant = 'primary',
  onPressAction,
}: {
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  onPressAction?: (event: GestureResponderEvent) => void;
}) => {
  const maxElevationLevel = 4;
  const minElevationLevel = 0;
  const animationConfig = {
    duration: 200,
  };

  const flat = variant === 'text' || variant === 'text-inline';
  // elevation
  const elevation = useSharedValue(
    !flat ? maxElevationLevel : minElevationLevel
  );
  useEffect(() => {
    if (!flat) {
      elevation.value = maxElevationLevel;
    } else {
      elevation.value = minElevationLevel;
    }
  }, [elevation, flat, maxElevationLevel, minElevationLevel]);

  // colors
  const progress = useSharedValue(disabled ? -1 : 0);
  const variantColor = ['primary', 'secondary', 'tertiary'].includes(variant)
    ? colors.white
    : variant === 'outlined'
    ? colors.blue
    : colors.text[3];
  const [textColor, setTextColor] = useState(
    disabled ? colors.grey[60] : variantColor
  );
  useEffect(() => {
    cancelAnimation(progress);
    progress.value = withTiming(disabled ? -1 : 0, animationConfig);
    setTextColor(disabled ? colors.grey[60] : variantColor);
  }, [colors.grey[60], variantColor, disabled, progress]);

  const latestDisabled = useLatest(disabled);
  const runDisabledAnimation = useCallback(() => {
    if (latestDisabled.current) {
      progress.value = withTiming(-1, animationConfig);
      setTextColor(colors.grey[60]);
    }
  }, [animationConfig, colors.grey[60]]);

  // actions
  const onPress = (event: GestureResponderEvent) => {
    if (!disabled && !loading) {
      onPressAction?.(event);
    }
  };

  const onPressIn = (event: GestureResponderEvent) => {
    if (disabled || loading) return;
    if (!flat) {
      elevation.value = withTiming(maxElevationLevel, animationConfig);
    }
    progress.value = withTiming(1, animationConfig);
  };
  const onPressOut = (event: GestureResponderEvent) => {
    if (disabled || loading) return;
    if (!flat) {
      elevation.value = withTiming(minElevationLevel, animationConfig);
    }
    progress.value = withTiming(0, animationConfig, finished => {
      if (finished) {
        runOnJS(runDisabledAnimation)();
      }
    });
  };

  const isAndroid = Platform.OS === 'android';

  // animated style
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    if (isAndroid) {
      return {
        elevation: interpolate(elevation.value, elevationLevel, elevationLevel),
        backgroundColor: interpolateColor(
          progress.value,
          [-1, 0, 1],
          [colors.grey[60], colors.neutral.background, colors.white]
        ),
        borderColor: interpolateColor(
          progress.value,
          [-1, 0, 1],
          [colors.grey[60], colors.text[3][1], colors.grey[60]]
        ),
      };
    }
    return {
      shadowColor,
      shadowOpacity: interpolate(
        elevation.value,
        elevationLevel,
        iOSShadowOutputRange.shadowOpacity,
        Extrapolation.CLAMP
      ),
      shadowOffset: {
        width: 0,
        height: interpolate(
          elevation.value,
          elevationLevel,
          iOSShadowOutputRange.height
        ),
      },
      shadowRadius: interpolate(
        elevation.value,
        elevationLevel,
        iOSShadowOutputRange.shadowRadius
      ),
      backgroundColor: interpolateColor(
        progress.value,
        [-1, 0, 1],
        [colors.grey[60], colors.neutral.background, colors.grey[60]]
      ),
      borderColor: interpolateColor(
        progress.value,
        [-1, 0, 1],
        [colors.grey[60], colors.text[3][1], colors.grey[60]]
      ),
    };
  }, [
    colors.neutral.background,
    colors.grey[60],
    colors.white,
    colors.text[3][1],
    elevation.value,
    progress.value,
  ]);

  return {
    onPress,
    onPressIn,
    onPressOut,
    buttonAnimatedStyle,
    textColor,
    loadingColor: variantColor,
  };
};

export default useButtonBehavior;
