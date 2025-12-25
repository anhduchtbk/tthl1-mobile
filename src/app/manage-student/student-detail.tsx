import { Box } from '@/components/common/Layout/Box';
import OverflowScrollView from '@/components/common/ScrollView/OverflowScrollView';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { BasicInformation } from '@/features/manage-student/student-detail/BasicInformation';
import { RelativeInformation } from '@/features/manage-student/student-detail/RelativeInformation';
import { StudentHeader } from '@/features/manage-student/student-detail/StudentHeader';
import { UseGetStudentDetail } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StudentDetailScreen() {
  const insets = useSafeAreaInsets();
  const searchParams = useSearchParams();
  const studentDetail = JSON.parse(searchParams.get('studentDetail') || '');

  const { data } = UseGetStudentDetail(studentDetail?.id);

  return (
    <Box flex={1}>
      <LinearGradient
        colors={['#CAD6FF', '#FFF7DB']}
        style={[styles.containerLinear, { height: insets.top + 110 }]}
      >
        <ScreenHeader title="CHI TIẾT HỌC VIÊN" />
      </LinearGradient>
      <Box
        flex={1}
        mt={154}
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
            paddingTop: 50,
            paddingHorizontal: 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          <StudentHeader studentDetail={data || studentDetail} />
          <BasicInformation studentDetail={data || studentDetail} />
          <RelativeInformation
            familyMembers={studentDetail?.familyMembers || []}
          />
          <Box h={100} />
        </OverflowScrollView>
      </Box>
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
    width: 85,
    height: 85,
    borderWidth: 3,
    borderRadius: 85,
    borderColor: '#F7F7F7',
  },
});
