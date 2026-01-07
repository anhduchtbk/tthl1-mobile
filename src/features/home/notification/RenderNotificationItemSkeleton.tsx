import { Box } from '@/components/common/Layout/Box';
import { useTheme } from '@react-navigation/native';
import { Skeleton } from 'moti/skeleton';
import { StyleSheet, useWindowDimensions } from 'react-native';

export function RenderNotificationItemSkeleton() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const skeletonColor = [colors.border, colors.white, colors.border];

  return (
    <Box style={styles.card}>
      <Skeleton
        width={width * 0.62}
        height={18}
        radius={8}
        colors={skeletonColor}
      />
      <Box my={4}>
        <Skeleton
          width={width * 0.35}
          height={14}
          radius={8}
          colors={skeletonColor}
        />
      </Box>
      <Box flexDirection="row" alignItems="center" gap={24}>
        <Skeleton
          width={width * 0.2}
          height={14}
          radius={8}
          colors={skeletonColor}
        />
        <Skeleton
          width={width * 0.2}
          height={14}
          radius={8}
          colors={skeletonColor}
        />
      </Box>
      <Box
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Skeleton
          width={width * 0.5}
          height={13}
          radius={8}
          colors={skeletonColor}
        />
        <Skeleton
          width={width * 0.22}
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
    backgroundColor: '#fff',
    borderRadius: 10,

    padding: 12,
    margin: 16,
    marginTop: 0,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Android shadow
    elevation: 6,
  },
});
