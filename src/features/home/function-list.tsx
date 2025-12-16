import BookSvg from '@/assets/icons/book-svg';
import HomeColorSvg from '@/assets/icons/home-color-svg';
import TimetableSvg from '@/assets/icons/timetable-svg';
import UserSvg from '@/assets/icons/user-svg';
import { Box } from '@/components/common/Layout/Box';
import { StyleSheet, Text, View } from 'react-native';

export function FunctionList() {
  return (
    <Box mt={16} mb={32} gap={16}>
      <Text style={styles.txtTitle}>Chức năng</Text>
      <Box gap={16}>
        <View style={styles.containerFList}>
          <View style={styles.btAva}>
            <UserSvg />
            <Text style={styles.txtFunction}>Quản lý học viên</Text>
          </View>
          <View style={styles.btAva}>
            <BookSvg />
            <Text style={styles.txtFunction}>Điểm danh quân số</Text>
          </View>
        </View>
        <View style={styles.containerFList}>
          <View style={styles.btAva}>
            <HomeColorSvg />
            <Text style={styles.txtFunction}>Quản lý vật chất</Text>
          </View>
          <View style={styles.btAva}>
            <TimetableSvg />
            <Text style={styles.txtFunction}>Thời khoá biểu</Text>
          </View>
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
