import FilterSvg from '@/assets/icons/filter-svg';
import { colors } from '@/theme/colors';
import { Box } from '../Layout/Box';
import { Text } from '../Text/Text';

export default function FilterButton({
  onOpenFilter,
  hasPadding = true,
}: {
  onOpenFilter?: () => void;
  hasPadding?: boolean;
}) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap={8}
      onPress={onOpenFilter}
      p={hasPadding ? 16 : 0}
    >
      <Text color={colors.text[3]}>Bộ lọc</Text>
      <FilterSvg width={14} height={14} />
    </Box>
  );
}
