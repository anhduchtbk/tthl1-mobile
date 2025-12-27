import { Box } from '@/components/common/Layout/Box';
import { useTheme } from '@react-navigation/native';
import { Skeleton } from 'moti/skeleton';
import { StyleSheet, useWindowDimensions } from 'react-native';

export function RenderScheduleItemSkeleton() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const skeletonColor = [colors.border, colors.white, colors.border];

  return (
    <Box style={styles.card}>
      <Skeleton
        width={width * 0.37}
        height={18}
        radius={8}
        colors={skeletonColor}
      />
      <Box flexDirection="row" alignItems="center" gap={36} mt={4}>
        <Skeleton
          width={width * 0.19}
          height={14}
          radius={8}
          colors={skeletonColor}
        />
        <Skeleton
          width={width * 0.14}
          height={14}
          radius={8}
          colors={skeletonColor}
        />
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Skeleton
          width={width * 0.5}
          height={13}
          radius={8}
          colors={skeletonColor}
        />
        <Skeleton
          width={width * 0.3}
          height={24}
          radius={16}
          colors={skeletonColor}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,

    padding: 12,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Android shadow
    elevation: 6,
  },
});
