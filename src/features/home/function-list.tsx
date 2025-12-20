import BookSvg from '@/assets/icons/book-svg';
import HomeColorSvg from '@/assets/icons/home-color-svg';
import TimetableSvg from '@/assets/icons/timetable-svg';
import UserSvg from '@/assets/icons/user-svg';
import { Box } from '@/components/common/Layout/Box';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function FunctionList() {
  const router = useRouter();

  return (
    <Box mt={16} mb={32} gap={16}>
      <Text style={styles.txtTitle}>Chức năng</Text>
      <Box gap={16}>
        <View style={styles.containerFList}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btAva}
            onPress={() => router.push('/(tabs)/manage-student')}
          >
            <UserSvg />
            <Text style={styles.txtFunction}>Quản lý học viên</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btAva}
            onPress={() => router.push('/(tabs)/military-number')}
          >
            <BookSvg />
            <Text style={styles.txtFunction}>Điểm danh quân số</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerFList}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btAva}
            onPress={() => router.push('/home/manage-facility')}
          >
            <HomeColorSvg />
            <Text style={styles.txtFunction}>Quản lý vật chất</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btAva}
            onPress={() => router.push('/(tabs)/schedule')}
          >
            <TimetableSvg />
            <Text style={styles.txtFunction}>Thời khoá biểu</Text>
          </TouchableOpacity>
        </View>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  containerFList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  btAva: {
    flex: 1,
    backgroundColor: '#F6FAFF',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#BED6FF',
    borderWidth: 1,
    gap: 8,
  },
  imgAva: {
    width: 32,
    height: 32,
    borderRadius: 12,
    marginRight: 8,
  },
  txtTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: '#333333',
  },
  txtFunction: {
    flex: 1,
    fontSize: 14,
    fontWeight: 500,
  },
});
