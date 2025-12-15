import MedalSvg from '@/assets/icons/medal-svg';
import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

type PropsHonorOfWeek = {
  name: string;
  unit: string;
  learnSystem: string; // hệ học tập: văn bằng 2, trung cấp,...
};

function Honored({ name, unit, learnSystem }: PropsHonorOfWeek) {
  return (
    <View style={styles.honerContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('@/assets/images/Ellipse.png')}
          style={styles.avatar}
          resizeMode="contain"
        />
        <Box bottom={-10} position="absolute">
          <MedalSvg />
        </Box>
      </View>
      <View style={{ gap: 10 }}>
        <View>
          <Text style={styles.txtNameHonor}>{name}</Text>
          <Text
            style={{ fontFamily: 'Mulish', fontSize: 11, color: '#565656' }}
          >
            {unit}
          </Text>
        </View>

        <View style={styles.learnSystem}>
          <StarSvg />
          <Text style={styles.txtLearnSystem}>{learnSystem}</Text>
        </View>
      </View>
    </View>
  );
}

export function HonorOfWeek() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeader}>Học viên tiêu biểu tuần 13</Text>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <Honored
          name="Nguyễn Anh Tuấn"
          unit="A4-B2-C3"
          learnSystem="Văn bằng 2"
        />

        <Honored
          name="Bùi Thị Trang"
          unit="A6-B2-C3"
          learnSystem="Văn bằng 2"
        />

        <Honored
          name="Nguyễn Thành Kiên"
          unit="A6-B2-C3"
          learnSystem="Văn bằng 2"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  honerContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    width: 260,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatar: {
    height: 60,
    width: 60,
  },
  medalAvatar: {
    height: 16,
    width: 16,
    position: 'absolute',
    bottom: -10,
  },
  txtNameHonor: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: 14,
    color: '#292929',
    lineHeight: 26,
  },
  learnSystem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  txtHeader: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 30,
  },
  txtLearnSystem: {
    fontFamily: 'Mulish',
    fontWeight: 400,
    color: '#565656',
  },
});
