// Buổi học
export enum SCHEDULE_TYPE {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  AFTERSCHOOL = 'afterSchool',
}

// Hệ đào tạo
export enum EDUCATION_TYPE {
  CHINH_QUY = 'chinh_quy',
  TRUNG_CAP = 'trung_cap',
  VB2 = 'van_bang_2',
}

// Đại đội
export enum COMPANY_TYPE {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
}

// Đảng viên
export enum PARTY_MEMBER_TYPE {
  CHINH_THUC = 'chinh_thuc',
  DU_BI = 'du_bi',
  KHONG = 'khong',
}

// Chính sách
export enum POLICY_TYPE {
  CON_CA = 'con_ca',
  CO_CONG_CM = 'co_cong_cm',
  CON_THUONG_BINH = 'con_thuong_binh',
}

// Năng khiếu
export enum TALENT_TYPE {
  CA_HAT = 'ca_hat',
  DA_BONG = 'da_bong',
  PICKLEBALL = 'pickleball',
  CNTT = 'cntt',
}

// Loại thông báo
export enum NOTIFICATION_TYPE {
  MUON_VAT_CHAT = 'muon_vat_chat',
  TRA_VAT_CHAT = 'tra_vat_chat',
  THOI_KHOA_BIEU = 'thoi_khoa_bieu',
}

// Trạng thái thông báo
export enum NOTIFICATION_STATUS {
  CHO_DUYET = 'cho_duyet',
  DA_DUYET = 'da_duyet',
  TU_CHOI = 'tu_choi',
}

// Mốc điểm danh
export enum REPORT_NUMBER_TYPE {
  DIEM_DANH_THE_DUC_BUOI_SANG = 'diem_danh_the_duc_buoi_sang',
  DIEM_DANH_AN_SANG = 'diem_danh_an_sang',
  DIEM_DANH_HOC_BUOI_SANG = 'diem_danh_hoc_buoi_sang',
  DIEM_DANH_HOC_BUOI_SANG_2 = 'diem_danh_hoc_buoi_sang_2',
  DIEM_DANH_AN_TRUA = 'diem_danh_an_trua',
  DIEM_DANH_NGHI_TRUA = 'diem_danh_nghi_trua',
  DIEM_DANH_HOC_BUOI_CHIEU = 'diem_danh_hoc_buoi_chieu',
  DIEM_DANH_HOC_BUOI_CHIEU_2 = 'diem_danh_hoc_buoi_chieu_2',
  DIEM_DANH_NGOAI_KHOA = 'diem_danh_ngoai_khoa',
  DIEM_DANH_AN_TOI = 'diem_danh_an_toi',
  DIEM_DANH_SINH_HOAT_TOI = 'diem_danh_sinh_hoat_toi',
  DIEM_DANH_NGHI_TOI = 'diem_danh_nghi_toi',
  DIEM_DANH_BAO_DONG_QUAN_SO = 'diem_danh_bao_dong_quan_so',
  DIEM_DANH_BAO_DONG_HANH_QUAN_DI_CHUYEN = 'diem_danh_bao_dong_hanh_quan_di_chuyen',
  DIEM_DANH_BAO_DONG_HANH_QUAN_CHIEN_DOAT = 'diem_danh_bao_dong_hanh_quan_chien_doat',
}
