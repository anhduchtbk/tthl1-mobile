import LeftArrowSvg from '@/assets/icons/left-arrow-svg';
import { ReactElement } from 'react';
import { Box } from '../common/Layout/Box';
import { Text } from '../common/Text/Text';

type Props = {
  title: string;
  RightComponent?: ReactElement;
  onBackPress?: () => void;
};

export function ScreenHeader({ title, RightComponent, onBackPress }: Props) {
  return (
    <Box flexDirection="row" alignItems="center">
      <Box>
        <LeftArrowSvg />
      </Box>

      <Box position="absolute" left={0} right={0} alignItems="center">
        <Text fontWeight="bold" fontSize={18}>
          {title}
        </Text>
      </Box>

      <Box>{RightComponent && RightComponent}</Box>
    </Box>
  );
}
