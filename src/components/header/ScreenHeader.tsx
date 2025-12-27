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
  onPressSearch?: () => void;
  marginTop?: number;
  subTitleBold?: boolean;
  hasBorderBottom?: boolean;
};

export function ScreenHeader({
  title,
  subTitle,
  RightComponent,
  onBackPress,
  isSearch,
  onPressSearch,
  marginTop,
  subTitleBold,
  hasBorderBottom = true,
}: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mt={marginTop || insets.top}
      px={16}
      py={14}
      mb={4}
      borderBottomWidth={hasBorderBottom ? 1 : 0}
      borderColor={'#F5F5F5'}
    >
      <Box
        onPress={onBackPress ? onBackPress : router.back}
        w={24}
        hitSlop={10}
      >
        <LeftArrowSvg />
      </Box>

      <Box>
        <Text fontWeight="extrabold" fontSize={18} align="center">
          {title}
        </Text>
        {subTitle && (
          <Text
            fontSize={18}
            fontWeight={subTitleBold ? 'extrabold' : 'regular'}
            align="center"
          >
            {subTitle}
          </Text>
        )}
      </Box>

      <Box w={24}>
        {isSearch ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressSearch}
            hitSlop={10}
          >
            <SearchSvg />
          </TouchableOpacity>
        ) : (
          RightComponent && RightComponent
        )}
      </Box>
    </Box>
  );
}
