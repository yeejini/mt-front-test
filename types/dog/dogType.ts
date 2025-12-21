// 반려견 성별 타입
export type DogGenderType = "M" | "F";

<<<<<<< HEAD
// 사회화 수준 타입
export type SocializationLevel = "LOW" | "MEDIUM" | "HIGH";

=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
// 반려견 프로필 응답 타입
export interface IDogProfileType {
  dogId: number;
  name: string;
  breed: string;
  age: number;
  gender: DogGenderType;
  isNeutered: boolean;
<<<<<<< HEAD
  weight?: number;
  personality?: string;
  habits?: string;
  healthInfo?: string;
  humanSocialization: SocializationLevel;
  animalSocialization: SocializationLevel;
=======
  weight: number;
  personality: string;
  habits: string;
  healthInfo: string;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
}

<<<<<<< HEAD
// 반려견 프로필 등록 요청 타입 (백엔드 API 스펙에 맞춤)
export interface IDogCreateRequestType {
  // 필수값
=======
// 반려견 프로필 등록 요청 타입
export interface IDogCreateRequestType {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  name: string;
  breed: string;
  age: number;
  gender: DogGenderType;
  isNeutered: boolean;
<<<<<<< HEAD
  humanSocialization: SocializationLevel;
  animalSocialization: SocializationLevel;
  // 선택값
  weight?: number;
  personality?: string;
  habits?: string;
  healthInfo?: string;
  profileImage?: string;
}

// 반려견 프로필 수정 요청 타입 (모든 필드 선택)
=======
  weight: number;
  personality: string;
  habits: string;
  healthInfo: string;
  profileImage?: string;
}

// 반려견 프로필 수정 요청 타입
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
export interface IDogUpdateRequestType {
  name?: string;
  breed?: string;
  age?: number;
  gender?: DogGenderType;
  isNeutered?: boolean;
  weight?: number;
<<<<<<< HEAD
  clearWeight?: boolean; // 체중 삭제 플래그
  personality?: string;
  habits?: string;
  healthInfo?: string;
  humanSocialization?: SocializationLevel;
  animalSocialization?: SocializationLevel;
=======
  personality?: string;
  habits?: string;
  healthInfo?: string;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  profileImage?: string;
}

// 반려견 리스트 응답 타입
export type IDogListType = IDogProfileType[];
