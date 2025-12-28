import Button from '@/components/common/Button';
import ButtonTypeSelector from '@/components/common/Button/ButtonTypeSelector';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ModalHeader } from '@/components/header/ModalHeader';
import { COMPANY_TYPE, EDUCATION_TYPE } from '@/constants/value';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  COMPANY_OPTIONS,
  EDUCATION_OPTIONS,
  WEEK_OPTIONS,
} from '../../constants/option';

export interface ScheduleFilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterType = {
  educations?: EDUCATION_TYPE[];
  companies?: COMPANY_TYPE[];
  weeks?: number[];
};

const fakeData = [
  {
    filterName: 'Hệ đào tạo',
    filterKey: 'educations',
    options: EDUCATION_OPTIONS,
  },
  {
    filterName: 'Đại đội',
    filterKey: 'companies',
    options: COMPANY_OPTIONS,
  },
  {
    filterName: 'Tuần',
    filterKey: 'weeks',
    options: WEEK_OPTIONS,
  },
];

const ScheduleFilterBottomSheet: React.FC<ScheduleFilterBottomSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['80%'], []);

  const [filters, setFilters] = useState<FilterType>({
    educations: [],
    companies: [],
    weeks: [],
  });

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [isOpen]);

  const handleSelectItem = useCallback((type: string, value: any) => {
    setFilters(prev => {
      const currentValues = prev[type as keyof FilterType] as any[];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value),
        };
      }
      return {
        ...prev,
        [type]: [...currentValues, value],
      };
    });
  }, []);

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
        <ModalHeader title="Bộ lọc" onClose={onClose} />
        <Box flex={1} px={6}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {fakeData.map((filter, index) => (
              <Box key={index} gap={8} mb={8}>
                <Text fontWeight="bold">{filter.filterName}</Text>
                <Box flexDirection="row" gap={8} flexWrap="wrap">
                  {filter.options.map((value, idx) => {
                    const isActive = (() => {
                      switch (filter.filterKey) {
                        case 'educations':
                          return filters.educations?.some(
                            e => value.value === e
                          );
                        case 'companies':
                          return filters.companies?.some(
                            e => value.value === e
                          );
                        case 'weeks':
                          return filters.weeks?.some(e => value.value === e);
                        default:
                          return false;
                      }
                    })();

                    return (
                      <ButtonTypeSelector
                        key={idx}
                        label={value.label}
                        active={isActive}
                        onPress={() => {
                          handleSelectItem(filter.filterKey, value.value);
                        }}
                      />
                    );
                  })}
                </Box>
              </Box>
            ))}
          </ScrollView>
        </Box>
        <Button text="Xác nhận" onPress={handleSave} />
      </Box>
    </BottomSheetModal>
  );
};

export default ScheduleFilterBottomSheet;
