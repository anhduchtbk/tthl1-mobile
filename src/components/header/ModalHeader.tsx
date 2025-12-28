import { TouchableOpacity } from 'react-native';
import { Box } from '../common/Layout/Box';
import { Text } from '../common/Text/Text';

type Props = {
  title: string;
  onClose?: () => void;
};

export function ModalHeader({ title, onClose }: Props) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb={16}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onClose}
        style={{ width: 80 }}
      >
        <Text fontSize={17} color={'#343434'}>
          Đóng
        </Text>
      </TouchableOpacity>
      <Text fontSize={20} fontWeight="bold" color={'#333'}>
        {title}
      </Text>
      <Box w={80} />
    </Box>
  );
}
