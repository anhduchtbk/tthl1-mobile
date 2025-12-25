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

export const formatDate = (date: string | null) => {
  if (date) {
    return dayjs(date).format('DD/MM/YYYY');
  }
  return '--/--/----';
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
