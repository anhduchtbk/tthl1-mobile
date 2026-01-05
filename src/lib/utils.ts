import {
  EDUCATION_TYPE,
  RANK_TYPE,
  REPORT_NUMBER_TYPE,
  SCHEDULE_TYPE,
} from '@/constants/value';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';

export const formatUnitRank = (unitRank: string) => {
  switch (unitRank) {
    case 'tieu_doi_pho':
      return 'A phó';
    case 'tieu_doi_truong':
      return 'A trưởng';
    case 'trung_doi_pho':
      return 'B phó';
    case 'trung_doi_truong':
      return 'B trưởng';
    case 'thanh_vien':
      return 'Thành viên';
    default:
      return 'Thành viên';
  }
};

export const formatRank = (rank?: RANK_TYPE) => {
  switch (rank) {
    case RANK_TYPE.BINH_NHI:
      return 'Binh nhi';
    case RANK_TYPE.BINH_NHAT:
      return 'Binh nhat';
    case RANK_TYPE.THIEU_UY:
      return 'Thiếu uý';
    case RANK_TYPE.TRUNG_UY:
      return 'Trung uý';
    case RANK_TYPE.THUONG_UY:
      return 'Thượng uý';
    case RANK_TYPE.DAI_UY:
      return 'Đại uý';
    case RANK_TYPE.THIEU_TA:
      return 'Thiếu tá';
    case RANK_TYPE.TRUNG_TA:
      return 'Trung tá';
    case RANK_TYPE.THUONG_TA:
      return 'Thượng tá';
    case RANK_TYPE.DAI_TA:
      return 'Đại tá';
    default:
      return 'Tiểu giáo viên';
  }
};

export const formatEducation = (education?: EDUCATION_TYPE) => {
  switch (education) {
    case EDUCATION_TYPE.CHINH_QUY:
      return 'Chính quy';
    case EDUCATION_TYPE.TRUNG_CAP:
      return 'Trung cấp';
    case EDUCATION_TYPE.VB2:
      return 'VB2';
    default:
      return '';
  }
};

export const formatFamilyRole = (familyRole: string) => {
  switch (familyRole) {
    case 'bo':
      return 'Bố';
    case 'me':
      return 'Mẹ';
    case 'chong':
      return 'Chồng';
    case 'vo':
      return 'Vợ';
    case 'anh trai':
      return 'Anh trai';
    case 'em trai':
      return 'Em trai';
    case 'chi gai':
      return 'Chị gái';
    case 'em gai':
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

export const formatDate = (date?: Date | string | null) => {
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
    case SCHEDULE_TYPE.EXTRA:
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

export const formatHistoryType = (type: REPORT_NUMBER_TYPE) => {
  let scheduleType, bgColor, borderColor;

  switch (type) {
    case REPORT_NUMBER_TYPE.MORNING:
      scheduleType = 'Điểm danh sáng';
      bgColor = colors.primary[40];
      borderColor = '#91BAFE';
      break;
    case REPORT_NUMBER_TYPE.AFTERNOON:
      scheduleType = 'Điểm danh chiều';
      bgColor = colors.primary[50];
      borderColor = '#FEF08A';
      break;
    case REPORT_NUMBER_TYPE.EVENING:
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

export function getCurrentWeekDates(startOfWeek?: string) {
  const startOfWeekDate = startOfWeek
    ? dayjs(startOfWeek)
    : dayjs().startOf('week'); // Get the start of the current week
  const daysInWeek = [];

  for (let i = 0; i < 7; i++) {
    // Add 'i' days to the start of the week and format the date
    const day = startOfWeekDate
      .add(startOfWeek ? i : i + 1, 'day')
      .format('YYYY-MM-DD');
    daysInWeek.push(day);
  }

  return daysInWeek;
}

export function getWeekNumberByCourse(
  startDate: string,
  reportTime: string
): number {
  console.log('ggg', startDate, reportTime);

  const start = new Date(startDate);
  const report = new Date(reportTime);

  const diffTime = report.getTime() - start.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return Math.floor(diffDays / 7) + 1;
}
