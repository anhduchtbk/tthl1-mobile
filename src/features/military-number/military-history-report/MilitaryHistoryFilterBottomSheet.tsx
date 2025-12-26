import DownwardSvg from '@/assets/icons/downward-svg';
import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatDate } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface MilitaryHistoryFilterBottomSheetProps {
  isOpen: boolean;
  fromDate: Date | null;
  toDate: Date | null;
  onClose: () => void;
  onSelectFromDate: () => void;
  onSelectToDate: () => void;
}

const MilitaryHistoryFilterBottomSheet: React.FC<
  MilitaryHistoryFilterBottomSheetProps
> = ({
  isOpen,
  fromDate,
  toDate,
  onClose,
  onSelectFromDate,
  onSelectToDate,
}) => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['80%'], []);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [isOpen]);

  const handleSave = useCallback(() => {
    onClose();
  }, [onClose]);

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
      <Box flex={1} px={16} pb={insets.bottom} justifyContent="space-between">
        <Box flex={1}>
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
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mt={24}
            gap={8}
            px={8}
          >
            <Box
              flex={1}
              h={48}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              borderWidth={1}
              borderColor={colors.primary[10]}
              borderRadius={16}
              px={16}
              onPress={onSelectFromDate}
            >
              <Text color={colors.blue}>
                {fromDate ? formatDate(fromDate) : 'Từ ngày'}
              </Text>
              <DownwardSvg />
            </Box>
            <Text fontSize={17} color={colors.blue}>
              -
            </Text>
            <Box
              flex={1}
              h={48}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              borderWidth={1}
              borderColor={colors.primary[10]}
              borderRadius={16}
              px={16}
              onPress={onSelectToDate}
            >
              <Text color={colors.blue}>
                {toDate ? formatDate(toDate) : 'Đến ngày'}
              </Text>
              <DownwardSvg />
            </Box>
          </Box>
        </Box>
        <Button text="Xác nhận" onPress={handleSave} />
      </Box>
    </BottomSheetModal>
  );
};

export default MilitaryHistoryFilterBottomSheet;
