import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ModalHeader } from '@/components/header/ModalHeader';
import {
  COMPANY_TYPE,
  EDUCATION_TYPE,
  PARTY_MEMBER_TYPE,
  POLICY_TYPE,
  TALENT_TYPE,
} from '@/constants/value';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
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

export interface EquipmentStatusBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (filter: string[]) => void;
}

type FilterType = {
  educations?: EDUCATION_TYPE[];
  companies?: COMPANY_TYPE[];
  partyMembers?: PARTY_MEMBER_TYPE[];
  policies?: POLICY_TYPE[];
  talents?: TALENT_TYPE[];
};

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

type Equipment = {
  equipmentId: number;
  name: string;
  totalAmount: number;
  lent: number;
  remain: number;
  lentTo: LentToItem[];
};

type CompanyElementProps = {
  type?: string;
  companyList?: string[];
};

const fakeData: Equipment = {
  equipmentId: 1,
  name: 'Súng tiểu liên AK-47',
  totalAmount: 250,
  lent: 5,
  remain: 245,
  lentTo: [
    {
      company: {
        id: 1,
        name: '1',
        course: {
          name: 'VB2K1',
          type: 'van_bang_2',
        },
      },
      quantity: 3,
    },
    {
      company: {
        id: 2,
        name: '2',
        course: {
          name: 'VB2K1',
          type: 'trung_cap',
        },
      },
      quantity: 2,
    },
  ],
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
          {formatEducation(item.courseType)}
        </Text>
      </Box>
      {item.items.map(company => {
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
  onConfirm,
}) => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['80%'], []);

  const [filterTypes, setFilterTypes] = useState<FilterType>({
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

  const handleSave = useCallback(() => {
    let filters: string[] = [];

    onConfirm(filters);
    onClose();
  }, [filterTypes, onClose]);

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

  console.log(groupLentToByCourseType(fakeData.lentTo));

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
                <Text fontSize={14}>Súng tiểu liên 123</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Tổng số:
                </Text>
                <Text fontSize={14}>Súng tiểu liên 123</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Đã bàn giao:
                </Text>
                <Text fontSize={14}>Súng tiểu liên 123</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text fontWeight="bold" fontSize={14}>
                  Tồn kho:
                </Text>
                <Text fontSize={14}>Súng tiểu liên 123</Text>
              </Box>
            </Box>
            {groupLentToByCourseType(fakeData.lentTo).map((item, index) => {
              return <CompanyElement key={index} item={item} />;
            })}
            {/* <CompanyElement /> */}
          </ScrollView>
        </Box>
        <Button text="Đồng ý" onPress={handleSave} />
      </Box>
    </BottomSheetModal>
  );
};

export default EquipmentStatusBottomSheet;

type GroupedCourseItem = {
  courseType: EDUCATION_TYPE;
  items: LentToItem[];
};

function groupLentToByCourseType(lentTo?: LentToItem[]): GroupedCourseItem[] {
  if (!Array.isArray(lentTo)) {
    return [];
  }

  const map = lentTo.reduce((acc, item) => {
    const courseType = item.company.course.type;

    if (!acc[courseType]) {
      acc[courseType] = [];
    }

    acc[courseType].push(item);

    return acc;
  }, {} as Record<string, LentToItem[]>);

  return Object.entries(map).map(([courseType, items]) => ({
    courseType,
    items,
  }));
}
