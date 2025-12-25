import CheckSvg from '@/assets/icons/check-svg';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Box } from '../Layout/Box';

type ButtonRadioCheckProps = {
  label: string;
  onPress?: () => void;
  active?: boolean;
};

const AnimatedButton = ({ label, active, onPress }: any) => {
  const scale = useRef(new Animated.Value(active ? 1 : 1)).current;
  const iconOpacity = useRef(new Animated.Value(active ? 1 : 0)).current;
  const iconTranslate = useRef(new Animated.Value(active ? 0 : 6)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: active ? 1 : 1,
        useNativeDriver: true,
        friction: 6,
      }),
      Animated.timing(iconOpacity, {
        toValue: active ? 1 : 0,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.timing(iconTranslate, {
        toValue: active ? 0 : 6,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [active]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          styles.button,
          active ? styles.activeButton : styles.inactiveButton,
          {
            transform: [{ scale }],
          },
        ]}
      >
        <Text
          fontSize={14}
          fontWeight="bold"
          color={active ? '#fff' : colors.primary[20]}
        >
          {label}
        </Text>
        {active && (
          <Animated.View
            style={{
              opacity: iconOpacity,
              transform: [{ translateX: iconTranslate }],
              marginLeft: 6,
            }}
          >
            <CheckSvg />
          </Animated.View>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default function ButtonTypeSelector({
  label,
  active,
  onPress,
}: ButtonRadioCheckProps) {
  return (
    <Box>
      <AnimatedButton label={label} active={active} onPress={onPress} />
    </Box>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  activeButton: {
    backgroundColor: colors.primary[20],
    borderColor: colors.primary[20],
  },
  inactiveButton: {
    backgroundColor: '#fff',
    borderColor: colors.primary[20],
  },
});
