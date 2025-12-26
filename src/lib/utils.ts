import { HISTORY_TYPE, SCHEDULE_TYPE } from '@/constants/value';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';

export const formatUnitRank = (unitRank: string) => {
  switch (unitRank) {
    case 'platoon_leader':
      return 'B trưởng';
    case 'suqad_leader':
      return 'A trưởng';
    default:
      return 'Học viên';
  }
};

export const formatFamilyRole = (familyRole: string) => {
  switch (familyRole) {
    case 'father':
      return 'Bố';
    case 'mother':
      return 'Mẹ';
    case 'husband':
      return 'Chồng';
    case 'wife':
      return 'Vợ';
    case 'older_brother':
      return 'Anh trai';
    case 'younger_brother':
      return 'Em trai';
    case 'older_sister':
      return 'Chị gái';
    case 'younger_sister':
      return 'Em gái';
    default:
      return 'Thân nhân';
  }
};

export const formatBoolean = (value: boolean) => {
  if (value) {
    return 'Có';
  } else {
    return 'Không';
  }
};

export const formatGender = (value: boolean) => {
  if (value) {
    return 'Nam';
  } else {
    return 'Nữ';
  }
};

export const formatDate = (date: Date | string | null) => {
  if (date) {
    return dayjs(date).format('DD/MM/YYYY');
  }
  return '--/--/----';
};

export const formatVietnameseDay = (date: Date | string | null) => {
  switch (dayjs(date).day()) {
    case 0:
      return 'Chủ nhật';
    case 1:
      return 'Thứ 2';
    case 2:
      return 'Thứ 3';
    case 3:
      return 'Thứ 4';
    case 4:
      return 'Thứ 5';
    case 5:
      return 'Thứ 6';
    case 6:
      return 'Thứ 7';
    default:
      break;
  }
};

export const formatPhoneNumber = (phoneNumber: string) => {
  let normalized = phoneNumber.replace(/\D/g, '');
  // Định dạng 10 số (0XX XXX XXXX)

  // if (normalized.length === 10 && normalized.startsWith('0')) {
  if (normalized.length === 10) {
    return normalized.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
  }
  // Định dạng 11 số (+84XX XXX XXXX)
  if (normalized.length === 11 && normalized.startsWith('84')) {
    return (
      '+' + normalized.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4')
    );
  }
  return normalized; // Trả về nếu không khớp
};

export const formatNotificationAmount = (amount: number) => {
  return amount > 9 ? '9+' : amount;
};

export const formatScheduleType = (type: SCHEDULE_TYPE) => {
  let scheduleType, bgColor, borderColor;

  switch (type) {
    case SCHEDULE_TYPE.MORNING:
      scheduleType = 'Sáng';
      bgColor = colors.primary[40];
      borderColor = '#91BAFE';
      break;
    case SCHEDULE_TYPE.AFTERNOON:
      scheduleType = 'Chiều';
      bgColor = colors.primary[50];
      borderColor = '#FEF08A';
      break;
    case SCHEDULE_TYPE.AFTERSCHOOL:
      scheduleType = 'Ngoại khoá';
      bgColor = colors.primary[70];
      borderColor = '#20C74B';
      break;
    default:
      scheduleType = '';
      bgColor = colors.primary[40];
      borderColor = '#91BAFE';
      break;
  }

  return { scheduleType, bgColor, borderColor };
};

export const formatHistoryType = (type: HISTORY_TYPE) => {
  let scheduleType, bgColor, borderColor;

  switch (type) {
    case HISTORY_TYPE.MORNING:
      scheduleType = 'Điểm danh sáng';
      bgColor = colors.primary[40];
      borderColor = '#91BAFE';
      break;
    case HISTORY_TYPE.AFTERNOON:
      scheduleType = 'Điểm danh chiều';
      bgColor = colors.primary[50];
      borderColor = '#FEF08A';
      break;
    case HISTORY_TYPE.NIGHT:
      scheduleType = 'Điểm danh tối';
      bgColor = colors.primary[70];
      borderColor = '#20C74B';
      break;
    default:
      scheduleType = '';
      bgColor = colors.primary[40];
      borderColor = '#91BAFE';
      break;
  }

  return { scheduleType, bgColor, borderColor };
};

export function getCurrentWeekDates() {
  const startOfWeek = dayjs().startOf('week'); // Get the start of the current week
  const daysInWeek = [];

  for (let i = 0; i < 7; i++) {
    // Add 'i' days to the start of the week and format the date
    const day = startOfWeek.add(i + 1, 'day').format('YYYY-MM-DD');
    daysInWeek.push(day);
  }

  return daysInWeek;
}
