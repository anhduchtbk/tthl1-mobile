import { PARTY_MEMBER_TYPE, POLICY_TYPE } from '@/constants/value';
import { PaginationResponse } from '@/types/api';

interface Course {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface Company {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  personnelCount: number;
  course: Course;
}

export interface FamilyMember {
  id: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  gender: boolean;
  birthPlace: string;
  job: string;
  jobRank: string;
  familyRole: string;
  phoneNumber: string;
}

export interface Student {
  id: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  gender: boolean;
  university: string;
  unitRank: string;
  squad: number;
  platoon: number;
  birthday: string;
  country: string;
  placeOfOrigin: string;
  placeOfResidence: string;
  isYoungUnionMember: boolean;
  youngUnionEnrollmentDate: string | null;
  isPartyMember: boolean;
  partyEnrollmentDate: string | null;
  partyMemberType: PARTY_MEMBER_TYPE;
  policy: POLICY_TYPE | null;
  talent: string | null;
  backgroundDisease: string | null;
  allergy: string | null;
  note: string | null;
  isActive: boolean;
  enrollmentDate: string;
  graduationDate: string;
  company: Company;
  familyMembers: FamilyMember[];
}

export interface GetStudentListRequest {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  filter?: string;
}

export type GetStudentListResponse = PaginationResponse<Student>;
