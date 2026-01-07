import { Box } from '@/components/common/Layout/Box';
import OverflowScrollView from '@/components/common/ScrollView/OverflowScrollView';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import AutoWidthImage from '@/features/home/facility/AutoWidthImage';
import BackFacilityModal from '@/features/home/facility/BackFacilityModal';
import EquipmentStatusBottomSheet from '@/features/home/facility/EquipmentStatusModal';
import { FacilityHeader } from '@/features/home/facility/FacilityHeader';
import { FacilityInformation } from '@/features/home/facility/FacilityInformation';
import LendFacilityModal from '@/features/home/facility/LendFacilityModal';
import { useGetInventoryList } from '@/hooks/useInventory';
import { useGetTransactionByEquipment } from '@/hooks/useTransaction';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FacilityDetailScreen() {
  const insets = useSafeAreaInsets();

  const [isOpenLendModal, setIsOpenLendModal] = useState(false);
  const [isOpenBackModal, setIsOpenBackModal] = useState(false);
  const [isOpenEquipmentModal, setIsOpenEquipmentModal] =
    useState<boolean>(false);

  const params = useSearchParams();

  const { data, isLoading } = useGetTransactionByEquipment(
    Number(params.get('equipment_id'))
  );

  const { data: inventoryList } = useGetInventoryList({
    page: 1,
    limit: 20,
  });

  const handleOpenEquipmentModal = () => {
    setIsOpenEquipmentModal(true);
  };

  return (
    <Box flex={1}>
      <LinearGradient
        colors={['#CAD6FF', '#FFF7DB']}
        style={[styles.containerLinear, { height: insets.top + 110 }]}
      />
      <ScreenHeader title="CHI TIẾT VẬT CHẤT" hasBorderBottom={false} />
      <Box
        flex={1}
        mt={44}
        bgColor={colors.white}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      >
        {data?.equipment?.image && (
          <Box
            pos="absolute"
            top={-40}
            left={0}
            right={0}
            alignItems="center"
            zIndex={999}
          >
            <AutoWidthImage uri={data?.equipment?.image} height={80} />
          </Box>
        )}
        {isLoading ? (
          <Box mt={100}>
            <ActivityIndicator color={colors.primary[20]} />
          </Box>
        ) : (
          <OverflowScrollView
            contentContainerStyle={{
              paddingVertical: 50,
              paddingHorizontal: 16,
            }}
            showsVerticalScrollIndicator={false}
          >
            <FacilityHeader
              facilityDetail={data!}
              inventoryName={params.get('inventoryName') || '-'}
              onLendFacility={() => setIsOpenLendModal(true)}
              onBackFacility={() => setIsOpenBackModal(true)}
            />
            {/* <FilterButton /> */}
            <Box
              borderWidth={1}
              borderColor={colors.primary[20]}
              borderRadius={16}
              px={10}
              py={4}
              mt={16}
              alignSelf="flex-end"
              onPress={handleOpenEquipmentModal}
            >
              <Text fontSize={12} color={colors.primary[20]}>
                Nắm giữ thực tế
              </Text>
            </Box>
            <Box h={16} />
            {data &&
              data.transactionsByCompany?.map((item, index) => {
                return (
                  <FacilityInformation
                    key={index}
                    company={item.company}
                    equipment={data?.equipment}
                    transactionsByType={item.transactionsByType}
                  />
                );
              })}
          </OverflowScrollView>
        )}
      </Box>
      <LendFacilityModal
        isVisible={isOpenLendModal}
        inventoryList={inventoryList}
        facilityDetail={data!}
        onClose={() => setIsOpenLendModal(false)}
      />
      <BackFacilityModal
        isVisible={isOpenBackModal}
        inventoryList={inventoryList}
        facilityDetail={data!}
        onClose={() => setIsOpenBackModal(false)}
      />
      <EquipmentStatusBottomSheet
        onClose={() => {
          setIsOpenEquipmentModal(false);
        }}
        isOpen={isOpenEquipmentModal}
        equipmentId={Number(params.get('equipment_id'))}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  containerLinear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
