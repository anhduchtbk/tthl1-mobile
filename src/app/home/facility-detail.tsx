import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import OverflowScrollView from '@/components/common/ScrollView/OverflowScrollView';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import BackFacilityModal from '@/features/home/facility/BackFacilityModal';
import { FacilityHeader } from '@/features/home/facility/FacilityHeader';
import { FacilityInformation } from '@/features/home/facility/FacilityInformation';
import LendFacilityModal from '@/features/home/facility/LendFacilityModal';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

export default function FacilityDetailScreen() {
  const [isOpenLendModal, setIsOpenLendModal] = useState(false);
  const [isOpenBackModal, setIsOpenBackModal] = useState(false);

  return (
    <LinearGradient colors={['#CAD6FF', '#FFF7DB']} style={{ flex: 1 }}>
      <ScreenHeader title="CHI TIẾT VẬT CHẤT" />
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
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsU-l3itkZGtUGUMHLChMnGGgE6SiOYYK7Q&s',
            }}
            style={styles.imgAvatar}
          />
        </Box>
        <OverflowScrollView
          contentContainerStyle={{
            paddingVertical: 50,
            paddingHorizontal: 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          <FacilityHeader
            onLendFacility={() => setIsOpenLendModal(true)}
            onBackFacility={() => setIsOpenBackModal(true)}
          />
          <Box pt={16} pb={8}>
            <FilterButton />
          </Box>
          <FacilityInformation />
        </OverflowScrollView>
      </Box>
      <LendFacilityModal
        isVisible={isOpenLendModal}
        onClose={() => setIsOpenLendModal(false)}
      />
      <BackFacilityModal
        isVisible={isOpenBackModal}
        onClose={() => setIsOpenBackModal(false)}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  imgAvatar: {
    width: 217,
    height: 80,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: colors.white,
  },
});
