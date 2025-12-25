import { FontSize } from '@/theme/fonts';
import { Image, useWindowDimensions } from 'react-native';
import { Box } from '../common/Layout/Box';
import { Text } from '../common/Text/Text';

export const EmptyScreen = ({ text }: { text: string }) => {
  const { width } = useWindowDimensions();

  return (
    <Box mt={50} gap={20} alignItems="center">
      <Image
        source={require('@/assets/images/empty-request.png')}
        style={{ width: width * 0.67, height: width * 0.67 }}
        resizeMode="contain"
      />
      <Text fontSize={FontSize.LARGE} color={'#222222'} align="center">
        {text}
      </Text>
    </Box>
  );
};
