import { Box } from '@/components/common/Layout/Box';
import OverflowScrollView from '@/components/common/ScrollView/OverflowScrollView';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { BasicInformation } from '@/features/manage-student/student-detail/BasicInformation';
import { RelativeInformation } from '@/features/manage-student/student-detail/RelativeInformation';
import { StudentHeader } from '@/features/manage-student/student-detail/StudentHeader';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentDetailScreen() {
  return (
    <LinearGradient colors={['#CAD6FF', '#FFF7DB']} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <ScreenHeader title="CHI TIẾT HỌC VIÊN" marginTop={1} />
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
                uri: 'https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2025/3/24/chi-pu-r4-1742803995521521142964-0-0-568-908-crop-1742804234653431348943.jpg',
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
            <StudentHeader />
            <BasicInformation />
            <RelativeInformation />
          </OverflowScrollView>
        </Box>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  imgAvatar: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: colors.white,
  },
});
