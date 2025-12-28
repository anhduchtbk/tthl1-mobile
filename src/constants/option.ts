import {
  COMPANY_TYPE,
  EDUCATION_TYPE,
  NOTIFICATION_STATUS,
  PARTY_MEMBER_TYPE,
  POLICY_TYPE,
  REPORT_NUMBER_TYPE,
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

export const WEEK_OPTIONS = [
  { label: 13, value: 13 },
  { label: 12, value: 12 },
  { label: 11, value: 11 },
  { label: 10, value: 10 },
  { label: 9, value: 9 },
  { label: 8, value: 8 },
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

export const NOTIFICATION_TYPE_OPTIONS = [
  { label: 'Yêu cầu mượn vật chất', value: EDUCATION_TYPE.CHINH_QUY },
  { label: 'Yêu cầu trả vật chất', value: EDUCATION_TYPE.TRUNG_CAP },
  { label: 'Thời khoá biểu', value: EDUCATION_TYPE.VB2 },
];

export const NOTIFICATION_STATUS_OPTIONS = [
  { label: 'Chờ duyệt', value: NOTIFICATION_STATUS.CHO_DUYET },
  { label: 'Đã duyệt', value: NOTIFICATION_STATUS.DA_DUYET },
  { label: 'Từ chối', value: NOTIFICATION_STATUS.TU_CHOI },
];

export const REPORT_NUMBER_OPTIONS = [
  {
    label: 'Điểm danh thể dục buổi sáng',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_THE_DUC_BUOI_SANG,
  },
  { label: 'Điểm danh Ăn sáng', value: REPORT_NUMBER_TYPE.DIEM_DANH_AN_SANG },
  {
    label: 'Điểm danh học buổi sáng (giờ 1)',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_HOC_BUOI_SANG,
  },
  {
    label: 'Điểm danh học buổi sáng (giờ 2)',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_HOC_BUOI_SANG_2,
  },
  { label: 'Điểm danh ăn trưa', value: REPORT_NUMBER_TYPE.DIEM_DANH_AN_TRUA },
  {
    label: 'Điểm danh ngủ trưa',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_NGHI_TRUA,
  },
  {
    label: 'Điểm danh học buổi chiều (giờ 1)',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_HOC_BUOI_CHIEU,
  },
  {
    label: 'Điểm danh học buổi chiều (giờ 2)',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_HOC_BUOI_CHIEU_2,
  },
  {
    label: 'Điểm danh ngoại khoá',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_NGOAI_KHOA,
  },
  { label: 'Điểm danh ăn tối', value: REPORT_NUMBER_TYPE.DIEM_DANH_AN_TOI },
  {
    label: 'Điểm danh sinh hoạt tối',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_SINH_HOAT_TOI,
  },
  { label: 'Điểm danh ngủ tối', value: REPORT_NUMBER_TYPE.DIEM_DANH_NGHI_TOI },
  {
    label: 'Điểm danh báo động quân số',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_BAO_DONG_QUAN_SO,
  },
  {
    label: 'Điểm danh báo động hành quân di chuyển',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_BAO_DONG_HANH_QUAN_DI_CHUYEN,
  },
  {
    label: 'Điểm danh báo động hành quân chiến đấu',
    value: REPORT_NUMBER_TYPE.DIEM_DANH_BAO_DONG_HANH_QUAN_CHIEN_DOAT,
  },
];
