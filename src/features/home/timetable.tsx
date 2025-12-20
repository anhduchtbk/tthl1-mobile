import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { ReactElement, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

type PropsDayElement = {
  isCheck: boolean;
  onPress?: () => void;
  isDefault?: boolean;
};

type PropsSchedule = {
  schedule: string; // buổi học: sáng, chiều, ngoại khoá
  subject?: string;
  lesson?: number;
  isDone?: boolean;
  teacher?: string;
  bgColor?: string;
  borderColor?: string;
};

function DayElement({
  isCheck,
  onPress,
  isDefault,
}: PropsDayElement): ReactElement {
  return (
    <>
      {isCheck || isDefault ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Box style={styles.background} bgColor={colors.primary[40]}>
            <Text style={styles.txtDayElementChecked} color={colors.black}>
              Thứ 2
            </Text>
            <Text style={styles.txtDayElementChecked}>(01/01/2025)</Text>
          </Box>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Box style={styles.background}>
            <Text style={styles.txtDayElement}>Thứ 2</Text>
            <Text style={styles.txtDayElement}>(01/01/2025)</Text>
          </Box>
        </TouchableOpacity>
      )}
    </>
  );
}

export function DayElementScrollView() {
  const dayofweek: string[] = [
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
    'CN',
  ];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ScrollView horizontal contentContainerStyle={styles.dayContainer}>
      {dayofweek.map((value, index) => (
        <DayElement
          key={index}
          isCheck={selectedIndex === index}
          onPress={() => setSelectedIndex(index)}
          isDefault={index === 0}
        />
      ))}
    </ScrollView>
  );
}

function Schedule({
  schedule,
  subject,
  lesson,
  isDone,
  teacher,
  bgColor,
  borderColor,
}: PropsSchedule) {
  return (
    <Box gap={12}>
      <Box
        backgroundColor={bgColor}
        p={12}
        borderRadius={12}
        borderLeftWidth={4}
        borderLeftColor={borderColor}
      >
        <Text style={styles.txtSchedule} fontSize={13} color={'#777777'}>
          {schedule} (7:30 - 11:00)
        </Text>
      </Box>
      <Box>
        <Text style={styles.txtSubject} fontSize={14}>
          {subject}
        </Text>
        <Text style={styles.txtLesson} fontSize={13} color={'#565656'}>
          Buổi: {lesson} {isDone ? '(XONG)' : ''}
        </Text>
        <Text style={styles.txtTeacher}>CBHL: {teacher}</Text>
      </Box>
    </Box>
  );
}

export function Timetable() {
  const router = useRouter();

  return (
    <View style={styles.timetable}>
      <View style={styles.headerTimetable}>
        <Text style={styles.txtHeaderSchedule}>Thời khoá biểu (C1 - VB2)</Text>
      </View>
      <DayElementScrollView />
      <Schedule
        schedule="Sáng"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[40]}
        borderColor={'#91BAFE'}
      />
      <Schedule
        schedule="Chiều"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[50]}
        borderColor={'#FEF08A'}
      />
      <Schedule
        schedule="Ngoại khoá"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[70]}
        borderColor={'#20C74B'}
      />
      <Box
        borderRadius={8}
        alignItems="center"
        bgColor={colors.primary[40]}
        borderWidth={1}
        borderColor={colors.primary[30]}
        p={12}
        onPress={() => router.push('/schedule')}
      >
        <Text color={colors.primary[20]}>Xem chi tiết</Text>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dayContainer: {
    gap: 8,
    height: 48,
  },
  containerShedule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
    gap: 40,
  },
  timetable: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    gap: 20,
  },
  txtSchedule: {
    fontWeight: 800,
    lineHeight: 20,
  },
  txtSubject: {
    fontWeight: 700,
    lineHeight: 20,
  },
  txtTeacher: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    color: '#565656',
    lineHeight: 20,
    fontSize: 13,
  },
  txtLesson: {
    lineHeight: 20,
  },
  schedule: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtDayElementChecked: {
    fontFamily: 'Mulish',
    fontWeight: 400,
    fontSize: 14,
  },
  txtDayElement: {
    fontFamily: 'Mulish',
    fontWeight: 400,
    fontSize: 14,
  },
  txtHeaderSchedule: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: 20,
  },

  headerTimetable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
