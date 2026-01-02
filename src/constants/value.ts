// Buổi học
export enum SCHEDULE_TYPE {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  EXTRA = 'extra',
}

// Buổi điểm danh
export enum HISTORY_TYPE {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
  NIGHT = 'night',
}

// Hệ đào tạo
export enum EDUCATION_TYPE {
  CHINH_QUY = 'chinh_quy',
  TRUNG_CAP = 'trung_cap',
  VB2 = 'van_bang_2',
}

// Đại đội
export enum COMPANY_TYPE {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
}

// Đảng viên
export enum PARTY_MEMBER_TYPE {
  CHINH_THUC = 'chinh_thuc',
  DU_BI = 'du_bi',
  KHONG = 'khong',
}

// Chính sách
export enum POLICY_TYPE {
  CON_CA = 'con_cong_an',
  CO_CONG_CM = 'gia_dinh_co_cong_voi_cach_mang',
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
  DIEM_DANH_BUOI_SANG = 'morning',
  DIEM_DANH_BUOI_CHIEU = 'afternoon',
  DIEM_DANH_BUOI_TOI = 'night',
}

// ...
export enum STUDENT_FILTER {
  EQUALS = 'eq',
  GREATER_THAN = 'gt',
  LESS_THAN = 'lt',
  CONTAINS = 'like',
}
