import {
  COMPANY_TYPE,
  EDUCATION_TYPE,
  PARTY_MEMBER_TYPE,
  POLICY_TYPE,
  TALENT_TYPE,
} from '@/constants/value';

export const EDUCATION_OPTIONS = [
  { label: 'Chính quy', value: EDUCATION_TYPE.CHINH_QUY },
  { label: 'Trung cấp', value: EDUCATION_TYPE.TRUNG_CAP },
  { label: 'Văn bằng 2', value: EDUCATION_TYPE.VB2 },
];

export const COMPANY_OPTIONS = [
  { label: 1, value: COMPANY_TYPE.ONE },
  { label: 2, value: COMPANY_TYPE.TWO },
  { label: 3, value: COMPANY_TYPE.THREE },
  { label: 4, value: COMPANY_TYPE.FOUR },
  { label: 5, value: COMPANY_TYPE.FIVE },
  { label: 6, value: COMPANY_TYPE.SIX },
  { label: 7, value: COMPANY_TYPE.SEVEN },
  { label: 8, value: COMPANY_TYPE.EIGHT },
  { label: 9, value: COMPANY_TYPE.NINE },
  { label: 10, value: COMPANY_TYPE.TEN },
];

export const PARTY_MEMBER_OPTIONS = [
  { label: 'Chính thức', value: PARTY_MEMBER_TYPE.CHINH_THUC },
  { label: 'Dự bị', value: PARTY_MEMBER_TYPE.DU_BI },
  { label: 'Không', value: PARTY_MEMBER_TYPE.KHONG },
];
export const POLICY_OPTIONS = [
  { label: 'Con CA', value: POLICY_TYPE.CON_CA },
  { label: 'GĐ có công với CM', value: POLICY_TYPE.CO_CONG_CM },
  { label: 'Con thương binh', value: POLICY_TYPE.CON_THUONG_BINH },
];

export const TALENT_OPTIONS = [
  { label: 'Ca hát', value: TALENT_TYPE.CA_HAT },
  { label: 'Đá bóng', value: TALENT_TYPE.DA_BONG },
  { label: 'Pickleball', value: TALENT_TYPE.PICKLEBALL },
  { label: 'CNTT', value: TALENT_TYPE.CNTT },
];
