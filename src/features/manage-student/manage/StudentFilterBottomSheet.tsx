import Button from '@/components/common/Button';
import ButtonTypeSelector from '@/components/common/Button/ButtonTypeSelector';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
  COMPANY_TYPE,
  EDUCATION_TYPE,
  PARTY_MEMBER_TYPE,
  POLICY_TYPE,
  TALENT_TYPE,
} from '@/constants/value';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  COMPANY_OPTIONS,
  EDUCATION_OPTIONS,
  PARTY_MEMBER_OPTIONS,
  POLICY_OPTIONS,
  TALENT_OPTIONS,
} from './constants/option';

export interface StudentFilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterType = {
  educations?: EDUCATION_TYPE[];
  companies?: COMPANY_TYPE[];
  partyMembers?: PARTY_MEMBER_TYPE[];
  policies?: POLICY_TYPE[];
  talents?: TALENT_TYPE[];
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
    filterName: 'Đảng viên',
    filterKey: 'partyMembers',
    options: PARTY_MEMBER_OPTIONS,
  },
  {
    filterName: 'Chính sách',
    filterKey: 'policies',
    options: POLICY_OPTIONS,
  },
  {
    filterName: 'Năng khiếu',
    filterKey: 'talents',
    options: TALENT_OPTIONS,
  },
];

const StudentFilterBottomSheet: React.FC<StudentFilterBottomSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['80%'], []);

  const [filters, setFilters] = useState<FilterType>({
    educations: [],
    companies: [],
    partyMembers: [],
    policies: [],
    talents: [],
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
        <Box flex={1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {fakeData.map((filter, index) => (
              <Box key={index} gap={8} mb={8}>
                <Text fontWeight="bold">{filter.filterName}</Text>
                <Box flexDirection="row" gap={8} flexWrap="wrap">
                  {filter.options.map((value, idx) => {
                    const isActive = (() => {
                      switch (filter.filterName) {
                        case 'Hệ đào tạo':
                          return filters.educations?.some(
                            e => value.value === e
                          );
                        case 'Đại đội':
                          return filters.companies?.some(
                            e => value.value === e
                          );
                        case 'Đảng viên':
                          return filters.partyMembers?.some(
                            e => value.value === e
                          );
                        case 'Chính sách':
                          return filters.policies?.some(e => value.value === e);
                        case 'Năng khiếu':
                          return filters.talents?.some(e => value.value === e);
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

export default StudentFilterBottomSheet;
