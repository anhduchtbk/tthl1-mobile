import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RenderStudentItem } from './RenderStudentItem';

export interface StudentSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (years: string[]) => void;
  selectedYears?: string[];
}

type FormData = {
  search?: string;
};

const StudentSearchModal: React.FC<StudentSearchModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  selectedYears = [],
}) => {
  const [tempSelectedYears, setTempSelectedYears] = useState<string[]>([]);

  const wasOpenRef = useRef(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['80%'], []);

  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();

      if (!wasOpenRef.current) {
        setTempSelectedYears(selectedYears || []);
      }
      wasOpenRef.current = true;
    } else {
      bottomSheetRef.current?.dismiss();
      wasOpenRef.current = false;
    }
  }, [isOpen, selectedYears]);

  const handleSelectItem = useCallback((year: string) => {
    setTempSelectedYears(prev => {
      if (prev.includes(year)) {
        return prev.filter(y => y !== year);
      }
      return [...prev, year];
    });
  }, []);

  const handleSave = useCallback(() => {
    onSelect(tempSelectedYears);
    onClose();
  }, [tempSelectedYears, onSelect, onClose]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onDismiss={onClose}
      enablePanDownToClose
      enableOverDrag
      backdropComponent={renderBackdrop}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      enableContentPanningGesture={false}
      enableHandlePanningGesture
      enableDynamicSizing={false}
    >
      <Box style={styles.container} pb={insets.bottom}>
        <Box>
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
              Tìm kiếm
            </Text>
            <Box w={80} />
          </Box>
          <Box gap={12}>
            <Input
              as={TextField}
              name="search"
              label={'Tìm kiếm'}
              control={control}
              placeholder="Nhập thông tin tìm kiếm"
            />
            <Box>
              <Text>Kết quả tìm kiếm</Text>
              <FlatList
                data={ListStudents}
                renderItem={({ item }) => <RenderStudentItem item={item} />}
                contentContainerStyle={{ paddingHorizontal: 2 }}
              />
            </Box>
          </Box>
        </Box>

        {/*  */}
        {/* <Box>
          <Button text="Xác nhận" />
        </Box> */}
      </Box>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

const ListStudents = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Nguyễn Văn A - TO1',
    dob: '01/01/2000',
    isPartyMember: true, // dang vien
    division: 'A1B1C1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Nguyễn Thu A - TO1',
    dob: '01/01/2000',
    isPartyMember: true, // dang vien
    division: 'A5B2C3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Nguyễn Văn B - TO1',
    dob: '01/01/2001',
    isPartyMember: false, // dang vien
    division: 'A4B2C2',
  },
];

export default StudentSearchModal;
