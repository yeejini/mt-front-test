<<<<<<< HEAD
import {
  ICheckLoggedInType,
  IFailedCheckLoggedInType,
  ILoginDataType,
} from "@/types/login/loginDataType";
import {
  IResultResponse,
  IResultResponseData,
} from "@/types/response/resultResponse";

export const loginApi = {
  login: async (data: ILoginDataType) => {
    const res = await fetch(`/api/auth/login`, {
=======
import {ICheckLoggedInType, ILoginDataType} from "@/types/login/loginDataType";
import {API_BASE_URL} from "@/util/env";
import {fetchWithAuth} from "../common/fetchWithAuth";

export const loginApi = {
  login: async (data: ILoginDataType) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
<<<<<<< HEAD
    });
    if (!res.ok) {
      throw new Error("로그인에 실패하였습니다.");
    }
    const result = await res.json();
    return result;
  },
  logout: async () => {
    const res = await fetch(`/api/auth/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
=======
      credentials: "include",
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error("로그인에 실패하였습니다.");
    }
    return result;
  },
  logout: async () => {
    const res = await fetchWithAuth(`${API_BASE_URL}/auth/logout`, {
      method: "GET",
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    });
    if (!res?.ok) {
      throw new Error("로그아웃하는데 실패하였습니다.");
    }
<<<<<<< HEAD
    const data: IResultResponseData<IResultResponse> = await res.json();
    return data;
  },
  check: async () => {
    const res = await fetch(`/api/auth/check`);
    if (res.status === 401) {
      const data: IResultResponseData<IFailedCheckLoggedInType> =
        await res.json();
      return data.data;
=======
    return await res.json();
  },
  check: async () => {
    const res = await fetch(`${API_BASE_URL}/auth/check`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.status === 401) {
      return null;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
    }
    if (!res?.ok) {
      throw new Error("유저의 정보를 불러올 수 없습니다.");
    }
<<<<<<< HEAD
    const data: IResultResponseData<ICheckLoggedInType> = await res.json();
    return data.data;
=======
    const data: ICheckLoggedInType = await res.json();
    return data;
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
  },
};
