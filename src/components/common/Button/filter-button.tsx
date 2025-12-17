import FilterSvg from '@/assets/icons/filter-svg';
import { colors } from '@/theme/colors';
import { Box } from '../Layout/Box';
import { Text } from '../Text/Text';

export default function FilterButton() {
  return (
    <Box flexDirection="row" alignItems="center" gap={8} p={16}>
      <Text color={colors.text[3]}>Bộ lọc</Text>
      <FilterSvg width={14} height={14} />
    </Box>
  );
}
