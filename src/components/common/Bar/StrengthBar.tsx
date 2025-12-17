import { Box } from '@/components/common/Layout/Box';
import { colors } from '@/theme/colors';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type StrengthLevel = 'empty' | 'weak' | 'warn' | 'strong';

interface StrengthBarProps {
  level: StrengthLevel;
}

const StrengthBar: React.FC<StrengthBarProps> = ({ level }) => {
  const { colors: themeColors } = useTheme();

  const getConfig = () => {
    switch (level) {
      case 'empty':
        return { count: 0, color: colors.grey[60] };
      case 'weak':
        return { count: 3, color: themeColors.error };
      case 'warn':
        return { count: 2, color: themeColors.warning };
      case 'strong':
        return { count: 1, color: themeColors.success };
      default:
        return { count: 0, color: colors.grey[60] };
    }
  };

  const { count, color } = getConfig();

  return (
    <Box style={styles.container}>
      {[1, 2, 3].map(index => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index >= count ? color : colors.grey[60],
            },
          ]}
        />
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dot: {
    width: 22,
    height: 4,
    borderRadius: 8,
  },
});

export default StrengthBar;
