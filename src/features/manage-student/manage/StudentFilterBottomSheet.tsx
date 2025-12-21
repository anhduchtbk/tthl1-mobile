import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface StudentFilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (years: string[]) => void;
  selectedYears?: string[];
}

const StudentFilterBottomSheet: React.FC<StudentFilterBottomSheetProps> = ({
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

  const data = [
    { label: 'Điểm danh thể dục buổi sáng', value: '1' },
    { label: 'Điểm danh Ăn cơm sáng', value: '2' },
    { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
  ];

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
              Bộ lọc
            </Text>
            <Box w={80} />
          </Box>
          {/*  */}
          <Box flexDirection="row" justifyContent="space-between" gap={8}>
            <Box flex={1}>
              <Dropdown
                data={data}
                name="Hệ đào tạo"
                placeholder={'Hệ đào tạo'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>

            <Box flex={1}>
              <Dropdown
                data={data}
                name="Đại đội"
                placeholder={'Đại đội'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>
          </Box>

          {/*  */}
          <Box flexDirection="row" justifyContent="space-between" gap={8}>
            <Box flex={1}>
              <Dropdown
                data={data}
                name="Trung đội"
                placeholder={'Trung đội'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>

            <Box flex={1}>
              <Dropdown
                data={data}
                name="Tiểu đội"
                placeholder={'Tiểu đội'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>
          </Box>

          {/*  */}
          <Box flexDirection="row" justifyContent="space-between" gap={8}>
            <Box flex={1}>
              <Dropdown
                data={data}
                name="Đảng viên"
                placeholder={'Đảng viên'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>

            <Box flex={1}>
              <Dropdown
                data={data}
                name="Đoàn viên"
                placeholder={'Đoàn viên'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>
          </Box>

          {/*  */}
          <Box flexDirection="row" justifyContent="space-between" gap={8}>
            <Box flex={1}>
              <Dropdown
                data={data}
                name="Chính sách"
                placeholder={'Chính sách'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>

            <Box flex={1}>
              <Dropdown
                data={data}
                name="Năng khiếu"
                placeholder={'Năng khiếu'}
                searchPlaceholder={'Tìm kiếm'}
                dropdownStyle={{
                  borderColor: colors.primary[20],
                }}
              />
            </Box>
          </Box>
        </Box>

        {/*  */}
        <Box>
          <Button text="Xác nhận" />
        </Box>
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

export default StudentFilterBottomSheet;
