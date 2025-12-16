import LeftArrowSvg from '@/assets/icons/left-arrow-svg';
import { useRouter } from 'expo-router';
import { ReactElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../common/Layout/Box';
import { Text } from '../common/Text/Text';

type Props = {
  title: string;
  RightComponent?: ReactElement;
  onBackPress?: () => void;
};

export function ScreenHeader({ title, RightComponent, onBackPress }: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      mt={insets.top}
      px={16}
      py={12}
    >
      <Box onPress={onBackPress ? onBackPress : router.back}>
        <LeftArrowSvg />
      </Box>

      <Box position="absolute" left={0} right={0} alignItems="center">
        <Text fontWeight="bold" fontSize={18}>
          {title}
        </Text>
      </Box>

      {RightComponent && RightComponent}
    </Box>
  );
}
