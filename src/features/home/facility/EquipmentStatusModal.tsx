import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ModalHeader } from '@/components/header/ModalHeader';
import { EDUCATION_TYPE } from '@/constants/value';
import { useGetEquipmentListStatusById } from '@/hooks/useInventory';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface EquipmentStatusBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  equipmentId: number;
}

type Course = {
  name: string;
  type: string; // ví dụ: 'van_bang_2'
};

type CompanyStatus = {
  id: number;
  name: string;
  course: Course;
};

type LentToItem = {
  company: CompanyStatus;
  quantity: number;
};

const CompanyElement = ({ item }: { item: GroupedCourseItem }) => {
  return (
    <Box mt={16} gap={16}>
      <Box
        borderWidth={1}
        borderColor={colors.primary[20]}
        borderRadius={8}
        p={8}
        alignSelf="flex-start"
      >
        <Text fontSize={12} color={colors.primary[20]} fontWeight="bold">
          {formatEducation(item.courseType as EDUCATION_TYPE)}
        </Text>
      </Box>
      {item.companies.map(company => {
        return (
          <Box
            flexDirection="row"
            justifyContent="space-between"
            key={company.company.id}
          >
            <Text fontWeight="bold" fontSize={14}>
              C{company.company.name} (Đang giữ):
            </Text>
            <Text fontSize={14}>{company.quantity}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

const EquipmentStatusBottomSheet: React.FC<EquipmentStatusBottomSheetProps> = ({
  isOpen,
  onClose,
  equipmentId,
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

  const { data } = useGetEquipmentListStatusById(equipmentId);

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
        <ModalHeader title="Nắm giữ thực tế" onClose={onClose} />
        <Box flex={1} px={6} mt={16}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box gap={8}>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Tên vật chất:
                </Text>
                <Text fontSize={14}>{data?.name}</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Tổng số:
                </Text>
                <Text fontSize={14}>{data?.totalAmount}</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Đã bàn giao:
                </Text>
                <Text fontSize={14}>{data?.lent}</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Tồn kho:
                </Text>
                <Text fontSize={14}>{data?.remain}</Text>
              </Box>
            </Box>
            {groupLentToByCourseType(data?.lentTo).map((item, index) => {
              return <CompanyElement key={index} item={item} />;
            })}
            {/* <CompanyElement /> */}
          </ScrollView>
        </Box>
        {/* <Button text="Đồng ý" onPress={handleSave} /> */}
      </Box>
    </BottomSheetModal>
  );
};

export default EquipmentStatusBottomSheet;

type GroupedCourseItem = {
  courseType: string;
  companies: LentToItem[];
};

function groupLentToByCourseType(lentTo?: LentToItem[]): GroupedCourseItem[] {
  if (!Array.isArray(lentTo)) {
    return [];
  }

  const map = lentTo.reduce((acc, item) => {
    const courseType = item.company.course?.type as EDUCATION_TYPE;

    if (!acc[courseType]) {
      acc[courseType] = [];
    }

    acc[courseType].push(item);

    return acc;
  }, {} as Record<string, LentToItem[]>);

  return Object.entries(map).map(([courseType, companies]) => ({
    courseType,
    companies,
  }));
}
