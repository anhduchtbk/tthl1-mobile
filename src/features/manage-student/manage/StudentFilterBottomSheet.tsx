import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

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

  const snapPoints = useMemo(() => ['50%'], []);

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
      <BottomSheetView style={styles.container}>
        <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
          <TouchableOpacity activeOpacity={0.7} onPress={onClose} style={{width: 80}}>
            <Text fontSize={17} color={'#343434'}>Đóng</Text>
          </TouchableOpacity>
          <Text fontSize={20} fontWeight="bold" color={'#333'}>
            Bộ lọc
          </Text>
          <Box w={80} />
        </Box>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default StudentFilterBottomSheet;
