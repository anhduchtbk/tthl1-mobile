import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import OverflowScrollView from '@/components/common/ScrollView/OverflowScrollView';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import BackFacilityModal from '@/features/home/facility/BackFacilityModal';
import { FacilityHeader } from '@/features/home/facility/FacilityHeader';
import { FacilityInformation } from '@/features/home/facility/FacilityInformation';
import LendFacilityModal from '@/features/home/facility/LendFacilityModal';
import { useGetInventoryList } from '@/hooks/useInventory';
import { useGetTransactionByEquipment } from '@/hooks/useTransaction';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FacilityDetailScreen() {
  const insets = useSafeAreaInsets();

  const [isOpenLendModal, setIsOpenLendModal] = useState(false);
  const [isOpenBackModal, setIsOpenBackModal] = useState(false);

  const params = useSearchParams();

  const { data, isLoading } = useGetTransactionByEquipment(
    Number(params.get('equipment_id'))
  );

  const { data: inventoryList } = useGetInventoryList({
    page: 1,
    limit: 20,
  });

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
        <Box
          pos="absolute"
          top={-40}
          left={0}
          right={0}
          alignItems="center"
          zIndex={999}
        >
          <Image
            source={{
              uri: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
            }}
            style={styles.imgAvatar}
          />
        </Box>
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
            <Box mx={-16}>
              <FilterButton />
            </Box>
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
  imgAvatar: {
    width: 217,
    height: 80,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: colors.white,
  },
});
