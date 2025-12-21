<<<<<<< HEAD
=======
import { API_BASE_URL } from "@/util/env";
import { fetchWithAuth } from "../common/fetchWithAuth";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
import {
  IDogCreateRequestType,
  IDogListType,
  IDogProfileType,
  IDogUpdateRequestType,
} from "@/types/dog/dogType";

export const dogsApi = {
  // GET /dogs - 내 반려견 프로필 리스트 조회
  getMyDogs: async (): Promise<IDogListType> => {
<<<<<<< HEAD
    const response = await fetch("/api/dogs", {
=======
    const response = await fetchWithAuth(`${API_BASE_URL}/dogs`, {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      method: "GET",
    });

    if (!response?.ok) {
      throw new Error("반려견 목록을 불러올 수 없습니다.");
    }

    const data: IDogListType = await response.json();
    return data;
  },

  // GET /users/{user_name}/dogs - 타인의 반려견 프로필 리스트 조회
  getUserDogs: async (userName: string): Promise<IDogListType> => {
<<<<<<< HEAD
    const response = await fetch(`/api/users/${userName}/dogs`, {
      method: "GET",
    });
=======
    const response = await fetchWithAuth(
      `${API_BASE_URL}/users/${userName}/dogs`,
      {
        method: "GET",
      }
    );
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

    if (!response?.ok) {
      throw new Error("반려견 목록을 불러올 수 없습니다.");
    }

    const data: IDogListType = await response.json();
    return data;
  },

  // GET /dogs/{dog_id} - 반려견 프로필 상세 조회
  getDogDetail: async (dogId: number): Promise<IDogProfileType> => {
<<<<<<< HEAD
    const response = await fetch(`/api/dogs/${dogId}`, {
=======
    const response = await fetchWithAuth(`${API_BASE_URL}/dogs/${dogId}`, {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      method: "GET",
    });

    if (!response?.ok) {
      throw new Error("반려견 정보를 불러올 수 없습니다.");
    }

    const data: IDogProfileType = await response.json();
    return data;
  },

  // POST /dogs - 반려견 프로필 등록
  createDog: async (dogData: IDogCreateRequestType): Promise<number> => {
<<<<<<< HEAD
    const response = await fetch("/api/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
=======
    const response = await fetchWithAuth(`${API_BASE_URL}/dogs`, {
      method: "POST",
      body: JSON.stringify(dogData),
     
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    });

    if (!response?.ok) {
      throw new Error("반려견 등록에 실패했습니다.");
    }

    const data: number = await response.json();
    return data;
  },

  // PATCH /dogs/{dog_id} - 반려견 프로필 수정
  updateDog: async (
    dogId: number,
    dogData: IDogUpdateRequestType
  ): Promise<void> => {
<<<<<<< HEAD
    const response = await fetch(`/api/dogs/${dogId}`, {
=======
    const response = await fetchWithAuth(`${API_BASE_URL}/dogs/${dogId}`, {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
    });

    if (!response?.ok) {
      throw new Error("반려견 정보 수정에 실패했습니다.");
    }
  },

  // DELETE /dogs/{dog_id} - 반려견 프로필 삭제
  deleteDog: async (dogId: number): Promise<void> => {
<<<<<<< HEAD
    const response = await fetch(`/api/dogs/${dogId}`, {
=======
    const response = await fetchWithAuth(`${API_BASE_URL}/dogs/${dogId}`, {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      method: "DELETE",
    });

    if (!response?.ok) {
      throw new Error("반려견 삭제에 실패했습니다.");
    }
  },
};
