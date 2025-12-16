import FilterSvg from '@/assets/icons/filter-svg';
import { Text } from 'react-native';
import { Box } from '../Layout/Box';

export default function FilterButton() {
  return (
    <Box flexDirection="row" alignItems="center" gap={8} ml={16}>
      <Text>Bộ lọc</Text>
      <FilterSvg width={14} height={14} />
    </Box>
  );
}
