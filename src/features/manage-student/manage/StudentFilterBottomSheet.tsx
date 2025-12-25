import Button from '@/components/common/Button';
import ButtonTypeSelector from '@/components/common/Button/buttonTypeSelector';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
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

  const OPTIONS_1 = [
    { label: 'Chính quy', value: 'chinh_quy' },
    { label: 'Trung cấp', value: 'trung_cap' },
    { label: 'Văn bằng 2', value: 'van_bang_2' },
  ];

  const OPTIONS_2 = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 5 },
  ];

  const OPTIONS_3 = [
    { label: 'Chính thức', value: 'chinh_thuc' },
    { label: 'Dự bị', value: 'du_bi' },
    { label: 'Không', value: 'khong' },
  ];
  const OPTIONS_4 = [
    { label: 'Con CA', value: 'con_ca' },
    { label: 'GĐ có công với CM', value: 'co_cong_cm' },
    { label: 'Con thương binh', value: 'con_thuong_binh' },
  ];

  const OPTIONS_5 = [
    { label: 'Ca hát', value: 'ca_hat' },
    { label: 'Đá bóng', value: 'da_bong' },
    { label: 'Pickleball', value: 'pickleball' },
    { label: 'CNTT', value: 'cntt' },
  ];
  const [itemSelect_1, setItemSelect_1] = useState<string[]>([]);
  const [itemSelect_2, setItemSelect_2] = useState<number[]>([]);
  const [itemSelect_3, setItemSelect_3] = useState<string[]>([]);
  const [itemSelect_4, setItemSelect_4] = useState<string[]>([]);
  const [itemSelect_5, setItemSelect_5] = useState<string[]>([]);

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
          <Box>
            <Box>
              <Text fontSize={14} fontWeight="bold">
                Hệ đào tạo
              </Text>
            </Box>
            <Box flexDirection="row" gap={8} flexWrap="wrap">
              {OPTIONS_1.map((value, index) => {
                return (
                  <ButtonTypeSelector
                    key={index}
                    label={value.label}
                    active={itemSelect_1.some(e => value.value === e)}
                    onPress={() => {
                      setItemSelect_1(prev => {
                        if (prev.includes(value.value)) {
                          return prev.filter(v => v !== value.value);
                        }
                        return [...prev, value.value];
                      });
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontSize={14} fontWeight="bold">
                Đại đội
              </Text>
            </Box>
            <Box flexDirection="row" gap={8} flexWrap="wrap">
              {OPTIONS_2.map((value, index) => {
                return (
                  <ButtonTypeSelector
                    key={index}
                    label={'' + value.label}
                    active={itemSelect_2.some(e => value.value === e)}
                    onPress={() => {
                      setItemSelect_2(prev => {
                        if (prev.includes(value.value)) {
                          return prev.filter(v => v !== value.value);
                        }
                        return [...prev, value.value];
                      });
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontSize={14} fontWeight="bold">
                Đảng viên
              </Text>
            </Box>
            <Box flexDirection="row" gap={8} flexWrap="wrap">
              {OPTIONS_3.map((value, index) => {
                return (
                  <ButtonTypeSelector
                    key={index}
                    label={value.label}
                    active={itemSelect_3.some(e => value.value === e)}
                    onPress={() => {
                      setItemSelect_3(prev => {
                        if (prev.includes(value.value)) {
                          return prev.filter(v => v !== value.value);
                        }
                        return [...prev, value.value];
                      });
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontSize={14} fontWeight="bold">
                Chính sách
              </Text>
            </Box>
            <Box flexDirection="row" gap={8} flexWrap="wrap">
              {OPTIONS_4.map((value, index) => {
                return (
                  <ButtonTypeSelector
                    key={index}
                    label={value.label}
                    active={itemSelect_4.some(e => value.value === e)}
                    onPress={() => {
                      setItemSelect_4(prev => {
                        if (prev.includes(value.value)) {
                          return prev.filter(v => v !== value.value);
                        }
                        return [...prev, value.value];
                      });
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontSize={14} fontWeight="bold">
                Năng khiếu
              </Text>
            </Box>
            <Box flexDirection="row" gap={8} flexWrap="wrap">
              {OPTIONS_5.map((value, index) => {
                return (
                  <ButtonTypeSelector
                    key={index}
                    label={value.label}
                    active={itemSelect_5.some(e => value.value === e)}
                    onPress={() => {
                      setItemSelect_5(prev => {
                        if (prev.includes(value.value)) {
                          return prev.filter(v => v !== value.value);
                        }
                        return [...prev, value.value];
                      });
                    }}
                  />
                );
              })}
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
