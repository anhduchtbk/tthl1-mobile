import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
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
          <Box style={styles.background} bgColor={'#F6FAFF'}>
            <Text style={styles.txtDayElementChecked} color={colors.black}>
              Thứ 2
            </Text>
            <Text style={styles.txtDayElementChecked}>(01/01/2025)</Text>
          </Box>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <View style={styles.background}>
            <Text style={styles.txtDayElement}>Thứ 2</Text>
            <Text style={styles.txtDayElement}>(01/01/2025)</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

function Schedule({
  schedule,
  subject,
  lesson,
  isDone,
  teacher,
}: PropsSchedule) {
  return (
    <View style={styles.containerShedule}>
      <View style={styles.schedule}>
        <Text style={styles.txtSchedule}>{schedule}</Text>
      </View>
      <View>
        <Text style={styles.txtSubject}>{subject}</Text>
        <Text style={styles.txtLesson}>
          Buổi: {lesson} {isDone ? '(XONG)' : ''}
        </Text>
        <Text style={styles.txtTeacher}>CBHL: {teacher}</Text>
      </View>
    </View>
  );
}

export function Timetable() {
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
    <View style={styles.timetable}>
      <View style={styles.headerTimetable}>
        <Text style={styles.txtHeaderSchedule}>Thời khoá biểu (C1 - VB2)</Text>
      </View>
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
      <Schedule
        schedule="Sáng"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
      />
      <Schedule
        schedule="Chiều"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
      />
      <Schedule
        schedule="Ngoại khoá"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
      />
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
    fontFamily: 'Mulish',
    fontWeight: 800,
    fontSize: 13,
    lineHeight: 20,
    color: '#777777',
  },
  txtSubject: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: 14,
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
    fontFamily: 'Mulish',
    lineHeight: 20,
    color: '#565656',
    fontSize: 13,
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
