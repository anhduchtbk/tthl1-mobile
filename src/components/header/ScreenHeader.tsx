import LeftArrowSvg from '@/assets/icons/left-arrow-svg';
import SearchSvg from '@/assets/icons/search-svg';
import { useRouter } from 'expo-router';
import { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from '../common/Layout/Box';
import { Text } from '../common/Text/Text';

type Props = {
  title: string;
  subTitle?: string;
  RightComponent?: ReactElement;
  onBackPress?: () => void;
  isSearch?: boolean;
};

export function ScreenHeader({
  title,
  RightComponent,
  onBackPress,
  subTitle,
  isSearch,
}: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mt={insets.top}
      px={16}
      py={14}
    >
      <Box onPress={onBackPress ? onBackPress : router.back}>
        <LeftArrowSvg />
      </Box>

      <Box position="absolute" left={0} right={0} alignItems="center">
        <Text fontWeight="bold" fontSize={18}>
          {title}
        </Text>
        <Text fontSize={18}>{subTitle}</Text>
      </Box>

      {isSearch ? (
        <TouchableOpacity activeOpacity={0.7}>
          <SearchSvg />
        </TouchableOpacity>
      ) : (
        RightComponent && RightComponent
      )}
    </Box>
  );
}
